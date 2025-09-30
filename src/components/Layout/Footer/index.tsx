import Container from "components/Container"
import styles from "./Footer.module.css"
import Image from 'next/image';
import traveloLogo from 'public/assets/travelo-logo-header.png';
import FooterInfo from "./FooterInfo";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container size="lg">
                <div className="flex flex-col lg:flex-row justify-center bg-white px-5 py-10 gap-20">
                    <figure>
                        <Image src={traveloLogo} alt="Travelo Logo" placeholder="blur" height="98" width="136" />
                    </figure>

                    <div className="grid lg:grid-cols-3 justify-between">
                        <FooterInfo
                            title="Info"
                            content={[
                                {
                                    label: 'Tentang Kami',
                                    href: '/'
                                },
                                {
                                    label: 'Testimonials',
                                    href: '/'
                                },
                                {
                                    label: 'Kontak',
                                    href: '/'
                                }
                            ]}
                        />
                        <FooterInfo
                            title="Perusahaan"
                            content={[
                                {
                                    label: 'Syarat dan Ketentuan',
                                    href: '/'
                                },
                                {
                                    label: 'Kebijakan Privasi',
                                    href: '/'
                                },
                                {
                                    label: 'Blog',
                                    href: '/'
                                },
                                {
                                    label: 'Bantuan Pelayanan',
                                    href: '/'
                                }
                            ]}
                        />

                        <FooterInfo
                            title="Info"
                            content={[
                                'Bandung Barat, Jawa Barat, Indonesia',
                                '0813-xxxx-xxxx',
                                'travelo@gmail.com'
                            ]}
                        />
                    </div>
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