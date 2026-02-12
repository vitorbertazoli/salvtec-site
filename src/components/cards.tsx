export default function Card() {
    return (
        <>
            <section className="relative z-20 mb-8 md:-mt-20" id="servicos">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-xl p-8 text-center">
                        <div className="text-blue-700 text-4xl mb-4">
                            ⚙️
                        </div>
                        <h3 className="font-semibold text-lg mb-2">
                            Projetos
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Desenvolvimento de projetos personalizados de climatização para residências, comércios e indústrias, garantindo eficiência e conforto.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-xl p-8 text-center">
                        <div className="text-blue-700 text-4xl mb-4">
                            🛠️
                        </div>
                        <h3 className="font-semibold text-lg mb-2">
                            Manutenção e Higienização
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Serviços de manutenção preventiva e corretiva, além de higienização de sistemas de climatização para garantir o funcionamento eficiente e a qualidade do ar.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-xl p-8 text-center">
                        <div className="text-blue-700 text-4xl mb-4">
                            🔧
                        </div>
                        <h3 className="font-semibold text-lg mb-2">
                            Instalação e Montagem
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Instalação e montagem de equipamentos de climatização, assegurando a correta operação e desempenho dos sistemas.
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}

