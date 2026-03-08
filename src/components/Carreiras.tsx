import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

interface JobPosition {
  id: number;
  slug: string;
  title: string;
  location: string;
  type: string;
  description: string;
  responsibilities?: string[];
  qualifications?: string[];
  differentials?: string[];
  whatWeOffer?: string[];
  salaryRange?: string;
  salaryMin?: number;
  salaryMax?: number;
  datePosted?: string;
  validThrough?: string;
}

const DEFAULT_SITE_SEO = {
  title: 'SalvTec - Manutenção de Ar Condicionado em Campinas',
  description:
    'SalvTec oferece instalação, manutenção e higienização de ar condicionado em Sousas, Campinas e região. Atendemos residências, comércios e indústrias com marcas Hitachi e Gree. 6 anos de experiência.',
  canonical: 'https://www.salvtec.com.br',
  ogTitle: 'SalvTec - Manutenção de Ar Condicionado em Campinas',
  ogDescription:
    'Instalação, manutenção e higienização de ar condicionado em Sousas, Campinas e Região. Atendemos residências, comércios e indústrias com as melhores marcas do mercado.',
  ogUrl: 'https://www.salvtec.com.br'
};

const COMPANY_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'R. Luís Birochi, 25 - Conj. Hab. Santana II',
  addressLocality: 'Campinas',
  addressRegion: 'SP',
  postalCode: '13105-744',
  addressCountry: 'BR'
};

const upsertMetaTag = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      if (key !== 'content') {
        element?.setAttribute(key, value);
      }
    });
    document.head.appendChild(element);
  }

  element.setAttribute('content', attributes.content);
};

const upsertCanonical = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

const buildJobDescriptionHtml = (position: JobPosition) => {
  const buildList = (title: string, items?: string[]) => {
    if (!items || items.length === 0) {
      return '';
    }

    const listItems = items.map((item) => `<li>${item}</li>`).join('');
    return `<p><strong>${title}:</strong></p><ul>${listItems}</ul>`;
  };

  return [
    `<p>${position.description}</p>`,
    buildList('Responsabilidades', position.responsibilities),
    buildList('Qualificações', position.qualifications),
    buildList('Diferenciais', position.differentials),
    buildList('O que oferecemos', position.whatWeOffer),
    position.salaryRange ? `<p><strong>Faixa Salarial:</strong> ${position.salaryRange}</p>` : ''
  ].join('');
};

