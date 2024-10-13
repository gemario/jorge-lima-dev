import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaXRay } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { FaSquareXTwitter } from 'react-icons/fa6'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={60} height={43}/>
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href='https://www.linkedin.com/in/jorgemarioo'
          target='_blank'
          rel='noopener noreferrer'
          arial-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
        <a href='https://www.github.com/gemario'
          target='_blank'
          rel='noopener noreferrer'
          arial-label='GitHub'
        >
          <FaGithub />
        </a>
        <a href='https://www.instagram.com/jorgee.mario/'
          target='_blank'
          rel='noopener noreferrer'
          arial-label='Instagram'
        >
          <FaInstagram />
        </a>
        <a href='https://x.com/geemarioo'
          target='_blank'
          rel='noopener noreferrer'
          arial-label='x'
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  )
}