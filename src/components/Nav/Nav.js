import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import containerStyles from "./Nav.module.css"

const Nav = props => {
  const { links } = props

  return (
    <nav
      className={
        containerStyles.Nav +
        " " +
        "border border-bottom-blue-500 border-opacity-75 bg-white"
      }
    >
      <ul className="px-8">
        {links.map(({ link, name, partiallyActive }) => (
          <li className="inline-block" key={`${name} - ${link}`}>
            <Link
              className="inline-block py-4"
              activeClassName="active"
              to={link}
              partiallyActive={partiallyActive}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
