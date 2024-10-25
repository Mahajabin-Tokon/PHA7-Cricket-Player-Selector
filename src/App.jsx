import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Players from "./components/Players";
import { useEffect, useState } from "react";

const App = () => {
  const [players, setPlayers] = useState([]);

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
        <Players players={players} />
      </div>
      <Footer />
    </>
  );
};

export default App;
