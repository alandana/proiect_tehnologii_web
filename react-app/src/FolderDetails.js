import React, {Component} from 'react'
import Message from './Message'
import MessageForm from './MessageForm'
import MessageStore from '../stores/MessageStore'
import {EventEmitter} from 'fbemitter'

const ee = new EventEmitter()
const store = new MessageStore(ee)

class AuthorDetails extends Component{
  constructor(props){
    super(props)
    this.state = {
      messages : []
    }
    this.addMessage = (message) => {
      store.addOne(this.props.author.id, message)
    }
    this.deleteMessage = () => {}
    this.saveMessage = () => {}
  }
  componentDidMount(){
    store.getAll(this.props.author.id)
    ee.addListener('MESSAGE_LOAD', () => {
      this.setState({
        messages : store.content
      })
    })
  }
  render(){
    return (
      <div>
        I am {this.props.author.name} and i can be contacted at {this.props.author.email}
        <h3>these are my messages</h3>
        {
          this.state.messages.map((m) => <Message message={m} onDelete={this.deleteMessage} key={m.id} onSave={this.saveMessage} />)
        }
        <h3>add me another one</h3>
        <MessageForm onAdd={this.addMessage}/>
      </div>  
    )
  }
}

export default AuthorDetails





