import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate("/userinformation/:id");
    handleClose();
  }

  const navigate = useNavigate();

  return (
    <nav className="w-full h-16 px-6 flex items-center justify-between border-b shadow-sm bg-white z-10">
      {/* Left: Logo */}
      <div className="text-xl font-bold text-indigo-600">
        TaskFlow
      </div>

      {/* Center: Create Button */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
          + Create
        </button>
      </div>

      {/* Right: Avatar */}
      <div className="flex items-center space-x-2">
        <IconButton onClick={handleOpen}>
          <img
            src="https://i.pravatar.cc/150?img=8"
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-indigo-500"
          />
        </IconButton >

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleProfile}>Profile</MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
