import React,{Component} from 'react'
import Folder from './Folder'
import { getFolders, deleteFolder, saveFolder, addFolder } from './FolderStore'
import $ from 'jquery';
let responseData = false;

class FolderList extends Component{
   constructor(props){
    super(props)
    this.state = {
      folders : [],
      folderName: ''
    };
    
    this.handleChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
      });
    };
  }
  
  componentWillMount()
  {
      getFolders(folders => {
        responseData = true;
        this.setState({ folders: folders.data })
      });
  }
  
  addFolder(data)
  {
      addFolder(data, response => {
          let folders = this.state.folders.concat(response.data);
          responseData = true;
          this.setState({ folders });
      });
  }
  
  deleteFolder(id)
  {
      deleteFolder(id, response => {
        console.log(response);
        $(".folder-" + id).fadeOut('200');
        setTimeout(() => { $(".folder-" + id).remove(); }, 300);
      });
  }
  
  renderFolders(data) {
    const folders = data.map(folder => {
      return(
        <div key={folder.id} className={ "folderItem folder-" + folder.id}>
          {folder.name}    
        <div id="rightButtons">
          <input type="button" id="xFolder" className="btn" value="&#10006;" onClick={() => this.deleteFolder(folder.id)}/>
          <input type="button" value="E" id="edFolder" className="btn" onClick={() => this.setState({isEditing : true})} />
        </div>
      </div>
      );
    });
    
    return folders;
  }
  
  render(){ 
      if (responseData === true)
        return (
          <div>
             <div id="folders-container">
                { this.renderFolders(this.state.folders) }
             </div>
             <div>
                <input type="text" placeholder="denumire folder" className="btn" name="folderName" onChange={this.handleChange}/> 
                <input type="button" id="butonAdaugare" className="btn" value="&#43;" onClick={() => this.addFolder({name : this.state.folderName})} />
            </div>
        </div>
        );
      else
        return(
          <div>Loading</div>
          );
  }
  
}

export default FolderList;