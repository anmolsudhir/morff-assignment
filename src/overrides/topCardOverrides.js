export const cardOverrides = {
  Root: {
    style: {
      position: "relative",
      zIndex: "10",
      width: "100%",
      height: "auto",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
      borderWidth: "0",
      margin: "0",
      padding: "0.5rem 0",
      boxSizing: "inherit",
    },
  },
  Thumbnail: {
    style: {
      position: "absolute",
      height: "100%",
      width: "auto",
      right: "0",
      top: "0",
      borderRadius: "0px 18px 18px 0px",
      borderTopWidth: "0",
      borderBottomWidth: "0",
      borderLeftWidth: "0",
      borderRightWidth: "0",
      margin: "0",
      padding: "0",
    },
  },
};

const getTopCardOverrides = (isLoading) => ({
  Root: {
    style: {
      position: isLoading ? "absolute" : "relative",
      zIndex: "10",
      width: "100%",
      height: "auto",
      top: isLoading ? "2rem" : "0",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
      borderWidth: "0",
      margin: "0",
      padding: "0.5rem 0",
      boxSizing: "inherit",
    },
  },
  Thumbnail: {
    style: {
      position: "absolute",
      height: "100%",
      width: "auto",
      right: "0",
      top: "0",
      borderRadius: "0px 18px 18px 0px",
      borderTopWidth: "0",
      borderBottomWidth: "0",
      borderLeftWidth: "0",
      borderRightWidth: "0",
      margin: "0",
      padding: "0",
    },
  },
});

export default getTopCardOverrides;
