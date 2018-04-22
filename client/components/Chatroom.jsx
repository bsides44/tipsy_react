import React from 'react';
import ReactDOM from 'react-dom';
// import '/chat.css';
import Message from './Message.js';
import { getUserForChat } from '../api/api_index.js';
import { getChats } from '../api/api_index.js';
import { pushMessageToDb } from '../api/api_index.js';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            query: this.props.location.search,
            chats: [],
            firstname: "",
            profilepic: "",
            languages: [],
        };

        this.submitMessage = this.submitMessage.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.saveChats = this.saveChats.bind(this);
        this.pushMessage = this.pushMessage.bind(this);
        this.nothing = this.nothing.bind(this);
    }
    componentDidMount() {
        const id = this.state.id
        const query = this.state.query
        let chatters = ({id, query})
        getUserForChat(this.props.match.params.id, this.saveUser);
        getChats(chatters, this.saveChats)
        this.scrollToBot();
    }

    saveUser(err, databall){
        this.setState ({
            error: err,
            firstname: databall.user.firstname,
            profilepic: databall.user.profilepic,
            languages: databall.langArray
        })
    }

    saveChats(err, databall){
        console.log({databall})
        let chats = []
        databall.chats.map(obj => {
            chats.push(obj)
        })
        databall.moreChats.map(obj => {
            chats.push(obj)
        })
        chats.sort(function(a, b) {
            return  +new Date(a.created_at) - +new Date(b.created_at)
        })
        this.setState ({
            error: err,
            chats: chats,
        })
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();
        this.setState({
            chats: this.state.chats.concat([{
                firstname: this.state.firstname,
                message: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                profilepic: this.state.profilepic,
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        })
        this.pushMessage()
    }
  
    pushMessage() {
        let message = {
            id: this.state.id,
            query: this.state.query,
            message: ReactDOM.findDOMNode(this.refs.msg).value,
        }
        console.log("msg ", message)
        pushMessageToDb(message, this.nothing)
    }

    nothing(err, callback) {
        console.log("success")
    }

    render() {  console.log("state ", this.state)
        const firstname = this.state.firstname
        const { chats } = this.state;

        return ( 
            <div className="chatroom">
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) => 
                            <Message chat={chat} user={firstname}/>
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom

//Thanks "Kevin Hsu" for the chat framework: https://github.com/WigoHunter