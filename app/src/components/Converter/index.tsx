import TextField from '@mui/material/TextField';
import type { KeyboardEvent } from 'react';
import { splitConversationValue } from '@/utils';
import { Typography } from '@mui/material';
import { LABEL } from './index.constants';
import {
  createContent,
  createConversationRequestParams,
  getRequestParams,
  validateInput,
} from './index.utils';
import { Loader } from '@/components/Loader';
import { ERROR_MESSAGES } from '@/main.constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setConverterValue, setValidationMessage } from '@/redux/selectedCurrencySlice';
import { useGetConversationQuery, useLazyGetConversationQuery } from '@/services/currencySlice';
import { skipToken } from '@reduxjs/toolkit/dist/query';

export function Converter() {
  const { converterValue, validationMessage } = useAppSelector((state) => state.userValues);
  const dispatch = useAppDispatch();
  const requestParams = getRequestParams(converterValue);
  const {
    data: conversion,
    isFetching,
    isSuccess,
    isError,
  } = useGetConversationQuery(requestParams ?? skipToken);
  const [trigger] = useLazyGetConversationQuery();

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      const value = e.currentTarget.value;
      const splittedValue = splitConversationValue(value);
      const validationResult = validateInput(splittedValue);

      if (validationResult.isValid) {
        dispatch(setConverterValue(value));
        dispatch(setValidationMessage(''));
        const params = createConversationRequestParams(value);
        trigger(params);
        e.currentTarget.blur();
      } else {
        dispatch(setValidationMessage(validationResult.message));
      }
    }
  };

  let content;

  if (isFetching) {
    content = <Loader />;
  } else if (isSuccess) {
    console.log(conversion);
    const conversionResult = conversion.conversion_result;
    const createdContent = createContent(converterValue, conversionResult);
    content = <Typography>{createdContent}</Typography>;
  } else if (isError) {
    content = <Typography>{ERROR_MESSAGES.SERVER}</Typography>;
  }

  return (
    <>
      <TextField
        InputProps={{
          onKeyUp,
        }}
        error={!!validationMessage}
        autoComplete="off"
        label={LABEL}
        variant="outlined"
        margin="normal"
        defaultValue={converterValue}
        helperText={validationMessage}
      />
      {content}
    </>
  );
}
