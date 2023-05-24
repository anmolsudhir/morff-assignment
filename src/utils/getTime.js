const getTime = () => {
  const epochTime = Math.floor(Date.now() / 1000);
  const date = new Date(epochTime * 1000);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const splitDate = formattedDate.split(",");
  const monthDate = splitDate[0].split(" ");
  const finalDate = monthDate[1] + " " + monthDate[0] + splitDate[1];

  return finalDate;
};

export default getTime;
