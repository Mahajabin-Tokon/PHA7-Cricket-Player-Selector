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

  const handleSelectedPlayers = (player) => {
    setSelectedPlayers([...selectedPlayers, player]);
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
        <Nav />
        <Banner />
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
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
