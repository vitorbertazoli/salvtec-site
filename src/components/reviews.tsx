export default function Reviews() {
    return (
        <>
            <section className="relative z-20 mb-20" id="reviews">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">O que nossos clientes dizem</h2>
                    <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-center items-center">
                        <figure className="bg-white shadow-lg rounded-xl overflow-hidden max-w-[280px]">
                            <img
                                src="/images/review1-optimized.webp"
                                alt="review 1 sobre a SalvTec"
                                className="w-full h-40 object-cover"
                            />
                        </figure>
                        <figure className="bg-white shadow-lg rounded-xl overflow-hidden max-w-[280px]">
                            <img
                                src="/images/review2-optimized.webp"
                                alt="review 2 sobre a SalvTec"
                                className="w-full h-40 object-cover"
                            />
                        </figure>
                        <figure className="bg-white shadow-lg rounded-xl overflow-hidden max-w-[280px]">
                            <img
                                src="/images/review3-optimized.webp"
                                alt="review 3 sobre a SalvTec"
                                className="w-full h-40 object-cover"
                            />
                        </figure>
                    </div>
                </div>
            </section >
        </>
    )
}