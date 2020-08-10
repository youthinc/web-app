import { useMachine } from "@xstate/react";
import TableFs from "components/TableFs";
import shuffle from "lodash/shuffle";
import { searchIndividual } from "machines/searchIndividual";
import React, { useMemo, useState } from "react";
import Details from "./Details";
import Form from "./Form";
import Row from "./Row";

const Individuals = () => {
  const [current, send] = useMachine(searchIndividual);
  const [selected, setSelected] = useState("");

  const indice = useMemo(() => {
    return shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }, [current.context.docs]);

  return (
    <>
      <Form current={current} send={send} />

      <div className="py-4">
        <TableFs current={current} send={send}>
          {(doc, i) => {
            const {
              personal,
              professional,
              skills,
              availability,
              interests,
            } = doc.data();
            if (
              !personal ||
              !professional ||
              !skills ||
              !availability ||
              !interests
            ) {
              return null;
            }
            return <Row key={doc.id} data={doc.data()} i={indice[i]} />;
          }}
        </TableFs>
      </div>

      {!!selected && <Details id={selected} onClose={() => setSelected("")} />}
    </>
  );
};

export default Individuals;
