import { Outlet } from 'react-router-dom'
import Header from '../components/admin/Header'
import Sidebar from '../components/admin/Sidebar'

export default function Admin() {
  return (
    <div>
        <Header />
        <div className="flex h-screen">
            <Sidebar /> {/* Left side fixed sidebar */} 
        
            <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
                <Outlet /> {/* This will appear on the right side of sidebar */}
            </div>
        </div>
    </div>
  )
}
