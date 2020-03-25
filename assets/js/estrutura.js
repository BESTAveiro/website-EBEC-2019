$(document).ready(function () {

    var portuguese = {
        navbar: {
            img: "assets/img/logos/roldana-white.png",
            img2: "assets/img/logos/best-aveiro-white.png",
            lingua: "EN",
            page: "index-en.html",
            dropdowns: [
                {
                    title: "Sobre a EBEC",
                    menu: [
                        {nome: "EBEC Aveiro", link: "#ebec"},
                        {nome: "Edições Anteriores", link: "#ebecAnt"}, 
                        {nome: "Programa",link: "#programa" }, 
                        {nome:"Inscrição",link: "#apply"},
                        /*
                                                {nome:"Testemunhos", link:"#testemunhos"}
                        */
                    ]
                },
                {
                    title: "Mais sobre a EBEC",
                    menu: [
                        {nome:"FAQ", link:"#faqs"}, 
                        /*{nome:"Júri", link:"#juri"},*/
                        {nome:"Parceiros", link: "#partners"} , 
                        {nome: "Equipa", link: "#team"}, 
                        {nome:"Torne-se nosso Parceiro", link: "#parceria"}, 
                        {nome: "Contactos",link: "#contactos"}
                    ]
                },
                {
                    title: "A Organização", 
                    menu: [
                        {nome:"Sobre o BEST Aveiro",link: "#best"}, 
                        {nome:"Informações", link: "#info"}
                    ]
                }
            ]

        },
        entrada: {
            logo: "assets/img/logos/ebec-aveiro-color.png",
            title: "12, 14, 15 e 18 de março"
        },
        ebecAveiro: {
            icones: {
                title1: "Ronda Local",
                title2: "Modalidades",
                /*
                                {title: "Formação", classe: "fa-chalkboard-teacher"},
                */
                title3: "Programa",
                title4: "Ronda Nacional"
            },
            seccoes: {
                seccao1: {
                    ps: [
                        "É com prazer que o <b style='color:orange'>BEST Aveiro</b> organiza anualmente " +
                        "uma das 88 fases locais do projeto EBEC.",
                        "Com a décima edição da competição a ocorrer em <b style='color:orange'>março de 2020</b>, evento que tem vindo a contar com um " +
                        "grande número de participantes em todas as edições, consideramo-lo um dos eventos de maior destaque " +
                        "do BEST Aveiro. Direcionado aos alunos da Universidade de Aveiro, a EBEC Aveiro pretende ser um " +
                        "momento onde criatividade, desafio, energia, flexibilidade e espírito de equipa são postos em prática.",
                        "No sentido de promover uma melhor relação entre estudantes e empresas, a EBEC Aveiro organizará, " +
                        "à parte da competição, uma <span style='color:orange'>feira de empresas</span> juntamente " +
                        "com uma formação complementar para os nossos participants, que irão ocorrer no dia 12 de março.",
                        "Para qualquer dúvida, podes-te informar melhor na secção FAQ ou contactar diretamente um dos nossos membros ou pelo contacto da associação. "
                    ]
                },
                seccao2: {
                    title: "Modalidades",
                    modalidades: [
                        {
                            title: "Case Study",
                            corpo: "Os participantes terão a oportunidade de resolver dois casos de estudo fornecidos por empresas, " +
                                "que deverão consistir num problema que poderá advir da necessidade da empresa em inovar ou " +
                                "otimizar processos. Cada um dos casos de estudo deverá estar preparado para corresponder a " +
                                "12 horas de prova, sendo entregue aos participantes no início da competição."
                        },
                        {
                            title: "Team Design",
                            corpo: "Os participantes terão a oportunidade de construir um protótipo que solucione um desafio, " +
                                "colocado por uma empresa, com acesso a recursos limitados. Os protótipos serão posteriormente " +
                                "avaliados por um júri com base em parâmetros previamente definidos pela organização."
                        }
                    ]
                },
                seccao3: {
                    title: "Programa",
                    schedule0: {
                            diaSemana: "Quinta", diaMes: "12 março",
                            eventos: [
                                {
                                    hora: "11:00 - 18:00",
                                    nome: "Feira de Empresas",
                                    local: "Complexo Pedagógico, Universidade de Aveiro"
                                },
                                {
                                    hora: "Horário a anunciar",
                                    nome: "Formação Complementar",
                                    local: "Complexo Pedagógico, Universidade de Aveiro"
                                }
                            ]
                    },
                    schedule1: {
                            diaSemana: "Sábado", diaMes: "14 março",
                            eventos: [
                                {hora: "09:30 - 10:30", nome: "Check-in", local: "Universidade de Aveiro"},
                                {hora: "10:30 - 12:30", nome: "Sessão de Abertura", local: "Universidade de Aveiro"},
                                {hora: "12:30 - 13:00", nome: "Picture", local: "Universidade de Aveiro"},
                                {hora: "13:00 - 14:30", nome: "Almoço", local: "Refeitório do Crasto, Universidade de Aveiro"},
                                {hora: "14:30 - 00:00", nome: "Competição", local: "ESSUA, Universidade de Aveiro"}
                            ]
                    },
                    schedule2: {
                            diaSemana: "Domingo", diaMes: "15 março",
                            eventos: [
                                {hora: "00:00 - 14:30", nome: "Competição", local: "Universidade de Aveiro"}
                            ]
                    },
                    schedule3: {
                            diaSemana: "Quarta", diaMes: "18 março",
                            eventos: [
                                {hora: "13:30 - 18:00", nome: "Apresentações", local: "Universidade de Aveiro"},
                                {hora: "18:00 - 19:00", nome: "Sessão de encerramento", local: "Universidade de Aveiro"}
                            ]
                    }
                }
                    /*[
                    "O BEST Aveiro volta a organizar mais uma edição dos <b class=\"text-orange\">BEST Training Days</b>, " +
                    "da EBEC Aveiro 2020, onde terás a oportunidade de desenvolver as tuas capacidades numa formação.",
                    "A formação decorrerá durante a tarde do dia <b class=\"text-orange\">12 de março</b> e é restrita " +
                    "aos participantes.",
                    "Todos os participantes do <b class=\"text-orange\">BEST Training Day</b> receberão um certificado " +
                    "de participação na formação."
                    ]*/,
                seccao4: [
                    "A EBEC Portugal é a final nacional da competição de Engenharia do BEST.",
                    "A EBEC Portugal é uma Ronda Nacional organizada por 5 Grupos Locais do BEST de norte a sul do país. " +
                    "Na fase Nacional irão competir os vencedores das diferentes rondas locais, de 5 Universidades Portuguesas." +
                    "Este ano, O <b style='color:orange'>BEST Aveiro</b> terá a honra de sediar este evento.",
                    "Para mais informações visita o <a class='text-orange' href='http://ebecportugal.pt/'>site</a>."
                ]
            }
        },
        edicoesAnteriores: {
            sectionHeading: "Edições Anteriores",
            videos: [
                "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FEBEC.aveiro%2Fvideos%2F403975390199860%2F",
                "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FEBEC.aveiro%2Fvideos%2F1347546375345790%2F"
            ]
        },
        programa: {
            title: "Programa",
            schedule0: {
                    diaSemana: "Quinta", diaMes: "12 março",
                    eventos: [
                        {
                            hora: "11:00 - 18:00",
                            nome: "Feira de Empresas",
                            local: "Complexo Pedagógico, Universidade de Aveiro"
                        },
                        {
                            hora: "Horário a anunciar",
                            nome: "Formação Complementar",
                            local: "Complexo Pedagógico, Universidade de Aveiro"
                        }
                    ]
            },
            schedule1: {
                    diaSemana: "Sábado", diaMes: "14 março",
                    eventos: [
                        {hora: "09:30 - 10:30", nome: "Check-in", local: "Universidade de Aveiro"},
                        {hora: "10:30 - 12:30", nome: "Sessão de Abertura", local: "Universidade de Aveiro"},
                        {hora: "12:30 - 13:00", nome: "Picture", local: "Universidade de Aveiro"},
                        {hora: "13:00 - 14:30", nome: "Almoço", local: "Refeitório do Crasto, Universidade de Aveiro"},
                        {hora: "14:30 - 00:00", nome: "Competição", local: "ESSUA, Universidade de Aveiro"}
                    ]
            },
            schedule2: {
                    diaSemana: "Domingo", diaMes: "15 março",
                    eventos: [
                        {hora: "00:00 - 14:30", nome: "Competição", local: "Universidade de Aveiro"}
                    ]
            },
            schedule3: {
                    diaSemana: "Quarta", diaMes: "18 março",
                    eventos: [
                        {hora: "13:30 - 18:00", nome: "Apresentações", local: "Universidade de Aveiro"},
                        {hora: "18:00 - 19:00", nome: "Sessão de encerramento", local: "Universidade de Aveiro"}
                    ]
            }
        },
        apply: {
            sectionHeading: "Inscrição",
            sectionSubheading: "Para te inscreveres só precisas de efetuar os seguintes passos:",
            corpo: [
                " Lê o regulamento que se encontra <a href='assets/Regulamento.pdf' target='_blank'>aqui</a>.",
                "Efetua a tua inscrição a partir desta <a target='_blank' href='https://www.best.eu.org/event/localDetails.jsp?event=o538jqi&fbclid=IwAR3YVlMmhDv3fughYlUgQPMKH3UPoZUpQgKrtmuWPR9Y1ehi5JgPXj54lW0'>página</a>.",
                /*"Regista-te no site do BEST. Podes fazê-lo " +
                "<a target='_blank' href='https://www.best.eu.org/account/registration.jsp'>aqui</a>.",
                " Efetua a pré-inscrição na EBEC Aveiro 2020. Podes fazê-lo " +
                "<a href=\"https://www.best.eu.org/event/localDetails.jsp?event=o538j3f\" target=\"_blank\">aqui</a>.",*/
                " Indica o nome da tua equipa. Todos os elementos da equipa devem indicar o mesmo nome.",
                " Preenche os dados pedidos. Todos os campos deverão ser preenchidos.",/*, à exceção do campo \"Motivation Letter\", " +
                "que é de preenchimento facultativo.* Clica em 'Apply' para finalizares esta parte.",*/
                "Já tens equipa? Então terminaste a tua pré-inscrição para a EBEC Aveiro 2020. Brevemente irás " +
                "receber um e-mail de confirmação de inscrição com mais informação sobre o evento."
            ]
        },
        testimonials: {
            sectionHeading: "Teste<span class='hidden-lg hidden-md hidden-sm'>-<br></span>munhos",
            sectionSubheading: "Professores e Participantes",
            testemunhos: [
                {
                    foto: "assets/img/testimonials/1.jpg",
                    corpo: "Como estudante de engenharia posso dizer que a EBEC é dos maiores e mais enriquecedores eventos " +
                    "que conheço, não só para os participantes como para a organização. A ronda local da Universidade de Aveiro " +
                    "é um exemplo perfeito da qualidade e impacto deste projeto internacional, o facto de vermos estudantes a " +
                    "aprenderem e divertirem-se, por causa de um problema que lhes apresentamos, é o que dá ao BEST Aveiro o " +
                    "significado para, ano após ano, continuar a fazer crescer esta competição.",
                    final: "Pedro Gomes<br>Coordenador da EBEC Aveiro 2019"
                },
                {
                    foto: "assets/img/testimonials/2.jpg",
                    corpo: "Ouvi falar pela primeira vez da competição por amigos que já tinham participado, e fiquei logo " +
                    "entusiasmado com a ideia. Após participar a primeira vez, adorei a experiência e voltei a repetir, " + 
                    "participando no ano seguinte. A EBEC é uma competição onde, para além de nos desafiar em termos de pensamento " +
                    "e criatividade, e de nos “obrigar” a trabalhar em equipa, também temos a oportunidade de conhecer e interagir " +
                    "com outros estudantes, tendo sempre a sua dose de divertimento. É uma experiência única e uma boa oportunidade " + 
                    "para quem procura desafiar-se a si próprio.",
                    final: "Gonçalo Antunes<br>Vencedor da EBEC Aveiro 2019<br>Modalidade: Team Design"
                },
                {
                    foto: "assets/img/testimonials/3.jpg",
                    corpo: "Participei pela primeira vez na EBEC em 2019 com a equipa 'Quem Quer Namorar com um Agricultor?'. " +
                    "Contra todas as expectativas impostas por um nome do género, alcançámos a final europeia na qual vencemos um dos " + 
                    "dias da competição. Todo o percurso foi uma experiência profundamente benéfica. Tanto a nível pessoal, pelas excelentes " +
                    "pessoas que tive a oportunidade de conhecer, como a nível do desenvolvimento de competências em trabalho de equipa, " +
                    "gestão de tempo, apresentação de ideias e consumo desmedido de cafés. Aconselho vivamente a participação. ",
                    final: "Carlos Nicolau<br>Vencedor da EBEC Aveiro 2019<br>Modalidade: Case Study"
                },
                {
                    foto: "assets/img/testimonials/5.jpg",
                    corpo: "A minha participação como júri na EBEC Aveiro tem sido um " +
                        "privilégio, enquanto docente universitária. Além da boa disposição sempre presente, tive o prazer " +
                        "de participar num evento bem organizado! Para além do rigor e empenho exigidos e demonstrados na " +
                        "resolução de questões técnico-científicas, fiquei, essencialmente, agradada com a qualidade humana " +
                        "dos participantes e da organização.<br>Na EBEC Aveiro tem-se conseguido fomentar o gosto pela liderança, " +
                        "mas também pelo espírito de equipa e de entreajuda. Os desafios multidisciplinares são vencidos " +
                        "por todos, as competências de cada participante sobressaem, permitindo criar valor acrescentado " +
                        "de forma quase natural e descontraída!<br>Numa época onde se criticam tanto os métodos de ensino " +
                        "atualmente utilizados, é, sem dúvida, uma lufada de ar fresco, conseguir perceber que algo se faz " +
                        "bem! Desejo, sinceramente, todo o sucesso para as edições futuras! ",
                    final: "Professora Mónica Oliveira<br>Departamento de Engenharia Mecânica<br>Universidade de Aveiro"
                },
                {
                    foto: "assets/img/testimonials/4.jpg",
                    corpo: " Na Universidade de Aveiro, as atividades do BEST Aveiro, " +
                        "nomeadamente no contexto das competições EBEC, têm sido claros exemplos de sucesso. Por um lado, " +
                        "mobilizam um número considerável de pessoas, entre participantes, colaboradores diversos e assistência. " +
                        "Por outro lado, apresentam-se como excelentes iniciativas no âmbito de ciências, tecnologia e " +
                        "engenharia. Os desafios propostos promovem um evidente crescimento dos envolvidos, em questões " +
                        "tão diversas quanto a aplicação prática de conhecimentos científicos ou a imaginação e criatividade " +
                        "exigidos.<br>Os participantes beneficiam ainda das exigências de um trabalho de equipa com objetivos " +
                        "bem definidos e um prazo muito apertado, assim como de um contacto direto com representantes de " +
                        "empresas e instituições de relevo.<br>Este é, aliás, um dos marcadores essenciais do mérito desta " +
                        "organização, sempre apoiada por diversas entidades que constatam o dinamismo e a qualidade do BEST " +
                        "Aveiro ",
                    final: "Professor João Oliveira<br>Departamento de Engenharia Mecânica<br>Universidade de Aveiro"
                }
            ]

        },
        faqs: {
            sectionHeading: "FAQ",
            sectionSubHeading: "Frequently Asked Questions",
            vetor: [
                {
                    p: "Quando tempo dura a competição?",
                    r: "Tens 24 horas para construir o teu protótipo, caso participes no <i>Team Design</i>, ou arranjar uma " +
                        "solução para o problema de <i>Case Study</i>. A apresentação do teu projeto será apenas na quarta-feira " +
                        "seguinte(18 de março)."
                },
                {
                    p: "Há quantos membros por equipa?",
                    r: "Cada equipa é constituída <u>sempre</u> por 4 elementos."
                },
                {
                    p: "Quando é que saberemos qual é a prova que teremos que realizar?",
                    r: "A prova será apresentada na sessão de abertura, no entanto, o guião será apenas distribuído quando a " +
                        "competição se iniciar."
                },
                {
                    p: "Podemos sair da Universidade durante a prova?",
                    r: "Apenas serão permitidas deslocações externas ao local da prova exclusivamente com a aprovação do coordenador " +
                        "do evento."
                },
                {
                    p: "Que penalizações existem durante a prova para os participantes?",
                    r: "Caso se verifique o incumprimento das regras definidas para a competição, a equipa poderá ser penalizada " +
                        "na pontuação da sua prova ou desqualificada. A equipa poderá também estar sujeita à perda da caução."
                },
                {
                    p: "Paga-se para participar na competição?",
                    r: "Não, cada equipa terá apenas de deixar uma caução. O valor ser-te-á devolvido no final da competição, " +
                        "após a sessão de encerramento. Esta caução tem por objetivo prevenir quaisquer estragos causados."
                },
                {
                    p: "Temos direito a alimentação durante o fim de semana da competição?",
                    r: "Sim, ao longo do fim de semana terás direito a todas as refeições enquanto estiveres a participar na " +
                        "prova. Terás também disponível um coffee break contínuo durante todo o fim-de-semana."
                },
                {
                    p: "É possível descansar durante a prova?",
                    r: "Sim, haverá uma \"sala de descanso\" para os participantes poderem descansar e até dormir se assim o " +
                        "desejarem. Estará também disponível uma sala de recreação (sala que irá contar com algumas atividades " +
                        "de lazer), para usar durante os intervalos das provas, para que os participantes descontraiam um pouco."
                },
                {
                    p: "Quem vai avaliar as provas?",
                    r: "O júri é composto por professores e elementos do BEST com experiência em competições, dependendo do " +
                        "teor da prova. Existe ainda a possibilidade de integrarem o júri representantes das empresas parceiras."
                },
                {
                    p: "Como vão ser avaliados os projetos?",
                    r: "Os projetos vão ser avaliados conforme o guião de cada prova, atempadamente fornecido aos participantes."
                },
                {
                    p: "Com quem devo tirar dúvidas durante a prova?",
                    r: "Só podes tirar dúvidas com pessoas designadas para o efeito: o responsável pela prova, pelo coordenador " +
                        "do evento e pela equipa de tópico."
                },
                {
                    p: "Tenho frequência no dia da prova. E agora?",
                    r: "Deves contactar a organização para adequar da melhor forma possível a calendarização da tua prova no " +
                        "dia de avaliação."
                },
            ]
        },
        juri: {
            sectionHeading: "Júri",
            sectionSubHeading: "Quem irá avaliar as provas"
        },
        partners: {
            sectionHeading: "Parceiros",
            sectionSubHeading: "Parceiros Bronze",
            sectionSubHeading2: "Parceiros Silver",
        },
        team: {
            sectionHeading: "Equipa",
            equipa: {
                MO: {role: "Coordenador da EBEC Aveiro 2020"},
                TP:{role: "Responsável de Tópico" },
                CR:{role: "Responsável de Relações Empresariais"},
                MKT:{role: "Responsável de Marketing"}
            },
            equipa2: {
                IT:{role: "Responsável de Tecnologias de Informação"},
                LOG:{role: "Responsável de Logística"},
                PAX:{role: "Responsável de Participantes"}
            }
        },
        becomePartner: {
            sectionHeading: "Torne-se Nosso parceiro",
            corpo: [
                "Ao tornar-se nosso parceiro, a sua empresa estará integrada na organização da EBEC Aveiro 2020, com uma " +
                "equipa dinâmica e empenhada em satisfazer as necessidades de desenvolvimento extracurricular dos estudantes, " +
                "bem como os interesses da sua empresa. Terá a oportunidade de participar numa feira de empresas e num " +
                "cocktail network.",
                "<span class=\"big-number text-blue\">•</span>Marque presença numa feira de empresas e exponha a sua empresa, produtos e projetos. Terá a oportunidade " +
                "de trocar experiências com os estudantes num ambiente informal.",
                "<span class=\"big-number text-blue\">•</span>Beneficie do acesso aos currículos disponibilizados, de forma opcional, pelos participantes do evento " +
                "e estudantes da Universidade de Aveiro presentes na sessão de encerramento.",
                "<span class=\"big-number text-blue\">•</span>Direito a trabalhar em sintonia com o Topic Group podendo propor provas, tanto de Case Study como de " +
                "Team Design, que serão realizadas pelos participantes.",
                "Como nosso parceiro, beneficiará de interações estreitas com estudantes da universidade de Aveiro, através " +
                "de uma feira de empresas e um cocktail network, conseguindo recolher diversas perceções através de " +
                "uma intensa partilha de conhecimentos.",
                "A sua empresa aumentará ainda a visibilidade entre os estudantes da Universidade de Aveiro, conhecidos " +
                "pelo seu dinamismo, inovação e empreendedorismo, através de promoção disponibilizada pelo BEST Aveiro.",
                "Caso esteja interessado em ser nosso parceiro, contacte diretamente nossos " +
                "<a style=\"color: #428BFF\" href=\"#contactos\">membros</a> ou através do contacto da " +
                "<a style=\"color: #428BFF\" href=\"#info\">associação</a>."
            ]
        },
        contacts: {
            sectionHeading: "Contactos",
            people: {
                MO: {
                    nome: "Samuel G. Figueiredo",
                    role: "Coordenador da EBEC Aveiro 2020"
                },
                presi: {
                    nome: "Diogo Prata",
                    role: "Presidente do BEST Aveiro"
                },
                cr: {
                    nome: "Pedro Vilares",
                    role: "Responsável de Relações Empresariais"
                }
            }
        },
        bestAveiro: {
            sectionHeading: "Sobre o BEST Aveiro",
            corpo: [
                "Fundado oficialmente em 2010, o Grupo Local BEST Aveiro, sediado na Universidade de Aveiro, conta com " +
                "cerca de 45 membros ativos das áreas de Ciências, Tecnologias e Engenharias. Ao longo dos seus 8 anos " +
                "de história distinguiu-se pela diversidade e qualidade de eventos organizados. Estes abrangem os estudantes " +
                "a nível local, nacional e europeu, focando-se ainda no próprio desenvolvimento dos membros da Associação " +
                "para que estes estejam em constante progressão e aprendizagem.",
                "O BEST Aveiro oferece aos estudantes a oportunidade de participar em eventos que visam a complementaridade " +
                "dos seus estudos, organizando anualmente uma competição na área científico-tecnológica, formações em Soft " +
                "ou Hard skills, um curso sazonal e um simpósio de inovação tecnológica. Com o objetivo de estreitar " +
                "a relação entre estudantes e empresas, o BEST Aveiro organiza ainda uma feira de empresas anual, integrada " +
                "na competição EBEC, oferecendo aos estudantes oportunidades relevantes para o seu futuro profissional " +
                "e às empresas maior facilidade de comunicação e recrutamento da comunidade académica."
            ]
        },
        info: {
            mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.9809366135064!2d-8.659694684735314!3d40.630302379340826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a2aa4e1bda2b%3A0xd70b976749475485!2sUniversidade+de+Aveiro!5e0!3m2!1spt-PT!2spt!4v1561662996255!5m2!1spt-PT!2spt",
            infos: [
                {
                    chave: "Morada",
                    valor: "Incubadora de Empresas da Universidade de Aveiro<br/>Campus Universitário de Santiago, Edifício 1<br/>" +
                        "3810-193 Aveiro<br/>Portugal",
                    classe: "fa-home"
                },
                {chave: "Telefone", valor: "+(351) 925 478 764", classe: "fa-phone"},
                {
                    chave: "Email",
                    valor: "<a href='mailto:aveiro@BEST.eu.org'>aveiro@BEST.eu.org</a>",
                    classe: "fa-envelope"
                },
            ],
            sectionHeading: "Infor<span class=\"hidden-lg hidden-md hidden-sm\">-<br></span>mações",
            icones: [
                {ref: "http://bestaveiro.web.ua.pt/", classe: "fa-globe"},
                {ref: "https://www.facebook.com/EBEC.aveiro/", classe: "fa-facebook"},
                {ref: "https://instagram.com/best.aveiro/", classe: "fa-instagram"},
                {ref: "https://www.linkedin.com/company/best-aveiro", classe: "fa-linkedin-in"},
                {ref: "https://www.flickr.com/photos/bestaveiro", classe: "fa-flickr"}
            ]
        },
        footer: {
            img: "assets/img/partners/annual/ua-2.gif",
            img2: "assets/img/partners/annual/ipdj.png",
            img3: "assets/img/partners/annual/ua.png"
        }

    };

    var vm = {
        corpo: ko.observable(portuguese),
    };
    ko.applyBindings(vm);
});
