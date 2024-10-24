import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="w-11/12 mx-auto p-4 space-y-10">
        <Nav />
        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default App;
