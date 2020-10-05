export const fromNow = (date) => {
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;
  const fromTime = Date.now() - new Date(date).getTime();

  if (fromTime < min) return `${Math.floor(fromTime / sec)}초 전`;
  if (fromTime < hour) return `${Math.floor(fromTime / min)}분 전`;
  if (fromTime < day) return `${Math.floor(fromTime / hour)}시간 전`;
  if (fromTime < week) return `${Math.floor(fromTime / day)}일 전`;
  if (fromTime < month) return `${Math.floor(fromTime / week)}주 전`;
  if (fromTime < year) return `${Math.floor(fromTime / month)}달 전`;
  return `${Math.floor(fromTime / year)}년 전`;
};
