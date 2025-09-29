import { ReactNode } from "react"

type Props = {
    children: ReactNode
    size?: string
}

const Container = ({ children }: Props) => {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    )
}

export default Container