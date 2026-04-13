import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import RecentOrders from "../components/RecentOrders";

export default function Dashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader />

      {/* CARD GRID */}
      <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="flex items-center space-x-5 bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
          <div className="bg-hijau rounded-full p-4 text-3xl text-white">
            <FaShoppingCart />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">75</p>
            <p className="text-gray-400 text-sm">Total Orders</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center space-x-5 bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
          <div className="bg-biru rounded-full p-4 text-3xl text-white">
            <FaTruck />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">175</p>
            <p className="text-gray-400 text-sm">Total Delivered</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center space-x-5 bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
          <div className="bg-merah rounded-full p-4 text-3xl text-white opacity-80">
            <FaBan />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">40</p>
            <p className="text-gray-400 text-sm">Total Canceled</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center space-x-5 bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
          <div className="bg-kuning rounded-full p-4 text-3xl text-white">
            <FaDollarSign />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">Rp.128</p>
            <p className="text-gray-400 text-sm">Total Revenue</p>
          </div>
        </div>

      </div>

      {/* 🔥 RECENT ORDERS (TABEL) */}
      <div className="px-5 pb-5">
        <RecentOrders />
      </div>

    </div>
  );
}