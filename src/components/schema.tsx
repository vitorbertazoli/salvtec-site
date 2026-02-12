export function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "SalvTec",
        description: "Soluções profissionais de climatização e ar condicionado",
        url: "https://salvtec.com.br",
        telephone: "+5519998362654",
        image: "https://salvtec.com.br/images/logo.png",
        address: {
            "@type": "PostalAddress",
            addressCountry: "BR",
            addressRegion: "SP",
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
                item: "https://salvtec.com.br",
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
