import { currencyApi } from '@/services/currencyApi';
import { createCodes, splitConversationValue } from '@/utils';
import { useCallback, useEffect, useState } from 'react';

function createConversationRequestParams(value: string) {
  const [amount, from, _, to] = splitConversationValue(value);
  const { fromCode, toCode } = createCodes(from, to);
  return { amount, from: fromCode, to: toCode };
}

export function useConvert(value: string) {
  const [conversionResult, setConversationResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const convert = useCallback(async () => {
    if (value.length) {
      try {
        setIsLoading(true);
        const conversationRequestParams = createConversationRequestParams(value);
        const resp = await currencyApi.getConversation(conversationRequestParams);
        const { amount, from, to } = conversationRequestParams;
        setConversationResult(`${amount} ${from} = ${resp.conversion_result.toFixed(2)} ${to}`);
        setIsLoading(false);
      } catch {
        setIsError(true);
        setIsLoading(false);
      }
    }
  }, [value]);

  useEffect(() => {
    convert();
  }, [convert]);

  return { conversionResult, isLoading, isError };
}
