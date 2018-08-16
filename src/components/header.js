import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
    <ul className="list-reset flex p-2">
      <li className="mr-2">
        <Link to="/">NLR</Link>
      </li>
      <li className="mr-2">Privat</li>
      <li className="mr-2">Företag</li>
      <li className="mr-2">Coacher</li>
      <li className="mr-2">NLR-trappan</li>
      <li className="mr-2">
        <Link to="/contact">Kontakt</Link>
      </li>
    </ul>
  </div>
)

export default Header
