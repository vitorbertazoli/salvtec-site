import Footer from './footer';
import Header from './header';

interface JobPosition {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  responsibilities?: string[];
  qualifications?: string[];
  differentials?: string[];
  whatWeOffer?: string[];
  salaryRange?: string;
}
export default function Carreiras() {
  const openPositions: JobPosition[] = [
    {
      id: 2,
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
      salaryRange: "R$1,800 a 2,300"
    }
  ];

  return (
    <>
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
          <div className="space-y-4 mb-12">
            {openPositions.length > 0 ? (
              openPositions.map((position) => (
                <div key={position.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-bold mb-2 sm:mb-0">{position.title}</h3>
                    <a href={`mailto:contato@salvtec.com.br?subject=Candidatura - ${position.title}`} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center">
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
                  <p className="text-gray-700 mb-2"><strong>Diferenciais:</strong>
                    <ul className="list-disc ml-6">
                      {position.differentials?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </p>
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