import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = props => {
  const { links } = props
  return (
    <nav className="mx-auto border border-bottom-blue-500 border-opacity-75">
      <ul>
        {links.map(({ link, name }) => (
          <li className="inline-block px-4 p-4" key={name}>
            <Link activeClassName="active" to={link}>
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
