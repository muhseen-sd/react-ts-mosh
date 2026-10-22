interface Props {
    children: string;
    color?: "primary" | "secondary" | "success",
    onclick: () => void
}

const Button = ({ children, onclick, color = "primary"}: Props) => {
  return (
    <div>
        <button className={'btn btn-' + color} onClick={onclick}>{children}</button>
    </div>
  )
}

export default Button