import React from 'react';
const InlineStyles=[
    {label :"Bold",style:"BOLD"},
    {label :"Italic",style:"ITALIC"},
    {label :"UnderLine",style:"UNDERLINE"},
    {label :"MonoSpace",style:"CODE"}
]
export const EditorController=({editorState,toggleInlineStyle})=>{
    const currentStyle=editorState.getCurrentInlineStyle();
    return(
        <div style={{margin:"16px"}}>
           {
               InlineStyles.map((styleObj,styleIndex)=>{
                const handleClick=(event)=>{
                    event.preventDefault();
                    toggleInlineStyle(styleObj.style);
                };
                return(
                <span 
                key={styleIndex}
                 onMouseDown={handleClick} style={{
                    backgroundColor: currentStyle.has(styleObj.style)? "silver":"white",
                    margin:"4px 8px",
                    borderRadius:"2",
                    border:"2px solid black",
                    padding:"4px 8px"
                }}>{styleObj.style}</span>
                )
               })
           }
       
        </div>
    )
}