// ProductTableHeader.jsx
import { Search, RefreshCcw } from 'lucide-react'

export default function ProductTableHeader() {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-300">
        <div className="flex gap-1 text-sm font-medium text-gray-600"> 
        {['All', 'Active', 'Draft'].map((item) => (
          <button
            key={item}
            className={`px-3 py-1 rounded hover:bg-gray-100 rounded-lg text-xs ${
              item === 'All' ? 'bg-gray-100 text-gray-800' : ''
            }`}
          >
            {item}
          </button>
        ))}
        </div>
    </div> 
  )
}
