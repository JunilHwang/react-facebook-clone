import { isNil, isEmpty, test } from 'ramda';
import {FormErrorMessage} from "@/constants";

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
  password === value ? undefined : FormErrorMessage.NONE_MATCH_PASSWORD;

export const required = (value) => (!isNil(value) && !isEmpty(value) ? undefined : FormErrorMessage.BLANK);

export const validEmail = (value) => (isEmail(value) ? undefined : 'Invalid Email');

export const validContentsLength = (value, min, max) => {
  if (value.length < min) {
    return `최소 ${min}글자 이상 입력해주세요.`;
  }

  if (value.length > max) {
    return `최대 ${max} 글자만 입력할 수 있습니다.`;
  }
};

export const validPost = (value) => validContentsLength(value, 5, 300);

export const validComment = (value) => validContentsLength(value, 5, 300);

export const validUniqueEmail = async (value) => {
  if (required(value)) return required(value);
  if (validEmail(value)) return validEmail(value);

  try {
    const res = await usersApi.checkEmailExistence({ address: value });
    return res ? 'Duplicated email' : undefined;
  } catch (e) {
    return undefined;
  }
};
