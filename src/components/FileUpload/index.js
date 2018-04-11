import React from 'react';
import FileInput from 'react-simple-file-input';
 
var allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];
 
function fileIsIncorrectFiletype(file){
  if (allowedFileTypes.indexOf(file.type) === -1) {
    return true;
  } else {
    return false;
  }
}

export default class FileUpload extends React.Component {
  constructor(props, context) {
    super(props, context);
 
    this.cancelButtonClicked = this.cancelButtonClicked.bind(this);
    this.resetCancelButtonClicked = this.resetCancelButtonClicked.bind(this);
    this.showProgressBar = this.showProgressBar.bind(this);
    this.updateProgressBar = this.updateProgressBar.bind(this);
    this.handleFileSelected = this.handleFileSelected.bind(this);
 
    this.state = {
      cancelButtonClicked: false
    };
  }
 
  render(){
    return(
      <div>
         <label>
            
            <FileInput
              readAs='dataUrl'
              style={ { display: 'none' } }
 
              onLoadStart={this.showProgressBar}
              onLoad={this.handleFileSelected}
              onProgress={this.updateProgressBar}
 
              cancelIf={fileIsIncorrectFiletype}
              abortIf={this.cancelButtonClicked}
 
              onCancel={this.showInvalidFileTypeMessage}
              onAbort={this.resetCancelButtonClicked}
             />
           <span className='button' style={{width: '100%', textAlign: 'center', marginBottom: '20px'}}>Select a photo</span>
         </label>
      </div>
    );
  }
 
  cancelButtonClicked(){
    return this.state.cancelButtonClicked;
  }
 
  resetCancelButtonClicked(){
    this.setState({ cancelButtonClicked: false });
  }
 
  showInvalidFileTypeMessage(file){
    window.alert("Tried to upload invalid filetype " + file.type);
  }
 
  showProgressBar(){
    this.setState({ progressBarVisible: true});
  }
 
  updateProgressBar(event){
    this.setState({
      progressPercent: (event.loaded / event.total) * 100
    });
  }
 
  handleFileSelected(event, file){
    this.props.base64Image(event.target.result)
    this.props.readyToDraw(false)
  }
}
