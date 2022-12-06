import React from "react";
import "./Button.scss";

type propType = {
  value: any;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

const Button = ({
  type = "button",
  value = "Button",
  onClick,
  className = "",
  ...props
}: propType) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={"button " + className}
      {...props}
    >
      {value}
    </button>
  );
};

export default Button;
