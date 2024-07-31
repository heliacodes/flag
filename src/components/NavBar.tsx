import ThemeToggler from "./ThemeToggler"

const NavBar = () => {
  return (
    <header className="dark:bg-primary-500 dark:text-white py-8 sm:py-6 md:py-4 shadow-md w-full bg-white p-2">
        <nav className="container-width flex justify-between items-center">
            <p className="font-semibold">Where in the world?</p>
            <div className="flex gap-2">
                <ThemeToggler/>
            </div>
        </nav>
    </header>
  )
}

export default NavBar

// fixed z-40