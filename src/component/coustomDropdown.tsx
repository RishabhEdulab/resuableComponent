import React, { CSSProperties } from 'react'
interface props{
    label?:string,
    value?:string,
    name?:string,
    id?:string,
    className?:string,
    style?:CSSProperties
}
const coustomDropdown = ({name,label,value,id,className,style}:props) => {
   
  return (
    <div>
      <select name={name} id={id} className={className} style={style}>
        <option value="">please select item</option>
      </select>
    </div>
  )
}
coustomDropdown.defaultProps={
    label:"defaultLabel",
    value:"defaultValue",
    name:"defaultName",
    id:"defaultId",
    className:"defaultClassName",
    style:{}
}
export default coustomDropdown
