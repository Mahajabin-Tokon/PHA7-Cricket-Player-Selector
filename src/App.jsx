import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Players from "./components/Players";
import Selected from "./components/Selected";
import Playerselection from "./components/Playerselection";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [status, setStatus] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [coin, setCoin] = useState(0);

  // Fuction to add credit to the coin state
  const handleCoin = () => {
    setCoin(coin + 10000000);
  };

  // Function to add players to the selectedPlayers state if the checks pass
  const handleSelectedPlayers = (player) => {
    if (selectedPlayers.length === 6) {
      toast("Maximum number of selections reached");
    } else {
      if (coin <= player.price) {
        toast("Player price is more than available credit");
      } else {
        const playerExists = selectedPlayers.find(
          (selectedPlayer) => selectedPlayer.id === player.id
        );
        if (playerExists) {
          toast("Player already selected");
        } else {
          setSelectedPlayers([...selectedPlayers, player]);
          setCoin(coin - player.price);
        }
      }
    }
  };

  // Function to remove player from selectedPlayers state upon delete button click
  const removeSelectedPlayers = (player) => {
    console.log(player.id);
    setSelectedPlayers(
      selectedPlayers.filter(
        (selectedPlayer) => selectedPlayer.id !== player.id
      )
    );
  };

  // Function to update the status state in order to toggle components
  const handleStatus = (value) => {
    if (value === 1) {
      setStatus(true);
    } else if (value === 2) {
      setStatus(false);
    }
  };
  
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <>
      <div className="w-11/12 mx-auto p-4 space-y-10">
        <Nav coin={coin} />
        <Banner handleCoin={handleCoin} />
        <Playerselection
          status={status}
          handleStatus={handleStatus}
          selectedPlayers={selectedPlayers}
        />
        {status ? (
          <Players
            players={players}
            handleStatus={handleStatus}
            status={status}
            handleSelectedPlayers={handleSelectedPlayers}
          />
        ) : (
          <Selected
            handleStatus={handleStatus}
            selectedPlayers={selectedPlayers}
            removeSelectedPlayers={removeSelectedPlayers}
          />
        )}
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
