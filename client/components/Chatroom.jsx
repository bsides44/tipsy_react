import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
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
            matches: []
        };

        this.submitMessage = this.submitMessage.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.saveChats = this.saveChats.bind(this);
        this.pushMessage = this.pushMessage.bind(this);
        this.nothing = this.nothing.bind(this);
    }
    componentDidMount() {
        this.refreshChats()
        getUserForChat(this.props.match.params.id, this.saveUser);
        setInterval(() => this.refreshChats(), 3000)
    }
    refreshChats() {
        const id = this.state.id
        const query = this.state.query
        let chatters = ({id, query})
        getChats(chatters, this.saveChats)
        this.scrollToBot();
    }

    saveUser(err, databall){
        this.setState ({
            error: err,
            firstname: databall.user.firstname,
            profilepic: databall.user.profilepic,
            languages: databall.langArray,
            matches: databall.matchMania
        })
    }

    saveChats(err, databall){
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

    componentDidUpdate() {
        this.scrollToBot();
    }

    setIntervals() {
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
        pushMessageToDb(message, this.nothing)
    }

    nothing(err, callback) {
        console.log("success")
    }

    render() {      console.log(this.state)
        const firstname = this.state.firstname
        const { chats } = this.state;

        return ( 
            <React.Fragment>
            <h2>Chatroom</h2>
            <div id="chatContainer">
                <div className="chatroom">
                    <ul className="chats" id="containerElement" ref="chats">
                        {chats.map((chat, i) => <div key={i}>
                            <Message i={i} chat={chat} user={firstname}/>
                            </div>)}
                    </ul>
                    <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                        <input type="text" ref="msg" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="matches">
                <div className="common">
                {/* <h4>{this.state.chats[0].firstname} and {this.state.chats[1].firstname} </h4> */}
                </div>
                    <h4>Your Matches</h4>
                    <div className="icons">
                        {this.state.matches.map((profile, i) => <div id="icon"  key={i}>
                            <h5>{profile.firstname}</h5> 
                            <Link to={'/profiles/' + this.state.id + '/view?id=' + profile.id}><img src={profile.profilepic} width="100px" height="100px"/></Link><br/>
                            <Link to={'/profiles/' + this.state.id + '/chat?id=' + profile.id}><button>Chat</button></Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div>
                    <Link to='/'><button>Home</button></Link><br/></div>
            </React.Fragment>
        );
    }
}

export default Chatroom


//Thanks "Kevin Hsu" for the chat framework: https://github.com/WigoHunter