import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="overflow-scroll">
    <ul className="list-reset flex justify-between sm:justify-start whitespace-no-wrap p-2">
      <li className="mr-4">
        <Link to="/">NLR</Link>
      </li>
      <li className="mr-4">
        <Link to="/privat">Privat</Link>
      </li>
      <li className="mr-4">Företag</li>
      <li className="mr-4">Coacher</li>
      <li className="mr-4">NLR-trappan</li>
      <li className="mr-4">
        <Link to="/contact">Kontakt</Link>
      </li>
    </ul>
  </div>
)

export default Header
