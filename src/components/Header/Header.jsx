import React from "react"
import containerStyles from "./Header.module.css"
import logo from "../../images/mo_logo.svg"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className={`${containerStyles.Header} p-10`}>
      <Link className={`${containerStyles.Logo} flex`} to="/">
        <img src={logo} />
        <aside className="ml-4 mb-2">
          <h1 className="text-base whitespace-no-wrap">Mohammed Mulazada</h1>
          <h2 className="text-base whitespace-no-wrap">Front-end Developer</h2>
        </aside>
      </Link>

      <div class="ocean">
  <div class="wave"></div>
  <div class="wave"></div>
</div>
    </header>
  )
}

export default Header
