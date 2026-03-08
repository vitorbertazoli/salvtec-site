export function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "SalvTec",
        description: "Soluções profissionais de climatização e ar condicionado",
        url: "https://www.salvtec.com.br",
        telephone: "+5519996911984",
        image: "https://www.salvtec.com.br/images/logo.png",
        address: {
            "@type": "PostalAddress",
            streetAddress: "R. Luís Birochi, 25 - Conj. Hab. Santana II",
            addressLocality: "Campinas",
            addressCountry: "BR",
            addressRegion: "SP",
            postalCode: "13105-744",
        },
        areaServed: ["Residencial", "Comercial", "Industrial"],
        priceRange: "$$",
        knowsAbout: [
            "Climatização",
            "Ar Condicionado",
            "HVAC",
            "Instalação de Ar Condicionado",
            "Manutenção de Ar Condicionado",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function BreadcrumbSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.salvtec.com.br",
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
