// components/Sidebar.jsx
import SidebarItem from './SidebarItem'
import SidebarGroup from './SidebarGroup'
import { Home, Package, ShoppingCart, Users, Settings, BarChart } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#ebebeb] text-white flex flex-col">
      <nav className="flex-1 overflow-y-auto p-2">
        <SidebarGroup>
          <SidebarItem to="/admin" icon={<Home size={16} />} label="Home" />
          <SidebarItem to="/admin/products" icon={<Package size={16} />} label="Products" />
          <SidebarItem to="/admin/orders" icon={<ShoppingCart size={16} />} label="Orders" />
        </SidebarGroup>

      </nav>
    </aside>
  )
}
