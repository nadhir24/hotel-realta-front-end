import { FC } from "react"

interface UserProps {
  width?: string
  height?: string
  stroke?: string
}

const User: FC<UserProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843Z"
        stroke="#82868C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.05025 16.0503C8.36301 14.7375 10.1435 14 12 14C13.8565 14 15.637 14.7375 16.9497 16.0503C18.2625 17.363 19 19.1435 19 21H5C5 19.1435 5.7375 17.363 7.05025 16.0503Z"
        stroke={props.stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

User.defaultProps = {
  width: "24",
  height: "24",
  stroke: "#82868C",
}

export default User
