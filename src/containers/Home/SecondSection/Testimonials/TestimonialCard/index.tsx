import Image from "next/image"
import Rating from "./Rating"

const TestimonialCard = () => {
    return (
        <article className="flex flex-col p-4 bg-white shadow rounded-xl">
            <div className="flex mb-4">
                <figure className="relative w-16 h-16 mr-3 overflow-hidden rounded-full">
                    <Image
                        src="/assets/home/profile.png"
                        alt="Profile"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </figure>

                <div className="flex flex-col">
                    <p className="mb-1 font-bold text-gray-100 text-heading-4 font-label">John Doe</p>
                    <p className="font-bold text-heading-5 text-gray-50">Bandung Barat, Jawa Barat</p>
                </div>
            </div>

            <Rating />

            <p className="my-4 text-heading-5 text-gray-70">Nyari makanan halal gampang banget udah ada tour guidenya. Tour guidenya juga ramah enak diajak ngobrol, dan penginapannya pun nyaman</p>

            <p className="font-bold text-gray-100 text-heading-5">Nusa Panida, Bali</p>
            <p className="text-heading-6 text-gray-50">17-10-2020</p>
        </article>
    )
}

export default TestimonialCard