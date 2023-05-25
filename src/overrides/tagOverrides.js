export const getTagOverrides = (bgColor) => ({
  Root: {
    style: ({ $theme }) =>
      bgColor
        ? {
            backgroundColor: `${bgColor}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
          }
        : {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
          },
  },
  Text: {
    style: ({ $theme }) => ({
      margin: "0",
      fontSize: "0.8rem",
      whitespace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
  },
});
