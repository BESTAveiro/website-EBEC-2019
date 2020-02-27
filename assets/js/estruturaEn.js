$(document).ready(function () {

    var portuguese = {
        navbar: {
            img: "assets/img/logos/roldana-white.png",
            img2: "assets/img/logos/best-aveiro-white.png",
            lingua: "PT",
            page: "index.html",
            dropdowns: [
                {
                    title: "About EBEC",
                    menu: [
                        {nome: "EBEC Aveiro", link: "#media"},
                        {nome: "Preview Editions", link: '#ebecAnt'},
                        {nome: "Program", link: '#programa'},
                        {nome: "Subscribing", link: '#apply'},
                        {nome: "Testimonials", link: '#testemunhos'}
                    ]
                },
                {
                    title: "More About EBEC",
                    menu: [
                        {nome: "FAQ", link: "#faqs"},
                        /*{nome: "Jury", link: "#juri"},*/
                        {nome: "Partners", link: "#partners"},
                        {nome: "The Team", link: "#equipa"},
                        {nome: "Become Our Partner", link: "#parceria"},
                        {nome: "Contacts", link: "#contactos"}]
                },
                {
                    title: "The Organization",
                    menu: [
                        {nome: "About the BEST Aveiro", link: "#best"},
                        {nome: "Information", link: "#info"}]
                }
            ]

        },
        entrada: {
            logo: "assets/img/logos/ebec-aveiro-color.png",
            title: "March<br> 12th, 14th, 15th and 20th"
        },
        ebecAveiro: {
            sectionHeading: "EBEC Aveiro",
            icones: [
                {title: "Local Round", classe: "fa-map-pin"},
                {title: "Modalities", classe: "fa-tools"},
                {title: "Formation", classe: "fa-chalkboard-teacher"},
                {title: "National Round", classe: "fa-award"},
            ],
            seccoes: {
                seccao1: {
                    ps: [
                        "<b style=\"color:orange\">BEST Aveiro</b> has the pleasure to announce the EBEC Aveiro 2020, one " +
                        "of the 88 local stages of the EBEC project, with the duration of 24 hours.",
                        " With the 10th edition happening at <b style=\"color:orange\">March of 2020</b>, the event has been " +
                        "counting with a bigger number of participants each year. Considered one of the most outstanding " +
                        "events of BEST Aveiro, conceptualized with an eye at the students of the University of Aveiro, " +
                        "EBEC Aveiro aims to be a moment where creativity, challenge, energy, flexibility and team spirit " +
                        "are put into practice.",
                        "In order to promote a better relationship between students and companies, the EBEC Aveiro organization " +
                        "will promote, apart from the competition, a job fair, on March 12th, followed by a complementary training to the participants.",
                        "By any doubt, you can check the FAQ section or contact directly one of our members or through the contact of our organization."
                    ],
                    img: "assets/img/event/ebec-aveiro.png"
                },
                seccao2: {
                    title: "Modalities",
                    modalidades: [
                        {
                            title: "Case Study",
                            corpo: "Participants will have the opportunity to resolve two case studies " +
                                "provided by companies, which should consist in a problem that may arise from the company's " +
                                "need to innovate or optimize processes. Each of the case studies should be prepared to " +
                                "take up to 12 hours to solve, being delivered to the participants at the beginning of the competition."
                        },
                        {
                            title: "Team Design",
                            corpo: "Participants will have the opportunity to build a prototype that solves a challenge " +
                                "posed by a company with access to limited resources. The prototypes will then be evaluated " +
                                "by a jury based on parameters previously defined by the organization."
                        }
                    ]
                },
                seccao3: [
                    "The BEST Aveiro will organize again one more edition of the <b class=\"text-orange\">BEST Training Days</b>, " +
                    "from EBEC Aveiro 2019, where you will have the opportunity to develop your abilities in a formation.",
                    "The formation will occur during the afternoon of <b class='text-orange'>March 15th</b> and it is restricted " +
                    "to the participants.",
                    "All participants on the formation will receive a participation certificate."
                ],
                seccao4: [
                    "The EBEC Portugal is the national final competition of engineering of BEST.",
                    "The EBEC Portugal is a National Round organized by 5 Local Groups of BEST from north to south of the " +
                    "country, where the winners of the local EBECs will compete against each other. " +
                    "This year, BEST Aveiro has the honor to host this event.",
                    "For more informations, visit the <a class=\"text-orange\" href=\"http://ebecportugal.pt/\" " +
                    "target=\"_blank\">site</a>."
                ]
            }
        },
        edicoesAnteriores: {
            sectionHeading: "Preview Editions",
            videos: [
                "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FEBEC.aveiro%2Fvideos%2F403975390199860%2F",
                "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FEBEC.aveiro%2Fvideos%2F1347546375345790%2F"
            ]
        },
        programa: {
            title: "Program",
            schedule0: {
                    diaSemana: "Thursday", diaMes: "March 12th",
                    eventos: [
                        {
                            hora: "11:00 - 18:00",
                            nome: "Job Fair",
                            local: "Complexo Pedagógico, University of Aveiro"
                        },
                        {
                            hora: "Still to announce",
                            nome: "Complementary Training",
                            local: "Complexo Pedagógico, University of Aveiro"
                        }
                    ]
            },
            schedule1: {
                    diaSemana: "Saturday", diaMes: "March 14th",
                    eventos: [
                        {hora: "09:30 - 10:30", nome: "Check-in", local: "University of Aveiro"},
                        {hora: "10:30 - 12:30", nome: "Opening Session", local: "University of Aveiro"},
                        {hora: "12:30 - 13:00", nome: "Picture", local: "University of Aveiro"},
                        {hora: "13:00 - 14:30", nome: "Lunch", local: "Crasto refectory, University of Aveiro"},
                        {hora: "14:30 - 00:00", nome: "Competition", local: "ESSUA, University of Aveiro"}
                    ]
            },
            schedule2: {
                    diaSemana: "Sunday", diaMes: "March 15th",
                    eventos: [
                        {hora: "00:00 - 14:30", nome: "Competition", local: "ESSUA, University of Aveiro"}
                    ]
            },
            schedule3: {
                    diaSemana: "Wednesday", diaMes: "March 18th",
                    eventos: [
                        {hora: "13:30 - 18:00", nome: "Presentations", local: "University of Aveiro"},
                        {hora: "18:00 - 19:00", nome: "Closing Session", local: "University of Aveiro"}
                    ]
            }
        },
        apply: {
            sectionHeading: "Subscribing",
            sectionSubheading: "To apply you only need to follow this steps:",
            corpo: [
                " Read the regulament that can be found <a href=\"../Regulamento.pdf\" target=\"_blank\">here</a>.", 
                " Sign up through this <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSfQgBWjzjrGFyrmDBls5tbtn-gmQzKGUkOjhV2aOoPDtd4tJA/viewform'>form</a>.",
                /*" Sign up on BEST Website. You can do it " +
                "<a href=\"https://www.best.eu.org/account/registration.jsp\" target=\"_blank\">here</a>.",
                " Do a pre-registration on EBEC Aveiro 2020. You can do it " +
                "<a href=\"https://www.best.eu.org/event/localDetails.jsp?event=o538j3f\" target=\"_blank\">here</a>.",*/
                " Write the name of your team. All the members of the team have to write the same name.",
                " Fill all the fields.", /*with exception of 'Motivation Letter', which it's optional. Click on 'Apply' to finish " +
                "this part.",*/
                " Already have a team? So you finished your pre-registration to EBEC Aveiro 2020. Soon you will receive an " +
                "email with confirmation of registration and more information about the event."
            ]
        },
        testimonials: {
            sectionHeading: "Testi<span class=\"hidden-lg hidden-md hidden-sm\">-<br></span>monials",
            sectionSubheading: "Professors and Participants",
            testemunhos: [
                {
                    foto: "assets/img/testimonials/1.jpg",
                    corpo: "As an engineering student I can say that EBEC is one of the greatest and most enriching events I know, " +
                    "not only for the participants but also for the organization. The local round of the University of Aveiro is a " +
                    "perfect example of the quality and impact of this international project, the fact that we see students learning " +
                    "and having fun, because of a problem that we presented to them, is what gives to BEST Aveiro the meaning for, year " +
                    "after year, to continue to grow this competition.",
                    final: "Pedro Gomes<br>Coordinator of EBEC Aveiro 2019"
                },
                {
                    foto: "assets/img/testimonials/2.jpg",
                    corpo: "I first heard about the competition from friends who had already participated, and I was immediately excited " +
                    "by the idea. After participating the first time, I loved the experience and went back to participating in the following " +
                    "year. EBEC is a competition where, in addition to challenging us in terms of thinking and creativity, and “forcing” us to " +
                    "work as a team, we also have the opportunity to meet and interact with other students, always having their dose of fun. It " +
                    "is a unique experience and a good opportunity for those looking to challenge themselves.",
                    final: "Gonçalo Antunes<br>Winner of EBEC Aveiro 2019<br>Modality: Team Design"
                },
                {
                    foto: "assets/img/testimonials/3.jpg",
                    corpo: " I participated for the first time in EBEC in 2019 with the team 'Who Wants to Flirt with a Farmer?'. Against all " +
                    "expectations imposed by a name like that, we reached the European final in which we won one of the days of the competition. " +
                    "The whole journey was a profoundly beneficial experience. Both personally, due to the excellent people I had the opportunity to " +
                    "meet, as well as the development of skills in teamwork, time management, presentation of ideas and excessive consumption of " +
                    "coffees. I strongly advise participation.",
                    final: "Carlos Nicolau<br>Winner of EBEC Aveiro 2019<br>Modality: Case Study"
                },
                {
                    foto: "assets/img/testimonials/5.jpg",
                    corpo: "My participation as jury of EBEC Aveiro last year has been a privilege, as a universitary teacher. " +
                        "Besides the always present good disposition, I had such a great pleasure to participate in a very " +
                        "organized event! Beyond the rigor and commitment demanded and showed in the resolution of technical-scientific " +
                        "questions, i felt, essentially, pleased with the human quality of the participants and the organization.<br>" +
                        "At the EBEC Aveiro, it has been achieved to foment the leadership's liking, and also to the spirit " +
                        "of the team and support. The multidisciplinary challenges are won by everybody, the participants' " +
                        "competences stand out, allowing to create a increased value in analmost natural and relaxed way!<br>" +
                        "In a time, when the current education methods are really criticized, it is, with no doubt, a fresh " +
                        "air blow, being able to realize that something is really well done! I wish, sincerely, all the " +
                        "success to the future editions!",
                    final: "Professor Mónica Oliveira<br>Mecanic Engineering Department<br>University of Aveiro"
                },
                {
                    foto: "assets/img/testimonials/4.jpg",
                    corpo: "At the University of Aveiro, BEST Aveiro's activities, particularly in the context of EBEC, " +
                        "there have been clear examples of success. On the one hand, they mobilize a considerable number " +
                        "of people, among participants, diverse collaborators and assistance. On the other hand, they present " +
                        "themselves as excellent initiatives in science, technology and engineering. The proposed challenges " +
                        "promote a clear growth of the involved students in issues as diverse as the practical application " +
                        "of scientific knowledge or the imagination and creativity required.<br/>Participants also benefit " +
                        "from the demands of teamwork with well defined objectives and a tight deadline, as well as direct " +
                        "contact with representatives of companies and relevant institutions.<br/>This is, moreover, one " +
                        "of the essential markers of merit of this organization, always supported by several entities that " +
                        "confirm the dynamism and quality of BEST Aveiro",
                    final: "Professor João Oliveira<br>Mechanical Engineering Department<br>University of Aveiro"
                }
            ]

        },
        faqs: {
            sectionHeading: "FAQ",
            sectionSubHeading: "Frequently Asked Questions",
            sectionSubHeading1: "TEAM DESIGN",
            sectionSubHeading2: "CASE STUDY",
            vetor: [
                {
                    p: "How long does the competition last?",
                    r: "You have 24 hours to build your prototype or get a solution for your <i>Case Study</i>. " +
                        "The presentation of your project will be on the next wednesday (march 18th)."
                },
                {
                    p: "How many members are there per team?",
                    r: "Each team must <u>always</u> have 4 members."
                },
                {
                    p: "When will we know what challenge we will have?",
                    r: "The challenge will be presented at the opening session, however, the script will only be distributed " +
                        "when the competition starts."
                },
                {
                    p: "Can we leave the University during the challenge?",
                    r: "Only external movements from the test location will be allowed exclusively with the approval of " +
                        "the event coordinator."
                },
                {
                    p: "What penalties exist during the test for participants?",
                    r: "In case of infringement of the rules established for the competition, the team may be penalized " +
                        "in the score of their challenge or disqualified. The team may also lose their caution."
                },
                {
                    p: "Do we have to pay to participate in the competition?",
                    r: "No, each team will only have to leave a caution. The value will be returned to you at the end of " +
                        "the competition after the closing session. This caution is intended to prevent any damage caused."
                },
                {
                    p: "Are we provide with food during the competition's weekend?",
                    r: "Yes, through the weekend you will be provide with all meals while you are taking part in the competition. " +
                        "You will also have a continuous coffee break available through the weekend."
                },
                {
                    p: "Can we rest during the challenge?",
                    r: "Yes, there will be a \"rest room\" for participants to rest and even sleep if they wish. There " +
                        "will also be a recreation room (room that will count on some leisure activities), to use during " +
                        "the intervals of the challenge, so that the participants relax a little."
                },
                {
                    p: "Who will evaluate the challenges?",
                    r: "The jury consists on teachers, elements of BEST with experience in competitions, depending on the " +
                        "content of the challenge. There is also the possibility of joining the jury representatives of " +
                        "the partner companies."
                },
                {
                    p: "How will the projects be evaluated?",
                    r: "The projects will be evaluated according to the script of each challenge, in time provided to the " +
                        "participants."
                },
                {
                    p: "Whom should I ask questions during the challenge?",
                    r: "You can only ask questions with people designated for this purpose: the person responsible for the " +
                        "tests and the coordinator of the event."
                },
                {
                    p: "I have an exam on the same day as the challenge. What now?",
                    r: "You should contact the organization to best fit the timing of your challenge on the day of presentation."
                },
            ]
        },
        juri: {
            sectionHeading: "Jury",
            sectionSubHeading: "Who will evaluate the competition",
            sectionSubHeading1: "TEAM DESIGN",
            sectionSubHeading2: "CASE STUDY",
            juri1: [
                {
                    nome: "Vitor Bonifácio",
                    foto: 'assets/img/juri/1.jpg',
                    conta: "https://www.linkedin.com/in/vitor-bonif%C3%A1cio-473455127/"
                },
                {
                    nome: "Ricardo Sousa",
                    foto: "assets/img/juri/2.jpg",
                    conta: "https://www.linkedin.com/in/ricardo-sousa-02a61317/"
                },
                {nome: "Bohdan Kulyk", foto: "assets/img/juri/3.jpg", conta: "https://www.linkedin.com/in/bohdankulyk/"}
            ],
            juri2: [
                {nome: "Diogo Gomes", foto: "assets/img/juri/4.jpg", conta: "https://www.linkedin.com/in/dgomes/"},
                {
                    nome: "João Labrincha",
                    foto: "assets/img/juri/5.jpg",
                    conta: "https://www.linkedin.com/in/jo%C3%A3o-labrincha-0b69549/"
                }
            ]
        },
        partners: {
            sectionHeading: "Partners",
            sectionSubHeading: "Bronze Partners",
            sectionSubHeading2: "Silver Partners",
        },
        team: {
            sectionHeading: "The Team",
            equipa: {
                MO:{nome: "Samuel G. Figueiredo", role: "Coordinator of EBEC Aveiro 2019"},
                TP:{nome: "Joana Batista", role: "Topic Responsible"},
                CR:{nome: "Pedro Vilares", role: "Corporate Relations Responsible"},
                MKT:{nome: "Samuel Santos", role: "Marketing Responsible"}
            },
            equipa2: {
                IT:{nome: "Alexandra Carvalho", role: "Information Tecnology Responsible"},
                LOG:{nome: "Laura Silva", role: "Logistic Responsible"},
                PAX:{nome: "Mariana Rodrigues", role: "Participants Responsible"}
            }
        },
        becomePartner: {
            sectionHeading: "Become Our Partner",
            corpo: [
                "By becoming our partner, your company will be integrated in the organization of EBEC Aveiro 2019, with " +
                "a dynamic team, that is committed to satisfy the needs of extracurricular activities development of the " +
                "students, as much as the interests of your company. You will have the opportunity to participate in our " +
                "Job Fair and in our Cocktail Network.",
                "<span class='big-number text-blue'>•</span> Mark presence in our company fair and expose your company, " +
                "products and projects. You will have the opportunity of exchange experiences with students in a more " +
                "informal environment.",
                "<span class='big-number text-blue'>•</span> Benefit yourself with the access of available curricula, in " +
                "optional way, from the competition's participants and students of University of Aveiro present in the " +
                "closing session.",
                "<span class='big-number text-blue'>•</span> The right to work in line with the Topic Group, being able " +
                "to propose subjects, of Case Study as much as Team Design, that will be realized by the participants.",
                "As our partner, you will benefit with narrow interactions by students of the University of Aveiro, through " +
                "our company fair and a cocktail network, managing to collect many perceptions through our intense knowledge " +
                "sharing.",
                "Your company will increase its visibility between the students of the University of Aveiro, known by their " +
                "dynamism, innovation, and entrepreneurship, through the promotion available by BEST Aveiro.",
                "If you are interesting in being our partner, contact directy our <a class=\"text-blue-light\" " +
                "href=\"#contactos\">members</a> or through the contact of the <a class=\"text-blue-light\" href=\"#info\">association</a>. "
            ]
        },
        contacts: {
            sectionHeading: "Contactos",
            people: {
                MO: {
                    nome: "Samuel G. Figueiredo",
                    role: "Coordinator of EBEC Aveiro 2020",
                    tel: "+(351) 962 042 039",
                    email: "m ailto:samuelfigueiredo2098@gmail.com",
                    email2: "samuelfigueiredo2098@gmail.com"
                },
                presi: {
                    nome: "Diogo Prata",
                    role: "President of BEST Aveiro",
                    tel: "+(351) 925 478 764",
                    email: "mailto:diogosprata@gmail.com",
                    email2: " diogosprata@gmail.com"
                },
                cr: {
                    nome: "Pedro Vilares",
                    role: "Corporate Relations Responsible",
                    tel: "+(351) 910 873 614",
                    email: "mailto:pedrovilares98@gmail.com",
                    email2: " pedrovilares98@gmail.com"
                }
            }
        },
        bestAveiro: {
            img: "assets/img/logos/best-aveiro-color.png",
            sectionHeading: "About the BEST Aveiro",
            corpo: [
                "Founded oficially in 2010, the Local Group Best Aveiro, hosted in University of Aveiro, counts with 45 " +
                "active members from Sciences, Technologies and Engineering fields. By its 8 years of history, distinguished " +
                "himself by its diversity e the quality of its organized events. These ones cover the students by local, " +
                "national and european level, focusing even on the development of the members of the Association, so they " +
                "can be in constant progression and learning.",
                "The BEST Aveiro offers the students the opportunity to participate in events that aim the complementarity " +
                "of his studies, organizing annually, a competition in the scientific-technologic field, Soft or Hard skills" +
                "formations, a seasonal course and a symposium of technological innovation. With the aim to strengthen " +
                "the relationship between students and companies, the BEST Aveiro still organizes, integrated in the EBEC " +
                "Competition, offering students relevant opportunities for their professional future and to the companies " +
                "bigger facility of communication and recruitment of the academic community."
            ]
        },
        info: {
            mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.9809366135064!2d-8.659694684735314!3d40.630302379340826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a2aa4e1bda2b%3A0xd70b976749475485!2sUniversidade+de+Aveiro!5e0!3m2!1spt-PT!2spt!4v1561662996255!5m2!1spt-PT!2spt",
            infos: [
                {
                    chave: "Address",
                    valor: "Incubadora de Empresas da Universidade de Aveiro<br/>Campus Universitário de Santiago, Edifício 1<br/>" +
                        "3810-193 Aveiro<br/>Portugal",
                    classe: "fa-home"
                },
                {chave: "Telephone", valor: "+351 917 077 329", classe: "fa-phone"},
                {
                    chave: "Email",
                    valor: "<a href='mailto:aveiro@BEST.eu.org'>aveiro@BEST.eu.org</a>",
                    classe: "fa-envelope"
                },
            ],
            sectionHeading: "Infor<span class=\"hidden-lg hidden-md hidden-sm\">-<br></span>mations",
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
