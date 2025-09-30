import Link from 'next/link';

type Props = {
    label: string,
    href: string
}

const NavItem = ({ label, href = "/" }: Props) => {
    return (
        <Link href={href}>
            <a className="hover:bg-blue-100 hover:text-white p-2 text-heading-4 text-gray-70 font-label font-bold rounded">
                {label}
            </a>
        </Link>
    )
}

export default NavItem