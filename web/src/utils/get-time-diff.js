import moment from "moment";
export const getTimeDiff = (base) => {
  const baseTime = moment(moment.unix(base)).fromNow();
  return baseTime;
};
