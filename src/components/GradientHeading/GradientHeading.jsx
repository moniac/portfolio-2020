import React from "react"
import containerStyles from "./GradientHeading.module.css"

const GradientHeading = props => {
  const { headingLevel = 1, children } = props
  const GradientHeading = "h" + headingLevel

  return (
    <GradientHeading
      className={`${containerStyles.GradientHeading} ${containerStyles["h3"]} -ml-2 mb-8`}
    >
      {children}
    </GradientHeading>
  )
}

export default GradientHeading
