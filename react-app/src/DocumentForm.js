import React,{Component} from 'react'
import { addDocument } from './DocumentStore'

class DocumentForm extends Component{
  
  constructor(props)
  {
      super(props);
      this.state = {
          dump: 0
      };
  }
  
  addDocument()
  {
      let data = {};
    
      data.title = document.getElementById('titlu').value;
      data.author = document.getElementById('autor').value;
      data.publicationYear = document.getElementById('an').value;
      data.pages = document.getElementById('nr').value;
      data.publisher = document.getElementById('editor').value;
      
      addDocument(data, response => {
          this.setState({ dump: 1});
      });
  }

  render(){
    return(
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
            <button type="button" className="btn btn-primary" onClick={ () => this.addDocument() }>Adauga</button>
        </div>
      </div>
      
    </div>
  </div>
   )
  }
}

export default DocumentForm 