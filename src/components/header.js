import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle, header }) => {
  const textColor = (header === 'black') ? 'white' : 'black';
  return (
    <div className={`overflow-scroll bg-${header}`}>
      <ul className="list-reset flex justify-between sm:justify-start whitespace-no-wrap px-4 sm:px-16 md:px-32 py-2 sm:py-3 m-0">
        <li className="mr-4">
          <Link to="/" className={`text-${textColor} no-underline font-semibold italic`}>
            <span className="font-extrabold">NL</span>R
          </Link>
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
        <li className="mr-4">
          <Link to="/kontakt" className={`text-${textColor} no-underline`}>Kontakt</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
