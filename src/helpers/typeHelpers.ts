import { DefaultValue } from 'recoil'

export function asType<T>(payload: T): T {
  return payload
}

export function arrayGuard<T>(candidate: T[] | unknown): candidate is T[] {
  return Array.isArray(candidate)
}

export function stringArrayGuard(
  candidate: string[] | unknown,
): candidate is string[] {
  return Array.isArray(candidate)
}

export function isAtomDefaultValueGuard(
  candidate: unknown,
): candidate is DefaultValue {
  return candidate instanceof DefaultValue
}
