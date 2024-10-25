import PropTypes from "prop-types";
const Banner = ({ handleCoin }) => {
  return (
    <div
      className="flex flex-col items-center gap-4 bg-cover bg-no-repeat bg-black py-10 rounded-xl"
      style={{ backgroundImage: "url(https://i.ibb.co/QvXSmf4/bg-shadow.png)" }}
    >
      <img src="banner-main.png" alt="Image of ball hitting stumps" />
      <h1 className="text-2xl md:text-4xl text-center text-white font-bold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <h2 className="text-gray-400">Beyond Boundaries Beyond Limits</h2>
      <div className="p-2 border-2 border-lime-300 rounded-xl">
        <button onClick={handleCoin} className="bg-lime-300 p-2 rounded-xl">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
Banner.propTypes = {
  handleCoin: PropTypes.func,
};
