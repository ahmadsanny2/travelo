import Container from 'components/Container';
import Image from 'next/image';

import traveloLogo from "public/assets/travelo-logo-header.png"
import Nav from './Nav';
import Search from './Search';

const Header = () => {
    return (
        <header className="h-[85px] bg-white shadow-lg p-4">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <Image src={traveloLogo} width="182" height="48" alt="Travelo Logo" placeholder='blur' />
                        <Search />
                    </div>

                    <div className="flex">
                        <Nav />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header