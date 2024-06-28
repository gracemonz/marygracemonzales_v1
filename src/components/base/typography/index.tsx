import { ReactNode } from "react"

export const Header = ({children}:Readonly<{children: ReactNode}>) => {
  return <h1 className="text-5xl">{children}</h1>
}

export const Subheader = () => {}

export const BlockQoute = () => {}

export const Links = () => {}

export const BodyText =  ({children}:Readonly<{children: ReactNode}>) => {
  return <p>{children}</p>
}

export const Caption = ({children}:Readonly<{children: ReactNode}>) => {
  return <p className="text-xl">{children}</p>
}

export const List = () => {}

export const SmallText = () => {}
