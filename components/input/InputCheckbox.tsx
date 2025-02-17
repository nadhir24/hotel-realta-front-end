import { FC } from "react"

interface InputCheckboxProps {
  width?: string
  height?: string
}

const InputCheckbox: FC<InputCheckboxProps> = (props: any) => {
  return (
    <input
      type="checkbox"
      name="checkbox"
      id="checkbox"
      className="rounded-lg cursor-pointer"
      style={{
        width: props.width,
        height: props.height,
      }}
    />
  )
}

InputCheckbox.defaultProps = {
  width: "25px",
  height: "25px",
}

export default InputCheckbox
