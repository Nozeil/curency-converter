export function createCodes(from: string, to: string) {
  return { fromCode: from.toUpperCase(), toCode: to.toUpperCase() };
}

export function splitConversationValue(value: string) {
  return value.trim().split(' ');
}
