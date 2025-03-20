import { Figma, Sparkles, Star } from "lucide-react";

export const experience = {
    cadiz: {
        skills: [
            "Responsabilidad",
            "Esfuerzo",
            "Pragmatismo",
            "Conocimientos",
            "Compromiso",
            "Aprendizaje",
            "Adaptación",
        ],
        jobs: [
            {
                key: "studies",
                icon: Star,
                title: {
                    position: "Titulada en Ingeniería Técnica en Informática de Sistemas",
                    where: "Universidad de Cádiz",
                    url: '',
                    start: "Oct 2005",
                    end: "Oct 2010"
                },
                skills: 'Responsabilidad, esfuerzo, pragmatismo, conocimientos, compromiso, aprendizaje, adaptación',
                description:
                    `Desde pequeña he destacado en matemáticas y resolución de problemas y encontré en la informática una pasión por la programación.
                    Aunque sabía que no iba a ser un camino fácil, la pasión que surgió al probar la programación en el instituto me llevó a elegir este camino.
                    Durante esos años adquirí con mucho esfuerzo toda la base de mis conocimientos en programación e informática los cuales han ido forjándose, evolucionando y mejorando con mi carrera profesional.`,
            }
        ]
    },
    sevilla: {
        skills: [
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
        jobs: [
            {
                key: "yaco",
                icon: Star,
                title: {
                    position: "Técnica de calidad",
                    where: "Yaco Sistemas SL",
                    url: '',
                    start: "Jun 2010",
                    end: "Jun 2011"
                },
                skills: 'Test unitarios, test de integración, test e2e, historias de usuario, sistema de gestión de tareas, sistema de gestión de versiones, metodología ágil, SCRUM, JUnit, Selenium, Jasmine',
                description:
                    `Trabajé en el departamento de calidad de la empresa, realizando pruebas de software manuales, automatizadas y documentación de procesos.
                    Fue aquí donde apliqué los conocimientos adquiridos en el desarrollo del proyecto final de carrera sobre calidad de software, metodologías ágiles -ya que seguíamos SCRUM-, gestión de proyectos y tareas y, sobre todo, pruebas de software con Selenium IDE y Jasmine.`,
            }
        ]
    },
    londres: {
        skills: [
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
        jobs: [
            {
                key: "hogarth",
                icon: Star,
                title: {
                    position: "Desarrolladora Frontend",
                    where: "Hogarth Worldwide Ltd",
                    url: 'https://www.hogarth.com/',
                    start: "Mar 2012",
                    end: "Nov 2013"
                },
                skills: 'JQuery, BackboneJS, RequireJS, LESS, Bootstrap, Git, Python/Django, ORM, Postgres',
                description:
`Primera experiencia laboral como frontend developer en una multinacional en el centro de Londres desarrollando un proyecto interno de gestión de campañas de marketing.
                
Consistía en una zona de gestión (usuarios, clientes, permisos, proyectos publicitarios con sus distintos descripciones, estados, etc.) que seguía un flujo de trabajo bastante complejo desde
la creación del proyecto de la campaña de márketing (con una gestión de ideas o brainstorming) hasta que se llega a una confirmación tangible, pasando por distintos grupos de
personas en cada parte del proceso (equipo de diseño, de comunicación, de traducción, direcciíon, resolución de erratas etc) donde la parte más sensible de la
aplicación web exclusivamente realizada en el frontend donde se mostraban los archivos multimedia en los cuales se realizaban comentarios y ediciones sobre
fotos y vídeos de las campañas online.

Todo ello estaba desarrollado utilizando BackboneJS, JQuery, y RequireJS, y se utilizaba Bootstrap para agilizar el desarrollo del diseño`
            },
            {
                key: "yourvine",
                icon: Star,
                title: {
                    position: "Desarrolladora Frontend",
                    where: "Yourvine Ltd",
                    url: 'https://www.crunchbase.com/organization/yourvine/',
                    start: "Nov 2013",
                    end: "Jul 2014"
                },
                skills: 'AngularJS, JQuery, SASS, Git, Python/Django, ORM, Postgres',
                description:
`Primera experiencia en una startup enfocada a la gestión de tickets de festivales de música donde mejoré exponencialmente mis conocimientos de AngularJS.
                
Desarrollábamos una plataforma para la venta de entradas de festivales. La aplicación estaba escrita en AngujarJS
con backend en Python/Django siguiendo un fuerte paradigma basado en objetos y utilizando patrones orientados en servicios. Estuve trabajando en un equipo
muy pequeño con metodologías ágiles por lo que mejoré exponencialmente en mis conocimientos de frontend. Como éramos pocos en el equipo al ser una start up
aproveché para investigar y mejorar mi conocimiento en backend con Python/Django. `
            },
            {
                key: "bynd",
                icon: Star,
                title: {
                    position: "Desarrolladora Fronend & Apple",
                    where: "Beyond Ltd",
                    url: 'https://www.bynd.com/',
                    start: "Jul 2014",
                    end: "Dic 2014"
                },
                skills: 'AngularJS, javascript, CanvasJS, SASS, Git',
                description:
`Además de seguir con mi rol de frontend también me asignaron proyectos cortos de creación de anuncios y juegos en JS para la plataforma de Apple.
                
El tiempo que estuve trabajando en Byond fuí parte del equipo de publicidad en iAds donde desarrollaba pequeñas aplicaciones / juegos / mini web comerciales
en forma de anuncios para las plataformas de Apple. Todos se desarrollaban en HTML/CSS/JS utilizando múltiples tipos de animaciones, incluso Canvas en
javascript para los diversos juegos que desarrollé.`
            },
            {
                key: "potato",
                icon: Star,
                title: {
                    position: "Desarrolladora Frontend",
                    where: "Potato Ltd",
                    url: 'https://p.ota.to/',
                    start: "Ene 2015",
                    end: "Mar 2017"  
                },
                skills: 'AngularJS, javascript, jQuery, SASS, CSS3, CSS animations, Git',
                description:
`Trabajé como freelance en proyectos tanto clasificados como públicos de Google además de ser la principal frontend del proyecto [TT International](https://www.ttint.com/).

En Potato estuve trabajando en diferentes tipos de proyectos: unos con una gran arquitectura de backend para la gestión de datos y eventos
asíncronos añadiendo una arquitetucta en fronted de una única página (one single webpage) gestionando las actualiaciones en el momento y todo desarrollado bajo AngularJS;
otros proyectos más comerciales estuvieron más enfocados en el diseño y experiencia de usuario buscando la originalidad en estilos, transiciones entre secciones y animaciones
con CSS3 y JS.`
            }
        ]
    },
    jerez: {
        skills: [
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
        jobs: [
            {
                key: "one-little-lemon",
                icon: Sparkles, 
                title: {
                    position: "Creadora de la marca de ropa infantil",
                    where: "One Little Lemon",
                    url: 'https://www.instagram.com/one_little_lemon/',
                    start: "Jun 2018",
                    end: "Feb 2023"
                },
                skills: 'Adaptación, Artesanía, Creatividad, Redes sociales, Atención al cliente, Organización de eventos',
                description:
`Durante este periodo de mi vida decidí emprender y estuve dada de alta como trabajadora autónoma dentro del ámbito de la artesanía y diseño textil.

Creadora de marca, diseñadora y artesana, gestora de redes sociales y con impecable atención al cliente, confeccionaba a mano prendas de ropa para bebés
y niñ@s con un estilo único y personalizado, utilizando materias primas de gran calidad sostenible y con certificación de origen orgánico.`
            },
            {
                key: "you-shift",
                icon: Star, 
                title: {
                    position: "Colaboradora Frontend",
                    where: "You Shift",
                    url: 'https://www.you-shift.com/',
                    start: "Nov 2023",
                    end: "Mar 2024"
                },
                skills: 'ReactJS, Javascript, MaterialUI, CSS3, Git', 
                description:
`Proyecto de empresa que desarrolla una aplicación web enfocado a la resolución de los cambios y rotaciones del personal de los hospitales,
contemplando distintas secciones, personal que trabaja en distintas secciones, puntuaciones de los trabajadores, vacaciones, etc. Todo el frontend está
desarrollado en ReactJS y MaterialUI.`
            },
            {
                key: "the-seed-squad",
                icon: Star, 
                title: {
                    position: "Desarrolladora Frontend",
                    where: "The Seed Squad",
                    url: 'https://theseedsquad.com/',
                    start: "Abr 2024",
                    end: "Dic 2024"
                },
                skills: 'ReactJS, Redux, TypeScript, TailwindCSS, NodeJS, Git',
                description:
`En esta agencia estuve desarrollando una nueva y pionera aplicación web dentro el ámbito de las energías renovables, [nTeaser](https://nteaser.com/es),
que recoje projectos de energías renovables en oferta en el mercado, para que los inversores puedan encontrar el proyecto que mejor se adapte a sus necesidades e invertir en ellos.

Tanto en la aplicación web como en la página comercial fui la desarrolladora principal (con soporte de mi compañero Senior) y está desarrollado en TypeScript, con ReactJS, NodeJS, TailwindCSS.`
            },
            {
                key: "tifin",
                icon: Star, 
                title: {
                    position: "Desarrolladora Frontend",
                    where: "Tifin",
                    url: 'https://tifin.com/',
                    start: "Dic 2024",
                    end: "Actualmente"
                },
                skills: 'ReactJS, Redux, TypeScript, TailwindCSS, ShadCN, Git, Jira, Figma',
                description:
`Tifin Spain es una sede de Tifin, una empresa americana que desarrolla proyectos utilizando Inteligencia Artifical para servicios financieros. Al fusionar The Seed Squad en Tifin,
pasé a formar parte de esta empresa como desarrolladora Frontend. En este tiempo he participado en el desarrollo de varios portales web en TypeScript utilizando principalmente ReactJS, TailwindCSS, MaterialUI y ShadCN.`
            }
        ]
    }
}