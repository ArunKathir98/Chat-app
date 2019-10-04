import React, { Component } from 'react'
 class privateChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        message: '',
          
        }
        
        privateMessage=(e)=>{
            e.preventDefault();
    this.setState({message:e.target.value})
        }

      }
    render() {
        return (
            
        <div className="Container">
        <h6><b>COMMON CHAT</b></h6>

         
          <div className="ChatBox">
            <form id="message-form" >
              <input type="text" id="message" className="MessageBox" placeholder="Write your message here..." value={this.state.message} onChange={this.privateMessage} />
              <input type="submit" className="btn btn-primary btn-sm Send" value="Send"  />
            </form>
          </div>
        </div>
        )
    }
}
export default privateChat;
