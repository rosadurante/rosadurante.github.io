import { LucideProps, Sparkles, Star } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

export type TranslateString = Object & {
    'es': string | string[];
    'en': string | string[];
}

export type Title = {
    position: TranslateString;
    where: TranslateString;
    url: string;
    start: TranslateString;
    end: TranslateString;
}

export type Job = {
    key: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'>>;
    title: Title;
    skills: TranslateString;
    description: TranslateString;
}

export type Experience = {
    skills: TranslateString;
    jobs: Job[];
}

export const experience: Record<string, Experience> = {
    cadiz: {
        skills: {
            'es': [
                "Responsabilidad",
                "Esfuerzo",
                "Pragmatismo",
                "Conocimientos",
                "Compromiso",
                "Aprendizaje",
                "Adaptación",
            ],
            'en': [
                "Responsibility",
                "Effort",
                "Pragmatism",
                "Knowledge",
                "Commitment",
                "Learning",
                "Adaptation",
            ],
        },
        jobs: [
            {
                key: "studies",
                icon: Star,
                title: {
                    position: {
                        'es': "Titulada en Ingeniería Técnica en Informática de Sistemas",
                        'en': "Bachelor in Technical Engineering in Computer Science",
                    },
                    where: {
                        'es': "Universidad de Cádiz",
                        'en': "University of Cadiz",
                    },
                    url: '',
                    start: {
                        'es': "Oct 2005",
                        'en': "Oct 2005",
                    },
                    end: {
                        'es': "Oct 2010",
                        'en': "Oct 2010",
                    }
                },
                skills: {
                    'es': 'Responsabilidad, esfuerzo, pragmatismo, conocimientos, compromiso, aprendizaje, adaptación',
                    'en': 'Responsibility, effort, pragmatism, knowledge, commitment, learning, adaptation',
                },
                description: {
                    'es': `Desde pequeña he destacado en matemáticas y resolución de problemas y encontré en la informática una pasión por la programación.
                    Aunque sabía que no iba a ser un camino fácil, la pasión que surgió al probar la programación en el instituto me llevó a elegir este camino.
                    Durante esos años adquirí con mucho esfuerzo toda la base de mis conocimientos en programación e informática los cuales han ido forjándose, evolucionando y mejorando con mi carrera profesional.`,
                    'en': `Since I was a child, I have excelled in mathematics and problem solving and found a passion for programming in computer science.
                    Although I knew it would not be an easy path, the passion that arose when I first tried programming at school led me to choose it.
                    During those years, I acquired with a lot of effort all the basic knowledge of programming and computer science which have been forged, evolving and improving with my professional career.`,
                },
            }
        ]
    },
    sevilla: {
        skills: {
            'es': [
                "Test unitarios",
                "Test de integración",
                "Test e2e",
                "Historias de usuario",
                "Sistema de gestión de tareas",
                "Sistema de gestión de versiones",
                "Metodología ágil",
                "SCRUM",
                "JUnit",
                "Selenium",
                "Jasmine",
            ],
            'en': [
                "Unit tests",
                "Integration tests",
                "E2E tests",
                "User stories",
                "Task management system",
                "Version control system",
                "Agile methodology",
                "SCRUM",
                "JUnit",
                "Selenium",
                "Jasmine",
            ],
        },
        jobs: [
            {
                key: "yaco",
                icon: Star,
                title: {
                    position: {
                        'es': "Técnica de calidad",
                        'en': "Quality Technician",
                    },
                    where: {
                        'es': "Yaco Sistemas SL",
                        'en': "Yaco Systems SL",
                    },
                    url: '',
                    start: {
                        'es': "Jun 2010",
                        'en': "Jun 2010",
                    },
                    end: {
                        'es': "Jun 2011",
                        'en': "Jun 2011",
                    }
                },
                skills: {
                    'es': 'Test unitarios, test de integración, test e2e, historias de usuario, sistema de gestión de tareas, sistema de gestión de versiones, metodología ágil, SCRUM, JUnit, Selenium, Jasmine',
                    'en': 'Unit tests, integration tests, e2e tests, user stories, task management system, version control system, agile methodology, SCRUM, JUnit, Selenium, Jasmine',
                },
                description: {
                    'es': `Trabajé en el departamento de calidad de la empresa, realizando pruebas de software manuales, automatizadas y documentación de procesos.
                    Fue aquí donde apliqué los conocimientos adquiridos en el desarrollo del proyecto final de carrera sobre calidad de software, metodologías ágiles -ya que seguíamos SCRUM-, gestión de proyectos y tareas y, sobre todo, pruebas de software con Selenium IDE y Jasmine.`,
                    'en': `I worked in the quality department of the company, performing manual and automated software testing and proccess documentation.
                    It was here where I applied the knowledge acquired in the development of the final project of my degree on software quality, agile methodologies -since we followed SCRUM methodology-, project and task management, and above all, software testing with Selenium IDE and Jasmine.`,
                },
            }
        ]
    },
    londres: {
        skills: {
            'es': [
                "AngularJS",
                "JQuery",
                "BackboneJS",
                "RequireJS",
                "SASS",
                "LESS",
                "Bootstrap",
                "Grunt/Gulp",
                "Git",
                "Python/Django",
                "ORM",
                "Postgres",
            ],
            'en': [
                "AngularJS",
                "JQuery",
                "BackboneJS",
                "RequireJS",
                "SASS",
                "LESS",
                "Bootstrap",
                "Grunt/Gulp",
                "Git",
                "Python/Django",
                "ORM",
                "Postgres",
            ],
        },
        jobs: [
            {
                key: "hogarth",
                icon: Star,
                title: {
                    position: {
                        'es': "Desarrolladora Frontend",
                        'en': "Frontend Developer",
                    },
                    where: {
                        'es': "Hogarth Worldwide Ltd",
                        'en': "Hogarth Worldwide Ltd",
                    },
                    url: 'https://www.hogarth.com/',
                    start: {
                        'es': "Mar 2012",
                        'en': "Mar 2012",
                    },
                    end: {
                        'es': "Nov 2013",
                        'en': "Nov 2013",
                    }
                },
                skills: {
                    'es': 'JQuery, BackboneJS, RequireJS, LESS, Bootstrap, Git, Python/Django, ORM, Postgres',
                    'en': 'JQuery, BackboneJS, RequireJS, LESS, Bootstrap, Git, Python/Django, ORM, Postgres',
                },
                description: {
                    'es': `Primera experiencia laboral como frontend developer en una multinacional en el centro de Londres desarrollando un proyecto interno de gestión de campañas de marketing.
                
Consistía en una zona de gestión (usuarios, clientes, permisos, proyectos publicitarios con sus distintos descripciones, estados, etc.) que seguía un flujo de trabajo bastante complejo desde
la creación del proyecto de la campaña de márketing (con una gestión de ideas o brainstorming) hasta que se llega a una confirmación tangible, pasando por distintos grupos de
personas en cada parte del proceso (equipo de diseño, de comunicación, de traducción, direcciíon, resolución de erratas etc) donde la parte más sensible de la
aplicación web exclusivamente realizada en el frontend donde se mostraban los archivos multimedia en los cuales se realizaban comentarios y ediciones sobre
fotos y vídeos de las campañas online.

Todo ello estaba desarrollado utilizando BackboneJS, JQuery, y RequireJS, y se utilizaba Bootstrap para agilizar el desarrollo del diseño`,
                    'en': `First professional experience as a frontend developer in a multinational in the heart of London City developing an internal project for marketing campaigns management.

The project consisted of a management zone (users, clients, permissions, marketing campaigns with their respective descriptions, states, etc.) that followed a fairly complex workflow from the
creation of the marketing campaign project (with a brainstorming management) to a tangible confirmation, passing through different groups of people in each part of the 
process (design team, communication team, translation team, direction, error correction, etc.) where the most sensitive part of the application web exclusively developed in the frontend 
where the multimedia files were displayed, with comments and edits, and videos of the online campaigns.
                    
All of this was developed using BackboneJS, JQuery, and RequireJS, and Bootstrap was used to speed up the design development`
                },
            },
            {
                key: "yourvine",
                icon: Star,
                title: {
                    position: {
                        'es': "Desarrolladora Frontend",
                        'en': "Frontend Developer",
                    },
                    where: {
                        'es': "Yourvine Ltd",
                        'en': "Yourvine Ltd",
                    },
                    url: 'https://www.crunchbase.com/organization/yourvine/',
                    start: {
                        'es': "Nov 2013",
                        'en': "Nov 2013",
                    },
                    end: {
                        'es': "Jul 2014",
                        'en': "Jul 2014",
                    }
                },
                skills: {
                    'es': 'AngularJS, JQuery, SASS, Git, Python/Django, ORM, Postgres',
                    'en': 'AngularJS, JQuery, SASS, Git, Python/Django, ORM, Postgres',
                },
                description: {
                    'es': `Primera experiencia en una startup enfocada a la gestión de tickets de festivales de música donde mejoré exponencialmente mis conocimientos de AngularJS.
                
Desarrollábamos una plataforma para la venta de entradas de festivales. La aplicación estaba escrita en AngujarJS
con backend en Python/Django siguiendo un fuerte paradigma basado en objetos y utilizando patrones orientados en servicios. Estuve trabajando en un equipo
muy pequeño con metodologías ágiles por lo que mejoré exponencialmente en mis conocimientos de frontend. Como éramos pocos en el equipo al ser una start up
aproveché para investigar y mejorar mi conocimiento en backend con Python/Django. `,
                    'en': `First experience in a startup focused on the management of tickets for music festivals where I exponentially improved my knowledge of AngularJS.

We developed a platform for the sale of festival tickets. The application was written in AngujarJS
with Python/Django in backend following a strong object-oriented paradigm and using service-oriented patterns. I worked in a very small team with agile methodologies so I 
exponentially improved my frontend knowledge. As we were few in the team being a startup I took the opportunity to investigate and improve my knowledge in backend with Python/Django. `
                },
            },
            {
                key: "bynd",
                icon: Star,
                title: {
                    position: {
                        'es': "Desarrolladora Fronend & Apple",
                        'en': "Frontend Developer & Apple",
                    },
                    where: {
                        'es': "Beyond Ltd",
                        'en': "Beyond Ltd",
                    },
                    url: 'https://www.bynd.com/',
                    start: {
                        'es': "Jul 2014",
                        'en': "Jul 2014",
                    },
                    end: {
                        'es': "Dic 2014",
                        'en': "Dic 2014",
                    }
                },
                skills: {
                    'es': 'AngularJS, javascript, CanvasJS, SASS, Git',
                    'en': 'AngularJS, javascript, CanvasJS, SASS, Git',
                },
                description: {
                    'es': `Además de seguir con mi rol de frontend también me asignaron proyectos cortos de creación de anuncios y juegos en JS para la plataforma de Apple.
                
El tiempo que estuve trabajando en Byond fuí parte del equipo de publicidad en iAds donde desarrollaba pequeñas aplicaciones / juegos / mini web comerciales
en forma de anuncios para las plataformas de Apple. Todos se desarrollaban en HTML/CSS/JS utilizando múltiples tipos de animaciones, incluso Canvas en
javascript para los diversos juegos que desarrollé.`,
                    'en': `In addition to continuing with my frontend role, I was also assigned short projects for the creation of ads and games in JS for the Apple platform.

While working at Byond I was part of the advertising team in iAds where I developed small applications / games / commercial mini web pages
in the form of ads for the Apple platforms. All were developed in HTML/CSS/JS using multiple types of animations, even Canvas in
javascript for the various games I developed.`
                },
            },
            {
                key: "potato",
                icon: Star,
                title: {
                    position: {
                        'es': "Desarrolladora Frontend",
                        'en': "Frontend Developer",
                    },
                    where: {
                        'es': "Potato Ltd",
                        'en': "Potato Ltd",
                    },
                    url: 'https://p.ota.to/',
                    start: {
                        'es': "Ene 2015",
                        'en': "Jan 2015",
                    },
                    end: {
                        'es': "Mar 2017",
                        'en': "Mar 2017",
                    }
                },
                skills: {
                    'es': 'AngularJS, javascript, jQuery, SASS, CSS3, CSS animations, Git',
                    'en': 'AngularJS, javascript, jQuery, SASS, CSS3, CSS animations, Git',
                },
                description: {
                    'es': `Trabajé como freelance en proyectos tanto clasificados como públicos de Google además de ser la principal frontend del proyecto [TT International](https://www.ttint.com/).

En Potato estuve trabajando en diferentes tipos de proyectos: unos con una gran arquitectura de backend para la gestión de datos y eventos
asíncronos añadiendo una arquitetucta en fronted de una única página (one single webpage) gestionando las actualiaciones en el momento y todo desarrollado bajo AngularJS;
otros proyectos más comerciales estuvieron más enfocados en el diseño y experiencia de usuario buscando la originalidad en estilos, transiciones entre secciones y animaciones
con CSS3 y JS.`,
                    'en': `I worked as a freelance in projects both classified and public from Google as well as being the main frontend of the [TT International](https://www.ttint.com/) project.

In Potato I worked in different types of projects: one having a large backend architecture which manage big amount of data and asynchronous events adding a frontend
architecture of a single page (one single webpage) also managing the updates on the go and all developed under AngularJS;
others more commercial projects were more focused on design and user experience looking for originality in styles, transitions between sections and animations
with CSS3 and JS.`
                },
            }
        ]
    },
    jerez: {
        skills: {
            'es': [
                "ReactJS",
                "Redux",
                "Axios",
                "TailwindCSS",
                "MaterialUI",
                "ShadCN",
                "NextJS",
                "Figma",
                "Adaptación",
                "Artesanía",
                "Creatividad",
                "Redes sociales",
                "Atención al cliente",
                "Organización de eventos",
            ],
            'en': [
                "ReactJS",
                "Redux",
                "Axios",
                "TailwindCSS",
                "MaterialUI",
                "ShadCN",
                "NextJS",
                "Figma",
                "Adaptation",
                "Craftsmanship",
                "Creativity",
                "Social networks",
                "Customer service",
            ],
        },
        jobs: [
            {
                    key: "one-little-lemon",
                    icon: Sparkles,
                    title: {
                        position: {
                            'es': "Creadora de la marca de ropa infantil",
                            'en': "Owner of a children's clothing brand",
                        },
                        where: {
                            'es': "One Little Lemon",
                            'en': "One Little Lemon",
                        },
                        url: 'https://www.instagram.com/one_little_lemon/',
                        start: {
                            'es': "Jun 2018",
                            'en': "Jun 2018",
                        },
                        end: {
                            'es': "Feb 2023",
                            'en': "Feb 2023",
                        }
                    },
                    skills: {
                        'es': 'Adaptación, Artesanía, Creatividad, Redes sociales, Atención al cliente, Organización de eventos',
                        'en': 'Adaptation, Craftsmanship, Creativity, Social networks, Customer service, Event organization',
                    },
                    description: {
                        'es': `Durante este periodo de mi vida decidí emprender y estuve dada de alta como trabajadora autónoma dentro del ámbito de la artesanía y diseño textil.

Creadora de marca, diseñadora y artesana, gestora de redes sociales y con impecable atención al cliente, confeccionaba a mano prendas de ropa para bebés
y niñ@s con un estilo único y personalizado, utilizando materias primas de gran calidad sostenible y con certificación de origen orgánico.`,
                        'en': `During this period of my life I decided to start my own business and was registered as a self-employed artisan within the field of handicrafts and textile design.

Owner of a brand, designer and artisan, social media manager with impeccable customer service, made clothes for babies and children handmade with a unique and personalized style, using high quality 
sustainable materials with organic origin certification.`
                    },
                },
                {
                    key: "you-shift",
                    icon: Star,
                    title: {
                        position: {
                            'es': "Colaboradora Frontend",
                            'en': "Frontend Collaborator",
                        },
                        where: {
                            'es': "You Shift",
                            'en': "You Shift",
                        },
                        url: 'https://www.you-shift.com/',
                        start: {
                            'es': "Nov 2023",
                            'en': "Nov 2023",
                        },
                        end: {
                            'es': "Mar 2024",
                            'en': "Mar 2024",
                        }
                    },
                    skills: {
                        'es': 'ReactJS, Javascript, MaterialUI, CSS3, Git',
                        'en': 'ReactJS, Javascript, MaterialUI, CSS3, Git',
                    },
                    description: {
                        'es': `Proyecto de empresa que desarrolla una aplicación web enfocado a la resolución de los cambios y rotaciones del personal de los hospitales,
contemplando distintas secciones, personal que trabaja en distintas secciones, puntuaciones de los trabajadores, vacaciones, etc. Todo el frontend está
desarrollado en ReactJS y MaterialUI.`,
                        'en': `Project of a company that develops a web application focused on the resolution of the changes and rotations of the hospital staff,
contemplating different sections, staff working in different sections, scores of the workers, vacations, etc. All the frontend is developed in ReactJS and MaterialUI.`
                    },
                },
                {
                    key: "the-seed-squad",
                    icon: Star,
                    title: {
                        position: {
                            'es': "Desarrolladora Frontend",
                            'en': "Frontend Developer",
                        },
                        where: {
                            'es': "The Seed Squad",
                            'en': "The Seed Squad",
                        },
                        url: 'https://theseedsquad.com/',
                        start: {
                            'es': "Abr 2024",
                            'en': "Apr 2024",
                        },
                        end: {
                            'es': "Dic 2024",
                            'en': "Dic 2024",
                        }
                    },
                    skills: {
                        'es': 'ReactJS, Redux, TypeScript, TailwindCSS, NodeJS, Git',
                        'en': 'ReactJS, Redux, TypeScript, TailwindCSS, NodeJS, Git',
                    },
                    description: {
                        'es': `En esta agencia estuve desarrollando una nueva y pionera aplicación web dentro el ámbito de las energías renovables, [nTeaser](https://nteaser.com/es),
que recoje projectos de energías renovables en oferta en el mercado, para que los inversores puedan encontrar el proyecto que mejor se adapte a sus necesidades e invertir en ellos.

Tanto en la aplicación web como en la página comercial fui la desarrolladora principal (con soporte de mi compañero Senior) y está desarrollado en TypeScript, con ReactJS, NodeJS, TailwindCSS.`,
                        'en': `In this agency I was developing a new and pioneering web application within the field of renewable energies, [nTeaser](https://nteaser.com/es),

Both in the web application and in the commercial page I was the main developer (with support from my senior colleague) and it is developed in TypeScript, with ReactJS, NodeJS, TailwindCSS.`
                    },
                },
                {
                    key: "tifin",
                    icon: Star,
                    title: {
                        position: {
                            'es': "Desarrolladora Frontend",
                            'en': "Frontend Developer",
                        },
                        where: {
                            'es': "Tifin",
                            'en': "Tifin",
                        },
                        url: 'https://tifin.com/',
                        start: {
                            'es': "Dic 2024",
                            'en': "Dic 2024",
                        },
                        end: {
                            'es': "Actualmente",
                            'en': "Currently",
                        }
                    },
                    skills: {
                        'es': 'ReactJS, Redux, TypeScript, TailwindCSS, ShadCN, Git, Jira, Figma',
                        'en': 'ReactJS, Redux, TypeScript, TailwindCSS, ShadCN, Git, Jira, Figma',
                    },
                    description: {
                        'es': `Tifin Spain es una sede de Tifin, una empresa americana que desarrolla proyectos utilizando Inteligencia Artifical para servicios financieros. Al fusionar The Seed Squad en Tifin,
pasé a formar parte de esta empresa como desarrolladora Frontend. En este tiempo he participado en el desarrollo de varios portales web en TypeScript utilizando principalmente ReactJS, TailwindCSS, MaterialUI y ShadCN.`,
                        'en': `Tifin Spain is a branch of Tifin, an American company that develops projects using Artificial Intelligence for financial services. By merging The Seed Squad into Tifin,
I became part of this company as a Frontend Developer. In this time I have participated in the development of several web portals in TypeScript using mainly ReactJS, TailwindCSS, MaterialUI and ShadCN.`
                    },
                }
            ]
        
    }
}