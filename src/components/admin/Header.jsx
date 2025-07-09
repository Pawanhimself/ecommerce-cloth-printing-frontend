export default function Header(){
    return (
    <header className="bg-[#1a1a1a]">
        <div>
        <div className="mx-auto flex h-14 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <h2 className="block text-white">
                Dashboard
            </h2>
        </div>
        <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span className="sr-only">Toggle menu</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
      </div>
</header>
    )
}