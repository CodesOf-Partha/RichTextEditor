import React from 'react';
import './App.css';
import{EditorController} from "./EditorController";
import {Editor, EditorState, RichUtils} from 'draft-js';
import {stateFromHTML} from 'draft-js-import-html';
import {stateToHTML} from 'draft-js-export-html';
import {InputHooks} from './InputHooks';
const initialState="Type here Something!!!";
class App extends React.Component {
  state={
    title:"",
    editorState:EditorState.createWithContent(stateFromHTML(initialState))
  };
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
      <h1>{this.state.title}</h1>
      <InputHooks />
     <EditorController editorState={this.state.editorState} toggleInlineStyle={this.toggleInlineStyle}/>
     <Editor editorState={this.state.editorState} onChange={this.onEditorchange} />
      <button className="btn bg-primary" onClick={this.submitInput}>Submit</button>
   </div> 
  );
}
}


export default App;