import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <header></header>
            {children}
            <footer></footer>
        </>
    )
}

export default Layout