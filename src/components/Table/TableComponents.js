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

export const Header = styled("div", {
  width: "100%",
  fontSize: "0.75rem",
  color: "#333333",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const TableData = styled("div", {
  width: "100%",
  fontSize: "1rem",
  color: "#333333",
  padding: "0 1rem 0 0",
  boxSizing: "inherit",
  overflow: "hidden",
});

export const TallyData = styled("div", {
  width: "100%",
  fontSize: "1rem",
  color: "#333333",
  lineHeight: "1rem",
  padding: "0.5rem 0.5rem 0 0",
  boxSizing: "inherit",
});
