import { styled } from "baseui";

export const TableBody = styled("div", {
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexDirection: "column",
  boxSizing: "inherit",
});

export const HeadRow = styled("div", {
  padding: "0.2rem 0 0 0",
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "row",
  boxSizing: "inherit",
});

export const TableRow = styled("div", ({ color }) => ({
  padding: "0.5rem 0",
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "row",
  borderBottom: `0.085rem solid ${color}`,
  boxSizing: "inherit",
}));

export const Header = styled("div", ({ last = false }) => ({
  width: "100%",
  padding: last ? "0rem" : "0rem 3rem 0 0",
  fontSize: "0.75rem",
  color: "#333333",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const TableData = styled("div", ({ last = false }) => ({
  width: "100%",
  padding: last ? "0rem" : "0rem 3rem 0 0",
  fontSize: "1rem",
  color: "#333333",
  boxSizing: "inherit",
  overflow: "hidden",
}));

export const TallyData = styled("div", ({ last = false }) => ({
  width: "100%",
  fontSize: "1rem",
  padding: last ? "0.5rem 0 0 0" : "0.5rem 3rem 0 0",
  color: "#333333",
  lineHeight: "1rem",
  boxSizing: "inherit",
}));
