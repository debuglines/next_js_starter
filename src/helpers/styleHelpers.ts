import { CSSObject } from '@emotion/serialize'

export function asStyles<T extends CSSObject>(cssObject: T): T {
  return cssObject
}
