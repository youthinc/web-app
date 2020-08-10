import cn from "classnames";
import React from "react";
import PaginationFs from "./PaginationFs";

const TableFs = ({ current, send, children, headRow, className }) => {
  const { docs, perPage, page } = current.context;

  if (!docs.length) return null;

  return (
    <>
      <div className="table-container">
        <table className={cn("table", className)} style={{ width: "100%" }}>
          {!!headRow && <thead>{headRow}</thead>}

          <tbody>
            {docs
              .slice((page - 1) * perPage, page * perPage)
              .map((doc, i) => children(doc, i))}
          </tbody>
        </table>
      </div>

      <PaginationFs current={current} send={send} />
    </>
  );
};

export default TableFs;
