import React,{Component} from 'react'
class FolderForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      folderName : ''
    }
    this.handleChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
      })
    }
  }
  render(){
    return ( 
    <div>
    
      <input type="text" placeholder="denumire folder" className="btn" name="folderName" onChange={this.handleChange}/> 
      <input type="button" id="butonAdaugare" className="btn" value="&#43;" onClick={() => this.props.handleAdd({name : this.state.folderName})} />
    </div>)
  }
}

export default FolderForm