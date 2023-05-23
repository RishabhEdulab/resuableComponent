import React, { CSSProperties } from "react";
type inputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";
interface props {
  type?: inputType;
  placeholder?: string;
  className?:string,
  id?:string,
  name?:string,
  value?:string | number,
  style?: CSSProperties,
  // setInputValue: React.Dispatch<React.SetStateAction<string>>,
  disabled?: boolean,
  readOnly?:boolean,
  size?:number,
  maxLength?:number,
  max?:number,
  min?:number,
  multiple?:boolean,
  pattern?:string,
  required?:boolean,
  autoFocus: boolean,
  onClick?:(event?:React.MouseEvent<HTMLButtonElement | HTMLInputElement> ,value?:string)=>void
  // onChange?:()=>(event?:React.ChangeEvent<HTMLInputElement>,value?:string)=>void
  onChange?:(event?:React.ChangeEvent<HTMLInputElement>,value?:string)=>void
}
const InputFiled= ({
  type,
  placeholder,
  style,
  className,
  name,
  value,
  id,
  // setInputValue,
  disabled,
  readOnly,
  size,
  maxLength,
  max,
  min,
  multiple,
  pattern,
  required,
  autoFocus,
  onClick,
  onChange
}:props) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        id={id}
        style={style}
        name={name}
        value={value}
        // onChange={(e) => setInputValue(e.target.value)}
        disabled={disabled}
        readOnly={readOnly}
        size={size}
        maxLength={maxLength}
        max={max}
        min={min}
        multiple={multiple}
        pattern={pattern}
        required={required}
        autoFocus={autoFocus}
        onClick={onClick}
        onChange={onChange}
      ></input>
    </div>
  );
};
InputFiled.defaultProps={
  type: "text",
  placeholder: "",
  className:"defaultClassName",
  id:"defaultId",
  name:"defaultName",
  value:"",
  style: {},
  setInputValue:"",
  disabled: false,
  readOnly:false,
  size:"",
  multiple:false,
  pattern:"",
  required:false,
  autoFocus:false,

}
export default InputFiled;
