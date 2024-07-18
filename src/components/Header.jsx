import Nav from "./Nav"

const Header = () => {
  return (
    <header className="flex justify-between">
      <img src="/logo.png" className="h-10" alt="Logo" />
      <Nav />
    </header>
  )
}

export default Header