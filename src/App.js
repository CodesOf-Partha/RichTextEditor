import React from 'react';
import './App.css';
import{EditorController} from "./EditorController";
import {Editor, EditorState, RichUtils} from 'draft-js';
class App extends React.Component {
  state={
    title:"",
    editorState:EditorState.createEmpty()
  };
titleChange=event=>{this.setState({title:event.target.value})}
onEditorchange=(editorState)=>this.setState({editorState});
toggleInlineStyle=inlineStyle=>{
  this.setState({
    editorState:RichUtils.toggleInlineStyle(
      this.state.editorState,
      inlineStyle
    )
  });
};
  render(){
  return (
    <div >
      <input style={inputstyle} type="text" onChange={this.titleChange}></input> 
      <h1>{this.state.title}</h1>
     <EditorController editorState={this.state.editorState} toggleInlineStyle={this.toggleInlineStyle}/>
     <Editor editorState={this.state.editorState} onChange={this.onEditorchange} />

   </div> 
  );
}
}
const inputstyle={
    width:" 30rem",
    marginLeft:" 15rem"
  }

export default App;