export default function Carreiras() {
  const { jobSlug } = useParams<{ jobSlug?: string }>();
  const careersBaseUrl = 'https://www.salvtec.com.br/carreiras';

  const openPositions: JobPosition[] = [
    {
      id: 4,
      slug: 'auxiliar-administrativo',
      title: "Auxiliar Administrativo",
      location: "Campinas, SP",
      type: "Tempo Integral - CLT",
      description: "Estamos em busca de um(a) Auxiliar Administrativo(a) para apoiar as rotinas de atendimento, organização de agenda e suporte comercial. Procuramos um perfil comunicativo, organizado e com foco em bom atendimento ao cliente.",
      responsibilities: [
        "Atendimento ao cliente via e-mail, WhatsApp e telefone",
        "Agendamento de clientes",
        "Elaboração de orçamentos com o apoio de um técnico",
        "Realizar feedback pós-venda e pós-instalação",
        "Prospecção de clientes"
      ],
      qualifications: [
        "Ensino médio completo",
        "Boa comunicação verbal e escrita",
        "Experiência com atendimento ao cliente e rotinas administrativas",
        "Organização, gestão de prioridades e atenção aos detalhes",
        "Conhecimento básico em informática (e-mail, planilhas e ferramentas de mensagem)",
        "Perfil proativo, responsável e com boa postura profissional"
      ],
      differentials: [
        "Experiência com elaboração de orçamentos e propostas comerciais",
        "Cursos técnicos ou profissionalizantes em Administração/Atendimento"
      ],
      whatWeOffer: [
        "Possibilidade de trabalho remoto para esta vaga",
        "Vale-transporte",
        "Vale-refeição",
        "Ambiente de trabalho colaborativo",
        "Oportunidade de aprendizado e crescimento profissional",
        "Regime de Contratação CLT"
      ],
      salaryRange: "R$1,621 a 2,000",
      salaryMin: 1621,
      salaryMax: 2000,
      datePosted: '2026-03-05',
      validThrough: '2026-12-31T23:59:59-03:00'
    },
    {
      id: 3,
      slug: 'tecnico-em-refrigeracao-nivel-i',
      title: "Técnico em Refrigeração nível I (CLT)",
      location: "Campinas, SP",
      type: "Tempo Integral - CLT",
      description: "Estamos em busca de um Técnico em Refrigeração – Nível I para atuar nas atividades de instalação, manutenção preventiva e corretiva de sistemas de climatização e refrigeração. Procuramos um profissional comprometido, com perfil técnico e interesse em crescimento profissional.",
      responsibilities: [
        "Realizar a instalação de aparelhos de ar-condicionado e sistemas de refrigeração",
        "Executar manutenções preventivas e corretivas nos equipamentos",
        "Zelar pela limpeza, organização das ferramentas e do local de trabalho",
        "Apoiar e treinar técnicos e auxiliares com menos tempo de experiência",
        "Cumprir normas de segurança, procedimentos internos e boas práticas da empresa"
      ],
      qualifications: [
        "Ensino médio completo",
        "Experiência mínima de 2 anos na área ou certificação por competência",
        "Disponibilidade para atuar na região de Campinas",
        "Residir preferencialmente na região de Sousas",
        "CNH válida para condução de veículo da empresa",
        "Perfil proativo, responsável, organizado e com vontade de crescer junto à empresa"
      ],
      differentials: [],
      whatWeOffer: [
        "Vale-transporte",
        "Vale-refeição",
        "Oportunidade de aprendizado e desenvolvimento profissional",
        "Ambiente de trabalho colaborativo e com possibilidade de crescimento",
        "Regime de Contratação CLT"
      ],
      salaryRange: "R$2,700 a 3,200 conforme experiência e qualificações",
      salaryMin: 2700,
      salaryMax: 3200,
      datePosted: '2026-03-05',
      validThrough: '2026-12-31T23:59:59-03:00'
    },
    {
      id: 2,
      slug: 'auxiliar-tecnico-em-refrigeracao',
      title: "Auxiliar Técnico em Refrigeração",
      location: "Campinas, SP",
      type: "Tempo Integral - CLT",
      description: "Estamos em busca de um Auxiliar Técnico em Refrigeração para atuar no apoio às atividades de instalação manutenção preventiva e corretiva de sistemas de climatização e refrigeração.",
      responsibilities: [
        "Auxiliar na instalação de aparelhos de ar-condicionado e sistemas de refrigeração",
        "Apoiar na manutenção preventiva e corretiva dos equipamentos",
        "Realizar limpeza e organização de ferramentas e local de trabalho",
        "Apoiar o técnico responsável em diagnósticos e reparos",
        "Cumprir normas de segurança e procedimentos da empresa"
      ],
      qualifications: [
        "Ensino médio completo",
        "Disponibilidade para trabalhar na região de Campinas",
        "Residir preferencialmente na região de Sousas",
        "Desejável experiência na área de refrigeração ou elétrica mas não é mandatório",
        "Conhecimento básico em ferramentas manuais",
        "Disponibilidade para trabalho externo",
        "Proatividade, responsabilidade e vontade de aprender"
      ],
      differentials: [
        "Curso técnico em refrigeração ou áreas correlatas"
      ],
      whatWeOffer: [
        "Vale-transporte",
        "Vale-refeição",
        "Oportunidade de aprendizado e crescimento profissional",
        "Ambiente de trabalho colaborativo",
        "Regime de Contratação CLT"
      ],
      salaryRange: "R$1,800 a 2,300",
      salaryMin: 1800,
      salaryMax: 2300,
      datePosted: '2026-03-05',
      validThrough: '2026-12-31T23:59:59-03:00'
    }
  ];

  const selectedPosition = jobSlug ? openPositions.find((position) => position.slug === jobSlug) : null;
  const jobNotFound = Boolean(jobSlug) && !selectedPosition;
  const positionsToRender = selectedPosition ? [selectedPosition] : openPositions;
  const pageUrl = selectedPosition ? `${careersBaseUrl}/${selectedPosition.slug}` : careersBaseUrl;

  const jobPostingSchemas = positionsToRender.map((position) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: position.title,
    description: buildJobDescriptionHtml(position),
    identifier: {
      '@type': 'PropertyValue',
      name: 'SalvTec',
      value: `SALVTEC-${position.id}`
    },
    datePosted: position.datePosted,
    validThrough: position.validThrough,
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'SalvTec',
      sameAs: 'https://www.salvtec.com.br',
      logo: 'https://www.salvtec.com.br/images/logo-salvtec-optimized.png'
    },
    jobLocation: {
      '@type': 'Place',
      address: COMPANY_ADDRESS
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'BRL',
      value: {
        '@type': 'QuantitativeValue',
        minValue: position.salaryMin,
        maxValue: position.salaryMax,
        unitText: 'MONTH'
      }
    },
    directApply: true,
    url: `${careersBaseUrl}/${position.slug}`
  }));

  useEffect(() => {
    const pageTitle = selectedPosition
      ? `${selectedPosition.title} | Carreiras SalvTec`
      : 'Vagas Abertas | Carreiras SalvTec';
    const pageDescription = selectedPosition
      ? `${selectedPosition.title} na SalvTec em ${selectedPosition.location}. Confira responsabilidades, qualificações, faixa salarial e como se candidatar.`
      : 'Confira as vagas abertas da SalvTec em Campinas e região. Veja responsabilidades, qualificações, faixa salarial e candidate-se.';

    document.title = pageTitle;
    upsertMetaTag('meta[name="description"]', { name: 'description', content: pageDescription });
    upsertMetaTag('meta[property="og:title"]', { property: 'og:title', content: pageTitle });
    upsertMetaTag('meta[property="og:description"]', { property: 'og:description', content: pageDescription });
    upsertMetaTag('meta[property="og:url"]', { property: 'og:url', content: pageUrl });
    upsertCanonical(pageUrl);

    return () => {
      document.title = DEFAULT_SITE_SEO.title;
      upsertMetaTag('meta[name="description"]', { name: 'description', content: DEFAULT_SITE_SEO.description });
      upsertMetaTag('meta[property="og:title"]', { property: 'og:title', content: DEFAULT_SITE_SEO.ogTitle });
      upsertMetaTag('meta[property="og:description"]', { property: 'og:description', content: DEFAULT_SITE_SEO.ogDescription });
      upsertMetaTag('meta[property="og:url"]', { property: 'og:url', content: DEFAULT_SITE_SEO.ogUrl });
      upsertCanonical(DEFAULT_SITE_SEO.canonical);
    };
  }, [pageUrl, selectedPosition]);

  return (
    <>
      {jobPostingSchemas.map((schema) => (
        <script
          key={schema.identifier.value}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-primary-blue">
          <div className="absolute inset-0" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Trabalhe Conosco</h1>
            <p className="text-xl sm:text-2xl max-w-2xl">
              Junte-se à nossa equipe e construa uma carreira de sucesso
            </p>
          </div>
        </section>

        {/* About Working Here */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Por que trabalhar na SalvTec?</h2>
              <p className="text-gray-700 mb-4">
                Na SalvTec, estamos sempre em busca de talentos apaixonados por climatização
                e comprometidos com a excelência no atendimento ao cliente.
              </p>
              <p className="text-gray-700">
                Oferecemos um ambiente de trabalho colaborativo, oportunidades de crescimento
                profissional e a chance de contribuir para soluções que fazem a diferença na
                vida das pessoas.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img
                src="/images/ac2.jpg"
                alt="Ar condicionado instalado pela equipe SalvTec"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: "💼", title: "Crescimento", text: "Oportunidades de desenvolvimento" },
              { icon: "🤝", title: "Colaboração", text: "Ambiente de trabalho cooperativo" },
              { icon: "💰", title: "Benefícios", text: "Pacote competitivo" },
              { icon: "🎯", title: "Inovação", text: "Trabalhe com tecnologia de ponta" }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.text}</p>
              </div>
            ))}
          </div>

          {/* Open Positions */}
          <h2 className="text-3xl font-bold mb-8">Vagas Abertas</h2>
          {selectedPosition && (
            <div className="mb-6">
              <Link to="/carreiras" className="text-blue-700 hover:text-blue-800 hover:underline">
                ← Ver todas as vagas
              </Link>
            </div>
          )}
          <div className="space-y-4 mb-12">
            {jobNotFound ? (
              <div className="bg-white p-8 rounded-lg shadow-md text-center text-gray-600">
                <p className="text-lg mb-2">Vaga não encontrada.</p>
                <Link to="/carreiras" className="text-blue-700 hover:text-blue-800 hover:underline">
                  Voltar para vagas abertas
                </Link>
              </div>
            ) : positionsToRender.length > 0 ? (
              positionsToRender.map((position) => (
                <div key={position.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-bold mb-2 sm:mb-0">
                      {selectedPosition ? (
                        position.title
                      ) : (
                        <Link to={`/carreiras/${position.slug}`} className="hover:text-blue-700 hover:underline">
                          {position.title}
                        </Link>
                      )}
                    </h3>
                    <a href={`mailto:contato@salvtec.com.br?subject=${encodeURIComponent(`Candidatura - ${position.title}`)}`} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center">
                      Candidatar-se
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <span>📍 {position.location}</span>
                    <span>⏰ {position.type}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{position.description}</p>
                  <p className="text-gray-700 mb-2"><strong>Faixa Salarial:</strong> {position.salaryRange}</p>
                  <p className="text-gray-700 mb-2"><strong>Responsabilidades:</strong>
                    <ul className="list-disc ml-6">
                      {position.responsibilities?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </p>
                  <p className="text-gray-700 mb-2"><strong>Qualificações:</strong>
                    <ul className="list-disc ml-6">
                      {position.qualifications?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </p>
                  {position.differentials && position.differentials.length > 0 && (
                    <p className="text-gray-700 mb-2"><strong>Diferenciais:</strong>
                      <ul className="list-disc ml-6">
                        {position.differentials.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </p>
                  )}
                  <p className="text-gray-700 mb-2"><strong>O que oferecemos:</strong>
                    <ul className="list-disc ml-6">
                      {position.whatWeOffer?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              ))
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center text-gray-600">
                <p className="text-lg">No momento não temos vagas disponíveis.</p>
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Não encontrou a vaga ideal?</h3>
            <p className="text-gray-700 mb-6">
              Envie seu currículo para nosso banco de talentos e entraremos em contato quando surgir uma oportunidade.
            </p>
            <a href="mailto:contato@salvtec.com.br" className="inline-block bg-primary-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Enviar Currículo
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}