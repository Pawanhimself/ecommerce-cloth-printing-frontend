// components/SidebarGroup.jsx
export default function SidebarGroup({ title, children }) {
    return (
      <div className="">
   
        <div className="flex flex-col gap-1">{children}</div>
      </div>
    )
  }
  