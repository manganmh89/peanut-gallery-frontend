<<<<<<< Updated upstream
import Header from "../components/Header";
=======
// // import Header from "../components/Header";
>>>>>>> Stashed changes
// import StartGame from "../components/StartGame";
// // import HostDisplay from "../components/HostDisplay";
// // import PlayerDisplay from "../components/PlayerDisplay";
// import { useState } from "react";
// import socketIO from 'socket.io-client';
<<<<<<< Updated upstream
import JoinGame from '../components/JoinGame';

// const socket = socketIO.connect('https://peanutgallery.herokuapp.com/');
// socket.on('user connect', (message) =>{
//     console.log('connected');
// })
// const Game = () => {
//     return (
//         <div className="login">
//             hello</div>
//     )
// }
const Game = () => {
    return (
        <>
        <Header />
        <JoinGame />
        </>
    )
}
=======
// import JoinGame from '../components/JoinGame';

// const socket = socketIO.connect('http://localhost:4000');
// socket.on('user connect', (message) =>{
//     console.log('connected');
// })

// const Game = () => {
//     return (isLoggedIn ? <StartGame /> : <JoinGame />
//     )
// }
>>>>>>> Stashed changes

// const getStatus = async () => {
//     const SERVER_URL = fetch("api_url", {
//         method:"GET",
//         mode:"cors",
//         cache:"no-cache",
//         credentials:"same-origin",
//         headers: {
//             "Content-type": "application/json"
//         },
//         redirect:"follow",
//         referrerPolicy:"no-referrer",
//         });
//         this.setState({ users: await Response.json() });
//     }
//     const results = fetch(SERVER_URL)
// //     console.log(results.isLoggedIn)

//     const (results.isLoggedIn) === props.isLoggedIn;
//         if (isLoggedIn === true) {
//             return <StartGame />;
//         } else {
//             return <JoinGame />;
//         }

//     // const beginGame = props.beginGame;
//     // if ({<JoinGame />}) {
//     //     return <PlayerDisplay />
//     // } else {
//     //     return <HostDisplay />
//     // }

<<<<<<< Updated upstream
export default Game;
=======
// export default Game;
>>>>>>> Stashed changes

