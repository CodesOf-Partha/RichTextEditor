import React from 'react';
import './App.css';
import{EditorController} from "./EditorController";
import {Editor, EditorState, RichUtils} from 'draft-js';
import {stateFromHTML} from 'draft-js-import-html';
import {stateToHTML} from 'draft-js-export-html';
const initialState="Type here Something!!!";
class App extends React.Component {
  state={
    title:"",
    editorState:EditorState.createWithContent(stateFromHTML(initialState))
  };
titleChange=event=>{this.setState({title:event.target.value})}
onEditorchange=(editorState)=>this.setState({editorState});
submitInput=()=>{
  console.log(stateToHTML(this.state.editorState.getCurrentContent()));
}
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
      <button className="btn bg-primary" onClick={this.submitInput}>Submit</button>
   </div> 
  );
}
}
const inputstyle={
    width:" 30rem",
    marginLeft:" 15rem"
  }

export default App;