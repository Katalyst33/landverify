import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="">
        <div className="bg-slate-800 py-4 flex justify-between items-center px-20">
          <div className="flex items-center gap-x-4">
            <div className="font-extrabold border-2 border-white"><span className="p-1 text-3xl text-green-500">LV</span></div>
            <h2 className="font-medium text-white text-2xl">Land Verify</h2>

          </div>

          <nav  >
            <ul className="lg:flex gap-x-4 text-white">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/map-page">Check Map</Link>
              </li>
              <li>
                <Link to="/contact">Help</Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    <div className="px-10">
    <Outlet />
    </div>

      <footer>
        <div>About Us</div>
      </footer>
    </>
  )
};

export default Layout;
