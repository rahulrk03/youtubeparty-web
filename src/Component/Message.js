// import React, { Component } from 'react'
// import ChildComponent from './ChildComponent'

// export default class Chat extends Component {
//     ws = new WebSocket('ws://localhost:8000/ws/chat/hhh/')

//     componentDidMount() {
//         this.ws.onopen = () => {
//         // on connecting, do nothing but log it to the console
//         console.log('connected')
//         }

//         this.ws.onmessage = evt => {
//         // listen to data sent from the websocket server
//         const message = JSON.parse(evt.data)
//         this.setState({dataFromServer: message})
//         console.log(message)
//         console.log(typeof(message))
//         let newVar = "hello"
//         }

//         this.ws.onclose = () => {
//         console.log('disconnected')
//         // automatically try to reconnect on connection loss

//         }

//     }

//     render() {
//         return (
//             <div>
//                 <ChildComponent websocket={this.ws}/>
//             </div>
//         )
//     }
// }
