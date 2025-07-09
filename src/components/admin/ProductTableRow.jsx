// ProductTableRow.jsx
export default function ProductTableRow({
    imageUrl,
    name,
    status,
    inventory,
    category,
  }) {
    return (
      <tr className="border-t border-gray-300 hover:bg-gray-50 text-xs">
        
        <td className="p-2 flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
            <img
              src={imageUrl}
              alt={name}
              className="w-5 h-5 object-contain"
            />
          </div>
          <span>{name}</span>
        </td>
        <td className="p-2">
          <span className="px-2 py-1 text-xs font-small bg-green-100 text-green-800 rounded-full">
            {status}
          </span>
        </td>
        <td className="p-2 text-red-600">{inventory}</td>
        <td className="p-2 text-gray-700">{category}</td>
      </tr>
    )
  }
  