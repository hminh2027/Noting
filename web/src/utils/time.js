import moment from "moment";
export const getTimeDiff = (base) => {
  const baseTime = moment(moment.unix(base)).fromNow();
  return baseTime;
};
export const getTimeFromTimeStamp = (timestamp) => {
  return moment(timestamp).format("MMMM Do YYYY");
};
