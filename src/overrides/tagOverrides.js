export const getTagOverrides = (bgColor) => ({
  Root: {
    style: ({ $theme }) =>
      bgColor
        ? {
            backgroundColor: `${bgColor}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }
        : {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
  },
  Text: {
    style: ({ $theme }) => ({
      fontSize: "0.9rem",
      whitespace: "nowrap" /* Prevent line wrapping */,
      overflow: "hidden" /* Hide the overflowing text */,
      textOverflow: "ellipsis",
    }),
  },
});
