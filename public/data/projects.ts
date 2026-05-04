import { Project } from "@/types/project";

export const projects: Project[] = [
  //Serre chavelier parapente
  {
    slug: "serre-chevalier-parapente",
    title: "Serre Chevalier Parapente",
    date: "2026 - 2024",
    tags: ["Site Web Ecommerce", "Web Application", "Dashboard de Gestion"],
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    thumbnail:
      "/images/projects/serre-chevalier-parapente/thumbnail_serre-chevalier-parapente.png",
    siteUrl: "https://serre-chevalier-parapente.fr",
    shortDescription:
      "Serre Chevalier Parapente est une école de parapente proposant stages et baptêmes dans un environnement alpin, avec une forte saisonnalité et des contraintes de planning importantes. L'activité repose sur une organisation précise des créneaux, des moniteurs et du matériel, tout en restant accessible au grand public.",
    promise:
      "Clément, fondateur et moniteur de l’école, consacrait une part importante de son temps à la gestion manuelle des inscriptions, des plannings et des participants. Cette charge administrative limitait sa capacité à développer l’activité et à se concentrer sur son cœur de métier : l’enseignement et l’accompagnement des élèves.",
    sections: [
      {
        type: "text",
        title:
          "Un projet de digitalisation pour libérer du temps et développer l’activité de l'école",
        paragraphs: [
          "L’objectif principal du projet était de créer une plateforme en ligne permettant aux clients de réserver facilement des stages et des baptêmes de parapente, tout en offrant à Clément un outil de gestion efficace pour organiser les plannings, les moniteurs et le matériel. La solution devait être intuitive pour les utilisateurs finaux, tout en intégrant des fonctionnalités avancées pour répondre aux besoins spécifiques de l’école.",
          "Le projet a été réalisé en plusieurs étapes, commençant par une phase de découverte approfondie pour comprendre les processus actuels de l’école et identifier les points de douleur. Ensuite, nous avons conçu une architecture technique robuste, intégrant des fonctionnalités telles que la gestion des réservations, la planification des moniteurs, la gestion du matériel et un système de paiement en ligne sécurisé.",
          "La plateforme a été développée en utilisant Next.js pour une expérience utilisateur fluide, TypeScript pour une meilleure maintenabilité du code, Prisma et PostgreSQL pour la gestion des données, Stripe pour les paiements en ligne, et Tailwind CSS pour un design moderne et responsive. Après plusieurs mois de développement et de tests, la plateforme a été lancée avec succès, permettant à Clément de se libérer de la charge administrative et de se concentrer sur le développement de son activité.",
        ],
      },
      {
        type: "text",
        title: "Fonctionnalités clés de la plateforme :",
        list: [
          "Système de réservation en ligne pour les clients",
          "Dashboard de gestion pour les moniteurs et le matériel",
          "Intégration d’un système de paiement sécurisé",
          "Gestion des plannings et des disponibilités en temps réel",
          "Interface utilisateur intuitive et responsive",
        ],
      },
      {
        type: "image",
        src: "/images/projects/serre-chevalier-parapente/content/site-vitrine_serre-chevalier-parapente.png",
        alt: "",
      },
      {
        type: "image",
        src: "/images/projects/serre-chevalier-parapente/content/objectif_serre-chevalier-parapente.png",
        alt: "",
      },
      {
        type: "image",
        src: "/images/projects/serre-chevalier-parapente/content/webapp_serre-chevalier-parapente.png",
        alt: "",
      },
    ],
  },
  // Solar Home
  {
    slug: "solar-home",
    title: "Solar Home - Pose de films sur vitrages",
    date: "2026 - 2022",
    tags: [
      "Site Web Vitrine",
    ],
    stack: ["NextJS", "Tailwind CSS"],
    siteUrl: "https://www.solarhome37.fr",
    thumbnail: "/images/projects/solar-home/thumbnail_solar-home.png",
    shortDescription: "Solar Home 37 est spécialisé dans la pose de films pour vitrages de bâtiments, pour particuliers et professionnels. Confort thermique, sécurité, intimité, esthétique.",
    promise: "Avec l'activité naissante, et après une collaboration de longue date, Nicolas Malage, fondateur de Solar Car m'a confié la création d'un site web vitrine pour présenter les nouveaux services de la filière Solar Home. L'objectif était de créer une présence en ligne professionnelle et attrayante pour attirer de nouveaux clients et renforcer la crédibilité de l'entreprise dans le secteur de la pose de films sur vitrages.",
    sections: [],
  },
  // Solar Car
  // {
  //   slug: "solar-car",
  //   title: "Solar Car - Esthétique Automobile",
  //   date: "2026 - 2022",
  //   tags: [
  //     "Site Web",
  //     "Automotisations",
  //     "Visuels d'événements",
  //     "Visuel de streaming",
  //   ],
  //   stack: ["Suite Adobe", "Figma", "HTML/JS", "TailwindCSS"],
  //   thumbnail: "/images/projects/solar-car/thumbnail_solar-car.png",
  //   shortDescription: "",
  //   promise: "",
  //   sections: [],
  // },
  // HGC
  {
    slug: "holiday-geek-cup",
    title: "Holiday Geek Cup - Organisateur d'Événements",
    date: "2026 - 2022",
    tags: [
      "Site Web",
      "Automotisations",
      "Visuels d'événements",
      "Visuel de streaming",
    ],
    stack: ["NextJS", "Tailwind CSS", "Payload CMS", "Figma", "Adobe Illustrator", "Adobe Photoshop"],
    siteUrl: "https://www.holidaygeekcup.fr",
    thumbnail:
      "/images/projects/holiday-geek-cup/thumbnail_holiday-geek-cup.png",
    shortDescription: "Holiday Geek Cup est une association fondée par Sylvain Regnier afin d'apporter aux jeunes en difficulté sociale une expérience de vacances unique, mêlant activités ludiques, e-sportives et éducatives. L'association organise des évènements jeux-vidéo pour tous les publics, offrant un environnement bienveillant et stimulant où ils peuvent s'épanouir, développer leurs compétences sociales et renforcer leur confiance en eux.",
    promise: "L'association avait un fort besoin de mettre à jour l'identité visuelle de leur site web afin de coller à l'évolution de leur activité et de leur public cible. L'objectif était de créer une identité visuelle moderne et dynamique qui reflète les valeurs de l'association, tout en mettant en avant son engagement envers les jeunes en difficulté sociale et son expertise dans l'organisation d'événements e-sportifs.",
    sections: [],
  },
  // Renaud Tixier
  {
    slug: "renaud-tixier",
    title: "Renaud Tixier - Horloger Suisse",
    date: "2025 - 2024",
    tags: ["Identité visuelle", "Site Web Vitrine", "Automatisation"],
    stack: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Webflow", "NextJS", "Tailwind CSS"],
    thumbnail: "/images/projects/renaud-tixier/thumbnail_renaud-tixier.png",
    siteUrl: "https://www.renaudtixier.com",
    shortDescription: "Renaud Tixier est une marque d'horlogerie suisse naissante fondée par Dominique Renaud, pionnier de l'horlogerie en suisse et Julien Tixier. La marque se positionne sur le segment du luxe et de l'innovation, avec une approche centrée sur la qualité, l'artisanat et la créativité. Renaud Tixier propose des montres de haute horlogerie alliant design contemporain et savoir-faire traditionnel, destinées à une clientèle exigeante à la recherche d'exclusivité et d'originalité.",
    promise: "Avec le lancement de la marque et les premières ventes du modèle 'Monday', la marque souhaitais développer une identité visuelle forte et une présence en ligne professionnelle pour refléter son positionnement haut de gamme et attirer une clientèle internationale. L'objectif était de créer une image de marque cohérente et élégante, ainsi qu'un site web vitrine mettant en valeur les créations de la marque et facilitant la prise de contact avec les clients potentiels.",
    sections: [
      {
      type: "image",
      src: "/images/projects/renaud-tixier/content/logo_homepage_renaud-tixier.png",
      alt: "Renaud Tixier - Visuel de présentation du logotype et des cartes de visite de la marque",
    },
      {
      type: "image",
      src: "/images/projects/renaud-tixier/content/products_page_renaud-tixier.png",
      alt: "Renaud Tixier - Visuel de présentation du logotype et des cartes de visite de la marque",
    }
  ],
  },
  // Reflet 2000
  {
    slug: "reflet-2000",
    title: "Reflet 2000 - Services de nettoyage",
    date: "2025",
    tags: ["Identité visuelle", "Mise en page / Print"],
    stack: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma"],
    thumbnail: "/images/projects/reflet-2000/thumbnail_reflet-2000.png",
    shortDescription: "Reflet 2000 est une entreprise de nettoyage industriel basée à Viry Chatillon, spécialisée dans les services de nettoyage pour les entreprises et les particuliers. Avec une équipe expérimentée et des équipements de pointe, Reflet 2000 offre des solutions de nettoyage efficaces et respectueuses de l'environnement pour répondre aux besoins spécifiques de chaque client.",
    promise: "L'identité visuelle de la marque se faisait vieillissance car non adaptée à l'évolution de l'entreprise et à son positionnement suite au changement de direction. L'objectif était de créer une identité visuelle moderne et professionnelle qui reflète les valeurs de l'entreprise, tout en mettant en avant son expertise et sa nouvelle pluralité de services.",
    sections: [
      {
        type: "image",
        src: "/images/projects/reflet-2000/content/print_contract-head_reflet2000.png",
        alt: "Reflet 2000 - Mockup présentant la brochure de présentation d'un contract pour un client de Reflet2000",
      },
      {
        type: "image",
        src: "/images/projects/reflet-2000/content/print_brochures_reflet2000.png",
        alt: "Reflet 2000 - Mockup présentant la brochure de présentation d'un contract pour un client de Reflet2000",
      },
      {
        type: "image",
        src: "/images/projects/reflet-2000/content/print_brochures-intern_reflet2000.png",
        alt: "Reflet 2000 - Mockup présentant la brochure de présentation d'un contract pour un client de Reflet2000",
      },
      {
        type: "image",
        src: "/images/projects/reflet-2000/content/print_letterhead_reflet2000.png",
        alt: "Reflet 2000 - Mockup présentant la brochure de présentation d'un contract pour un client de Reflet2000",
      },
    ],
  },
  // Climax
  {
    slug: "climax",
    title: "Climax - Agence Vidéo",
    date: "2023",
    tags: ["Identité visuelle", "Site Vitrine", "Supports Print"],
    stack: ["Suite Adobe", "Figma", "Framer", "Framer Motion", "Tailwind CSS"],
    thumbnail: "/images/projects/climax/thumbnail_climax.png",
    siteUrl: "https://www.climax-lagence.com",
    shortDescription:
      "Climax est une agence vidéo spécialisée dans la création de contenus visuels pour les entreprises dans le domaine de l'automobile et de la moto. Basée à Aix-en-Provence, l'agence compte aujourd'hui de très gros clients tels qu'Audi, Lamborghini, Le circuit du Castellet ou encore Triumph.",
    promise:
      "En pleine croissance, Climax avait besoin d'une identité visuelle forte et d'une présence en ligne professionnelle pour refléter son expertise et attirer de nouveaux clients. L'objectif était de créer une image de marque cohérente et moderne, ainsi qu'un site web vitrine mettant en valeur les réalisations de l'agence et facilitant la prise de contact avec les clients potentiels.",
    sections: [
      {
        type: "image",
        src: "/images/projects/climax/content/animated_logo_climax.gif",
        alt: "Climax - Visuel de présentation du logotype et des cartes de visite de l'agence",
      },
      {
        type: "image",
        src: "/images/projects/climax/content/print_climax.jpg",
        alt: "Climax - Visuel de présentation du logotype et des cartes de visite de l'agence",
      },
      {
        type: "image",
        src: "/images/projects/climax/content/school_climax.jpg",
        alt: "Climax - Logo de l'agence placé derrière une moto face à un couché de soleil",
      },
      {
        type: "image",
        src: "/images/projects/climax/content/logo_mockup_climax.jpg",
        alt: "Climax - Logo de l'agence placé derrière une moto face à un couché de soleil",
      },
    ],
  },
  // Klap
  {
    slug: "klap",
    title: "Klap - Application Cinéma",
    date: "2023",
    tags: ["Identité visuelle", "Réflexion UX", "Protoypage Figma"],
    stack: ["Figma", "Adobe Illustrator", "Un papier et un crayon"],
    thumbnail: "/images/projects/klap/thumbnail_klap.png",
    shortDescription:
      "Projet de conception UX/UI pour une application mobile initié par le cinéma Le Coluche à Istres,  membre du réseau Scènes & Cinés regroupant plusieurs salles de cinéma et de théâtre  au sein de l’agglomération d’Istres et de ses communes partenaires.",
    promise:
      "L’offre culturelle locale souffre d’un manque de lisibilité et d’accessibilité sur mobile, en particulier pour les publics jeunes habitués à des parcours de réservation simples proposés par les grandes chaînes nationales. L’enjeu était de concevoir une expérience mobile capable de simplifier l’accès à la programmation et de faciliter la réservation, tout en valorisant les salles locales.",
    sections: [
      {
        type: "image",
        src: "/images/projects/klap/wireframe_klap.png",
        alt: "Klap - Etape 1 - Wireframes - Conception, Réflexion, Prototypage",
      },
      {
        type: "image",
        src: "/images/projects/klap/objectif_klap.png",
        alt: "Klap - Objectif - Centraliser toute l'offre locale dans une seule application facile d'accès",
      },
      {
        type: "image",
        src: "/images/projects/klap/prototype_klap.png",
        alt: "Klap - Etape 3 - Ecrans prototypés - Accueil, Login, Fiche Acteur / Film",
      },
    ],
  },
];
