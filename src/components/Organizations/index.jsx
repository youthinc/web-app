import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMachine } from "@xstate/react";
import TableFs from "components/TableFs";
import { employees, location, sector, type } from "constants/organization";
import { searchOrganization } from "machines/searchOrganization";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import Form from "./Form";

const Organizations = () => {
  const [current, send] = useMachine(searchOrganization);
  const [selected, setSelected] = useState("");

  return (
    <>
      <div className="has-text-right mb-3">
        <Link to="/organization-sign-up">+ Add new organization</Link>
      </div>

      <Form current={current} send={send} />

      <section className="section">
        <TableFs className="is-hoverable" current={current} send={send}>
          {(doc) => {
            const obj = doc.data();
            const {
              name,
              intro,
              telephone,
              email,
              website,
              type: orgType,
              sector: sectorArr,
            } = obj;
            return (
              <tr key={doc.id} className="nowrap">
                <td>
                  <b className="is-size-5">{name}</b>
                  <br />
                  <i>{intro}</i>
                  <br />
                  <div>
                    Type:{" "}
                    <span className="has-text-weight-light">
                      {type[orgType]}
                    </span>
                    <br />
                    Sector:{" "}
                    <span className="has-text-weight-light">
                      {sector[sectorArr[0]]}
                    </span>
                  </div>
                </td>
                <td>
                  <FontAwesomeIcon icon="phone" color="grey" /> {telephone}
                  <br />
                  <FontAwesomeIcon icon="globe" color="grey" /> {website}
                  <br />
                  <FontAwesomeIcon icon="envelope" color="grey" /> {email}
                  <br />
                  <FontAwesomeIcon icon="users" color="grey" />{" "}
                  {employees[obj.employees]}
                  <br />
                  <FontAwesomeIcon icon="map-marker-alt" color="grey" />{" "}
                  {location[obj.location]}
                </td>
              </tr>
            );
          }}
        </TableFs>
      </section>

      {!!selected && <Details id={selected} onClose={() => setSelected("")} />}
    </>
  );
};

export default Organizations;
