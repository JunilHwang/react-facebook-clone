import Storage from './Storage';

export const repository = new Storage(localStorage);
export const session = new Storage(sessionStorage);
