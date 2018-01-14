import React,{Component} from 'react'

class Folder extends Component{
  constructor(props){
    super(props)
    this.state = {
      isEditing : false,
      folder : this.props.folder,
      folderName : this.props.folder.name
    }
    this.handleChange = (event) => {
      console.log(event.target.value);
      this.setState({
        [event.target.name] : event.target.value
      })
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      folder : nextProps,
      folderName : this.props.folder.name,
      isEditing : false
    })
  }
  render(){
    if(this.state.isEditing){
      return (
        <div id="folderEditItem">
        <input type="text"  name="folderName" className="btn" value={this.state.folderName} onChange={this.handleChange}/>   
        <input type="button" value="&#x2714;" id="saveDoc" className="btn" onClick={() => this.props.onSave(this.props.folder.id, {name : this.state.folderName})}/>
        <input type="button" value=" &#x2715;" className="btn" onClick={() => this.setState({isEditing : false})} />
      </div>)
    }
    else{
      return (<div id="folderItem">
        {this.state.folderName}    
        <div id="rightButtons"  >
        <input type="button" id="xFolder" className="btn" value="&#10006;" onClick={() => this.props.onDelete(this.state.folder.id)}/>
        <input type="button" value="E" id="edFolder" className="btn" onClick={() => this.setState({isEditing : true})} />
        </div>
      </div>)
    }
  }
}

export default Folder