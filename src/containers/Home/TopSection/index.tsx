import Container from 'components/Container'
import styles from './TopSection.module.css'
import Button from 'components/Button'
import InfoItem from './InfoItem'

const TopSection = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div className="flex flex-col pt-[112px] pb-[58px] px-5">
                    <div className="flex flex-col mb-[174px]">
                        <h1 className="text-heading-2 font-bold font-label text-gray-100 mb-8 lg:w-1/2">
                            Jelajahi Dunia Yang Indah Dengan Satu Sentuhan
                        </h1>

                        <p className="text-heading-3 text-gray-70 lg:w-1/2 mb-7">
                            Jelajahi dunia yang indah dengan satu sentuhan dengan pesan tiket di Travelo kamu akan dapatkan pelayanan terbaik untuk wisata liburanmu kemana saja dan kapan saja.
                        </p>

                        <Button>
                            Lihat Paket
                        </Button>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 mx-auto">
                        <InfoItem
                            label='+30'
                            subLabel='Negara'
                        />
                        <InfoItem
                            label='+1.500'
                            subLabel='Penginapan'
                        />
                        <InfoItem
                            label='+100'
                            subLabel='Tempat Wisata'
                        />
                        <InfoItem
                            label='+50.000'
                            subLabel='Pelanggan'
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default TopSection