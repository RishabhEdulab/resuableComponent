import React, { CSSProperties } from "react";
import { NamedTupleMember } from "typescript";
interface props {
  label?: string;
  value?: string | number | string[] | number[]; //string | number | string[] | number[],
  name?: string;
  id?: string;
  className?: string;
  style?: CSSProperties;
}
const coustomDropdown = ({
  name,
  label,
  value,
  id,
  className,
  style,
}: props) => {
  console.log("checking array value", value);
  // const optionvalue:string[]=value
  return (
    <div>
      <select name={name} id={id} className={className} style={style}>
        <option>please select item</option>
        {Array.isArray(value) ? (
          value.map((element: string | number) => <option value={element}>{element}</option>)
        ) : (
          <option value={value}>{value}</option>
        )}
      </select>
    </div>
  );
};
coustomDropdown.defaultProps = {
  label: "defaultLabel",
  value: "defaultValue",
  name: "defaultName",
  id: "defaultId",
  className: "defaultClassName",
  style: {},
};
export default coustomDropdown;
