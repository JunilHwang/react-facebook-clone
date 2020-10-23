import dayjs from 'dayjs';

export const fromNow = (createAt) => dayjs(createAt).from(Date.now() - 1000 * 60 * 60 * 9);
