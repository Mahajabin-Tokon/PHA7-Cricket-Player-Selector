import PropTypes from "prop-types";
const Players = ({ players, handleSelectedPlayers }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <div key={player.id} className="border-2 p-4 rounded-xl space-y-2">
            <img
              className="h-60 w-full object-cover rounded-xl"
              src={player.image}
              alt="Player Image"
            />
            <h1 className="text-xl font-bold">
              <div className="flex items-center gap-2">
                <i className="fa-regular fa-circle-user"></i>
                {player.name}
              </div>
            </h1>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <i className="fa-regular fa-flag"></i>
                <p className="text-gray-500">{player.country}</p>
              </div>

              <button className="p-2 bg-gray-200 rounded-xl">
                {player.role}
              </button>
            </div>
            <hr />
            <h2 className="text-lg font-bold">Rating</h2>
            <div className="flex justify-between items-center">
              <p className="font-bold">Hand</p>
              <p>{player.handedness}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">$Price {player.price}</p>
              <button
                onClick={() => {
                  handleSelectedPlayers(player);
                }}
                className="btn bg-white"
              >
                Choose Player
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
Players.propTypes = {
  players: PropTypes.array,
  handleSelectedPlayers: PropTypes.func,
};
