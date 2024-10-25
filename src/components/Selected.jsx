const Selected = ({ handleStatus }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center py-4">
        <h1 className="font-bold text-2xl">Selected Players (4/6)</h1>

        <div className="rounded-xl border-2">
          <span
            onClick={() => {
              handleStatus(1);
            }}
            className={status ? "bg-green-400 border-r-2" : "border-r-2"}
          >
            Available
          </span>
          <span
            onClick={() => {
              handleStatus(2);
            }}
            className={status ? "" : "bg-green-400"}
          >
            Selected (0)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Selected;
