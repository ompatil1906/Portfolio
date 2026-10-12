import * as React from "react"

type ChangeHandler<T> = (state: T) => void
type SetStateFn<T> = React.Dispatch<React.SetStateAction<T>>
interface UseControllableStateParams<T> {
  prop?: T | undefined
  defaultProp: T
  onChange?: ChangeHandler<T>
  caller?: string
}
export declare function useControllableState<T>({
  prop,
  defaultProp,
  onChange,
  caller,
}: UseControllableStateParams<T>): [T, SetStateFn<T>]
export {}
