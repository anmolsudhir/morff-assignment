import { styled } from "baseui";

export const LoadingComponent = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "12rem",
  height: "12rem",
  background:
    "linear-gradient(269.53deg, #FFC107 32.52%, rgba(255, 193, 7, 0.62) 86.27%)",
  boxShadow: "4px 4px 20px rgba(151, 151, 151, 0.25)",
  borderRadius: "50%",
  padding: "0.5rem",
  boxSizing: "box-border",
});

export const Quote = styled("div", {
  width: "auto",
  height: "auto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "0.75rem",
  textAlign: "center",
  color: "#333333",
  borderRadius: "2px",
  boxSizing: "inherit",
  maxWidth: "70%",
  maxHeight: "70%",
  textOverflow: "ellipsis",
  overflow: "auto",
});
