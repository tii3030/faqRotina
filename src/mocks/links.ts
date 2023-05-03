const linksTenantHelp = [
  {
    number: 1,
    title: 'Área do cliente e aplicativo',
    id: '/home/areadoclienteeaplicativo',
  },
  {
    number: 2,
    title: 'Contas de consumo',
    id: '/home/contasdeconsumo',
  },
  {
    number: 3,
    title: 'Pagamentos',
    id: '/home/pagamentos',
  },
  {
    number: 4,
    title: 'Manutenção e reparos',
    id: '/home/manutencaoereparos',
  },
  {
    number: 5,
    title: 'Rescisão',
    id: '/home/rescisao',
  },
];

const landlordHelp = [
  {
    number: 1,
    title: 'Área do cliente e aplicativo',
    id: '/home/areadoclienteeaplicativolocador',
  },
];

const about = [
  {
    number: 1,
    title: 'Quem somos',
    id: '/home/quemsomos',
  },
  {
    number: 2,
    title: 'Contato',
    id: '/home/contato',
  },
  {
    number: 3,
    title: 'Indicação de imóveis',
    id: '/home/indicacaodeimoveis',
  },
  {
    number: 4,
    title: 'Antecipação de aluguel',
    id: '/home/antecipacaodealuguel',
  },
];

const questions = [
  {
    id: '/home/areadoclienteeaplicativo/01',
    question: 'Como realizo meu primeiro acesso? (Área do Cliente - Inquilino)',
  },
  {
    id: '/home/areadoclienteeaplicativo/02',
    question: 'Quais são as funcionalidades da área do cliente? (Inquilino)',
  },
  {
    id: '/home/areadoclienteeaplicativo/03',
    question: 'Como redefino minha senha? (Área do Cliente - Inquilino)',
  },
  {
    id: '/home/areadoclienteeaplicativo/04',
    question: 'Como realizo meu primeiro acesso? (Aplicativo - Inquilino)',
  },
  {
    id: '/home/areadoclienteeaplicativo/05',
    question: 'Quais são as funcionalidades do aplicativo? (Inquilino)',
  },
  {
    id: '/home/areadoclienteeaplicativo/06',
    question: 'Como redefino minha senha? (Aplicativo - Inquilino)',
  },
  {
    id: '/home/contasdeconsumo/01',
    question: 'IPTU.',
  },
  {
    id: '/home/contasdeconsumo/02',
    question: 'Energia elétrica.',
  },
  {
    id: '/home/contasdeconsumo/03',
    question: 'Água.',
  },
  {
    id: '/home/contasdeconsumo/04',
    question: 'Taxa de lixo.',
  },
  {
    id: '/home/contasdeconsumo/05',
    question: 'Seguro incêndio.',
  },
  {
    id: '/home/contasdeconsumo/06',
    question: 'Despesas de condomínio.',
  },
  {
    id: '/home/pagamentos/01',
    question: 'Como tenho acesso ao boleto de aluguel?',
  },
  {
    id: '/home/pagamentos/02',
    question: 'O que eu pago?',
  },
  {
    id: '/home/pagamentos/03',
    question: 'Como eu pago?',
  },
  {
    id: '/home/pagamentos/04',
    question: 'Não recebi o boleto, o que devo fazer?',
  },
  {
    id: '/home/pagamentos/05',
    question: 'Meu boleto de aluguel venceu, o que eu faço?',
  },
  {
    id: '/home/pagamentos/06',
    question: 'Posso mudar a data de vencimento do aluguel?',
  },
  {
    id: '/home/pagamentos/07',
    question: 'Como regularizo pendências financeiras?',
  },
  {
    id: '/home/pagamentos/08',
    question: 'Qual a responsabilidade do fiador no contrato de locação?',
  },
  {
    id: '/home/pagamentos/09',
    question: 'Como é feito o reajuste do aluguel e com qual periodicidade?',
  },
  {
    id: '/home/manutencaoereparos/01',
    question: 'Política de responsabilidade de manutenção e reparos.',
  },
  {
    id: '/home/manutencaoereparos/02',
    question: 'Como solicitar manutenção e reparos?',
  },
  {
    id: '/home/manutencaoereparos/03',
    question: 'Fiz a solicitação de reparos (ticket), e agora?',
  },
  {
    id: '/home/manutencaoereparos/04',
    question: 'O que preciso saber sobre benfeitorias no imóvel?',
  },
  {
    id: '/home/rescisao/01',
    question: 'Passo a passo para rescisão do contrato de locação.',
  },
  {
    id: '/home/rescisao/02',
    question: 'O que é aviso de desocupação?',
  },
  {
    id: '/home/rescisao/03',
    question: 'Como enviar o aviso de desocupação?',
  },
  {
    id: '/home/rescisao/04',
    question:
      'O que acontece se o locatário (inquilino) enviar o aviso de desocupação e não desocupar o imóvel?',
  },
  {
    id: '/home/rescisao/05',
    question: 'Como agendar a entrega das chaves?',
  },
  {
    id: '/home/rescisao/06',
    question:
      'Como é feita a cobrança do aluguel durante o período de reparos no imóvel?',
  },
  {
    id: '/home/rescisao/07',
    question: 'O que acontece se os reparos não forem realizados?',
  },
  {
    id: '/home/rescisao/08',
    question:
      'Quando o locatário (inquilino) pode rescindir o contrato de locação?',
  },
  {
    id: '/home/rescisao/09',
    question:
      'De acordo com o contrato de locação, quando há inserção de multa rescisória?',
  },
  {
    id: '/home/rescisao/10',
    question: 'Qual a forma de pagamento dos débitos da rescisão?',
  },
  {
    id: '/home/rescisao/11',
    question: 'Como é calculada a multa rescisória do contrato de locação?',
  },
  {
    id: '/home/rescisao/12',
    question:
      'Como são feitos os cálculos das contas de consumo (IPTU, contas de luz, água e esgoto, taxas de lixo) na rescisão?',
  },
  {
    id: '/home/rescisao/13',
    question:
      'O que acontece se alguma fatura de contas de consumo ficar pendente após a finalização do contrato de locação?',
  },
  {
    id: '/home/rescisao/14',
    question: 'Como agendar a vistoria final?',
  },
  {
    id: '/home/rescisao/15',
    question: 'Como funciona a vistoria final da Rotina Imobiliária?',
  },
  {
    id: '/home/rescisao/16',
    question:
      'O locatário (inquilino) pode ser representado por terceiros no momento da vistoria final?',
  },
  {
    id: '/home/rescisao/17',
    question:
      'O que acontece se o locatário (inquilino) não comparecer na vistoria final?',
  },
  {
    id: '/home/rescisao/18',
    question:
      'O que acontece se o imóvel não estiver desocupado no momento da vistoria?',
  },
  {
    id: '/home/areadoclienteeaplicativolocador/01',
    question:
      'Como realizo meu primeiro acesso? (Área do Cliente - Proprietário)',
  },
  {
    id: '/home/areadoclienteeaplicativolocador/02',
    question: 'Quais são as funcionalidades da área do cliente? (Proprietário)',
  },
  {
    id: '/home/areadoclienteeaplicativolocador/03',
    question: 'Como redefino minha senha? (Área do Cliente - Proprietário)',
  },
  {
    id: '/home/areadoclienteeaplicativolocador/04',
    question: 'Como realizo meu primeiro acesso? (Aplicativo - Proprietário)',
  },
  {
    id: '/home/areadoclienteeaplicativolocador/05',
    question: 'Quais são as funcionalidades do aplicativo? (Proprietário)',
  },
  {
    id: '/home/areadoclienteeaplicativolocador/06',
    question: 'Como redefino minha senha? (Aplicativo - Proprietário)',
  },
  {
    id: '/home/quemsomos/01',
    question: 'Um pouco sobre a Rotina Imobiliária. ',
  },
  {
    id: '/home/quemsomos/02',
    question: 'Conheça o Grupo VIBRO.',
  },
  {
    id: '/home/contato/01',
    question: 'Como entro em contato com a Rotina?',
  },
  {
    id: '/home/contato/02',
    question: 'A Rotina tem redes sociais?',
  },
  {
    id: '/home/contato/03',
    question: 'Quais são e onde ficam as sedes da Rotina?',
  },
  {
    id: '/home/indicacaodeimoveis/01',
    question: 'Como funciona o programa “Indiquei você”?',
  },
  {
    id: '/home/indicacaodeimoveis/02',
    question: 'Quais são os meus ganhos por indicação?',
  },
  {
    id: '/home/indicacaodeimoveis/03',
    question: 'Como acompanho minhas indicações e meus ganhos?',
  },
  {
    id: '/home/antecipacaodealuguel/01',
    question: 'Como funciona o programa “Antecipe seu aluguel”?',
  },
  {
    id: '/home/antecipacaodealuguel/02',
    question: 'A antecipação de aluguel é um empréstimo?',
  },
  {
    id: '/home/antecipacaodealuguel/03',
    question: 'Tenho vários imóveis, posso antecipar mais de um contrato?',
  },
  {
    id: '/home/antecipacaodealuguel/04',
    question:
      'É necessário alienar meu imóvel para realização a antecipação de aluguel?',
  },
];

