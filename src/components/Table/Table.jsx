import React from "react";
import {
  TableBody,
  HeadRow,
  Header,
  TableRow,
  TableData,
  TallyData,
} from "./TableComponents";

function Table({ contents, color }) {
  return (
    <TableBody>
      <HeadRow>
        {contents.headers?.map((elem) => (
          <Header>{elem}</Header>
        ))}
      </HeadRow>
      {contents.content?.map((elem) => (
        <>
          <TableRow color={color}>
            {elem.map((element) => (
              <TableData>{element}</TableData>
            ))}
          </TableRow>
        </>
      ))}
      <HeadRow>
        {contents.tally?.map((elem) => (
          <TallyData>{elem}</TallyData>
        ))}
      </HeadRow>
    </TableBody>
  );
}

export default Table;
