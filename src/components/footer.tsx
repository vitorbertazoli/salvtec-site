export default function Footer() {
    return (
        <footer className="bg-primary-blue border-t border-gray-200 mt-20 text-white" id="contato">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">
                    {/* Brand */}
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold tracking-tight">
                            SalvTec
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Entre em contato para orçamentos e suporte técnico.
                        </p>
                        <a
                            href="/carreiras"
                            className="inline-block text-sm font-medium hover:text-black transition-colors underline"
                        >
                            Trabalhe Conosco
                        </a>
                    </div>

                    {/* Contact */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider">
                            Contato
                        </h4>
                        <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <a
                                    href="https://wa.me/5519996911984"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp da SalvTec"
                                    className="hover:text-black transition-colors"
                                >
                                    WhatsApp: (19) 99691-1984
                                </a>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <a
                                    href="https://www.instagram.com/salvteccampinas/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram da SalvTec"
                                    className="hover:text-black transition-colors"
                                >
                                    Instagram: @salvteccampinas
                                </a>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a
                                    href="mailto:contato@salvtec.com.br"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Email da SalvTec"
                                    className="hover:text-black transition-colors"
                                >
                                    Email: contato@salvtec.com.br
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="md:justify-self-end">
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 ">
                            Siga-nos
                        </h4>
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <a
                                href="https://wa.me/5519996911984"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Abrir WhatsApp"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 transition"
                            >
                                <img src="/images/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/salvteccampinas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Abrir Instagram"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-pink-500 hover:bg-pink-50 transition"
                            >
                                <img src="/images/instagram.png" alt="Instagram" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-xs md:text-sm text-center md:text-left">
                        <p>
                            © {new Date().getFullYear()} SalvTec - Soluções em Climatização. Todos os direitos reservados.
                        </p>
                        <p>
                            Desenvolvido por <a href="https://cre8ive.dev/" target="_blank" rel="noopener noreferrer" className="underline hover:text-rose-500">Cre8ive Devs</a>
                        </p>
                    </div>
                    <div className="text-xs">
                        <span className="hidden md:inline">R. Luís Birochi, 25 - Conj. Hab. Santana II, Sousas - Campinas - SP, 13105-744 •</span> Atendimento em Sousas - Campinas e Região
                    </div>
                </div>
            </div>
        </footer >
    );
}
