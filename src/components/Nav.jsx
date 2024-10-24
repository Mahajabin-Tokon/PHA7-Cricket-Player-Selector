const Nav = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="">
        <img src="logo.png" alt="Image of a cricket player batting" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p>Home</p>
        <p>Fixture</p>
        <p>Teams</p>
        <p>Schedules</p>
        <div className="flex justify-between items-center gap-2 border-2 rounded-lg px-2 py-1">
          <div>0 Coin</div>
          <img src="coin.png" alt="Image of a gold coin" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
