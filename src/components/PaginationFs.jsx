import cn from "classnames";
import React from "react";

const PaginationFs = ({ current, send }) => {
  const { page, pages } = current.context;
  const fetchingNextPage = current.matches("fetch.next");

  let renderPagination = pages > 1;
  if (pages === 1) {
    renderPagination = current.matches("fetch.hasMore") || fetchingNextPage;
  }

  if (!renderPagination) return null;

  const disablePrev = page === 1;

  let disableNext = false;
  let loadingNext = false;
  if (page === pages) {
    disableNext = current.matches("fetch.done");
    loadingNext = fetchingNextPage;
  }

  return (
    <div className="container">
      <div className="level is-mobile">
        <div className="level-left">Page: {page}</div>

        <div className="level-right">
          <div className="level-item">
            <div className="field is-grouped">
              <div className="control">
                <button
                  className="button"
                  onClick={() => send("PREV")}
                  disabled={disablePrev}
                >
                  Previous
                </button>
              </div>

              <div className="control">
                <button
                  className={cn("button", loadingNext && "is-loading")}
                  onClick={() => send("NEXT")}
                  disabled={disableNext}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationFs;
