import React, { CSSProperties } from "react";
interface buttontype {
  type?: "button" | "submit" | "reset";
  label?: string;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
  id?: string;
}
const Button: React.FC<buttontype> = ({
  label,
  onClick,
  style,
  className,
  id,
  type,
}) => {
  return (
    <div>
      <button
        type={type}
        className={className}
        id={id}
        onClick={onClick}
        style={style}
      >
        {label}
      </button>
    </div>
  );
};
Button.defaultProps = {
  type: "button",
  label: "defaultButton",
  onClick: () => {},
  style: {},
  className: "defaultClassName",
  id: "defaultId",
};
export default Button;
