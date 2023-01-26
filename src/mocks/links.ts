const linksTenantHelp = [
  {
    number: 1,
    title: 'Área do cliente',
    route: 'faq01r1',
    namePath: 'Area_do_Cliente',
  },
  {
    number: 2,
    title: 'Aplicativo',
    route: 'faq01r2',
    namePath: 'Aplicativo',
  },
  {
    number: 3,
    title: 'Contas de consumo',
    route: 'faq01r3',
    namePath: 'Contas_de_consumo',
  },
  {
    number: 4,
    title: 'Pagamentos',
    route: 'faq01r4',
    namePath: 'Pagamentos',
  },
  {
    number: 5,
    title: 'Manutenção e reparos',
    route: 'faq01r5',
    namePath: 'Manutencao_e_reparos',
  },
  {
    number: 6,
    title: 'Rescisão',
    route: 'faq01r6',
    namePath: 'Rescisao',
  },
];

const landlordHelp = [
  {
    number: 1,
    title: 'Área do cliente',
    route: 'faq01r7',
    namePath: 'Area_do_cliente',
  },
  {
    number: 2,
    title: 'Aplicativo',
    route: 'faq01r8',
    namePath: 'Aplicativo',
  },
];

const about = [
  {
    number: 1,
    title: 'Quem somos',
    route: 'faq01r9',
    namePath: 'Quem_somos',
  },
  {
    number: 2,
    title: 'Contato',
    route: 'faq01r10',
    namePath: 'Contato',
  },
  {
    number: 3,
    title: 'Indicação de imóveis',
    route: 'faq01r11',
    namePath: 'Indicacao_de_imoveis',
  },
  {
    number: 4,
    title: 'Antecipação de aluguel',
    route: 'faq01r12',
    namePath: 'Antecipacao_de_aluguel',
  },
];

const routes = [
  '/Central_de_Ajuda/Area_do_Cliente',
  '/Central_de_Ajuda/Aplicativo',
  '/Central_de_Ajuda/Contas_de_consumo',
  '/Central_de_Ajuda/Pagamentos',
  '/Central_de_Ajuda/Manutencao_e_reparos',
  '/Central_de_Ajuda/Rescisao',
  '/Central_de_Ajuda/Area_do_cliente',
  '/Central_de_Ajuda/Aplicativo',
  '/Central_de_Ajuda/Quem_somos',
  '/Central_de_Ajuda/Contato',
  '/Central_de_Ajuda/Indicacao_de_imoveis',
  '/Central_de_Ajuda/Antecipacao_de_aluguel',
];

const nameRoutes = {
  Central_de_Ajuda: 'Central de Ajuda',
  Aplicativo: 'Aplicativo',
  Area_do_Cliente: 'Área do Cliente',
  Contas_de_consumo: 'Contas de Consumo',
  Pagamentos: 'Pagamentos',
  Manutencao_e_reparos: 'Manutenção e Reparos',
  Rescisao: 'Rescisão',
  Quem_somos: 'Quem Somos',
  Contato: 'Contato',
  Indicacao_de_imoveis: 'Indicação de Imoveis',
  Antecipacao_de_aluguel: 'Antecipação de Aluguel',
};

