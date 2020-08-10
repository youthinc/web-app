import isEqual from "lodash/isEqual";
import { assign, Machine, send } from "xstate";

export const getSearchMachine = ({
  getRef,
  initialQuery = {},
  isEmpty = () => false,
  isInvalid = () => false,
  perPage = 10,
  fetchOnMount,
  maxPage = 20,
}) => {
  const fetchFirstPage = ({ query }) => {
    return getRef(query)
      .limit(perPage + 1)
      .get();
  };

  const fetchNextPage = ({ query, docs }) => {
    return getRef(query)
      .startAfter(docs[docs.length - 1])
      .limit(perPage)
      .get();
  };

  return Machine(
    {
      id: "root",
      context: {
        docs: [],
        page: 0,
        pages: 0,
        pending: false,
        prevQuery: initialQuery,
        query: initialQuery,
        perPage,
      },
      type: "parallel",
      states: {
        fetch: {
          initial: fetchOnMount ? "first" : "idle",
          states: {
            idle: {},
            first: {
              invoke: {
                id: "first",
                src: fetchFirstPage,
                onDone: [
                  { target: "empty", cond: (ctx, e) => e.data.empty },
                  {
                    target: "done",
                    cond: (ctx, e) => e.data.size <= perPage,
                    actions: "getFirstDocs",
                  },
                  { target: "hasMore", actions: "getFirstDocs" },
                ],
              },
            },
            next: {
              entry: assign({ pending: true }),
              invoke: {
                id: "next",
                src: fetchNextPage,
                onDone: [
                  {
                    target: "done",
                    cond: (ctx, e) => e.data.empty,
                    actions: "addPage",
                  },
                  {
                    target: "done",
                    cond: (ctx, e) => e.data.size < perPage,
                    actions: ["addPage", "getNextDocs"],
                  },
                  {
                    target: "hasMore",
                    actions: ["addPage", "getNextDocs"],
                  },
                ],
              },
            },
            empty: {
              entry: assign({
                docs: [],
                page: 0,
                pages: 0,
              }),
            },
            done: {},
            hasMore: {
              on: {
                NEXT: {
                  cond: (ctx) => ctx.page === ctx.pages && ctx.page < maxPage,
                  target: "next",
                },
              },
            },
          },
          on: {
            PREV: {
              cond: (ctx) => ctx.page > 1,
              actions: assign({
                page: (ctx) => ctx.page - 1,
                pending: false,
              }),
            },
            NEXT: {
              cond: (ctx) => ctx.page < ctx.pages,
              actions: assign({
                page: (ctx) => ctx.page + 1,
              }),
            },
            FETCH: {
              target: "fetch.first",
            },
          },
        },
        form: {
          initial: "idle",
          states: {
            idle: {},
            invalid: {},
            update: {
              after: {
                1000: [
                  {
                    target: "idle",
                    cond: (ctx) =>
                      isEmpty(ctx.query) || isEqual(ctx.query, ctx.prevQuery),
                  },
                  {
                    target: "invalid",
                    cond: (ctx) => isInvalid(ctx.query),
                  },
                  {
                    target: "idle",
                    actions: [
                      send("FETCH"),
                      assign({
                        prevQuery: (ctx) => ({ ...ctx.query }),
                      }),
                    ],
                  },
                ],
              },
            },
          },
          on: {
            CHANGE: {
              target: "form.update",
              actions: assign({
                query: (ctx, e) => ({
                  ...ctx.query,
                  [e.name]: e.value,
                }),
              }),
            },
            SET: {
              target: "form.idle",
              actions: assign({
                query: (ctx, e) => ({
                  ...ctx.query,
                  [e.name]: e.value,
                }),
              }),
            },
          },
        },
      },
    },
    {
      actions: {
        getFirstDocs: assign({
          page: 1,
          pages: 1,
          docs: (ctx, e) => e.data.docs,
        }),
        getNextDocs: assign({
          docs: (ctx, e) => [...ctx.docs, ...e.data.docs],
        }),
        addPage: assign({
          pages: (ctx) => ctx.pages + 1,
          page: (ctx) => (ctx.pending ? ctx.page + 1 : ctx.page),
        }),
      },
    }
  );
};
