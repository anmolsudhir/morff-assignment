export const itemProps = {
  boxSizing: "inherit",
  backgroundColor: "#fff",
  minHeight: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: "2rem",
};

export const narrowItemProps = {
  ...itemProps,
  overrides: {
    Block: {
      style: {
        width: "25%",
        flexGrow: 0,
      },
    },
  },
};
export const mainItemProps = {
  ...itemProps,
  overrides: {
    Block: {
      style: {
        width: "50%",
        padding: "2rem 0",
        flexGrow: 1,
        flexDirection: "column",
        position: "relative",
      },
    },
  },
};
