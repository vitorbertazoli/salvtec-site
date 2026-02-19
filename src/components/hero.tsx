declare global {
    function gtag(...args: any[]): void;
}

export default function Hero() {
    const handleWhatsAppClick = () => {
        gtag('event', 'conversion', { 'send_to': 'AW-17940909501/iUWUCOWBq_YbEL2b8upC' });
    };

    return (
        <>
            <>
                <div className="relative heroImage">

                    {/* Dark overlay to make background opaque */}
                    <div className="absolute inset-0 bg-black/50 z-0" />

                    {/* Content */}
                    <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center text-white">

                        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight">
                            Soluções em Climatização
                        </h1>

                        <p className="mt-4 text-sm sm:text-base md:text-lg">
                            Especializada em instalação e manutenção de ar condicionado para residências, comércios e indústrias. Empresa com mais de 6 anos de experiência no mercado.
                        </p>

                        <button className="mt-6 bg-primary-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium max-w-65">
                            <a
                                href="https://wa.me/5519996911984"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleWhatsAppClick}
                                className="flex items-center justify-center gap-2"
                            >
                                <img
                                    src="/images/whatsapp.png"
                                    alt="Contato WhatsApp SalvTec"
                                    className="w-5 h-5"
                                />
                                <span>Solicite um Orçamento</span>
                            </a>
                        </button>
                    </div>
                </div>
            </>

        </>
    )
}