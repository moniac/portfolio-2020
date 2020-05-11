import React from "react"
import containerStyles from "./Header.module.css"
import { Link } from "gatsby"
import MoniacLogo from '../../images/mo_logo.inline.svg'

const Header = () => {
  return (
    <header className={`${containerStyles.Header} p-10`}>
      <Link className={`${containerStyles.Logo} flex`} to="/">
        <MoniacLogo className={containerStyles.MoniacLogo} alt="The personal logo of Mohammed Mulazada" />
        <aside className="ml-4 mb-2">
          <h1 className="text-base whitespace-no-wrap">Mohammed Mulazada</h1>
          <h2 className="text-base whitespace-no-wrap font-hairline">Front-end Developer</h2>
        </aside>
      </Link>

      <div className="mt-8">
        <h2>Welcome</h2>
        <p className="max-w-sm font-hairline">This is the portfolio of Mohammed Mulazada, a Web Developer based in Amsterdam.</p>
      </div>

      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </header>
  )
}

export default Header
