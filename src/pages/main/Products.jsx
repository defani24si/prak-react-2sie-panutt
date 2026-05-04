import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import produkData from "../data/produkData.json";

const CATEGORY_COLOR = {
  beauty: "bg-pink-100 text-pink-700",
  fragrances: "bg-purple-100 text-purple-700",
  "mens-shirts": "bg-blue-100 text-blue-700",
  "mens-pants": "bg-indigo-100 text-indigo-700",
  "mens-shoes": "bg-orange-100 text-orange-700",
  smartphones: "bg-green-100 text-green-700",
};

export default function Products() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader title="Products" breadcrumb="Product List" />

      <div className="mt-4 bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">All Products</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 font-semibold">
              <tr>
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Code</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Brand</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Stock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {produkData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-gray-400">{item.id}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/products/${item.id}`}
                      className="text-emerald-500 hover:text-emerald-700 hover:underline font-medium"
                    >
                      {item.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 font-mono text-gray-500">{item.code}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        CATEGORY_COLOR[item.category] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.brand}</td>
                  <td className="px-6 py-4 text-gray-700 font-medium">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{item.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
