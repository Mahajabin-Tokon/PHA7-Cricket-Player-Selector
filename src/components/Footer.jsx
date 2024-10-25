const Footer = () => {
  return (
    <div>
      <div className="w-10/12 border-4 border-white rounded-xl p-4 mx-auto relative top-28">
        <div
          className="flex flex-col items-center gap-4 bg-cover bg-no-repeat bg-white py-10 px-1 rounded-xl"
          style={{
            backgroundImage: "url(https://i.ibb.co/QvXSmf4/bg-shadow.png)",
          }}
        >
          <h1 className="text-xl md:text-2xl text-center font-bold">
            Subscribe to our Newsletter
          </h1>
          <h2 className="text-gray-400 text-center">
            Get the latest updates and news right in your inbox!
          </h2>
          <div className="flex justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="rounded-lg py-3 px-4 font-bold bg-gradient-to-r from 20% via bg-yellow-400 from-pink-500 from 80% to-orange-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black pt-40">
        <div className="flex justify-center items-center">
          <img
            className="border-2 border-dashed border-gray-400"
            src="logo-footer.png"
            alt="Image of a cricket player batting"
          />
        </div>

        <footer className="footer p-10 justify-evenly items-center gap-24">
          <nav className="">
            <h6 className="text-white font-bold">About Us</h6>
            <p className="text-gray-400">
              We are a passionate team dedicated to
              <br />
              providing the best services to our customers.
            </p>
          </nav>

          <ul className="list-disc">
            <h6 className="text-white  font-bold">Quick Links</h6>
            <li className="link link-hover text-gray-400">Home</li>
            <li className="link link-hover text-gray-400">Services</li>
            <li className="link link-hover text-gray-400">About</li>
            <li className="link link-hover text-gray-400">Contact</li>
          </ul>

          <div className="">
            <h6 className="text-white font-bold">Subcribe</h6>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item"
              />
              <button className="join-item bg-gradient-to-r from 20% via bg-yellow-400 from-pink-500 from 80% to-orange-500 md:px-4">
                Subscribe
              </button>
            </div>
          </div>
        </footer>

        <div className="flex justify-center items-center py-4 border-t-2 border-gray-400">
          <p className="text-gray-400">
            @2024 Your Company All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
