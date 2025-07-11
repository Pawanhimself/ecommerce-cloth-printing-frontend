// components/ProductHeader.jsx
export default function ProductHeader() {
    return (
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-gray-600 font-semibold">Products</h2>
        <div className="flex items-center gap-2">
          <button className="bg-[#33302c] text-white px-2 py-1 rounded-lg text-xs">Add product</button>
        </div>
      </div>
    )
  }  