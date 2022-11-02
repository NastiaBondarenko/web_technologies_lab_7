import React from "react"
 
function Image(props) {
    return (
    <img className={props.name} style={{width: props.width+'px'}} src={props.src}  ></img>
)
}
 
export default Image