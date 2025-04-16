
import { NavLink } from "react-router-dom";

const sidebarData = [
    {
      name: "Tasklist",
      path: "/taskList",
      // children: [
      //   { name: "Overview", path: "/dashboard/overview" },
      //   { name: "Stats", path: "/dashboard/stats" },
      // ],
    },
    // {
    //   name: "Settings",
    //   path: "/settings",
    //   children: [
    //     { name: "Profile", path: "/settings/profile" },
    //     { name: "Account", path: "/settings/account" },
    //   ],
    // },
  ];

  
  const Sidebar = () => {
    return (
      <aside className="fixed top-16 left-0 h-screen w-[20%] bg-gray-800 text-white p-5 pt-16">
  
        <nav className="space-y-6">
          {sidebarData.map((menu, index) => (
            <div key={index}>
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  `block text-white font-semibold mb-1 px-3 py-2 rounded text-center ${
                    isActive ? "bg-blue-700" : "bg-gray-700"
                  }`
                }
              >
                {menu.name}
              </NavLink>
  
              {menu.children && (
                <ul className="pl-4 space-y-2">
                  {menu.children.map((child, idx) => (
                    <li key={idx}>
                      <NavLink
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-3 py-2 text-sm rounded  text-center ${
                            isActive ? "bg-blue-700 text-white" : "bg-green-200"
                          }`
                        }
                      >
                        {child.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    );
  };
  
  export default Sidebar;
  