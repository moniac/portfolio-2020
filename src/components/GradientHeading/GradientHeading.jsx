import React from "react"
import containerStyles from "./GradientHeading.module.css"

const GradientHeading = props => {
  const { headingLevel = 1, children } = props
  const GradientHeading = "h" + headingLevel

  return (
    <GradientHeading
      className={`${containerStyles.GradientHeading} ${
        containerStyles["GradientHeading" + GradientHeading.toUpperCase()]
      } -ml-2 mb-8`}
    >
      {children}
    </GradientHeading>
  )
}

export default GradientHeading
