import React from "react"
import tw from "twin.macro"

const Footer = () => {
  return (
    <footer css={tw`text-center py-8 bottom-0`}>
      <a css={tw`text-xs font-bold`} href={`http://jaeseokim.github.io/`}>
        &copy;irosyadi with JaeSeoKim Theme
      </a>
    </footer>
  )
}

export default Footer
