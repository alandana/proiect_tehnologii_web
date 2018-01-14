import React,{Component} from 'react'
import Folder from './Folder'
import { getDocuments, deleteDocument, saveDocument } from './DocumentStore'
import DocumentForm from './DocumentForm'
let responseData = false

class DocumentsList extends Component{
   constructor(props){
    super(props)
    this.state = {
      documents : []
    }
  }
  
  componentDidMount(){
      getDocuments(response => {
          responseData = true;
          this.setState({ documents: response.data })
      });
  } 
  
  renderDocuments(data)
  {
      const documents = data.map(document => {
          return (
              <tr key={document.id}>
                  <td className="lat">{document.title}</td>
                  <td className="lat">{document.author}</td>
                  <td>{document.publicationYear}</td>
                  <td>{document.pages}</td>
                  <td>{document.publisher}</td> 
                  
                  <td> <button type="button" className="btn"   id="saveDoc">&#x2714;</button></td>
                  <td> <button type="button" className="btn"   id="editDoc" > &#x270E;</button></td>
                  <td>  <button type="button" className="btn" id="deleteDoc">&#10006;</button></td>
            </tr>
            );
      });
      
      return documents;
  }
  
  render(){ 
      if (responseData === true)
        return (
          <div>
              <table id="articles" className="table table-bordered table-striped">
                  <tbody>
                      <tr>
                         <th>Titlu</th>
                         <th>Autor</th>
                         <th>Anul publicarii</th>
                         <th>Nr. pagini</th>
                         <th>Editor</th> 
                         <th className="space">Salvare </th>
                         <th className="space">Editare</th>
                         <th className="space">Stergere</th>
                         
                      </tr>
            
                    { this.renderDocuments(this.state.documents) }
                  </tbody>
              </table>
              <DocumentForm />
          </div>
         )
      else
        return (
          <div>Loading</div>
          )
  }
  
}

export default DocumentsList