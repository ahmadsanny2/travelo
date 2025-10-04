import Link from 'next/link';
import NavItem from '../NavItem';

const Nav = () => {
    return (
        <nav className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
            <NavItem
                label="Beranda"
                href="/"
            />
            <NavItem
                label="Kontak"
                href="/"
            />
            <NavItem
                label="Paket"
                href="#package"
            />
            <NavItem
                label="Testimonials"
                href="/"
            />
        </nav>
    )
}

export default Nav