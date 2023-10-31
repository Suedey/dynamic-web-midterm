import "../app/globals.css";
import React, {useState, useEffect} from "react";
import axios from 'axios';

const App = () => {
    const [playerName, setPlayerName] = useState([]);
    const [playerPic, setPlayerPic] = useState([]);

    const fetchData= () => {
        const playerAPI = 'https://www.balldontlie.io/api/v1/players'
        const playerPic = 'https://nba-players.herokuapp.com/players/james/lebron'

        const getNBAPlayer = axios.get(playerAPI)
        const getPlayerPic = axios.get(playerPic)
        axios.all([getNBAPlayer, getPlayerPic]).then(
            axios.spread((...allData) => {
                const allDataPlayer = allData[0].data.first_name
                const getNBAPlayerPic = alldata[1].config.url;

                setPlayerName(allDataPlayer)
                setPlayerPic(getNBAPlayerPic)
                
            })
        )
            
        }

        useEffect(() => {
            fetchData()
        }, [])



    return (
        <div className="App">
            Player Name is: {playerName}
            <img src={playerPic}/>

        </div>
    );
}

export default App;