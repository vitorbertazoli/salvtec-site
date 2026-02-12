export default function About() {
    return (
        <>
            <section className="max-w-6xl mx-auto px-6 pb-16" id="sobre">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* <div className="w-full md:w-1/3 flex-shrink-0">
                        <img
                            src="/images/ac2.jpg"
                            alt="Equipe SalvTec"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div> */}
                    <div className="w-full">
                        <h2 className="text-xl sm:text-2xl font-bold mb-6">Sobre Nós</h2>
                        <p className="text-gray-700 mb-4">
                            A SalvTec é uma empresa especializada em soluções de climatização para residências, comércios e indústrias. Com 6 anos de experiência no mercado, oferecemos serviços de alta qualidade que garantem conforto e eficiência energética.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Nossa equipe é composta por profissionais qualificados e dedicados, prontos para atender às necessidades específicas de cada cliente. Trabalhamos com as melhores marcas e tecnologias do mercado para garantir a satisfação total dos nossos clientes.
                        </p>
                        <p className="text-gray-700">
                            Na SalvTec, acreditamos que um ambiente climatizado é essencial para o bem-estar e a produtividade. Por isso, estamos comprometidos em oferecer soluções personalizadas que atendam às expectativas dos nossos clientes, sempre com foco na qualidade, eficiência e sustentabilidade.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}