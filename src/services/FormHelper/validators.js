import { isNil, isEmpty, test } from 'ramda';
import apis from '@/services/apis';

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const isEmail = test(emailRegex);

export const composeValidators = (...args) => (value) => {
  for (const validator of args) {
    const error = validator(value);

    if (error) {
      return error;
    }
  }

  return undefined;
};

export const createConfirmedPasswordValidator = (password) => (value) =>
  password === value ? undefined : 'Does not match password';

export const required = (value) => (!isNil(value) && !isEmpty(value) ? undefined : 'Required');

export const validEmail = (value) => (isEmail(value) ? undefined : 'Invalid Email');

export const validPost = (value) => {
  if (value.length < 5) {
    return 'Min length of post is 5 characters';
  }

  if (value.length > 300) {
    return 'Max length of post is 300 characters';
  }

  return undefined;
};

export const validComment = (value) => {
  if (value.length < 5) {
    return 'Min length of comment is 5 characters';
  }

  if (value.length > 300) {
    return 'Max length of comment is 300 characters';
  }

  return undefined;
};

export const validUniqueEmail = async (value) => {
  if (required(value)) return required(value);
  if (validEmail(value)) return validEmail(value);

  try {
    const res = await apis.usersApi.checkEmailExistence({ address: value });
    return res ? 'Duplicated email' : undefined;
  } catch (e) {
    return undefined;
  }
};
