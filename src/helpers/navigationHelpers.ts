export function queryStringParamGuard(
  queryParamName: undefined | string | string[],
): queryParamName is string {
  return typeof queryParamName === 'string'
}

export function queryStringParam(
  queryParamName: undefined | string | string[],
): string | undefined {
  if (queryStringParamGuard(queryParamName)) {
    return queryParamName
  }

  return undefined
}

export function queryIntParam(
  queryParamName: undefined | string | string[],
): number | undefined {
  if (queryStringParamGuard(queryParamName)) {
    const numberParam = parseInt(queryParamName, 10)
    return isNaN(numberParam) ? undefined : numberParam
  }

  return undefined
}
