import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ siteTitle, header }) => {
  const textColor = (header === 'black') ? 'white' : 'black';
  return (
    <footer className="bg-black text-center md:text-left md:flex px-4 sm:px-16 md:px-32 py-2 sm:py-3 m-0">
      {/* <div className="flex-1">
        <img className="mt-4 mb-1 w-32" src="/img/NLR_black_small.svg" alt=""/>
        <h4 className="italic uppercase">Vi har medaljerna – inte diplomen</h4>
      </div> */}
      <div className="flex-1">
        <ul className="list-reset">
          <li>
            <h5 className="uppercase italic text-white">Next Level Running</h5>
          </li>
          <li>
            <Link to="/privat" className="text-grey text-sm no-underline hover:text-nlr">Privat</Link>
          </li>
          <li>
            <Link to="/foretag" className="text-grey text-sm no-underline hover:text-nlr">Företag</Link>
          </li>
          <li>
            <Link to="/coacher" className="text-grey text-sm no-underline hover:text-nlr">Coacher</Link>
          </li>
          <li>
            <Link to="/nlr-trappan" className="text-grey text-sm no-underline hover:text-nlr">NLR-trappan</Link>
          </li>
          <li>
            <Link to="/kontakt" className="text-grey text-sm no-underline hover:text-nlr">Kontakt</Link>
          </li>
          <li>
            <Link to="/integritetspolicy" className="text-grey text-sm no-underline hover:text-nlr">Vår integritetspolicy</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <ul className="list-reset">
          <li>
            <h5 className="uppercase italic text-white mt-4">Följ NLR</h5>
          </li>
          <li>
            <a href="https://facebook.com/NextLevelRunningSE/" className="text-grey text-sm no-underline hover:text-nlr">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/nextlevelrunningse/" className="text-grey text-sm no-underline hover:text-nlr">Instagram</a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC3gybEDiotRqbBeqzlb4pxQ" className="text-grey text-sm no-underline hover:text-nlr">Youtube</a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <ul className="list-reset">
          <li>
            <h5 className="uppercase italic text-white mt-4">Partners</h5>
          </li>
          <li>
            <a href="https://ymrtrackclub.com/" className="text-grey text-sm no-underline hover:text-nlr">YMR Track Club</a>
          </li>
          <li>
            <a href="https://mentalhealthrun.se/" className="text-grey text-sm no-underline hover:text-nlr">Mental Health Run</a>
          </li>
          <li>
            <a href="https://www.ving.se/" className="text-grey text-sm no-underline hover:text-nlr">Ving</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 md:text-right">
        <img className="h-16 md:h-24 mb-1 mt-4" src="/img/NLR_black_small.svg" alt="Next Level Running Logo" />
        <h5 className="uppercase text-white italic uppercase mt-2">Vi tar din löpning till nästa nivå</h5>
        <p className="text-sm text-grey mt-1">coach@nextlevelrunning.se</p>
      </div>
    </footer>
  )
}

export default Footer
