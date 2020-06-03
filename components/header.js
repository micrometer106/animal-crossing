import Link from 'next/Link'

const Header = () => (
  <div className="header-wrapper">
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
  </div>
)

export default Header;