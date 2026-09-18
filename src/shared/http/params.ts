/** Express 5's ParamsDictionary types values as `string | string[]`; route params here are never repeated. */
export function paramStr(value: string | string[]): string {
  return Array.isArray(value) ? value[0] : value;
}
