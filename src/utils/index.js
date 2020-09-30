export const timeToString = (date) => {
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;
  const fromTime = Date.now() - new Date(date).getTime();

  if (fromTime < sec) return `${~~(fromTime / sec)}초 전`;
  if (fromTime < min) return `${~~(fromTime / min)}분 전`;
  if (fromTime < hour) return `${~~(fromTime / hour)}시간 전`;
  if (fromTime < day) return `${~~(fromTime / day)}일 전`;
  if (fromTime < week) return `${~~(fromTime / week)}주 전`;
  if (fromTime < month) return `${~~(fromTime / month)}달 전`;
  return `${~~(fromTime / year)}년 전`;
};
