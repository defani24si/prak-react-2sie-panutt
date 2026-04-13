import { FaThLarge, FaListUl, FaUserFriends, FaPlus, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {

  const handleLogout = () => {
    alert("Logout berhasil!");
    
  };

  return (
    <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
      
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span className="font-poppins text-[48px] text-gray-900 font-bold">
          Sedap <b className="text-hijau">.</b>
        </span>
        <span className="font-semibold text-gray-400 font-barlow">
          Modern Admin Dashboard
        </span>
      </div>

      {/* Menu */}
      <div className="mt-10">
        <ul className="space-y-3">
          <li>
            <div className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-100 hover:font-extrabold transition-all">
              <FaThLarge className="mr-4 text-xl" /> Dashboard
            </div>
          </li>
          <li>
            <div className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-100 hover:font-extrabold transition-all">
              <FaListUl className="mr-4 text-xl" /> Orders
            </div>
          </li>
          <li>
            <div className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-100 hover:font-extrabold transition-all">
              <FaUserFriends className="mr-4 text-xl" /> Customers
            </div>
          </li>
        </ul>
      </div>

      {/* 🔥 LOGOUT (BARU) */}
      <div className="mt-6">
        <div
          onClick={handleLogout}
          className="flex cursor-pointer items-center rounded-xl p-4 font-medium text-red-500 hover:bg-red-100 hover:font-bold transition-all"
        >
          <FaSignOutAlt className="mr-4 text-xl" />
          Logout
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <div className="bg-hijau px-4 py-4 rounded-2xl shadow-lg mb-10 flex items-center justify-between relative overflow-hidden">
          <div className="text-white text-sm z-10">
            <p className="w-2/3">Please organize your menus through button below!</p>
            <div className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 cursor-pointer">
              <span className="text-gray-600 font-bold flex items-center">
                <FaPlus className="mr-2" /> Add Menus
              </span>
            </div>
          </div>
          <img 
            src="https://avatar.iran.liara.run/public/28" 
            className="w-16 h-16 rounded-full absolute -right-2 bottom-4 opacity-80" 
          />
        </div>

        <span className="font-bold text-gray-400 block">
          Sedap Restaurant Admin Dashboard
        </span>
        <p className="font-light text-gray-400">
          © 2025 All Right Reserved
        </p>
      </div>

    </div>
  );
}