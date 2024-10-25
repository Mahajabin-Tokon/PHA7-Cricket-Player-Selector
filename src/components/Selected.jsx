import PropTypes from "prop-types";
const Selected = ({ selectedPlayers, removeSelectedPlayers, handleStatus }) => {
  return (
    <div className="space-y-8">
      {selectedPlayers.map((player, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center gap-2 border-2 rounded-xl p-4"
        >
          <div className="flex justify-start items-center gap-4">
            <img
              className="h-20 w-20 rounded-xl"
              src={player.image}
              alt="Player image"
            />
            <div>
              <h1 className="font-bold text-xl">{player.name}</h1>
              <p>{player.handedness}</p>
            </div>
          </div>
          <i
            onClick={() => removeSelectedPlayers(player)}
            className="fa-regular fa-trash-can text-red-500 text-3xl"
          ></i>
        </div>
      ))}
      <div className="flex justify-start">
        <div className="p-2 border-2 border-purple-500 rounded-xl">
          <button
            onClick={() => {
              handleStatus(1);
            }}
            className="bg-lime-300 p-2 rounded-xl border-double"
          >
            Add More Players
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selected;
Selected.propTypes = {
  selectedPlayers: PropTypes.array,
  removeSelectedPlayers: PropTypes.func,
  handleStatus: PropTypes.bool,
};
