import TextField from '@mui/material/TextField';
import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { splitConversationValue } from '@/utils';
import { useConvert } from '@/hooks/useConvert';
import { Typography } from '@mui/material';
import { LABEL } from './index.constants';
import { validateInput } from './index.utils';
import { Loader } from '@/components/Loader';
import { ERROR_MESSAGES } from '@/main.constants';

export function Converter() {
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { conversionResult, isLoading, isError } = useConvert(inputValue);

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      const value = e.currentTarget.value;
      const splittedValue = splitConversationValue(value);
      const validationResult = validateInput(splittedValue);

      if (validationResult.isValid) {
        setInputValue(value);
        setErrorMessage('');
        e.currentTarget.blur();
      } else {
        setErrorMessage(validationResult.message);
      }
    }
  };

  const content = isError ? ERROR_MESSAGES.SERVER : conversionResult;

  const element = isLoading ? <Loader /> : <Typography>{content}</Typography>;

  return (
    <section>
      <Typography component="h3">Enter text in the format: 15 rub in usd</Typography>
      <TextField
        InputProps={{
          onKeyUp: onKeyUp,
        }}
        error={!!errorMessage}
        autoComplete="off"
        label={LABEL}
        variant="outlined"
        margin="normal"
        helperText={errorMessage}
      />
      {element}
    </section>
  );
}
