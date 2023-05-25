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
        {contents.headers?.map((elem, idx) => (
          <Header last={idx === contents.headers?.length - 1}>{elem}</Header>
        ))}
      </HeadRow>
      {contents.content?.map((elem) => (
        <>
          <TableRow color={color}>
            {elem.map((element, idx) => (
              <TableData last={idx === contents.headers?.length - 1}>
                {element}
              </TableData>
            ))}
          </TableRow>
        </>
      ))}
      <HeadRow>
        {contents.tally?.map((elem, idx) => (
          <TallyData last={idx === contents.headers?.length - 1}>
            {elem}
          </TallyData>
        ))}
      </HeadRow>
    </TableBody>
  );
}

export default Table;
