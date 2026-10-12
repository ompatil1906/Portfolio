import "@ncdai/react-wheel-picker/style.css"

import type { ComponentProps } from "react"
import * as WheelPickerPrimitive from "@ncdai/react-wheel-picker"

type WheelPickerValue = WheelPickerPrimitive.WheelPickerValue
type WheelPickerOption<T extends WheelPickerValue = string> =
  WheelPickerPrimitive.WheelPickerOption<T>
type WheelPickerClassNames = WheelPickerPrimitive.WheelPickerClassNames
declare function WheelPickerWrapper({
  className,
  ...props
}: ComponentProps<
  typeof WheelPickerPrimitive.WheelPickerWrapper
>): import("react").JSX.Element
declare function WheelPicker<T extends WheelPickerValue = string>({
  classNames,
  ...props
}: WheelPickerPrimitive.WheelPickerProps<T>): import("react").JSX.Element
export { WheelPicker, WheelPickerWrapper }
export type { WheelPickerClassNames, WheelPickerOption }
