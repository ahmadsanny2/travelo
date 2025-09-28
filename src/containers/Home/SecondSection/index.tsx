import Container from 'components/Container'
import PromoCarousel from './PromoCarousel'

import styles from './SecondSection.module.css'

import 'react-multi-carousel/lib/styles.css'
import Packages from './Packages'
import Categories from './Categories'

const SecondSection = () => {
    return (
        <section className={styles.section}>
            <Container>
                <PromoCarousel />
                <Packages />
                <Categories />
            </Container>
        </section>
    )
}

export default SecondSection