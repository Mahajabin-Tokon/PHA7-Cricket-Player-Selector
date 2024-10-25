import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Players from "./components/Players";
import Selected from "./components/Selected";
import { useEffect, useState } from "react";
import Playerselection from "./components/Playerselection";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [status, setStatus] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [coin, setCoin] = useState(0);

  const handleCoin = () => {
    setCoin(coin + 1000000);
  };

  const handleSelectedPlayers = (player) => {
    if (coin <= player.price) {
      alert("Player price is more than available credit");
    } else {
      const playerExists = selectedPlayers.find(
        (selectedPlayer) => selectedPlayer.id === player.id
      );
      if (playerExists) {
        alert("Player already selected");
      } else {
        setSelectedPlayers([...selectedPlayers, player]);
        setCoin(coin - player.price);
      }
    }
  };

  const removeSelectedPlayers = (player) => {
    console.log(player.id);
    setSelectedPlayers(
      selectedPlayers.filter(
        (selectedPlayer) => selectedPlayer.id !== player.id
      )
    );
  };

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
    </>
  );
};

export default App;
