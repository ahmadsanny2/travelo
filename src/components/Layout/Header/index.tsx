import Image from 'next/image';

import traveloLogo from "public/assets/travelo-logo-header.png"

const Header = () => {
    return (
        <header className="h-[85px] bg-white shadow-lg p-4">
            <div className="flex justify-between items-center">
                <Image src={traveloLogo} width="182" height="48" alt="Travelo Logo" placeholder='blur' />
            </div>
        </header>
    )
}

export default Header