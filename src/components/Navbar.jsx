
import logo from '../assets/shenghangZhuLogo-w.png';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav aria-label="Social profiles" className='mb-8 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/shenghang-zhu-8a1851187' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><FaLinkedin aria-hidden="true" /></a>
        <a href='https://github.com/zyhzsh' target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><FaGithub aria-hidden="true" /></a>

      </div>

    </nav>
  )
}

export default Navbar
