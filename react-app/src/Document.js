import React,{Component} from 'react'

/*var Documents = sequelize.define('documents', {
    folder_id: Sequelize.INTEGER,
    author: Sequelize.STRING,
    title: Sequelize.INTEGER,
    pages: Sequelize.INTEGER,
    publicationYear: Sequelize.INTEGER,
    publisher: Sequelize.STRING
})

*/
class Document extends Component{
  constructor(props){
    super(props)
    this.state = {
      isEditing : false,
      doc : this.props.document,
      docTitle : this.props.document.title,
      docFolderId: this.props.document.folder_id,
      docAuthor: this.props.document.author,
      docPages: this.props.document.pages,
      docPubYear: this.props.document.publicationYear,
      docPublisher: this.props.document.publisher
    }
    this.handleChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
      })
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      doc : nextProps,
      docTitle : this.props.document.title,
      docFolderId: this.props.document.folder_id,
      docAuthor: this.props.document.author,
      docPages: this.props.document.pages,
      docPubYear: this.props.document.publicationYear,
      docPublisher: this.props.document.publisher,
      isEditing : false
    })
  }
  render(){
    if(this.state.isEditing){
      return (
        <div>
        bambam
      </div>)
    }
    else{
      return (
        
     <tr>
       
            <td className="lat">{this.state.doc.title}</td>
            <td className="lat">{this.state.doc.author}</td>
            <td>{this.state.doc.publicationYear}</td>
            <td>{this.state.doc.pages}</td>
            <td>{this.state.doc.publisher}</td> 
            
            
            <td> <button type="button" className="btn"   id="saveDoc">&#x2714;</button></td>
            <td> <button type="button" className="btn"   id="editDoc" > &#x270E;</button></td>
            <td>  <button type="button" className="btn" id="deleteDoc">&#10006;</button></td>
      </tr>
      )
    }
  }
}

export default Document