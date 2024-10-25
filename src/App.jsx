import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Players from "./components/Players";
import Selected from "./components/Selected";
import { useEffect, useState } from "react";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [status, setStatus] = useState(true);

  const handleStatus = (value) => {
    if (value===1) {
      setStatus(true);
    } else if (value===2) {
      setStatus(false);
    }
    console.log(status)
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
        {status ? (
          <Players players={players} handleStatus={handleStatus} status={status}/>
        ) : (
          <Selected handleStatus={handleStatus} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
