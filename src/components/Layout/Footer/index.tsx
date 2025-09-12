import Container from "components/Container"
import styles from "./Footer.module.css"
import Image from 'next/image';
import traveloLogo from 'public/assets/travelo-logo-header.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container size="lg">
                <div className="flex bg-white p-16">
                    <figure>
                        <Image src={traveloLogo} alt="Travelo Logo" placeholder="blur" height="98" width="136" />
                    </figure>
                </div>
            </Container>

            <div className="bg-blue-100 p-3">
                <div className="text-heading-5 text-white font-bold text-center">
                    &copy; Copyright 2025 SANS PEDIA. All Right Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer