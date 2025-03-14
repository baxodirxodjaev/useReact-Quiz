import React from "react"

interface FooterProp{
     children :  React.ReactNode
}

const Footer = ({children} : FooterProp) => {
  return (
    <footer>{children}</footer>
  )
}

export default Footer