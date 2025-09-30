import Container from 'components/Container';
import Image from 'next/image';

import traveloLogo from "public/assets/travelo-logo-header.png"
import Nav from './Nav';
import Search from './Search';
import Button from 'components/Button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="bg-white fixed top-0 w-full shadow-lg p-4 z-50">
            <Container>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">
                    <div className="flex max-lg:w-full justify-between items-center">
                        <Image src={traveloLogo} width="182" height="48" alt="Travelo Logo" placeholder='blur' />
                        <Search />
                        <Menu className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
                    </div>

                    <div className={`${menuOpen ? "flex flex-col" : "hidden"} lg:flex lg:flex-row gap-5`}>
                        <Nav />
                        <Button className='w-[190px]'>
                            Masuk
                        </Button>
                    </div>

                </div>
            </Container>
        </header>
    )
}

export default Header