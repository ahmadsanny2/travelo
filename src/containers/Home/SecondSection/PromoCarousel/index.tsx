import Carousel from "react-multi-carousel"
import PromoCard from "./PromoCard"

const PromoCarousel = () => {
    return (
        <div className="px-5">
            <h3 className="text-heading-3 text-white font-label font-bold pt-14 mb-4">
                Promo Liburan
            </h3>

            <Carousel
                className="py-5"
                itemClass="mx-2"
                containerClass="carousel-container"
                arrows
                centerMode={false}
                draggable
                swipeable
                customRightArrow={
                    <button type="button" aria-label="Go to next slide" className="absolute z-50 right-0 opacity-50 hover:opacity-100">
                        <img src="assets/icons/right-arrow-rounded.svg"
                            alt=""
                            width="75"
                            height="75" />
                    </button>
                }
                customLeftArrow={
                    <button type="button" aria-label="Go to previous slide" className="absolute z-50 left-0 opacity-50 hover:opacity-100">
                        <img src="assets/icons/left-arrow-rounded.svg"
                            alt=""
                            width="75"
                            height="75" />
                    </button>
                }
                partialVisible
                responsive={{
                    desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 2,
                        partialVisibilityGutter: 100,
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 640 },
                        items: 1,
                        partialVisibilityGutter: 80,
                    },
                    mobile: {
                        breakpoint: { max: 640, min: 0 },
                        items: 1,
                        partialVisibilityGutter: 40,
                    },
                }}

            >
                <PromoCard />
                <PromoCard />
                <PromoCard />
                <PromoCard />
                <PromoCard />
                <PromoCard />
                <PromoCard />
            </Carousel>
        </div>
    )
}

export default PromoCarousel