const topics = [
  {
    id: '/home/areadoclienteeaplicativo',
    title: 'Área do cliente e aplicativo',
    subTitle: `
      <p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Seja bem-vindo a mais um canal de comunicação da Rotina com você.</p>
      <br/>
      <p>A Área do Cliente e o APP Rotina Imobiliária são espaços de autoatendimento desenvolvidos pensando em disponibilizar, de forma prática e segura, as principais ferramentas de gestão do seu contrato de locação. Tudo isso a um clique de distância!</p>
      <br/>
      <p>No conteúdo abaixo você vai encontrar o passo a passo para usar nossos canais de serviço online.</p>
      <br/>
      <p>Rotina imobiliária, conectada com você, toda hora, em qualquer lugar.</p>`,
    links: [
      {
        titleLink: 'Área do cliente',
        subLinks: [
          {
            titleLink: 'Como realizo meu primeiro acesso?',
            route: '/home/areadoclienteeaplicativo/01',
          },
          {
            titleLink: 'Quais são as funcionalidades da área do cliente?',
            route: '/home/areadoclienteeaplicativo/02',
          },
          {
            titleLink: 'Como redefino minha senha?',
            route: '/home/areadoclienteeaplicativo/03',
          },
        ],
      },
      {
        titleLink: 'Aplicativo',
        subLinks: [
          {
            titleLink: 'Como realizo meu primeiro acesso?',
            route: '/home/areadoclienteeaplicativo/04',
          },
          {
            titleLink: 'Quais são as funcionalidades do aplicativo?',
            route: '/home/areadoclienteeaplicativo/05',
          },
          {
            titleLink: 'Como redefino minha senha?',
            route: '/home/areadoclienteeaplicativo/06',
          },
        ],
      },
    ],
  },
  {
    id: '/home/contasdeconsumo',
    title: 'Contas de Consumo',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Organizei esse material com todas as informações sobre as contas de consumo previstas no seu contrato de locação.</p><br/><p>Aqui tem uma relação das principais taxas e despesas previstas:</p>',
    links: [
      {
        titleLink: 'IPTU',
        route: '/home/contasdeconsumo/01',
      },
      {
        titleLink: 'Energia elétrica',
        route: '/home/contasdeconsumo/02',
      },
      {
        titleLink: 'Água',
        route: '/home/contasdeconsumo/03',
      },
      {
        titleLink: 'Taxa de lixo',
        route: '/home/contasdeconsumo/04',
      },
      {
        titleLink: 'Seguro incêndio',
        route: '/home/contasdeconsumo/05',
      },
      {
        titleLink: 'Despesas de condomínio',
        route: '/home/contasdeconsumo/06',
      },
    ],
  },
  {
    id: '/home/pagamentos',
    title: 'Pagamentos',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Preparei um material com todas as orientações que você precisa saber sobre pagamentos do contrato de locação.</p>',
    links: [
      {
        titleLink: 'Como tenho acesso ao boleto de aluguel?',
        route: '/home/pagamentos/01',
      },
      {
        titleLink: 'O que eu pago?',
        route: '/home/pagamentos/02',
      },
      {
        titleLink: 'Como eu pago?',
        route: '/home/pagamentos/03',
      },
      {
        titleLink: 'Não recebi o boleto, o que devo fazer?',
        route: '/home/pagamentos/04',
      },
      {
        titleLink: 'Meu boleto de aluguel venceu, o que eu faço?',
        route: '/home/pagamentos/05',
      },
      {
        titleLink: 'Posso mudar a data de vencimento do aluguel?',
        route: '/home/pagamentos/06',
      },
      {
        titleLink: 'Como regularizo pendências financeiras?',
        route: '/home/pagamentos/07',
      },
      {
        titleLink: 'Qual a responsabilidade do fiador no contrato de locação?',
        route: '/home/pagamentos/08',
      },
      {
        titleLink:
          'Como é feito o reajuste do aluguel e com qual periodicidade?',
        route: '/home/pagamentos/09',
      },
    ],
  },
  {
    id: '/home/manutencaoereparos',
    title: 'Manutenção e Reparos',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Aqui você vai encontrar informações importantes sobre manutenção e reparos que podem ser necessários no imóvel. Tenho certeza que depois que conferir as orientações dessa página, será mais simples realizar a manutenção do imóvel.</p>',
    links: [
      {
        titleLink: 'Política de responsabilidade de manutenção e reparos.',
        route: '/home/manutencaoereparos/01',
      },
      {
        titleLink: 'Como solicitar manutenção e reparos?',
        route: '/home/manutencaoereparos/02',
      },
      {
        titleLink: 'Fiz a solicitação de reparos (ticket), e agora?',
        route: '/home/manutencaoereparos/03',
      },
      {
        titleLink: 'O que preciso saber sobre benfeitorias no imóvel?',
        route: '/home/manutencaoereparos/04',
      },
    ],
  },
  {
    id: '/home/rescisao',
    title: 'Rescisão',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Preparei um material com todas as orientações que você precisa para entender o processo de rescisão do contrato de locação do imóvel.</p>',
    links: [
      {
        titleLink: 'Passo a passo para rescisão do contrato de locação.',
        route: '/home/rescisao/01',
      },
      {
        titleLink: 'O que é aviso de desocupação?',
        route: '/home/rescisao/02',
      },
      {
        titleLink: 'Como enviar o aviso de desocupação?',
        route: '/home/rescisao/03',
      },
      {
        titleLink:
          'O que acontece se o locatário (inquilino) enviar o aviso de desocupação e não desocupar o imóvel?',
        route: '/home/rescisao/04',
      },
      {
        titleLink: 'Como agendar a entrega das chaves?',
        route: '/home/rescisao/05',
      },
      {
        titleLink:
          'Como é feita a cobrança do aluguel durante o período de reparos no imóvel?',
        route: '/home/rescisao/06',
      },
      {
        titleLink: 'O que acontece se os reparos não forem realizados?',
        route: '/home/rescisao/07',
      },
      {
        titleLink:
          'Quando o locatário (inquilino) pode rescindir o contrato de locação?',
        route: '/home/rescisao/08',
      },
      {
        titleLink:
          'De acordo com o contrato de locação, quando há inserção de multa rescisória?',
        route: '/home/rescisao/09',
      },
      {
        titleLink: 'Qual a forma de pagamento dos débitos da rescisão?',
        route: '/home/rescisao/10',
      },
      {
        titleLink:
          'Como é calculada a multa rescisória do contrato de locação?',
        route: '/home/rescisao/11',
      },
      {
        titleLink:
          'Como são feitos os cálculos das contas de consumo (IPTU, contas de luz, água e esgoto, taxas de lixo) na rescisão?',
        route: '/home/rescisao/12',
      },
      {
        titleLink:
          'O que acontece se alguma fatura de contas de consumo ficar pendente após a finalização do contrato de locação?',
        route: '/home/rescisao/13',
      },
      {
        titleLink: 'Como agendar a vistoria final?',
        route: '/home/rescisao/14',
      },
      {
        titleLink: 'Como funciona a vistoria final da Rotina Imobiliária?',
        route: '/home/rescisao/15',
      },
      {
        titleLink:
          'O locatário (inquilino) pode ser representado por terceiros no momento da vistoria final?',
        route: '/home/rescisao/16',
      },
      {
        titleLink:
          'O que acontece se o locatário (inquilino) não comparecer na vistoria final?',
        route: '/home/rescisao/17',
      },
      {
        titleLink:
          'O que acontece se o imóvel não estiver desocupado no momento da vistoria?',
        route: '/home/rescisao/18',
      },
    ],
  },
  {
    id: '/home/areadoclienteeaplicativolocador',
    title: 'Área do cliente e aplicativo',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Seja bem-vindo a mais um canal de comunicação da Rotina com você. A Área do Cliente e o APP Rotina Imobiliária são espaços de autoatendimento desenvolvidos pensando em disponibilizar, de forma prática e segura, as principais ferramentas de gestão do seu contrato de locação. Tudo isso a um clique de distância!</p><br/><p>No conteúdo abaixo você vai encontrar o passo a passo para usar nossos canais de serviço online.</p><br/><p>Rotina imobiliária, conectada com você, toda hora, em qualquer lugar.</p>',
    links: [
      {
        titleLink: 'Área do cliente',
        subLinks: [
          {
            titleLink: 'Como realizo meu primeiro acesso?',
            route: '/home/areadoclienteeaplicativolocador/01',
          },
          {
            titleLink: 'Quais são as funcionalidades da área do cliente?',
            route: '/home/areadoclienteeaplicativolocador/02',
          },
          {
            titleLink: 'Como redefino minha senha?',
            route: '/home/areadoclienteeaplicativolocador/03',
          },
        ],
      },
      {
        titleLink: 'Aplicativo',
        subLinks: [
          {
            titleLink: 'Como realizo meu primeiro acesso?',
            route: '/home/areadoclienteeaplicativolocador/04',
          },
          {
            titleLink: 'Quais são as funcionalidades do aplicativo?',
            route: '/home/areadoclienteeaplicativolocador/05',
          },
          {
            titleLink: 'Como redefino minha senha?',
            route: '/home/areadoclienteeaplicativolocador/06',
          },
        ],
      },
    ],
  },
  {
    id: '/home/quemsomos',
    title: 'Sobre a Rotina',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Preparei um material com todas as informações que você precisa saber sobre a história da Rotina Imobiliária. Acompanhe:</p>',
    links: [
      {
        titleLink: 'Um pouco sobre a Rotina Imobiliária.',
        route: '/home/quemsomos/01',
      },
      {
        titleLink: 'Conheça o Grupo VIBRO.',
        route: '/home/quemsomos/02',
      },
    ],
  },
  {
    id: '/home/contato',
    title: 'Contato',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Preparei um material com todas as orientações que você precisa saber sobre atendimento e contato.</p><br/><p>Temos uma equipe robusta e focada em oferecer um atendimento personalizado, garantindo a melhor experiência ao cliente. Veja:</p>',
    links: [
      {
        titleLink: 'Como entro em contato com a Rotina?',
        route: '/home/contato/01',
      },
      {
        titleLink: 'A Rotina tem redes sociais?',
        route: '/home/contato/02',
      },
      {
        titleLink: 'Quais são e onde ficam as sedes da Rotina?',
        route: '/home/contato/03',
      },
    ],
  },
  {
    id: '/home/indicacaodeimoveis',
    title: 'Indicação de Imóveis',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Preparei um material com todas as orientações que você precisa saber sobre Indicação de Imóveis! Veja abaixo:</p>',
    links: [
      {
        titleLink: 'Como funciona o programa “Indiquei você”?',
        route: '/home/indicacaodeimoveis/01',
      },
      {
        titleLink: 'Quais são os meus ganhos por indicação?',
        route: '/home/indicacaodeimoveis/02',
      },
      {
        titleLink: 'Como acompanho minhas indicações e meus ganhos?',
        route: '/home/indicacaodeimoveis/03',
      },
    ],
  },
  {
    id: '/home/antecipacaodealuguel',
    title: 'Antecipação de Aluguel',
    subTitle:
      '<p>Olá, sou a Tina, assistente virtual da Rotina Imobiliária. Preparei um material com todas as orientações que você precisa saber sobre a antecipação de aluguel. Confira!</p>',
    links: [
      {
        titleLink: 'Como funciona o programa “Antecipe seu aluguel”?',
        route: '/home/antecipacaodealuguel/01',
      },
      {
        titleLink: 'A antecipação de aluguel é um empréstimo?',
        route: '/home/antecipacaodealuguel/02',
      },
      {
        titleLink: 'Tenho vários imóveis, posso antecipar mais de um contrato?',
        route: '/home/antecipacaodealuguel/03',
      },
      {
        titleLink:
          'É necessário alienar meu imóvel para realização a antecipação de aluguel?',
        route: '/home/antecipacaodealuguel/04',
      },
    ],
  },
];

