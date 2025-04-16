import Sidebar from "../../Sidebar";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar at the top */}
      <div className="h-16">
        <Navbar />
      </div>

      {/* Below Navbar: Sidebar and Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[20%] h-full border-r">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="w-[80%] h-full p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;