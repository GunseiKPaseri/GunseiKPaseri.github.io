import { useLayoutEffect, useState } from "react"

// Object.keys()の型安全版
export const keys = <T extends { [key: string]: unknown }>(
  obj: T,
): (keyof T)[] => Object.keys(obj) as (keyof T)[]
type Entries<T> = (keyof T extends infer U
  ? U extends keyof T
    ? [U, T[U]]
    : never
  : never)[]
// Object.entries()の型安全版
export const entries = <T extends { [key: string]: unknown }>(
  obj: T,
): Entries<T> => Object.entries(obj) as Entries<T>

export type PickByValue<T, V> = {
  [P in keyof T as T[P] extends V ? P : never]: T[P]
}
export type OmitByValue<T, V> = {
  [P in keyof T as T[P] extends V ? never : P]: T[P]
}

// Windowサイズを取得するカスタムフック
export const useWindowSize = (): number[] => {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener("resize", updateSize)
    updateSize()

    return () => window.removeEventListener("resize", updateSize)
  }, [])
  return size
}
