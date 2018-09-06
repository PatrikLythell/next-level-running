import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle, header }) => {
  const textColor = (header === 'black') ? 'white' : 'black';
  const getGradientColor = () => {
    if (header === 'black') return '34,41,47';
    if (header === 'nlr') return '134,224,156';
    return '255,255,255'
  }
  return (
    <div className={`overflow-scroll scrolling-touch bg-${header}`}>
      <ul className="list-reset flex justify-between sm:justify-start whitespace-no-wrap px-4 sm:px-16 md:px-32 py-2 sm:py-3 m-0">
        <li className="mr-4">
          <Link to="/" className={`text-${textColor} no-underline font-semibold italic`}>
            <span className="font-extrabold">NL</span>R
          </Link>
        </li>
        <li className="absolute pin-t pin-l sm:hidden pointer-events-none" style={{
            width: '1rem',
            height: '36px',
            background: `linear-gradient(90deg, rgba(${getGradientColor()},1) 0%, rgba(${getGradientColor()},0) 100%)`
          }}>
        </li>
        <li className="mr-4">
          <Link to="/privat" className={`text-${textColor} no-underline`}>Privat</Link>
        </li>
        <li className="mr-4">
          <Link to="/foretag" className={`text-${textColor} no-underline`}>Företag</Link>
        </li>
        <li className="mr-4">
          <Link to="/coacher" className={`text-${textColor} no-underline`}>Coacher</Link>
        </li>
        <li className="mr-4">
          <Link to="/nlr-trappan" className={`text-${textColor} no-underline`}>NLR-trappan</Link>
        </li>
        <li className="pr-4">
          <Link to="/kontakt" className={`text-${textColor} no-underline`}>Kontakt</Link>
        </li>
        <li className="absolute pin-t pin-r sm:hidden pointer-events-none" style={{
            width: '1rem',
            height: '36px',
            background: `linear-gradient(90deg, rgba(${getGradientColor()},0) 0%, rgba(${getGradientColor()},1) 100%)`
          }}>
        </li>
      </ul>
    </header>
  )
}

export default Header
