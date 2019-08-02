import React, { useState, useEffect } from 'react';

export const InputHooks=()=>{
    const [title,setTitle]=useState("type here something!!!");
    const titleChange=event=>{setTitle(event.target.value)}
    useEffect(()=>{
        console.log("Effect hook called ", title)
    });
    return(
        <input style={inputstyle} type="text" onChange={titleChange}></input> 
    )
}

const inputstyle={
    width:" 30rem",
    marginLeft:" 15rem"
  }

  