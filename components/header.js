import Link from 'next/Link'

const Header = () => (
  <div className="header-wrapper">
    <nav>
      <Link href="/" as = {process.env.BACKEND_URL}>
        <a>Home</a>
      </Link>
    </nav>
  </div>
)

export default Header;