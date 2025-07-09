// components/SidebarItem.jsx
import { NavLink } from 'react-router-dom'

export default function SidebarItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      end={to === '/admin'}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 text-[#4b4b4b] rounded-md hover:bg-gray-300 text-sm font-medium ${
          isActive ? 'bg-white' : ''
        }`
      }
    >
      {icon}
      {label}
    </NavLink>
  )
}
