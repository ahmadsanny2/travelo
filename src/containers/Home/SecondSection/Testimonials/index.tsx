import TestimonialCard from "./TestimonialCard"

const Testimonials = () => {
    return (
        <div className="px-5">
            <h3 className="mb-1 font-bold text-heading-3 font-label pt-14">
                Testimonials Pelanggan
            </h3>
            <p className="mb-4 text-heading-4">Pendapat pelanggan tentang kami</p>

            <div className="grid justify-between gap-10 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => {
                    return (
                        <TestimonialCard key={index}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Testimonials