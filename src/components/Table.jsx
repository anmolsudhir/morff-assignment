import React from "react";
import { styled } from "baseui";

const TableBody = styled("div", {
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexDirection: "column",
  boxSizing: "inherit",
});

const HeadRow = styled("div", {
  padding: "0.2rem 0 0 0",
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "row",
  boxSizing: "inherit",
});

const TableRow = styled("div", ({ color }) => ({
  padding: "0.5rem 0",
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "row",
  borderBottom: `0.085rem solid ${color}`,
  boxSizing: "inherit",
}));

const Header = styled("div", {
  width: "100%",
  fontSize: "0.75rem",
  color: "#333333",
  whiteSpace: "nowrap" /* Prevent line wrapping */,
  overflow: "hidden" /* Hide the overflowing text */,
  textOverflow: "ellipsis",
});

const TableData = styled("div", {
  width: "100%",
  fontSize: "1rem",
  color: "#333333",
  padding: "0 1rem 0 0",
  boxSizing: "inherit",
  overflow: "hidden",
});

const TallyData = styled("div", {
  width: "100%",
  fontSize: "1rem",
  color: "#333333",
  lineHeight: "1rem",
  padding: "0.5rem 0.5rem 0 0",
  boxSizing: "inherit",
});

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
