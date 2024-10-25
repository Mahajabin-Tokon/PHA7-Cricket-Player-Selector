import PropTypes from "prop-types";
const Playerselection = ({ status, handleStatus, selectedPlayers }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center py-4">
        {status ? (
          <h1 className="font-bold text-2xl">Available Players</h1>
        ) : (
          <h1 className="font-bold text-2xl">
            Selected Players ({selectedPlayers.length}/6)
          </h1>
        )}

        <div className="rounded-xl border-2">
          <span
            onClick={() => {
              handleStatus(1);
            }}
            className={
              status
                ? "btn bg-green-400 hover:bg-green-400 border-r-2"
                : " bg-white hover:bg-white btn border-r-2"
            }
          >
            Available
          </span>
          <span
            onClick={() => {
              handleStatus(2);
            }}
            className={
              status
                ? "btn bg-white hover:bg-white"
                : "btn bg-green-400 hover:bg-green-400"
            }
          >
            Selected ({selectedPlayers.length})
          </span>
        </div>
      </div>
    </div>
  );
};

export default Playerselection;
Playerselection.propTypes = {
  status: PropTypes.bool,
  handleStatus: PropTypes.func,
  selectedPlayers: PropTypes.array
};
