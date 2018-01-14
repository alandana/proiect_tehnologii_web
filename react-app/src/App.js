/*global mix*/
import React, { Component } from 'react';
import logo from './logo.svg';
import FolderList  from './FolderList';
import DocumentsList from './DocumentsList';
import DocumentForm from './DocumentForm';
class App extends Component {
    
    constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  showModal()
  {
      document.getElementById('myModal').style.display = 'block';
  }
  
  render() {
    return (
      
   
      <div className="App"> 
       
        <div className="container-full">
        
         <div className="row">
         
            <div id = "leftFolders" className="col-md-3 no-float" >
            <h1>Folders</h1>
            <FolderList />
            </div>
            
             <div className="col-md-9 no-float ">
              
             <h2 >Documents</h2>
               <button type="button" className="btn" data-toggle="modal" data-target="#myModal" id="butonAdaugare">adauga document</button>
           
           <DocumentsList/>
            
            </div>
    
    <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
     
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Introducere document nou</h4>
        </div>
        <div className="modal-body">
         <div className="form-group">
                        <label htmlFor="titlu">Titlu</label>
                        <input type="text" name="titlu" id="titlu" placeholder="titlu" className="form-control"/>
          </div>
          <div className="form-group">
                        <label htmlFor="autor">Autor</label>
                        <input type="text" name="autor" id="autor" placeholder="autor" className="form-control"/>
          </div>
          <div className="form-group">
                        <label htmlFor="an">Anul publicarii</label>
                        <input type="text" name="an" id="an" placeholder="an" className="form-control"/>
          </div>
          <div className="form-group">
                        <label htmlFor="nr">Numar de pagini</label>
                        <input type="text" name="nr" id="nr" placeholder="numar" className="form-control"/>
          </div>
          <div className="form-group">
                        <label htmlFor="editor">Editor</label>
                        <input type="text" name="editor" id="editor" placeholder="editor" className="form-control"/>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Adauga</button>
        </div>
      </div>
      
    </div>
  </div>
  
  
  
  
  
  
  
  
  
  
        </div>
        
        </div>
     
       </div> 
    );
  }
}

export default App;
