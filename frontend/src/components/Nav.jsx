import {headerLogo} from '../assets/images'

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 w-full sticky top-0 bg-yellow-100">
        <nav>
            <a href="/">
                <img src={headerLogo}
                alt="Logo"
                width={29}
                height={29} />
            </a>
        </nav>
    </header>
  )
}

export default Nav