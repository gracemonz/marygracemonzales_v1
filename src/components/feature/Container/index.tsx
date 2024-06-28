import { ReactElement } from "react"

interface ContainerProps {
  children: ReactElement
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className="w-full h-screen text-white-base bg-twilight">
        {children}
    </div>
  )
}

export default Container
