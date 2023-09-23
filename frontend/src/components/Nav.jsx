import {logo} from '../assets/images'

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 w-full sticky top-0 bg-yellow-100">
        <nav className='flex justify-between items-center'>
            <a href="/">
                <img 
                src={logo} 
                alt="kakshi-logo"
                width={29}
                height={29} />
            </a>
        </nav>
    </header>
  )
}

export default Nav