const content = [
  {
    id: '/home/areadoclienteeaplicativo/01',
    title: 'Como realizo meu primeiro acesso?',
    content:
      '<p>Seja bem-vindo a Rotina Imobiliária. É um grande prazer ter você como nosso cliente. E por valorizar nosso relacionamento pensamos a todo instante em como facilitar seu acesso aos nossos serviços.</p><br/><p>Na área do cliente você encontra todas as informações do seu contrato. Entre e fique à vontade.</p><br/><p>Confira o passo a passo para acessar a ÁREA DO CLIENTE pela primeira vez:</p><ol><li>Digite rotina.com.br em seu navegador e clique na opção ÁREA DO CLIENTE localizada no canto superior direito.<p><br><img src="/assets/3001-1.png"></p></li><br><li>Selecione a opção FAZER CADASTRO e digite o CPF ou CNPJ do titular do contrato no campo indicado.<p><br><img src="/assets/3001-2.png"></p></li><br><li>Em seguida clique em RECEBER CHAVE POR E-MAIL.<p><br><img src="/assets/3001-3.png"></p></li><br><li>Você receberá a chave de acesso no e-mail cadastrado em nosso sistema.</li><li>Copie e cole o código no campo indicado e crie a sua senha do portal.</li><li>Após digitar todos os dados solicitados e inserir sua nova senha clique no botão CADASTRAR.</li></ol><p>Cadastro realizado, você tem acesso as informações do seu contrato e solicitações de serviço na palma da sua mão.</p><br/><p>Para acessar os canais de autoatendimento é importante manter seu e-mail de cadastro atualizado em nosso sistema. Se precisar alterar, entre em contato através do nosso WhatsApp e digite “OUTROS ASSUNTOS”.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Escolha uma senha segura e guarde na memória. A senha definida na área do cliente será a mesma do aplicativo Rotina Imobiliária.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui</a>.</p>',
  },
  {
    id: '/home/areadoclienteeaplicativo/02',
    title: 'Quais são as funcionalidades da área do cliente?',
    content:
      '<p>Confira aqui tudo o que você encontra disponível na ÁREA DO CLIENTE. As opções estarão disponíveis de acordo com o modelo do seu contrato.</p><br/><p>Sou locador (proprietário). Aqui você encontra as seguintes opções:</p><ul><li>Meus Imóveis - Locador</li><li>Meus Imóveis - Vendedor</li><li>Contratos - Locador</li><li>Demonstrativo de IR</li><li>Extrato Locador</li><li>Solicitar Serviços - Locador e locatário</li><li>Vistoria Locador</li></ul><p>Sou locatário (inquilino). Aqui você encontra as seguintes opções:</p><ul><li>Meus Imóveis - Locatário</li><li>Contratos - Locatário</li><li>Boletos</li><li>Demonstrativo de IR</li><li>Extrato Locatário</li><li>Solicitar Serviços - Locador e locatário</li><li>Vistoria Locatário</li></ul><p>Você tem acesso ao seu contrato, boletos de aluguel, demonstrativo de imposto de renda e extrato de locação (exclusivos para proprietários) e solicitação de serviços como manutenção e vistorias.<p><br><img src="/assets/3002-1.jpg"></p></p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/areadoclienteeaplicativo/03',
    title: 'Como redefino minha senha?',
    content:
      '<p>Esqueceu sua senha de acesso? Não se preocupe, é só seguir o passo a passo abaixo.</p><ol><li>Digite rotina.com.br em seu navegador e clique na opção ÁREA DO CLIENTE localizada no canto superior direito.<p><br><img src="/assets/3003-1.png"></p></li><br><li>Selecione a opção ESQUECI MINHA SENHA e digite o CPF ou CNPJ do titular do contrato no campo indicado em seguida clique em RECUPERAR.<br><p><img src="/assets/3003-2.png"></p><p><img src="/assets/3003-3.png"></p></li><br><li>Você vai receber no e-mail cadastrado em nosso sistema um link seguro para redefinição de senha.</li><li>Acesse o e-mail, clique no link e defina a sua nova senha.</li><li>Seu acesso está reestabelecido e você já pode usar as funcionalidades disponíveis para o seu contrato.</li></ol><p>Para acessar os canais de autoatendimento é importante manter seu e-mail de cadastro atualizado em nosso sistema. Se precisar alterar, entre em contato através do nosso WhatsApp e digite “OUTROS ASSUNTOS”.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> A senha na área do cliente é a mesma utilizada no APP Rotina Imobiliária. Escolha uma senha segura e guarde na memória.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/areadoclienteeaplicativo/04',
    title: 'Como realizo meu primeiro acesso?',
    content:
      '<p>Seja bem-vindo a Rotina Imobiliária. É um grande prazer ter você como nosso cliente. E por valorizar nosso relacionamento pensamos a todo instante em como facilitar seu acesso aos nossos serviços.</p><br/><p>No APP Rotina Imobiliária você encontra todas as informações do seu contrato. Entre e fique à vontade.</p><br/><p>Confira o passo a passo para acessar o APP ROTINA IMOBILIÁRIA pela primeira vez:</p><ol><li>Baixe o aplicativo gratuitamente no google play ou apple store.<p><br><img src="/assets/3004-1.png" class="Custom-Width"></p></li><br><li>Faça o seu cadastro no site <a href="https://www.rotina.com.br">rotina.com.br</a>. Se tiver dúvidas sobre o processo consulte aqui.</li><li>Insira CPF do titular do contrato e senha cadastrada. Lembre-se, são os mesmos dados de acesso à área do cliente.<p><br><img src="/assets/3004-2.png" class="Custom-Width"><img src="/assets/3004-3.png" class="Custom-Width"></p></li></ol><p>Agora é só aproveitar todas as facilidades e ter os serviços da Rotina na palma da sua mão.</p><br/><p>Para acessar os canais de autoatendimento é importante manter seu e-mail de cadastro atualizado em nosso sistema. Se precisar alterar, entre em contato através do nosso WhatsApp e digite “OUTROS ASSUNTOS”</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Escolha uma senha segura e guarde na memória. A senha definida na área do cliente será a mesma do aplicativo Rotina Imobiliária.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/areadoclienteeaplicativo/05',
    title: 'Quais são as funcionalidades do aplicativo?',
    content:
      '<p>Confira aqui tudo o que você encontra disponível no APP ROTINA IMOBILIÁRIA. As opções estarão disponíveis de acordo com o modelo do seu contrato.</p><br/><p>Sou locador (proprietário). Aqui você encontra as seguintes opções:</p><ul><li>Meus Imóveis - Locador / Vendedor</li><li>Meus Imóveis - Indicadores</li><li>Contratos - Locador</li><li>Serviços</li><ul><li>Suportes locador</li><li>Extrato Locador</li><li>Demonstrativo de IR</li></ul></ul><p>Sou locatário (inquilino). Aqui você encontra as seguintes opções:</p><ul><li>Meus Imóveis</li><li>Boletos</li><li>Contratos - Locatário</li><li>Serviços</li><ul><li>Suportes locatário</li><li>Extrato locatário</li></ul></ul><p>Você tem acesso ao seu contrato, boletos de aluguel, demonstrativo de imposto de renda e extrato de locação (exclusivos para proprietários) e solicitação de serviços como manutenção e vistorias.<p><br><img src="/assets/3005-1.jpg"></p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/areadoclienteeaplicativo/06',
    title: 'Como redefino minha senha?',
    content:
      '<p>Esqueceu sua senha de acesso? Não se preocupe, é só seguir o passo a passo abaixo.</p><ol><li>Abra o app Rotina Imobiliária em seu celular</li><li>Digite o CPF ou CNPJ do titular do contrato de aluguel e selecione a opção ESQUECI MINHA SENHA<p><br/><img src="/assets/3006-1.png" class="Width-3"><img src="/assets/3006-2.png" class="Width-3"><img src="/assets/3006-3.png" class="Width-3"></p></li><br/><li>Você vai receber no e-mail cadastrado em nosso sistema um link seguro para redefinição de senha</li><li>Acesse o e-mail, clique no link e defina a sua nova senha</li><li>Seu acesso está reestabelecido e você já pode usar as funcionalidades disponíveis para o seu contrato.</li></ol><p>Para acessar os canais de autoatendimento é importante manter seu e-mail de cadastro atualizado em nosso sistema. Se precisar alterar, entre em contato através do nosso WhatsApp e digite “OUTROS ASSUNTOS”</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> A senha do app Rotina Imobiliária é a mesma utilizada na área do cliente. Escolha uma senha segura e guarde na memória.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/contasdeconsumo/01',
    title: 'IPTU.',
    content:
      '<p>Para começar, tenho aqui para você informações claras sobre o que é o IPTU e como acontece a cobrança e o pagamento.</p><br/><p>O IPTU é um tributo municipal cobrado anualmente dos proprietários de imóveis comerciais e residenciais urbanos e é calculado com base no valor venal (definido pelo Poder Público e calculado por m² construído) do imóvel, sob o qual é aplicada uma alíquota, definida pelo município, com reajuste anual, considerando a valorização do imóvel e da região.<p><br/><img src="/assets/3007-1.jpg"</p></p><br/><p>Agora que você já sabe o que é o IPTU, conheça as regras de cobrança e pagamento durante o período de locação do imóvel.</p><br/><p>Quem deve pagar o IPTU?</p><br/><p>O locatário (inquilino) é o responsável pelo pagamento do IPTU, conforme consta no contrato de locação.</p><br/><p>Quando é cobrado o IPTU?</p><br/><p>O IPTU é um imposto recolhido anualmente, e sua cobrança é incorporada ao boleto do aluguel, dividida em 6 parcelas.</p><br/><p>Na cidade de Uberlândia, a vigência do IPTU é de 01/01 a 31/12 e sua cobrança pela prefeitura municipal tem início no mês de março de cada ano. Desta forma, a primeira parcela é referente aos meses de janeiro e fevereiro, a segunda a março e abril e assim por sucessivamente.</p><br/><p>Como é feita a cobrança quando acontece rescisão do contrato de locação?</p><br/><p>No momento da rescisão do contrato será calculado o valor do IPTU proporcional ao tempo em que o locatário (inquilino) permaneceu no imóvel. Sendo assim, caso ele já tenha pagado o imposto de forma integral, receberá a restituição do valor pago referente ao período que não usufruirá do imóvel.</p><br/><p>Vamos considerar que contrato de locação teve início em janeiro e foi finalizado em outubro e locatário (inquilino) pagou o valor</p><br/><p>integral do IPTU do ano em 6 parcelas cobradas de março a agosto.</p><br/><p>Início do contrato: 01/01</p><br/><p>Término do contrato: 01/10</p><br/><p>Tempo de locação: 10 meses</p><br/><p>Valor total do IPTU: R$ 150,00</p><br/><p>Parcelamento da Prefeitura: R$ 150,00/ 6 = R$25,00 cobrado de março a agosto.</p><br/><p>Nesse caso, no momento da rescisão o locatário (inquilino) receberá o reembolso de 2 meses de IPTU referente ao período que ele não ocupará o imóvel.</p><br/><p>Valor pago locatário (inquilino): R$ 150,00 / 12 meses = R$ 12,50</p><br/><p>Tempo de locação: 10 meses x R$ 12,50 = R$125,00</p><br/><p>Valor do reembolso: R$ 25,00 (R$ 150,00 – R$ 125,00)</p><br/><p>Acho que ficou tudo claro até aqui e já podemos seguir para o próximo tópico, mas caso tenha restado alguma dúvida vou deixar aqui o link para o site da Prefeitura de Uberlândia, lá você encontra informações específicas sobre o IPTU.</p><br/><p>Site <a href="https://www.uberlandia.mg.gov.br">www.uberlandia.mg.gov.br</a></p><br/><p>WhatsApp: (34) 3239-2800</p><br/><p>Telefone: (34) 3239-2800</p><br/><p>Av. Anselmo Alves dos Santos, 600 - Santa Mônica, Uberlândia/MG</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/contasdeconsumo/02',
    title: 'Energia elétrica.',
    content:
      '<p>Confira aqui algumas informações importante sobre a energia no seu imóvel.<p><br/><img src="/assets/3008-1.jpg"</p></p><br/><p>Como saber se a energia está ligada no imóvel que aluguei?</p><br/><p>Para evitar surpresas antes da sua mudança, é importante consultar a concessionária de energia quanto ao fornecimento do serviço no imóvel locado.</p><br/><p>Após a verificação, já é possível solicitar a troca de titularidade.</p><br/><p><strong>CEMIG: </strong><a href="https://www.cemig.com.br/atendimento/troca-de-titularidade/">www.cemig.com.br/atendimento/troca-de-titularidade/</a></p><br/><p>O que preciso saber sobre a troca de titularidade da conta de energia?</p><br/><p>Como determinado no contrato de locação, alguns serviços referentes ao imóvel locado devem ter sua titularidade alterada para o nome do locatário (inquilino). Um deles é a energia elétrica.</p><br/><p>A solicitação de troca de titularidade da conta de energia do imóvel locado deve ser feita diretamente na concessionária do serviço.</p><br/><p>Para efetivar a alteração você precisa ter em mãos o contrato de locação, um documento com foto do titular do contrato e os dados de instalação do imóvel na companhia de energia além do endereço completo do imóvel.<p><br/><img src="/assets/3008-2.jpg"</p></p><br/><p>Para mais informações sobre esse processo, você pode consultar diretamente o site da CEMIG aqui.</p><br/><p><strong>CEMIG: </strong><a href="https://www.cemig.com.br/atendimento/troca-de-titularidade/">www.cemig.com.br/atendimento/</a></p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Lembre-se de realizar esse procedimento antes da sua mudança, assim você evita incômodos pela ausência de energia no local.</p><br/><p>Como ter acesso a segunda via da conta de energia? Caso precise da segunda via da conta de energia, basta solicitar a fatura diretamente para a empresa fornecedora do serviço.</p><br/><p>Para te ajudar, já coloquei o link aqui. Você vai precisar de alguns dados, então esteja com eles em mãos para facilitar seu atendimento:</p><br/><p><strong>CEMIG: </strong><a href="https://www.cemig.com.br/atendimento/segunda-via-de-conta/">www.cemig.com.br/atendimento/segunda-via-de-conta/</a></p><ul><li>CPF ou CNPJ do titular ou</li><li>Número do cliente e</li><li>Número da instalação</li></ul><p>É preciso solicitar o encerramento do contrato de energia no final do contrato de locação?</p><br/><p>Sim. Ao encerrar o contrato de locação, você deverá solicitar o encerramento do fornecimento de energia junto à empresa responsável. Mas lembre-se, você só deve fazer essa solicitação após a realização da vistoria final no imóvel.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Para não ficar no escuro confira aqui os prazos médios dos serviços:</p><br/><p>Troca de titularidade + Religação: 7 dias úteis</p><br/><p>Religação simples: 24 horas úteis</p><br/><p>Religação + Troca de titularidade + Instalação de medidor: 7 a 14 dias úteis</p><br/><p>Ligação nova: 7 a 14 dias úteis</p><br/><p>Você tem muitas formas de contato com a companhia de energia elétrica. Para facilitar vou deixar aqui embaixo para você.</p><br/><p>Pode ser online nos canais de atendimento digital:</p><br/><p>Cemig Atende Web</p><br/><p>App Cemig Atende - disponível para Android e IOS.</p><br/><p>WhatsApp: (31) 3506-1160</p><br/><p>Telegram: @Cemigbot</p><br/><p>Mensagem SMS: 29810</p><br/><p>Através dos canais de atendimento telefônico</p><br/><p>116 (Minas Gerais)</p><br/><p>0800 721 0116 (demais estados)</p><br/><p>0800 723 8007 (deficientes auditivos)</p><br/><p>Ou no atendimento presencial. A lista de postos de atendimento está aqui, é só pesquisar pelo nome da cidade.</p><br/><p><strong>CEMIG: </strong><a href="https://www.cemig.com.br/atendimento/locais-de-atendimento/">www.cemig.com.br/atendimento/locais-de-atendimento/</a></p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, você pode entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/contasdeconsumo/03',
    title: 'Água.',
    content:
      '<p>Aqui vou compartilhar com você algumas informações importantes sobre o serviço de água do imóvel que você alugou.</p><br/><p>A fatura de cobrança da água é uma despesa em que não é realizada a alteração de titularidade, por isso, durante o período de locação de imóvel você vai receber essa conta com o nome do proprietário. Ainda assim, o pagamento da conta de consumo de água é responsabilidade do locatário (inquilino) que faz uso do serviço.<p><br/><img src="/assets/3009-1.jpg"</p></p><br/><p>A conta é enviada mensalmente para o endereço do imóvel. Fique atento a caixa de correios e caso não receba a fatura, procure a empresa responsável para solicitar a segunda via.</p><br/><p>Como ter acesso a segunda via da conta de água?</p><br/><p>Caso precise da segunda via da conta de água, você deve solicitar a fatura diretamente para a empresa fornecedora.</p><br/><p>Mas, para facilitar, vou deixar o link do serviço aqui para você. Para solicitar você precisará de uma das informações abaixo:</p><br/><p><strong>DMAE: </strong><a href="https://plataforma.uberlandia.mg.gov.br/plataforma/f/t/segundaviaiptusel?tipoDivida=dmae">plataforma.uberlandia.mg.gov.br/</a></p><ul><li>Número da Dívida:</li><li>Código do Imóvel:</li><li>CPF ou CNPJ do Proprietário:</li><li>Código do Proprietário na Prefeitura:</li><li>Código Identificador Dmae (IDA)</li></ul><p>O que fazer ao receber uma notificação de corte no fornecimento da água, devido a pendências anteriores ao período da locação?</p><br/><p>O locatário (inquilino) deverá contatar a imobiliária para que seja verificado se o pagamento foi realizado ou se existe programação de pagamento.  Em caso negativo, o locatário (inquilino) deve efetuar o pagamento da dívida, e enviar a fatura com comprovante de pagamento para a Rotina Imobiliária para reembolso do valor.</p><br/><p>(incluir e-mail ou canal para envio)</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Para você não ficar sem água, confira aqui os prazos médios dos seguintes serviços:</p><br/><p>Religação corte simples: 24 horas úteis</p><br/><p>Religação corte complexo: 72 horas úteis</p><br/><p>Ficou com alguma dúvida? Você pode entrar em contato com a empresa fornecedora de forma on-line, nas agências físicas ou por telefone. Vou deixar aqui os contatos pra você!</p><br/><p>Ligue fácil Dmae – 115</p><br/><p>WhatsApp – (34) 3239-2800</p><br/><p>E-mails:</p><ul><li>Para solicitar atendimento: dmae.atendimento@uberlandia.mg.gov.br</li><li>Para solicitar vistoria: vistoria.dmae@uberlandia.mg.gov.br</li><li>Para solicitar novas ligações de água e esgoto: ligacaonova.dmae@uberlandia.mg.gov.br</li><li>Para entrar em contato no Núcleo de Cobrança: nucleodecobranca@uberlandia.mg.gov.br</li></ul><p>Telefone – (34) 3233-4300</p><br/><p>Endereço – Avenida Rondon Pacheco, 6400, Uberlândia/MG</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, você pode entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/contasdeconsumo/04',
    title: 'Taxa de lixo.',
    content:
      '<p>A Taxa de Coleta de Lixo é um tributo criado para custear a despesa do serviço municipal de coleta de lixo domiciliar.</p><br/><p>Em Uberlândia, esta cobrança é realizada pelo Dmae (Departamento Municipal de Água e Esgoto) e o seu valor é incluído na fatura mensal do serviço de fornecimento de água e esgoto. A cobrança tem início no mês de junho e o pagamento é de responsabilidade do locatário (inquilino).<p><br/><img src="/assets/3010-1.jpg"</p></p><br/><p>Mas atenção, a cobrança acontece de forma diferente para apartamentos em condomínios verticais, casas de colônia e imóveis com saneamento suspenso. Nesse caso o usuário receberá o boleto separadamente enviado via Correios. O pagamento da taxa pode ser parcelado em até oito vezes.</p><br/><p>O valor da taxa é variável de acordo com a área construída e alíquota fiscal. Essa alíquota é definida conforme a zona fiscal (bairro onde se encontra o imóvel) e destinação de uso (residencial, comercial, templos e outros tipos).</p><br/><p>Os contribuintes que queiram pagar a taxa à vista devem realizar a solicitação e emissão do documento de arrecadação anual diretamente no site do Dmae através deste link. <a href="https://plataforma.uberlandia.mg.gov.br/plataforma/f/t/segundaviaiptusel?tipoDivida=dmae">plataforma.uberlandia.mg.gov.br</a></p><br/><p>Para mais informações você pode procurar a empresa responsável pelos canais de atendimento ou presencialmente.</p><br/><p>Ligue fácil Dmae – 115</p><br/><p>WhatsApp – (34) 3239-2800</p><br/><p>Telefone – (34) 3233-4300</p><br/><p>Endereço – Avenida Rondon Pacheco, 6400</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, você pode entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/contasdeconsumo/05',
    title: 'Seguro incêndio.',
    content:
      '<p>Antes de falar sobre a contratação do serviço, quero falar com você sobre como funciona e porque você precisa desse seguro.</p><br/><p>O seguro contra incêndio tem a função de proteger a edificação locada, e também o locador (proprietário), indicado como beneficiário na apólice. Mas na prática, entendemos que a contratação do seguro também oferece amparo ao locatário (inquilino), considerando a possibilidade de altos custos com reparo de danos causados por um possível incêndio ou até mesmo a perda integral da construção.<p><br/><img src="/assets/3011-1.jpg"</p></p><br/><p>O seguro contra incêndio serve justamente para que, se algum incidente acontecer, exista uma segurança de que o patrimônio perdido será recompensado.</p><br/><p>A contratação do seguro é fixada pela Lei do Inquilinato (Lei 8.245/91) que determina: “Art. 22. O locador (proprietário) é obrigado a: VIII – pagar os impostos e taxas, e ainda o prêmio de seguro complementar contrafogo, que incidam ou venham a incidir sobre o imóvel, salvo disposição expressa em contrário no contrato”.</p><br/><p>A lei, permite que o contrato de locação determine que o pagamento do seguro contra incêndio, bem como o IPTU, seja feito pelo locatário (inquilino) considerando que é ele quem utiliza o imóvel. Dessa forma, cabe a quem ocupa o imóvel preservá-lo e assumir qualquer dano que aconteça, inclusive se decorrer de um arrombamento ou acidente.</p><br/><p>Como funciona o seguro contra incêndio da Rotina Imobiliária?</p><br/><p>Ao realizar a locação de um imóvel com a Rotina Imobiliária, será realizada pela empresa a contratação do seguro.  O valor de contratação poderá ser parcelado em até 11 vezes, e sua cobrança será incluída no boleto de aluguel. O seguro incêndio tem vigência anual e renovação automática.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, você pode entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/contasdeconsumo/06',
    title: 'Despesas de condomínio.',
    content:
      '<p>Quando o pagamento das despesas de condomínio é responsabilidade do locatário (inquilino)?</p><br/><p>Nos casos em que o imóvel locado integra um condomínio, a Lei do Inquilinato determina que cabe ao locatário (inquilino) o pagamento das despesas ordinárias do condomínio, ou seja, aquelas essenciais para o funcionamento dele.<p><br/><img src="/assets/3012-1.jpg"</p></p><br/><p>Como despesas ordinárias podemos enumerar:</p><ul><li>Despesas de consumo como água e luz das áreas comuns;</li><li>Gastos com a limpeza e a conservação das áreas comuns;</li><li>Salários e encargos trabalhistas, sociais e previdenciários dos funcionários do condomínio;</li><li>Despesas para manutenção e conservação de instalações e equipamentos hidráulicos, elétricos, mecânicos e de segurança;</li><li>Conservação de elevadores e porteiros eletrônicos;</li><li>Rateio do saldo devedor dos fundos de reservas no que se refere aos valores utilizados durante o período da locação e taxa de mudança.</li></ul><p>Quando o pagamento das despesas de condomínio é responsabilidade do locador (proprietário)?</p><br/><p>Mesmo que o imóvel esteja locado, algumas despesas são de responsabilidade do locador (proprietário) do imóvel, as chamadas despesas extraordinárias, São gastos que não se trata especificamente da manutenção do condomínio, mas que visam ampliar sua estrutura ou recuperar suas condições de habitabilidade.</p><br/><p>Enquadram-se nesses casos gastos com obras de reformas; pintura de fachadas; instalação de novos equipamentos; despesas com paisagismo ou decoração; indenizações por despesas de funcionários realizadas antes do início do contrato de locação; e constituição de fundo de reserva.<p><br/><img src="/assets/3012-2.jpg"</p></p><br/><p>O que é o Fundo de Reserva?</p><br/><p>O fundo de reserva é uma forma de poupança realizada pelos condomínios para cobrir determinados gastos ou utilizar em caso de despesas imprevistas.</p><br/><p>A Lei do Inquilinato, Lei 8245/91, determina que cabe ao locatário (inquilino) apenas o pagamento das despesas ordinárias do condomínio, já as despesas extraordinárias, objetos do fundo de reserva, são de responsabilidade do proprietário.</p><br/><p>Considerando que a cobrança de taxas condominiais, sejam elas ordinárias ou extraordinárias, são realizadas em um mesmo boleto, fica determinado que: o locatário (inquilino) realizará o pagamento do valor integral do boleto, e será reembolsado pelos valores referentes ao fundo de reserva.</p><br/><p>Para receber o reembolso dos valores, o locatário (inquilino) deve encaminhar o boleto do condomínio e o comprovante de pagamento através dos nossos canais de atendimento. O envio deve ser realizado mensalmente e ocorrer com até 15 dias de antecedência da data do boleto de aluguel em que o crédito será realizado. Caso o envio seja feito após a data estipulada os descontos serão lançados no mês subsequente.</p><br/><p>Caso o locatário (inquilino) não apresente os boletos e comprovantes de pagamento em até 90 (noventa) dias contados, da data do desembolso, ficará caracterizada a renúncia voluntária deste direito.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, você pode entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/pagamentos/01',
    title: 'Como tenho acesso ao boleto de aluguel?',
    content:
      '<p>O boleto do aluguel é enviado mensalmente para o e-mail informado no contrato de locação e fica disponível no site da Rotina Imobiliária na Área do Cliente e no aplicativo Rotina Imobiliária, podendo também ser solicitado por meio do WhatsApp.<p><br/><img src="/assets/3013-1.jpg"</p></p><br/><p>Os boletos de aluguel são enviados por e-mail, pelo menos 15 dias antes do vencimento.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/pagamentos/02',
    title: 'O que eu pago?',
    content:
      '<p>O boleto de aluguel da Rotina Imobiliária contém:</p><br/><p>Despesas</p><br/><p>Aluguel</p><br/><p>O pagamento do aluguel é referente ao mês vencido. Ou seja, você paga pelos dias em que morou no imóvel.<p><br/><img src="/assets/3014-1.jpg"</p></p><br/><p>Seguro-incêndio</p><br/><p>Você é responsável pelo pagamento mensal do prêmio do seguro contra incêndio. O seguro inclui a proteção básica contra incêndio, queda de raio, explosão e perda de aluguel. Saiba mais sobre o <a href="https://centraldeajudarotina.com.br/home/contasdeconsumo/05">seguro incêndio</a>.</p><br/><br/><p>IPTU</p><br/><p>É pago pelo locador (proprietário) junto a prefeitura e a cobrança é reembolsada por você em 6 parcelas mensais. Saiba mais sobre o <a href="https://centraldeajudarotina.com.br/home/contasdeconsumo/01">IPTU</a>.</p><br/><br/><p>Condomínio</p><br/><p>Caso o imóvel locado tenha condomínio, este será cobrado juntamente com o boleto do aluguel.</p><br/><p>Reembolsos</p><br/><p>Acordos e descontos.</p><br/><p>Caso você tenha negociado algum acordo ou desconto com o locador (proprietário), ele é lançado em sua fatura na forma de reembolso. </p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/pagamentos/03',
    title: 'Como eu pago?',
    content:
      '<p>Você paga o boleto de aluguel em qualquer instituição bancária até a data do vencimento.</p><p><br/><img src="/assets/3015-1.jpg"</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/pagamentos/04',
    title: 'Não recebi o boleto, o que devo fazer?',
    content:
      '<p>Nós enviamos o boleto para o e-mail do locatário (inquilino) cadastrado. O envio é automático e mensal, então pode ser que esteja sendo colocado como spam ou lixo eletrônico pelo seu provedor. Lembre-se sempre de checar essas pastas do seu e-mail, além da caixa de entrada.<p><br/><img src="/assets/3016-1.jpg"</p></p><br/><p>Você também pode obter o boleto fazendo seu login em nosso aplicativo ou site, na área “Boletos" ou solicitando através do WhatsApp.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> A solicitação no zap é muito rápida, basta digitar o seu nome, “Quero meu boleto ou apenas Boleto”, em seguida digitar o CPF e pronto já receberá o arquivo no próprio <a href="https://wa.me/553432395000" class="Wpp">WhatsApp</a>.</p><br/><br/><p>Caso não esteja recebendo ou não tenha acesso, entre em contato com a gente para que possamos atualizar o e-mail cadastrado.</p><br/><p>Informações importantes:</p><br/><p>Tempo de confirmação</p><br/><p>Após o pagamento, em até 24horas, você receberá um e-mail confirmando que recebemos o seu pagamento.</p><br/><p>Feriados ou finais de semana</p><br/><p>Se o vencimento cair em finais de semana ou feriados, você poderá pagar o seu boleto no próximo dia útil.</p><br/><p><strong>Importante:</strong> Fique atento também ao expediente bancário da instituição que escolher para efetuar o pagamento do boleto de aluguel. Caso ele seja realizado após o horário determinado pelo banco, o repasse do valor será feito à Rotina Imobiliária, apenas no dia útil seguinte, gerando atraso. </p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/pagamentos/05',
    title: 'Meu boleto de aluguel venceu, o que eu faço?',
    content:
      '<p>Até 5 dias após o vencimento, você pode efetuar o pagamento em qualquer instituição bancária, <strong>sem precisar gerar uma segunda via.</strong></p><p><br/><img src="/assets/3017-1.jpg"</p><br/><p>Conforme acordado no contrato de locação, será cobrada multa de 10% sobre o valor total devido, mais juros de 1% ao mês e correção monetária, calculados dia a dia até o pagamento de forma automática pelo próprio banco.</p><br/><p>Após os 5 dias do vencimento, você deverá entrar em contato nos canais de atendimento da Rotina Imobiliária.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/pagamentos/06',
    title: 'Posso mudar a data de vencimento do aluguel?',
    content:
      '<p>No momento de fechar o contrato de locação, você escolhe a data de vencimento do aluguel mais adequada para você, dentre as opções: 10, 20 e 30.</p><br/><p>A data de vencimento do aluguel está atrelada ao pagamento para o locador (proprietário) do imóvel, de forma que para alterar a data, depende da autorização dele.<p><br/><img src="/assets/3018-1.jpg"</p></p><br/><p>Caso seja de fato necessário a alteração, você deverá entrar em contato com os nossos canais de atendimento.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> É muito importante no início da locação escolher a melhor data para você.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/pagamentos/07',
    title: 'Como regularizo pendências financeiras?',
    content:
      '<p>Você possui débitos em aberto e quer negociar!</p><br/><p>Se você tiver alguma pendência como boletos em atraso, entre em contato com a nossa equipe de cobrança, que vamos avaliar a situação e te auxiliar da melhor forma possível. Entrar com contato com os nossos canais de atendimento.<p><br/><img src="/assets/3019-1.jpg"</p></p><br/><p>Meu fiador pode ser cobrado?</p><br/><p>Sim. Quando o fiador assina o contrato de locação, ele se torna principal pagador, solidariamente responsável pelo cumprimento de todas as cláusulas e obrigações do contrato de locação. Portanto, se você ficar inadimplente, o fiador será cobrado conforme previsto em lei.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/pagamentos/08',
    title: 'Qual a responsabilidade do fiador no contrato de locação?',
    content:
      '<p>O fiador em um contrato de aluguel é responsável por assumir as despesas caso o inquilino não cumpra com o pagamento do aluguel, condomínio, IPTU, ou até mesmo um possível dano ao imóvel.<p><br/><img src="/assets/3020-1.jpg"</p></p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/pagamentos/09',
    title: 'Como é feito o reajuste do aluguel e com qual periodicidade?',
    content:
      '<p>Primeiramente, é importante saber que o reajuste anual do aluguel é um direito do locador (proprietário) do imóvel, conforme prevê a Lei do Inquilinato (Art. 18 da Lei n. 8.245/91). Esse reajuste é previsto em contrato, e o índice utilizado é o IGP-DI (FGV).</p><br/><p>O índice de reajuste de aluguel é aplicado uma vez ao ano, na data de aniversário de contrato, sobre o valor em reais.<p><br/><img src="/assets/3021-1.jpg"</p></p><br/><p>No mês de aniversário do seu contrato, a Rotina Imobiliária aplica o valor do índice acumulado dos últimos doze meses e multiplica pelo valor do seu aluguel, sem contar condomínio e outras contas de consumo. Utilizamos a porcentagem do mês anterior ao aniversário para calcular os novos valores, porque o índice IGP-DI só é divulgado no meio do mês.</p><br/><p>Um exemplo: o valor do seu aluguel é R$ 1.000,00, o índice do seu contrato é o IGP-DI e o aniversário do seu contrato é no mês de outubro. O cálculo é realizado da seguinte forma:</p><br/><p>Aluguel atual: R$ 1.000,00</p><br/><p>Índice utilizado: IGP-DI acumulado de 12 meses (de outubro do ano anterior à setembro do ano vigente). Suponhamos que seja 10%</p><br/><p>Cálculo:</p><br/><p>10% de R$ 1.000 = R$ 100,00</p><br/><p>Novo valor do aluguel</p><br/><p>R$ 1.000 + R$ 100,00 = R$ 1.100,00</p><br/><p>Esse novo valor do aluguel começa a valer na fatura com vencimento em novembro.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Acesse o aplicativo Rotina Imobiliária, nele você encontra todas as informações sobre o seu contrato. Pode ficar tranquilo você receberá um e-mail informando sobre o valor do reajuste.</p><br/><p><a href="https://apps.apple.com/br/app/rotina-imobili%C3%A1ria/id1547619530">Apple Store.</a></p><p><a href="https://play.google.com/store/apps/details?id=com.rotinaimobiliaria">Play Store</a></p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/manutencaoereparos/01',
    title: 'Política de responsabilidade de manutenção e reparos.',
    content:
      '<p>Para começar vamos esclarecer aqui quais são as responsabilidades de cada uma das partes do contrato de locação: locador (proprietário) e locatário (inquilino).</p><br/><p>De acordo com a Lei do Inquilinato (Lei 8.245/91), é responsabilidade do locatário (inquilino) a conservação do imóvel, assim como a realização de reparos de danos decorrentes de mau uso para que ao término do contrato possa devolver o imóvel nas mesmas condições em que recebeu.</p><br/><p>Por outro lado, o locador (proprietário) é responsável por entregar o imóvel em condições de servir ao uso para o qual se destina, responder pelos problemas existentes antes da locação e resolver problemas estruturais do imóvel.<p><br/><img src="/assets/3022-1.jpg"</p></p><br/><p>Para não ficar com dúvidas sobre de quem é a responsabilidade da manutenção e reparos, temos aqui uma relação com algumas das principais responsabilidades de cada parte.</p><br/><p>RESPONSABILIDADE DO LOCATÁRIO (INQUILINO)</p><br/><p>Danos relacionados ao uso diário do imóvel e reparos que visem a conservação e manutenção do local.</p><ol><li>Limpezas, manutenções preventivas e preditivas, instalação ou troca de itens que são facilmente substituídos ou podem ser retirados ao término do contrato:</li><ul><li>Troca de lâmpadas, instalação de soquetes e luminárias</li><li>Troca de miolos de fechadura</li><li>Troca de resistência e desobstrução de chuveiros</li><li>Instalação ou substituição de assentos sanitários</li><li>Dedetização em caráter preventivo ou corretivo</li><li>Manutenções preditivas de ar-condicionado e aquecedores (troca de pilhas, filtros, mangueiras, flexíveis, diafragmas, limpeza, regulagem etc.)</li><li>Limpeza de ar-condicionado</li><li>Limpeza de calhas</li></ul><li>Manutenções de itens de uso contínuo e reparos de problemas ocasionados pelo desgaste natural dos componentes do imóvel:</li><ul><li>Mau funcionamento de torneiras, sifões, registros, duchas higiênicas e descargas</li><li>Vedação ineficiente de pias, cubas e vasos sanitários</li><li>Caixa de gordura e esgoto, ralos, vasos sanitários, pias e tanques entupidos</li><li>Mau funcionamento e vedação ineficiente de box</li><li>Manutenção de falha no rejunte de pisos e azulejos</li><li>Mau funcionamento de tomadas, interruptores, pontos de luz</li><li>Manutenção de eletrodomésticos</li><li>Manutenção de móveis com a funcionalidade comprometida</li><li>Mau funcionamento de cortinas e persianas</li><li>Mau funcionamento de portões externos</li><li>Manutenção de cortinas de vidro</li><li>Umidade e mofo por falta de ventilação</li></ul></ol><p>RESPONSABILIDADE DO LOCADOR (PROPRIETÁRIO)</p><br/><p>Danos estruturais e reparos que visem entregar o imóvel ao locatário (inquilino) em boas condições.</p><ol><li>Problemas provenientes da estrutura e instalações internas que afetam a habitabilidade e/ou colocam em risco a integridade do imóvel e dos moradores:</li><ul><li>Infiltrações</li><li>Rachaduras</li><li>Trincas</li><li>Trincas</li><li>Problemas hidráulicos que necessitem quebra de paredes (consertos em tubulações e troca completa de registros gerais ou válvulas)</li><li>Problemas na fiação elétrica e no quadro de forças</li><li>Problemas em peças de ar-condicionado e aquecedores que não são trocadas em manutenções preditivas (placas, sensores, válvulas, condensadoras, unidades de comando etc.)</li><li>Janelas com folha solta ou entrada de água pela esquadria</li><li>Descupinização, quando iniciada em objetos de madeira do imóvel</li><li>Estufamento/descolamento de revestimentos de paredes e pisos</li><li>Problemas em telhados (exceto quando for danificado pelo morador ao instalar cabos, redes, ar-condicionado e outros).</li><li>Troca de caixa d’água, equipamentos e acessórios</li></ul></ol><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Caso o locatário (inquilino) queira realizar qualquer benfeitoria, mesmo que necessária ou útil, deve-se obter autorização prévia do locador (proprietário). Em caso de benfeitorias realizadas sem autorização, o locatário (inquilino) deverá restabelecer o estado original do imóvel ao término da locação. <a href="https://centraldeajudarotina.com.br/home/manutencaoereparos/04">Clique aqui</a> para saber mais sobre os Tipos de benfeitorias.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/manutencaoereparos/02',
    title: 'Como solicitar manutenção e reparos?',
    content:
      '<p>Para solicitar a realização de manutenção ou reparos para o imóvel do seu contrato, basta acessar o aplicativo da Rotina Imobiliária e abrir um ticket.</p><br/><p>Ainda não tem o app da Rotina Imobiliária? Basta acessar esses links para baixá-lo na loja de aplicativos do seu celular (<a href="https://play.google.com/store/apps/details?id=com.rotinaimobiliaria">Plays Store</a> ou <a href="https://apps.apple.com/br/app/rotina-imobili%C3%A1ria/id1547619530">Apple Store</a>). É fácil, rápido e deixa nosso contato mais próximo e eficiente.<p><br/><img src="/assets/3023-1.jpg"</p></p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> O imóvel do seu contrato apresenta algum problema? Você pode abrir um ticket em nosso aplicativo, mas antes dê uma olhada nas orientações abaixo, pois algumas falhas podem ser facilmente resolvidas.</p><br/><p>O imóvel está sem água</p><p>Verifique se os registros e relógio estão abertos e funcionando.</p><br/><p>Verifique se existem faturas em aberto que possam ocasionar corte no fornecimento de água.</p><br/><p>Entre em contato com o DMAE e verifique se consta alguma pendência no fornecimento para o imóvel ou manutenções na região que possam interferir na distribuição de água.</p><br/><p>O imóvel está sem energia</p><br/><p>Verifique se os disjuntores e padrão estão ligados e funcionando.</p><br/><p>Verifique se existem faturas em aberto que possam ocasionar corte no fornecimento de energia.</p><br/><p>Entre em contato com a Cemig e verifique se consta alguma pendência no fornecimento para o imóvel ou manutenções na região que possam interferir na distribuição de energia. Em caso negativo, abra um chamado diretamente nos canais de atendimento da empresa.</p><br/><p>Infiltração no imóvel</p><br/><p>A infiltração é um problema que pode afetar imóveis vizinhos, como quando o imóvel se trata de um apartamento. Por isso, para solucioná-la é preciso observar as particularidades.</p><br/><p>Quando o imóvel sob sua responsabilidade apresenta infiltração que se estende para imóveis vizinhos, ao abrir o ticket no aplicativo da Rotina Imobiliária você deve descrever o problema e informar o contato do morador do imóvel afetado para que a vistoria do prestador de serviços seja realizada em ambos.</p><br/><p>Nos casos em que o foco da infiltração seja no imóvel vizinho ou do condomínio, você deverá acionar o responsável pelo imóvel para que seja solucionado o problema. Não sendo resolvido em um prazo hábil, entre em contato conosco para que possamos dar as tratativas.</p><br/><p>Entupimentos na rede de água ou esgoto</p><br/><p>Ao início do seu contrato, o locatário (inquilino) tem prazo de 48 horas para realizar a vistoria de conferência, incluindo o funcionamento dos itens como encanamento de pias, vaso sanitário, escoamento de ralos, e funcionamento da caixa de gordura e rede de esgoto.</p><br/><p>Dentro do período de uma semana após a assinatura do contrato, caso ocorra entupimento de alguma rede será avaliada a causa, não sendo detectada responsabilidade do locatário (inquilino), a manutenção será realizada pela Rotina Imobiliária. Ocorrências após esse período a manutenção será de responsabilidade do locatário (inquilino).<p><br/><img src="/assets/3023-2.jpg"</p></p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Tem vazamento ou alguma rede entupida no imóvel? Temos uma indicação de prestador de serviço de nossa confiança. Elizar: 99129-0177</p><br/><p>Algumas ocorrências, entretanto, necessitam de mais atenção e procedimentos específicos para serem solucionadas. Nestes casos você deve abrir um Ticket em nosso aplicativo. Preparei um passo a passo ilustrado para você. Confira:</p><br/><br/><p><strong>Como abrir um Ticket?</strong></p><ol><li>Acesse o App Rotina Imobiliária, clique no menu serviços localizado na parte inferior no canto direito da tela;<p><br><img src="/assets/3062-1.png" class="Custom-Width"></p></li><li>Em seguida, clique no botão Suportes Locatário (inquilino) no canto superior esquerdo;<p><br><img src="/assets/3062-2.png" class="Custom-Width"></p></li><li>Clique no botão +TICKET;<p><br><img src="/assets/3062-3.png" class="Custom-Width"></p></li><li>Na sequência, selecione o tipo de serviço e o imóvel.<p><br><img src="/assets/3062-4.png" class="Custom-Width"><img src="/assets/3062-5.png" class="Custom-Width"></p></li><li>Depois preencha o campo com a descrição detalhada do problema.<p><br><img src="/assets/3062-6.png" class="Custom-Width"></p><br/></li></ol><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina</strong> É muito importante descrever de forma clara e objetiva o problema e em qual cômodo do imóvel ele se localiza (exemplo: parede do suíte, piso do banheiro, janela da sala, registro geral ou do chuveiro etc.) para que a equipe responsável pela manutenção não tenha dúvidas sobre o que precisa ser realizado. Após a descrição você deve inserir arquivos que evidenciem a ocorrência a ser solucionada. É importante inserir imagens com boa qualidade e que permitam a fácil identificação do problema. É possível inserir até 5 arquivos.<br/></p><br/><p><br>Após anexar as imagens clique no botão “ENVIAR”.<p><br><img src="/assets/3062-7.png" class="Custom-Width"></p></p><br/><p>Pronto! A solicitação de manutenção foi criada e a equipe responsável irá iniciar os procedimentos necessários. Uma nova tela irá aparecer com as informações que fornecidas por você. A partir desse momento você poderá acompanhar as etapas do atendimento diretamente no aplicativo a cada atualização.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/manutencaoereparos/03',
    title: 'Fiz a solicitação de reparos (ticket), e agora?',
    content:
      '<p>Sabemos que para mantermos o imóvel em boas condições durante o contrato de locação, eventualmente pode ser necessário realizar manutenção e reparos, seja no início ou no decorrer do período de locação. Por isso, pensando em oferecer agilidade e garantia do serviço, a Rotina Imobiliária estabeleceu uma parceria com a <a href="https://refera.com.br/">Refera</a>, empresa especializada em manutenção de imóveis, com uma equipe experiente para direcionar a avaliação e solução dos reparos necessários.<p><br/><img src="/assets/3024-1.jpg"</p></p><br/><p>Entenda como funciona aqui:</p><ol><li>Etapa: Avaliação dos reparos<p>Após a abertura do ticket em nosso aplicativo, seguindo este <a href="https://centraldeajudarotina.com.br/home/manutencaoereparos/01">passo a passo</a>, a equipe da Refera irá avaliar as informações fornecidas para entender a responsabilidade e urgência de cada uma delas, conforme nossa <a href="https://centraldeajudarotina.com.br/home/manutencaoereparos/01">Política de Responsabilidade</a> e então encaminhará um prestador de serviços ao imóvel.</p></li><li>Etapa: Negociação e Prazos<p>Nesta etapa, que acontece após a visita de avaliação, a Refera solicita 48 horas para realizar o orçamento.</p></li></ol><p>Quando for identificado que a ocorrência é de responsabilidade do locatário (inquilino), será encaminhado o orçamento dos serviços para os seus meios de contato registrados no contrato – e-mail, WhatsApp ou telefone. O início dos reparos só acontece após autorização do locatário (inquilino).</p><br/><p>Caso o locatário (inquilino) deseje realizar os reparos com prestador de serviço de sua escolha, deve enviar 02 (dois) orçamentos para a execução dos reparos que serão encaminhados para o locador (proprietário) para análise. Se aprovados, uma autorização por escrito será enviada ao locatário (inquilino) para que possa realizá-los.</p><br/><p>Caso o dano identificado for de responsabilidade do locador (proprietário), a equipe da Refera intermediará as tratativas, e o locador (proprietário) terá 72 horas para aprovar o orçamento. Somente mediante autorização do locador (proprietário) o serviço será realizado.</p><ol><li>Etapa: Execução<p>Após a autorização do responsável, o prestador de serviço direcionado pela REFERA tem 24 horas para agendar com o locatário (inquilino) a data e horário para executar os reparos.</p></li><li>Etapa: Finalização<p>Após a conclusão dos reparos, o locatário (inquilino) deve analisar o serviço para checar sua eficácia.</p></li></ol><p>Você receberá um comunicado da Refera solicitando a confirmação do serviço. Caso o problema não tenha sido solucionado, abra um novo ticket no aplicativo, explicando o ocorrido para que o prestador responsável possa avaliar e solucionar o problema.<p><br/><img src="/assets/3024-2.jpg"</p></p><br/><p>Informações importantes</p><br/><p>Para que os processos de manutenção aconteçam a Rotina Imobiliária precisa manter contato com o locatário (inquilino) e também com a pessoa responsável residente no imóvel caso não seja o responsável pelo contrato.</p><br/><p>Por isso, ao abrir um Ticket no aplicativo, informe o telefone de contato do responsável e os horários em que ele está no imóvel para o agendamento da visita da equipe de manutenção.</p><br/><p>Autorização para execução de serviços</p><br/><p>Para a execução de qualquer reparo, manutenção ou benfeitoria no imóvel é necessário possuir o registro da autorização do locador (proprietário) do imóvel.</p><br/><p>Ao realizar qualquer serviço sem autorização prévia, o locatário (inquilino) perde o direito a reembolso de valores caso o locatário (inquilino) não concorde com os procedimentos realizados no imóvel.</p></br></br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Atenção! Independentemente da quantidade de reparos necessários, abra apenas um Ticket, descrevendo no mesmo todos os serviços necessários. Ao abrir mais de um ticket simultaneamente você cria uma fila de informações no seu cadastro e pode atrasar os processos.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui</a>.</p>',
  },
  {
    id: '/home/manutencaoereparos/04',
    title: 'O que preciso saber sobre benfeitorias no imóvel?',
    content:
      '<p>Benfeitoria é toda obra realizada em imóveis com o propósito de melhorar sua estrutura, viabilizar a conservação e torná-lo mais bonito, confortável e funcional.<p><br/><img src="/assets/3025-1.jpg"</p></p><br/><p>Tipos de benfeitorias</p><br/><p>De acordo Código Civil existem três tipos de benfeitorias. São eles:</p><br/><p>Benfeitorias necessárias</p><br/><p>As benfeitorias necessárias são aquelas realizadas para garantir a conservação do imóvel e evitar sua deterioração. Por isso, são consideradas despesas de manutenção absolutamente essenciais.</p><br/><p>É o caso de reparos em telhados, conserto de sistemas hidráulicos para combater infiltrações, substituição de instalações elétricas, entre outros serviços fundamentais para manter o espaço seguro e funcional.</p><br/><p>Benfeitorias úteis</p><br/><p>As benfeitorias úteis têm como propósito aumentar ou facilitar o uso do imóvel, ampliando as possibilidades de circulação e uso do espaço. Alguns exemplos são a construção de uma garagem, instalação de telas e grades protetoras em janelas e portas, fechamento de varandas, instalação de sistemas de segurança, entre outras melhorias que otimizam a finalidade do imóvel.</p><br/><p>Benfeitorias voluptuárias</p><br/><p>As benfeitorias voluptuárias não são estritamente necessárias ou funcionais, pois não são direcionadas à preservação ou aumento da utilidade do imóvel. Elas são focadas na estética, tornando o espaço mais bonito e agradável para os moradores.</p><br/><p>Entram nessa categoria serviços como a troca de um piso, pinturas diferenciadas, implantação de colunas, cerca viva, obras de jardinagem etc. Qualquer alteração que é voltada para o embelezamento, que também é um critério de valorização da propriedade.</p><br/><p>Antes de iniciar qualquer benfeitoria no imóvel alugado, seja ela necessária para moradia ou até mesmo para aperfeiçoamento do imóvel, é imprescindível contatar a Rotina Imobiliária para que seja feita uma avaliação e posterior autorização do locador (proprietário) para execução das obras.</p><br><p>A autorização também é o momento em que, após acordo entre as partes, o locador (proprietário) pode conceder descontos sob o valor do aluguel.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/01',
    title: 'Passo a passo para rescisão do contrato de locação.',
    content:
      '<p>Primeiro, é preciso formalizar a sua intenção em desocupar o imóvel com 30 dias de antecedência. Você deve fazer isso através de um documento chamado Aviso de Desocupação.</p><br/><p>Clique aqui para saber mais sobre o <a href="https://centraldeajudarotina.com.br/home/rescisao/02">Aviso de Desocupação</a>.</p><br/><p>Realizar o reparo do imóvel para que seja entregue nas mesmas condições do início da locação, conforme o laudo da vistoria inicial. Lembrando que caso o imóvel tenha sido entregue com pintura nova, o mesmo deverá ser devolvido também com a pintura nova.<p><br/><img src="/assets/3026-1.jpg"</p></p><br/><p>Durante os 30 dias que antecedem a desocupação do imóvel, você deve agendar a vistoria final e a entrega das chaves.</p><br/><p>Clique nos links para saber mais sobre o <a href="https://centraldeajudarotina.com.br/home/rescisao/14">Agendamento da Vistoria Final</a> e <a href="https://centraldeajudarotina.com.br/home/rescisao/05">Entrega das Chaves</a>.</p><br/><p>A vistoria final do imóvel será realizada no dia e horário agendado por você. O imóvel deverá estar completamente desocupado, limpo e com a água e energia ligados.</p><br/><p>Você receberá por e-mail o laudo da vistoria e um orçamento, caso ainda existam reparos necessários no imóvel, em até 48 horas úteis após a visita da equipe de vistoria.</p><br/><p>Caso o imóvel ainda necessite de reparos, você pode optar fazer os reparos por conta própria ou através do prestador de serviço indicado pela Rotina Imobiliária, com base no orçamento enviado no seu e-mail.</p><br/><p><a href="https://centraldeajudarotina.com.br/home/rescisao/06">Clique aqui</a> para saber mais sobre reparos no imóvel.</p><br/><p>Se não houver necessidade de reparos, você deverá comparecer na Rotina Imobiliária no dia e horário agendados para fazer a entrega das chaves e o acerto final.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Todo este processo pode acontecer dentro do período de 30 dias do aviso de desocupação assim você evita pagar diárias de aluguel após o vencimento do aviso.</p><br/><p><a href="https://centraldeajudarotina.com.br/home/rescisao/02">Clique aqui</a> para saber mais sobre o Aviso de Desocupação.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/02',
    title: 'O que é aviso de desocupação?',
    content:
      '<p>O aviso de desocupação é o documento que formaliza a intenção do cliente de desocupar o imóvel. A comunicação deve ser feita com 30 dias de antecedência da data pretendida.<p><br/><img src="/assets/3027-1.jpg"</p></p><br/><p>Durante este período será cobrado o aluguel integral independente do imóvel estar ocupado ou não.</p><br/><p>Caso o processo de rescisão ultrapasse os 30 dias serão cobradas diárias de aluguel até a efetiva entrega das chaves.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> O processo completo para a rescisão deverá seguir os 6 passos. <a href="https://centraldeajudarotina.com.br/home/rescisao/01">Clique aqui</a> para saber o Passo a Passo para a Rescisão do Contrato de Locação.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/03',
    title: 'Como enviar o aviso de desocupação?',
    content:
      '<p>O aviso de desocupação deve ser formalizado por escrito e enviado para o e-mail site@rotina.com.br. O locatário (inquilino) deve utilizar o <a href="/assets/doc/home/rescisao/AVISO_DE_DESOCUPAÇÃO_DO_IMOVEL.docx">modelo de formulário padrão</a> do aviso de desocupação <p><br/><img src="/assets/3028-1.jpg"</p></p><br/><p>É importante lembrar que o prazo de 30 dias do aviso de desocupação começará a contar a partir do envio por e-mail do documento assinado pelo locatário (inquilino).</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> O processo completo para a rescisão deverá seguir os 6 passos. <a href="https://centraldeajudarotina.com.br/home/rescisao/01">Clique aqui</a> para saber o passo a passo para a Rescisão do Contrato de Locação.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/04',
    title:
      'O que acontece se o locatário (inquilino) enviar o aviso de desocupação e não desocupar o imóvel?',
    content:
      '<p>Se por algum motivo o imóvel não for entregue em até 50 dias a partir da data de envio do aviso de desocupação, o locatário (inquilino) precisará efetuar um novo aviso e cumprir o prazo de 30 dias.<p><br/><img src="/assets/3029-1.jpg"</p></p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina">Dica da Tina: O processo completo para a rescisão deverá seguir os 6 passos. <a href="https://centraldeajudarotina.com.br/home/rescisao/01">Clique aqui</a> para saber o passo a passo para a Rescisão do Contrato de Locação.</p><br/><p><a href="https://centraldeajudarotina.com.br/home/rescisao/14">Clique aqui</a> para saber mais sobre o agendamento da vistoria final e entrega das chaves.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/05',
    title: 'Como agendar a entrega das chaves?',
    content:
      '<p>O agendamento da entrega das chaves deve ser realizado através dos nossos canais de atendimento.</p><br/><p>A data será definida de acordo com a disponibilidade de agenda de atendimento da Rotina Imobiliária, e deve respeitar um prazo mínimo de 2 dias úteis após a realização da vistoria final.<p><br/><img src="/assets/3030-1.jpg"</p></p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Lembrando que o processo completo para a rescisão deverá seguir os 6 passos. <a href="https://centraldeajudarotina.com.br/home/rescisao/01">Clique aqui</a> para saber o passo a passo para Rescisão do Contrato de Locação.</p><br/><p>Para a realização dos reparos identificados, o locatário (inquilino) poderá optar pela execução particular ou contratar o serviço terceirizado indicado pela Rotina Imobiliária.</p><br/><p>Optando por realizar os reparos de maneira particular, o prazo para início das obras é de 3 dias corridos a partir da data do envio do laudo da vistoria final.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/06',
    title:
      'Como é feita a cobrança do aluguel durante o período de reparos no imóvel?',
    content:
      '<p>O locatário (inquilino) é responsável pelo pagamento do aluguel durante o cumprimento do aviso de 30 dias até a efetiva entrega das chaves do imóvel e fechamento da rescisão.</p><br/><p>Caso o locatário (inquilino) opte por realizar os reparos com prestador terceirizado indicado pela Rotina Imobiliária, o aluguel será cobrado até a entrega das chaves ou data final do aviso de desocupação.<p><br/><img src="/assets/3031-1.jpg"</p></p><br/><p>Optando pela realização particular dos reparos é responsabilidade do locatário (inquilino) agendar a vistoria de conferência através dos nossos canais de atendimento ao finalizar as obras. Após o recebimento do laudo de aprovação por e-mail é possível solicitar o agendamento para a entrega as  chaves e efetivar a rescisão.</p><br/><p>Na hipótese de não aprovação dos reparos por nossos especialistas, o locatário (inquilino) continuará na posse do imóvel  até que o mesmo esteja em conformidade com a vistoria inicial.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> O agendamento da vistoria de conferência é realizado de acordo com a disponibilidade da equipe responsável. Se a sua disponibilidade de horários é limitada e você deseja finalizar o processo de rescisão durante o cumprimento do aviso, agende com antecedência. Assim, você garante a data desejada e evita os custos de diárias adicionais ao aluguel.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/07',
    title: 'O que acontece se os reparos não forem realizados?',
    content:
      '<p>Se o locatário (inquilino) não realizar os reparos identificados na vistoria final em até 7 dias após a realização da mesma, poderá o locador (proprietário) efetivar os reparos e realizar a cobrança do locatário (inquilino).<p><br/><img src="/assets/3032-1.jpg"</p></p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/08',
    title:
      'Quando o locatário (inquilino) pode rescindir o contrato de locação?',
    content:
      '<p>O locatário (inquilino) pode solicitar a rescisão do contrato de locação a qualquer momento, ciente da cobrança de multa rescisória, nas condições específicas abaixo:</p><ul><li>Caso a rescisão seja solicitada após a assinatura do contrato e antes do início da cobrança do aluguel: Será aplicada multa rescisória no valor de 1 aluguel integral.</li><li>Após o início do contrato e antes do período de 12 meses*: Será aplicada multa rescisória de 3 vezes o valor do aluguel, proporcional ao período que falta para completar os 12 meses.</li><p>*Esse prazo está definido em contrato, avalie o que foi acordado.</p><li>Solicitando após 12 meses*, porém sem formalizar o aviso de desocupação. Será aplicada multa rescisória no valor de 1 aluguel integral.</li><p>*Esse prazo está definido em contrato, avalie o que foi acordado.<p><br/><img src="/assets/3033-1.jpg"</p></p></ul><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Lembrando que o processo completo para rescisão deverá seguir os 6 passos. <a href="https://centraldeajudarotina.com.br/home/rescisao/01">Clique aqui</a> para saber o passo a passo para Rescisão do Contrato de Locação.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/09',
    title:
      'De acordo com o contrato de locação, quando há inserção de multa rescisória?',
    content:
      '<p>Existe a possibilidade de isenção da multa rescisória quando:</p><ul><li>O locatário (inquilino) solicitar a rescisão após o prazo mínimo de 12 meses de aluguel, respeitando 30 dias de aviso de desocupação;</li><li>Houver sentença de despejo;</li><li>O locatário (inquilino) for transferido de cidade pelo empregador, desde que apresente carta de transferência da empresa para análise. Nesta ocasião, o aviso de desocupação de 30 dias ainda deverá ser cumprido para evitar cobranças de multas adicionais. Durante o período do aviso é cobrado o valor integral do aluguel.</li></ul><p><br/><img src="/assets/3034-1.jpg"</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/10',
    title: 'Qual a forma de pagamento dos débitos da rescisão?',
    content:
      '<ul><li>À vista através de boleto bancário;</li><li>Em até 12 vezes no cartão de crédito (para essa opção, há juros de parcelamento de acordo com a operadora do cartão).</li></ul><p><br/><img src="/assets/3035-1.jpg"</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/11',
    title: 'Como é calculada a multa rescisória do contrato de locação?',
    content:
      '<p>Caso o locatário (inquilino) não cumpra o período mínimo de 12 meses do contrato, o valor da multa rescisória será de 3 vezes o valor do aluguel, proporcional ao período que falta para completar os 12 meses.  Confira como o cálculo é realizado:</p><br/><p>3 x valor mensal de aluguel / período mínimo de contrato X (período mínimo de contrato - [menos] número de dias vividos).</p><br/><p>Para facilitar, acompanhe um exemplo.</p><br/><p>Considerando que o valor do aluguel é de R$ 1.000,00 e o locatário (inquilino) solicita a rescisão com 6 meses de contrato, o cálculo a ser feito é:</p><br/><p>3 x R$1.000,00/12 meses x (12 meses - 6 meses) = R$ 3.000,00/12 meses x 6 meses = R$ 1.500,00</p><br/><p>Assim, o valor da multa rescisória a ser paga pelo locatário (inquilino) é de R$ 1.500,00.</p><p><br/><img src="/assets/3036-1.jpg"</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/12',
    title:
      'Como são feitos os cálculos das contas de consumo (IPTU, contas de luz, água e esgoto, taxas de lixo) na rescisão?',
    content:
      '<p>O locatário (inquilino) deve solicitar o desligamento¹ das contas de consumo registradas em seu nome diretamente nas empresas responsáveis, realizando o pagamento das faturas em aberto incluindo as leituras de consumo final.<p><br/><img src="/assets/3037-1.jpg"</p></p><br/><p>O desligamento dos serviços garante que não sejam realizadas cobranças no período em que o imóvel estiver desocupado.</p><br/><p>As contas em nome do locador (proprietário) do imóvel ou outro representante, cálculo de consumo final e saldos residuais serão apuradas pela Rotina Imobiliária e cobradas do locatário (inquilino) no ato da rescisão contratual.</p><br/><p><strong>Importante:</strong> Após solicitar o desligamento dos serviços, acompanhe o status junto as empresas responsáveis, pois saldos residuais podem ser cobrados.</p><br/><p>Conforme regras da Lei Geral de Proteção de Dados (LGPD), a Rotina Imobiliária não pode solicitar o desligamento dos serviços em nome do locatário (inquilino). Para auxiliar o procedimento, deixamos em nossos canais os principais contatos das empresas responsáveis pelos de serviços.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/13',
    title:
      'O que acontece se alguma fatura de contas de consumo ficar pendente após a finalização do contrato de locação?',
    content:
      '<p>Se houver contas de consumo de responsabilidade do locatário (inquilino) emitidas após a rescisão, elas serão cobradas posteriormente.<p><br/><img src="/assets/3038-1.jpg"</p></p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Para facilitar, separei algumas formas de contato das empresas para você.</p><br/><p>Energia - Cemig</p><br/><p>Online: Segunda via Cemig</p><br/><p>WhatsApp: (31) 3506-1160</p><br/><p>Central de Relacionamento com Clientes: 116</p><br/><p>Agências físicas: Pontos de atendimento Cemig</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/14',
    title: 'Como agendar a vistoria final?',
    content:
      '<p>O agendamento deve ser feito através dos nossos canais de atendimento, em um prazo mínimo de 7 dias úteis de antecedência da data pretendida. A agenda será definida conforme a disponibilidade do locatário (inquilino) e equipe de vistoria.</p><br/><p>Na data da vistoria o imóvel deve estar completamente desocupado, limpo e com a água e energia ligados.<p><br/><img src="/assets/3039-1.jpg"</p></p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Agende a vistoria final quando você formalizar o aviso de desocupação.</p><br/><p>O processo completo para a rescisão deverá seguir os 6 passos. <a href="https://centraldeajudarotina.com.br/home/rescisao/01 ">Clique aqui</a> para saber o passo a passo para a Rescisão do Contrato de Locação.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/15',
    title: 'Como funciona a vistoria final da Rotina Imobiliária?',
    content:
      '<p>Na data e horário previamente agendados, o locatário (inquilino) deve receber o vistoriador no imóvel. Ele irá comparar a vistoria inicial com o estado atual do imóvel gerando o laudo final, que será encaminhado ao locatário (inquilino) por e-mail.</p><br/><p>É importante que o locatário (inquilino) esteja atento ao recebimento do e-mail e confira a caixa de spam/lixo eletrônico.</p><br/><p>O prazo para contestação do conteúdo da vistoria, que deverá ser manifestado por escrito, é de 24 horas a contar da data do envio do e-mail.</p><p><br/><img src="/assets/3040-1.jpg"</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/16',
    title:
      'O locatário (inquilino) pode ser representado por terceiros no momento da vistoria final?',
    content:
      '<p>Sim, o locatário (inquilino) poderá ser representado por terceiros, tendo ciência de  que só poderá contestar o conteúdo da vistoria final comprovando as divergências identificadas.</p><p><br/><img src="/assets/3041-1.jpg"</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/17',
    title:
      'O que acontece se o locatário (inquilino) não comparecer na vistoria final?',
    content:
      '<p>Caso o locatário (inquilino) não compareça no dia e horário marcados para a vistoria e não realize a remarcação com antecedência mínima de 01 hora, será cobrada uma taxa de visita no valor de 10%  sobre o valor do salário mínimo.</p><p><br/><img src="/assets/3042-1.jpg"</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/rescisao/18',
    title:
      'O que acontece se o imóvel não estiver desocupado no momento da vistoria?',
    content:
      '<p>A vistoria deverá ser reagendada de acordo com disponibilidade de equipe responsável, ficando o locatário (inquilino) ciente da possibilidade de cobrança de diárias adicionais de aluguel caso o prazo do aviso não seja cumprido.</p><p><br/><img src="/assets/3043-1.jpg"</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/areadoclienteeaplicativolocador/01',
    title: 'Como realizo meu primeiro acesso?',
    content:
      '<p>Seja bem-vindo a Rotina Imobiliária. É um grande prazer ter você como nosso cliente. E por valorizar nosso relacionamento pensamos a todo instante em como facilitar seu acesso aos nossos serviços.</p><br/><p>Na área do cliente você encontra todas as informações do seu contrato. Entre e fique à vontade.</p><br/><p>Confira o passo a passo para acessar a ÁREA DO CLIENTE pela primeira vez:</p><ol><li>Digite rotina.com.br em seu navegador e clique na opção ÁREA DO CLIENTE localizada no canto superior direito.<p><br/><img src="/assets/3044-1.png"</p></li><li>Selecione a opção FAZER CADASTRO e digite o CPF ou CNPJ do titular do contrato no campo indicado.<p><br/><img src="/assets/3044-2.png"</p></li><li>Em seguida clique em RECEBER CHAVE POR E-MAIL.<p><br/><img src="/assets/3044-3.png"</p></li><li>Você receberá a chave de acesso no e-mail cadastrado em nosso sistema.</li><li>Copie e cole o código no campo indicado e crie a sua senha do portal.</li><li>Após digitar todos os dados solicitados e inserir sua nova senha clique no botão CADASTRAR.</li></ol><p>Cadastro realizado, você tem acesso as informações do seu contrato e solicitações de serviço na palma da sua mão.</p><br/><p>Para acessar os canais de autoatendimento é importante manter seu e-mail de cadastro atualizado em nosso sistema. Se precisar alterar, entre em contato através do nosso WhatsApp e digite “OUTROS ASSUNTOS”.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Escolha uma senha segura e guarde na memória. A senha definida na área do cliente será a mesma do aplicativo Rotina Imobiliária.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui</a>.</p>',
  },
  {
    id: '/home/areadoclienteeaplicativolocador/02',
    title: 'Quais são as funcionalidades da área do cliente?',
    content:
      '<p>Confira aqui tudo o que você encontra disponível na ÁREA DO CLIENTE. As opções estarão disponíveis de acordo com o modelo do seu contrato.</p><br/><p>Sou locador (proprietário). Aqui você encontra as seguintes opções:</p><ul><li>Meus Imóveis - Locador</li><li>Meus Imóveis - Vendedor</li><li>Contratos - Locador</li><li>Demonstrativo de IR</li><li>Extrato Locador</li><li>Solicitar Serviços - Locador e locatário</li><li>Vistoria Locador</li></ul><p>Sou locatário (inquilino). Aqui você encontra as seguintes opções:</p><ul><li>Meus Imóveis - Locatário</li><li>Contratos - Locatário</li><li>Boletos</li><li>Demonstrativo de IR</li><li>Extrato Locatário</li><li>Solicitar Serviços - Locador e locatário</li><li>Vistoria Locatário</li></ul><p>Você tem acesso ao seu contrato, boletos de aluguel, demonstrativo de imposto de renda e extrato de locação (exclusivos para proprietários) e solicitação de serviços como manutenção e vistorias.<p><br/><img src="/assets/3045-1.jpg"</p></p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui</a>.</p>',
  },
  {
    id: '/home/areadoclienteeaplicativolocador/03',
    title: 'Como redefino minha senha?',
    content:
      '<p>Esqueceu sua senha de acesso? Não se preocupe, é só seguir o passo a passo abaixo.</p><ol><li>Digite rotina.com.br em seu navegador e clique na opção ÁREA DO CLIENTE localizada no canto superior direito.<p><br/><img src="/assets/3046-1.png"</p></li><li>Selecione a opção ESQUECI MINHA SENHA e digite o CPF ou CNPJ do titular do contrato no campo indicado em seguida clique em RECUPERAR.<p><br/><img src="/assets/3046-2.png"></p><p><br/><img src="/assets/3046-3.png"</p></li><li>Você vai receber no e-mail cadastrado em nosso sistema um link seguro para redefinição de senha.</li><li>Acesse o e-mail, clique no link e defina a sua nova senha.</li><li>Seu acesso está reestabelecido e você já pode usar as funcionalidades disponíveis para o seu contrato.</li></ol><p>Para acessar os canais de autoatendimento é importante manter seu e-mail de cadastro atualizado em nosso sistema. Se precisar alterar, entre em contato através do nosso WhatsApp e digite “OUTROS ASSUNTOS”.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> A senha na área do cliente é a mesma utilizada no APP Rotina Imobiliária. Escolha uma senha segura e guarde na memória.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui</a>.</p>',
  },
  {
    id: '/home/areadoclienteeaplicativolocador/04',
    title: 'Como realizo meu primeiro acesso?',
    content:
      '<p>Seja bem-vindo a Rotina Imobiliária. É um grande prazer ter você como nosso cliente. E por valorizar nosso relacionamento pensamos a todo instante em como facilitar seu acesso aos nossos serviços.</p><br/><p>No APP Rotina Imobiliária você encontra todas as informações do seu contrato. Entre e fique à vontade.</p><br/><p>Confira o passo a passo para acessar o APP ROTINA IMOBILIÁRIA pela primeira vez:</p><ol><li>Baixe o aplicativo gratuitamente no google play ou apple store.<p><br/><img src="/assets/3047-1.png" class="Custom-Width"></p></li><li>Faça o seu cadastro no site rotina.com.br. Se tiver dúvidas sobre o processo consulte aqui.</li><li>Insira CPF do titular do contrato e senha cadastrada. Lembre-se, são os mesmos dados de acesso à área do cliente.<p><br/><img src="/assets/3047-2.png" class="Custom-Width"><img src="/assets/3047-3.png" class="Custom-Width"></p></li></ol><p>Agora é só aproveitar todas as facilidades e ter os serviços da Rotina na palma da sua mão.</p><br/><p>Para acessar os canais de autoatendimento é importante manter seu e-mail de cadastro atualizado em nosso sistema. Se precisar alterar, entre em contato através do nosso WhatsApp e digite “OUTROS ASSUNTOS”</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> Escolha uma senha segura e guarde na memória. A senha definida na área do cliente será a mesma do aplicativo Rotina Imobiliária.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui</a>.</p>',
  },
  {
    id: '/home/areadoclienteeaplicativolocador/05',
    title: 'Quais são as funcionalidades do aplicativo?',
    content:
      '<p>Confira aqui tudo o que você encontra disponível no APP ROTINA IMOBILIÁRIA. As opções estarão disponíveis de acordo com o modelo do seu contrato.</p><br/><p>Sou locador (proprietário). Aqui você encontra as seguintes opções:</p><ul><li>Meus Imóveis – Locador / Vendedor</li><li>Meus Imóveis - Indicadores</li><li>Contratos – Locador</li><li>Serviços</li><ul><li>Suportes locador</li><li>Extrato Locador</li><li>Demonstrativo de IR</li></ul></ul><p>Sou locatário (inquilino). Aqui você encontra as seguintes opções:</p><ul><li>Meus Imóveis</li><li>Boletos</li><li>Contratos - Locatário</li><li>Serviços</li><ul><li>Suportes locatário</li><li>Extrato locatário</li></ul><p>Você tem acesso ao seu contrato, boletos de aluguel, demonstrativo de imposto de renda e extrato de locação (exclusivos para proprietários) e solicitação de serviços como manutenção e vistorias.<p><br/><img src="/assets/3048-1.jpg"></p></p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui</a>.</p>',
  },
  {
    id: '/home/areadoclienteeaplicativolocador/06',
    title: 'Como redefino minha senha?',
    content:
      '<p>Esqueceu sua senha de acesso? Não se preocupe, é só seguir o passo a passo abaixo.</p><ol><li>Abra o app Rotina Imobiliária em seu celular</li><li>Digite o CPF ou CNPJ do titular do contrato de aluguel e selecione a opção ESQUECI MINHA SENHA<p><br/><img src="/assets/3049-1.png" class="Width-3"><img src="/assets/3049-2.png" class="Width-3"><img src="/assets/3049-3.png" class="Width-3"></p></li><li>Você vai receber no e-mail cadastrado em nosso sistema um link seguro para redefinição de senha</li><li>Acesse o e-mail, clique no link e defina a sua nova senha</li><li>Seu acesso está reestabelecido e você já pode usar as funcionalidades disponíveis para o seu contrato.</li></ol><p>Para acessar os canais de autoatendimento é importante manter seu e-mail de cadastro atualizado em nosso sistema. Se precisar alterar, entre em contato através do nosso WhatsApp e digite “OUTROS ASSUNTOS”</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Dica da Tina:</strong> A senha do app Rotina Imobiliária é a mesma utilizada na área do cliente. Escolha uma senha segura e guarde na memória.</p><br/><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui</a>.</p>',
  },
  {
    id: '/home/quemsomos/01',
    title: 'Um pouco sobre a Rotina Imobiliária. ',
    content:
      '<p>A Rotina é uma imobiliária tradicional e experiente, com modelo digital e totalmente descomplicada.</p><br/><p>Pioneira da atividade no triângulo mineiro, com mais de 50 anos de história, conquistou a experiência necessária para assumir a liderança no mercado imobiliário de Uberlândia e se tornou a melhor imobiliária da cidade.</p><br/><p>Utilizamos a tecnologia para proporcionar uma experiência segura em todas as etapas do processo de venda e locação, pois acreditamos que morar e investir devem ser momentos únicos e bem vividos.</p><br/><p>A Rotina Imobiliária conta com um time focado, que oferece um atendimento personalizado, garantindo a melhor experiência do cliente.</p><br/><p>Somos uma empresa inovadora. Oferecemos tecnologia para processos mais ágeis e soluções rentáveis.</p><br/><p>O que nos move e inspira é o propósito de realizar sonhos e conectar pessoas. É um prazer nos conectarmos diariamente com sonhos, lares e vidas.</p><br/><p>Em todos esses anos, facilitamos conexões e entregamos as melhores soluções aos nossos clientes. São anos de confiança, respeito e compromisso com resultados. Aqui, acreditamos no valor dos relacionamentos duradouros, construídos com base na transparência e empatia.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/quemsomos/02',
    title: 'Conheça o Grupo VIBRO.',
    content:
      '<p>O Grupo VIBRO é um grupo formado por empresas de médio e grande porte, em diversos segmentos. Marcas bem-sucedidas e processos robustos que fazem do Grupo VIBRO uma companhia forte e preparada para transformar qualquer setor que se disponibiliza atuar. Além da Rotina Imobiliária, no Grupo VIBRO você encontra parceiros como:</p><ul><li>Alugar Imóveis – Imobiliária digital, jovem e antenada com as principais tendências do mercado. Com atendimento de qualidade e 100% eficiente, tem em seu DNA a inovação constante.</li><li>Virtual Conection – Empresa com mais de 13 anos de história, especializada em CX, UX, inteligência artificial e chatbots.</li><li>Bom Jesus – Empresa especialista em material básico para construção, composto por areia, brita, terra, serviços de limpeza de terrenos, caçambas, tira-entulho entre outras mais.</li></ul><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/contato/01',
    title: 'Como entro em contato com a Rotina?',
    content:
      '<p>Você pode falar conosco pelo WhatsApp: (34) 3239-5000 e, nesse mesmo número, você consegue ligar para um de nossos especialistas.</p><br/><p>Também pode enviar uma mensagem <a href="https://wa.me/553432395000" class="Wpp">clicando aqui</a> e vamos responder o mais rápido possível.<p><br><img src="/assets/3052-1.jpg"></p></p><br/><p>A Rotina Imobiliária também tem atendimento presencial. Você pode escolher ir até uma de nossas unidades:</p><br/><p>Unidade 01: Av. Afonso Pena, 1535, Bairro Nossa Senhora Aparecida, Uberlândia – Mg.</p><br/><p>Unidade 02: Av. Belarmino Cotta Pacheco, 621, Bairro Santa Mônica, Uberlândia – Mg.</p><br/><p>Nas sedes e em todos os canais, nosso horário de atendimento é: De segunda a sexta, das 8h às 18h; Aos sábados, das 8h às 12h;</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/contato/02',
    title: 'A Rotina tem redes sociais?',
    content:
      '<p>Sim, você pode acompanhar nossas novidades e atividades através das redes sociais clicando aqui: <a href="https://www.facebook.com/rotinaimobiliaria/">Facebook</a>, <a href="">Twitter</a>, <a href="https://www.instagram.com/rotinaimobiliaria/">Instagram</a> e <a href="">Tik Tok</a><p><br/><img src="/assets/3053-1.jpg"></p></p><br/><p>Também temos um blog bem completo que reúne artigos sobre o setor imobiliário <a href="https://rotinaimobiliaria.blogspot.com/">(confira aqui)</a>.</p><br/><p>Para assistir aos nossos vídeos, siga-nos no <a href="https://www.youtube.com/user/rotinaimobiliaria">Youtube</a>.</p><br/><p>É jornalista e quer falar com a nossa área de comunicação? Então envie e-mail para marketing@rotina.com.br </p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/contato/03',
    title: 'Quais são e onde ficam as sedes da Rotina?',
    content:
      '<p>A Rotina Imobiliária tem atendimento presencial. Você pode escolher ir até uma de nossas unidades para falar com um de nossos especialistas:</p><br/><p>Unidade 01: Av. Afonso Pena, 1535, Bairro Nossa Senhora Aparecida, Uberlândia – Mg.</p><br/><p>Unidade 02: Av. Belarmino Cotta Pacheco, 621, Bairro Santa Mônica, Uberlândia – Mg.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/indicacaodeimoveis/01',
    title: 'Como funciona o programa “Indiquei você”?',
    content:
      '<p>O Indiquei Você é um programa de indicação da Rotina Imobiliária. A cada indicação que você fizer de um imóvel residencial ou comercial, você pode ganhar até R$60,00. Demais né? Lembrando que para ganhar, o imóvel precisa converter em captação.<p><br/><img src="/assets/3055-1.jpg"></p></p><br/><p>É rápido e sem burocracia! Após indicar o imóvel e ele ser captado, você ganha na hora! Direto na sua conta! Sem letrinhas miúdas e complicações.</p><br/><p>Você pode fazer a indicação de duas formas: Acessar o APP da Rotina Imobiliária, através do nosso site, preencher a indicação com os dados de contato do proprietário e o endereço completo do imóvel.</p><br/><p>Ou, você pode também compartilhar um link via redes sociais e WhatsApp. O link você encontra também no App da Rotina Imobiliária e assim que o proprietário cadastrar o imóvel utilizando seu link e for publicado, você já pode ganhar!</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/indicacaodeimoveis/02',
    title: 'Quais são os meus ganhos por indicação?',
    content:
      '<p>O valor do bônus pode variar entre R$40,00 até R$60,00.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/indicacaodeimoveis/03',
    title: 'Como acompanho minhas indicações e meus ganhos?',
    content:
      '<p>Acompanhe todas as indicações que fizer e fique sabendo em tempo real o status das indicações através do App da Rotina Imobiliária. O App você encontra em nosso site ou na loja de aplicativos do seu celular. Por lá, você consegue gerenciar como quer receber os avisos das suas indicações e seus prêmios.</p><p><br/><img src="/assets/3057-1.jpg"></p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/antecipacaodealuguel/01',
    title: 'Como funciona o programa “Antecipe seu aluguel”?',
    content:
      '<p>A antecipação de aluguel é um diferencial que você encontra na Rotina Imobiliária. Essa modalidade tem como propósito, ajudar proprietários em momentos que precisam de dinheiro fácil, rápido e sem burocracia. Possibilitando que essas pessoas possam se estabilizar, organizar, resolver alguma urgência ou realizar sonhos.<p><br/><img src="/assets/3058-1.jpg"></p></p><br/><p>O programa antecipa até 12x do aluguel dos proprietários que tem imóveis cadastrados na Rotina Imobiliária. Após a aprovação, o dinheiro está na conta em até 72h, sem burocracias, de forma prática. Dessa forma, nossos clientes têm mais flexibilidade financeira, seja para investir ou lidar com despesas inesperadas.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/antecipacaodealuguel/02',
    title: 'A antecipação de aluguel é um empréstimo?',
    content:
      '<p>Não. Ao contratar um empréstimo, é necessário fazer o pagamento de juros altos que acumulam ao longo do tempo de duração do empréstimo e assim, fazem com que o pagamento total seja maior que o valor recebido.</p><br/><p>No caso da antecipação de aluguel, não existe nenhuma cobrança de juros. O único pagamento que deve ser feito é o desconto do valor da imobiliária, no momento da antecipação. Portanto, a antecipação é uma opção mais barata.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/antecipacaodealuguel/03',
    title: 'Tenho vários imóveis, posso antecipar mais de um contrato?',
    content:
      '<p>Sim! O proprietário pode antecipar mais de um contrato se estiver dentro de alguns requisitos, para que a solicitação ocorra da melhor forma possível. Veja:</p><ul><li>Os contratos dos imóveis precisam estar dentro dos critérios de elegibilidade;</li><li>O proprietário precisa fazer operações de antecipações uma de cada vez;</li><li>Todas as antecipações devem passar pela análise;</li><li>Não exceder o valor de R$35mil mensais, que é uma limitação estabelecida pela própria receita federal.</li></ul><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
  {
    id: '/home/antecipacaodealuguel/04',
    title:
      'É necessário alienar meu imóvel para realização a antecipação de aluguel?',
    content:
      '<p>Não. Hoje o processo de antecipação de aluguel é bem simples, o processo é sem burocracias, com análise e desembolso em até 72 horas. Afirmando que, não é feita restrição cadastral, nem alienação de imóvel, além de tudo, não é necessário comprovar renda.</p><br><p class="P-Tina"><img src="/assets/Tina.png" class="Tina"><strong>Mensagem da Tina:</strong> Qualquer dúvida, sugestão ou problema, basta entrar em contato comigo por WhatsApp <a href="https://wa.me/553432395000" class="Wpp">clicando aqui.</a></p>',
  },
];

const routes = {
  topic: [
    '/home/areadoclienteeaplicativo',
    '/home/contasdeconsumo',
    '/home/pagamentos',
    '/home/manutencaoereparos',
    '/home/rescisao',
    '/home/areadoclienteeaplicativolocador',
    '/home/quemsomos',
    '/home/contato',
    '/home/indicacaodeimoveis',
    '/home/antecipacaodealuguel',
  ],
  content: [
    '/home/areadoclienteeaplicativo/01',
    '/home/areadoclienteeaplicativo/02',
    '/home/areadoclienteeaplicativo/03',
    '/home/areadoclienteeaplicativo/04',
    '/home/areadoclienteeaplicativo/05',
    '/home/areadoclienteeaplicativo/06',
    '/home/contasdeconsumo/01',
    '/home/contasdeconsumo/02',
    '/home/contasdeconsumo/03',
    '/home/contasdeconsumo/04',
    '/home/contasdeconsumo/05',
    '/home/contasdeconsumo/06',
    '/home/pagamentos/01',
    '/home/pagamentos/02',
    '/home/pagamentos/03',
    '/home/pagamentos/04',
    '/home/pagamentos/05',
    '/home/pagamentos/06',
    '/home/pagamentos/07',
    '/home/pagamentos/08',
    '/home/pagamentos/09',
    '/home/manutencaoereparos/01',
    '/home/manutencaoereparos/02',
    '/home/manutencaoereparos/03',
    '/home/manutencaoereparos/04',
    '/home/rescisao/01',
    '/home/rescisao/02',
    '/home/rescisao/03',
    '/home/rescisao/04',
    '/home/rescisao/05',
    '/home/rescisao/06',
    '/home/rescisao/07',
    '/home/rescisao/08',
    '/home/rescisao/09',
    '/home/rescisao/10',
    '/home/rescisao/11',
    '/home/rescisao/12',
    '/home/rescisao/13',
    '/home/rescisao/14',
    '/home/rescisao/15',
    '/home/rescisao/16',
    '/home/rescisao/17',
    '/home/rescisao/18',
    '/home/areadoclienteeaplicativolocador/01',
    '/home/areadoclienteeaplicativolocador/02',
    '/home/areadoclienteeaplicativolocador/03',
    '/home/areadoclienteeaplicativolocador/04',
    '/home/areadoclienteeaplicativolocador/05',
    '/home/areadoclienteeaplicativolocador/06',
    '/home/quemsomos/01',
    '/home/quemsomos/02',
    '/home/contato/01',
    '/home/contato/02',
    '/home/contato/03',
    '/home/indicacaodeimoveis/01',
    '/home/indicacaodeimoveis/02',
    '/home/indicacaodeimoveis/03',
    '/home/antecipacaodealuguel/01',
    '/home/antecipacaodealuguel/02',
    '/home/antecipacaodealuguel/03',
    '/home/antecipacaodealuguel/04',
  ],
};

export {
  linksTenantHelp,
  landlordHelp,
  about,
  topics,
  content,
  questions,
  routes,
};
