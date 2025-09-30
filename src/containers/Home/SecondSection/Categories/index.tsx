import CategoryCard from "./CategoryCard"

const Categories = () => {
    return (
        <div className="px-5">
            <h3 className="text-heading-3 text-gray-100 font-label font-bold pt-14 mb-8">
                Kategori Tempat
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 lg:gap-10 justify-between">
                {Array.from({ length: 6 }).map((_, index) => (
                    <CategoryCard key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Categories