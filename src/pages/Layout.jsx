import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
   <div className="">
   <div className="bg-gray-200 py-4 flex justify-between items-center px-20">
   <div className="flex items-center gap-x-4">
   <div className="font-extrabold border-2 border-green-600"><span className="p-1 text-3xl">LV</span></div>
   <h2 className="font-medium">Land Verify</h2>
 
   </div>

   <nav  >
     <ul className="flex gap-x-4">
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

 </div></div>
      <Outlet />

      <footer>
        <div>About Us</div>
      </footer>
    </>
  )
};

export default Layout;