const faq02 = [
  {
    route: 'faq01r1',
    namePath: 'AREA_DO_CLIENTE',
    title: 'ÁREA DO CLIENTE',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Seja bem-vindo a mais um canal de comunicação da Rotina com você.</p><p>A Área do Cliente e o APP Rotina Imobiliária são espaços de autoatendimento desenvolvidos pensando em disponibilizar, de forma prática e segura, as principais ferramentas de gestão do seu contrato de locação. Tudo isso a um clique de distância!</p><p>No conteúdo abaixo você vai encontrar o passo a passo para usar nossos canais de serviço online.</p><p>Rotina imobiliária, conectada com você, toda hora, em qualquer lugar.</p>',
    links: [
      {
        title: 'Como realizo meu primeiro acesso?',
        route: 'faq03r1',
      },
      {
        title: 'Quais são as funcionalidades da área do cliente?',
        route: 'faq03r2',
      },
      {
        title: 'Como redefino minha senha?',
        route: 'faq03r3',
      },
    ],
  },
  {
    route: 'faq01r2',
    namePath: 'APLICATIVO',
    title: 'APLICATIVO',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Seja bem-vindo a mais um canal de comunicação da Rotina com você. A Área do Cliente e o APP Rotina Imobiliária são espaços de autoatendimento desenvolvidos pensando em disponibilizar, de forma prática e segura, as principais ferramentas de gestão do seu contrato de locação. Tudo isso a um clique de distância!</p><p>No conteúdo abaixo você vai encontrar o passo a passo para usar nossos canais de serviço online.</p><p>Rotina imobiliária, conectada com você, toda hora, em qualquer lugar.</p>',
    links: [
      {
        title: 'Como realizo meu primeiro acesso?',
        route: 'faq03r4',
      },
      {
        title: 'Quais são as funcionalidades do aplicativo?',
        route: 'faq03r5',
      },
      {
        title: 'Como redefino minha senha?',
        route: 'faq03r6',
      },
    ],
  },
  {
    route: 'faq01r3',
    namePath: 'CONTAS_DE_CONSUMO',
    title: 'CONTAS DE CONSUMO',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Organizei esse material com todas as informações sobre as contas de consumo previstas no seu contrato de locação.</p><p>Aqui tem uma relação das principais taxas e despesas previstas:</p>',
    links: [
      {
        title: 'IPTU',
        route: 'faq03r7',
      },
      {
        title: 'Energia elétrica',
        route: 'faq03r8',
      },
      {
        title: 'Água',
        route: 'faq03r9',
      },
      {
        title: 'Taxa de lixo',
        route: 'faq03r10',
      },
      {
        title: 'Seguro incêndio',
        route: 'faq03r11',
      },
      {
        title: 'Despesas de condomínio',
        route: 'faq03r12',
      },
    ],
  },
  {
    route: 'faq01r4',
    namePath: 'PAGAMENTOS',
    title: 'PAGAMENTOS',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Preparei um material com todas as orientações que você precisa saber sobre pagamentos do contrato de locação.</p>',
    links: [
      {
        title: 'Como tenho acesso ao boleto de aluguel?',
        route: 'faq03r13',
      },
      {
        title: 'O que eu pago?',
        route: 'faq03r14',
      },
      {
        title: 'Como eu pago?',
        route: 'faq03r15',
      },
      {
        title: 'Não recebi o boleto, o que devo fazer?',
        route: 'faq03r16',
      },
      {
        title: 'Meu boleto de aluguel venceu, o que eu faço?',
        route: 'faq03r17',
      },
      {
        title: 'Posso mudar a data de vencimento do aluguel?',
        route: 'faq03r18',
      },
      {
        title: 'Como regularizo pendências financeiras?',
        route: 'faq03r19',
      },
      {
        title: 'Qual a responsabilidade do fiador no contrato de locação?',
        route: 'faq03r20',
      },
      {
        title: 'Como é feito o reajuste do aluguel e com qual periodicidade?',
        route: 'faq03r21',
      },
    ],
  },
  {
    route: 'faq01r5',
    namePath: 'MANUTENÇÃO_E_REPAROS',
    title: 'MANUTENÇÃO E REPAROS',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Aqui você vai encontrar informações importantes sobre manutenção e reparos que podem ser necessários no imóvel. Tenho certeza que depois que conferir as orientações dessa página, será mais simples realizar a manutenção do imóvel.</p>',
    links: [
      {
        title: 'Política de responsabilidade de manutenção e reparos.',
        route: 'faq03r22',
      },
      {
        title: 'Como solicitar manutenção e reparos?',
        route: 'faq03r23',
      },
      {
        title: 'Fiz a solicitação de reparos (ticket), e agora?',
        route: 'faq03r24',
      },
      {
        title: 'O que preciso saber sobre benfeitorias no imóvel?',
        route: 'faq03r25',
      },
    ],
  },
  {
    route: 'faq01r6',
    namePath: 'RESCISAO',
    title: 'RESCISÃO',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Preparei um material com todas as orientações que você precisa para entender o processo de rescisão do contrato de locação do imóvel.</p>',
    links: [
      {
        title: 'Passo a passo para rescisão do contrato de locação.',
        route: 'faq03r26',
      },
      {
        title: 'O que é aviso de desocupação?',
        route: 'faq03r27',
      },
      {
        title: 'Como enviar o aviso de desocupação?',
        route: 'faq03r28',
      },
      {
        title:
          'O que acontece se o locatário (inquilino) enviar o aviso de desocupação e não desocupar o imóvel?',
        route: 'faq03r29',
      },
      {
        title: 'Como agendar a entrega das chaves?',
        route: 'faq03r30',
      },
      {
        title:
          'Como é feita a cobrança do aluguel durante o período de reparos no imóvel?',
        route: 'faq03r31',
      },
      {
        title: 'O que acontece se os reparos não forem realizados?',
        route: 'faq03r32',
      },
      {
        title:
          'Quando o locatário (inquilino) pode rescindir o contrato de locação?',
        route: 'faq03r33',
      },
      {
        title:
          'De acordo com o contrato de locação, quando há inserção de multa rescisória?',
        route: 'faq03r34',
      },
      {
        title: 'Qual a forma de pagamento dos débitos da rescisão?',
        route: 'faq03r35',
      },
      {
        title: 'Como é calculada a multa rescisória do contrato de locação?',
        route: 'faq03r36',
      },
      {
        title:
          'Como são feitos os cálculos das contas de consumo (IPTU, contas de luz, água e esgoto, taxas de lixo) na rescisão?',
        route: 'faq03r37',
      },
      {
        title:
          'O que acontece se alguma fatura de contas de consumo ficar pendente após a finalização do contrato de locação?',
        route: 'faq03r38',
      },
      {
        title: 'Como agendar a vistoria final?',
        route: 'faq03r39',
      },
      {
        title: 'Como funciona a vistoria final da Rotina Imobiliária?',
        route: 'faq03r40',
      },
      {
        title:
          'O locatário (inquilino) pode ser representado por terceiros no momento da vistoria final?',
        route: 'faq03r41',
      },
      {
        title:
          'O que acontece se o locatário (inquilino) não comparecer na vistoria final?',
        route: 'faq03r42',
      },
      {
        title:
          'O que acontece se o imóvel não estiver desocupado no momento da vistoria?',
        route: 'faq03r43',
      },
    ],
  },
  {
    route: 'faq01r7',
    namePath: 'AREA_DO_CLIENTE',
    title: 'ÁREA DO CLIENTE',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Seja bem-vindo a mais um canal de comunicação da Rotina com você. A Área do Cliente e o APP Rotina Imobiliária são espaços de autoatendimento desenvolvidos pensando em disponibilizar, de forma prática e segura, as principais ferramentas de gestão do seu contrato de locação. Tudo isso a um clique de distância!</p><p>No conteúdo abaixo você vai encontrar o passo a passo para usar nossos canais de serviço online.</p><p>Rotina imobiliária, conectada com você, toda hora, em qualquer lugar.</p>',
    links: [
      {
        title: 'Como realizo meu primeiro acesso?',
        route: 'faq03r44',
      },
      {
        title: 'Quais são as funcionalidades da área do cliente?',
        route: 'faq03r45',
      },
      {
        title: 'Como redefino minha senha?',
        route: 'faq03r46',
      },
    ],
  },
  {
    route: 'faq01r8',
    namePath: 'APLICATIVO',
    title: 'APLICATIVO',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Seja bem-vindo a mais um canal de comunicação da Rotina com você. A Área do Cliente e o APP Rotina Imobiliária são espaços de autoatendimento desenvolvidos pensando em disponibilizar, de forma prática e segura, as principais ferramentas de gestão do seu contrato de locação. Tudo isso a um clique de distância!</p><p>No conteúdo abaixo você vai encontrar o passo a passo para usar nossos canais de serviço online.</p><p>Rotina imobiliária, conectada com você, toda hora, em qualquer lugar.</p>',
    links: [
      {
        title: 'Como realizo meu primeiro acesso?',
        route: 'faq03r47',
      },
      {
        title: 'Quais são as funcionalidades do aplicativo?',
        route: 'faq03r48',
      },
      {
        title: 'Como redefino minha senha?',
        route: 'faq03r49',
      },
    ],
  },
  {
    route: 'faq01r9',
    namePath: 'SOBRE_A_ROTINA',
    title: 'SOBRE A ROTINA',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Preparei um material com todas as informações que você precisa saber sobre a história da Rotina Imobiliária. Acompanhe:</p>',
    links: [
      {
        title: 'Um pouco sobre a Rotina Imobiliária.',
        route: 'faq03r50',
      },
      {
        title: 'Conheça o Grupo VIBRO.',
        route: 'faq03r51',
      },
    ],
  },
  {
    route: 'faq01r10',
    namePath: 'CONTATO',
    title: 'CONTATO',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Preparei um material com todas as orientações que você precisa saber sobre atendimento e contato.</p><p>Temos uma equipe robusta e focada em oferecer um atendimento personalizado, garantindo a melhor experiência ao cliente. Veja:</p>',
    links: [
      {
        title: 'Como entro em contato com a Rotina?',
        route: 'faq03r52',
      },
      {
        title: 'A Rotina tem redes sociais?',
        route: 'faq03r53',
      },
      {
        title: 'Quais são e onde ficam as sedes da Rotina?',
        route: 'faq03r54',
      },
    ],
  },
  {
    route: 'faq01r11',
    namePath: 'INDICAÇÃO_DE_IMÓVEIS',
    title: 'INDICAÇÃO DE IMÓVEIS',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Preparei um material com todas as orientações que você precisa saber sobre Indicação de Imóveis! Veja abaixo:</p><h2>Como funciona o programa “Indiquei você”?</h2><p>O Indiquei Você é um programa de indicação da Rotina Imobiliária. A cada indicação que você fizer de um imóvel residencial ou comercial, você pode ganhar até R$60,00. Demais né? Lembrando que para ganhar, o imóvel precisa converter em captação.</p><p>É rápido e sem burocracia! Após indicar o imóvel e ele ser captado, você ganha na hora! Direto na sua conta! Sem letrinhas miúdas e complicações.</p><p>Você pode fazer a indicação de duas formas: Acessar o APP da Rotina Imobiliária, através do nosso site, preencher a indicação com os dados de contato do proprietário e o endereço completo do imóvel.</p><p>Ou, você pode também compartilhar um link via redes sociais e WhatsApp. O link você encontra também no App da Rotina Imobiliária e assim que o proprietário cadastrar o imóvel utilizando seu link e for publicado, você já pode ganhar!</p>',
    links: [
      {
        title: 'Quais são os meus ganhos por indicação?',
        route: 'faq03r55',
      },
      {
        title: 'Como acompanho minhas indicações e meus ganhos?',
        route: 'faq03r56',
      },
    ],
  },
  {
    route: 'faq01r12',
    namePath: 'ANTECIPAÇÃO_DE_ALUGUEL',
    title: 'ANTECIPAÇÃO DE ALUGUEL',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Preparei um material com todas as orientações que você precisa saber sobre a antecipação de aluguel. Confira!</p>',
    links: [
      {
        title: 'Como funciona o programa “Antecipe seu aluguel”?',
        route: 'faq03r57',
      },
      {
        title: 'A antecipação de aluguel é um empréstimo?',
        route: 'faq03r58',
      },
      {
        title: 'Tenho vários imóveis, posso antecipar mais de um contrato?',
        route: 'faq03r59',
      },
      {
        title:
          'É necessário alienar meu imóvel para realização a antecipação de aluguel?',
        route: 'faq03r60',
      },
    ],
  },
];

const faq03 = [
  {
    route: 'faq03r1',
    content: {
      title: '',
      img: '',
      text: '',
    },
  },
  {
    route: 'faq03r2',
    content: {
      title: '',
      img: '',
      text: '',
    },
  },
];

export {
  linksTenantHelp,
  landlordHelp,
  about,
  faq02,
  faq03,
  routes,
  nameRoutes,
};
