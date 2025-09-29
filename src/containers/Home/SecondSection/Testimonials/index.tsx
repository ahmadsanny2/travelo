import TestimonialCard from "./TestimonialCard"

const Testimonials = () => {
    return (
        <>
            <h3 className="text-heading font-label font-bold pt-14 mb-1">
                Testimonials Pelanggan
            </h3>
            <p className="text-heading-4 mb-4">Pendapat pelanggan tentang kami</p>

            <div className="grid lg:grid-cols-3 gap-10 justify-between">
                {Array.from({ length: 4 }).map((_, index) => {
                    return (
                        <TestimonialCard key={index}/>
                    )
                })}
            </div>
        </>
    )
}

export default Testimonials