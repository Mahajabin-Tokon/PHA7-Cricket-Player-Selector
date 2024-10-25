const Selected = ({ selectedPlayers }) => {
  return (
    <div className="space-y-8">
      {selectedPlayers.map((player, idx) => (
        <div key={idx} className="flex justify-between items-center gap-2 border-2 rounded-xl p-4">
          <div className="flex justify-start items-center gap-4">
            <img className="h-20 w-20 rounded-xl" src={player.image} alt="Player image" />
            <div>
              <h1 className="font-bold text-xl">{player.name}</h1>
              <p>{player.handedness}</p>
            </div>
          </div>
          <i className="fa-regular fa-trash-can text-red-500 text-3xl"></i>
        </div>
      ))}
    </div>
  );
};

export default Selected;
