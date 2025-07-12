import { Search, RefreshCcw } from 'lucide-react'
import ProductTableHeader from './ProductTableHeader'
import ProductTableRow from './ProductTableRow'

export default function ProductTable() {

    const products = [
        {
        id: 1,
        imageUrl: 'https://i.pinimg.com/736x/c1/1d/16/c11d164de692594acf53c9a855093139.jpg',
        name: 'Test product 1',
        status: 'Active',
        inventory: '0 in stock',
        category: 'Uncategorized',
        channels: 2,
      },
      {
        id: 2,
        imageUrl: 'https://i.pinimg.com/736x/c1/1d/16/c11d164de692594acf53c9a855093139.jpg',
        name: 'Sample T-Shirt',
        status: 'Draft',
        inventory: '15 in stock',
        category: 'T-Shirts',
        channels: 1,
      },
      {
        id: 3,
        imageUrl: 'https://i.pinimg.com/736x/c1/1d/16/c11d164de692594acf53c9a855093139.jpg',
        name: 'Hoodie - Red',
        status: 'Active',
        inventory: '8 in stock',
        category: 'Hoodies',
        channels: 3,
      }
    ]

  return (
    <div className="bg-[#ffffff] border border-gray-300 rounded-lg overflow-hidden">
      {/* Filters */}
      <ProductTableHeader/>

      {/* Table */}
      <table className="w-full text-sm">
        <thead className="bg-[#ffffff] text-left text-gray-600">
          <tr>
            <th className="p-3">Product</th>
            <th className="p-3">Status</th>
            <th className="p-3">Inventory</th>
            <th className="p-3">Category</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product) => (
            <ProductTableRow
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              status={product.status}
              inventory={product.inventory}
              category={product.category}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
