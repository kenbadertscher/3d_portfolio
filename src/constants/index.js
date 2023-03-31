import {
    uiux,
    react,
    frontend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    airforce,
    attleboro,
    boston,
    century21,
    yariga,
    gpt3,
    shoppy,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front-end Developer",
      icon: frontend,
    },
    {
      title: "React Developer",
      icon: react,
    },
    {
      title: "UI/UX Developer",
      icon: uiux,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Staff Sergeant",
      company_name: "U.S. Air Force",
      icon: airforce,
      iconBg: "#0d2944",
      date: "Sept 2004 - Aug 2012",
      points: [
        "Built software tracking program to monitor more than 10,350 training events for over 610 personnel.",
        "Maintained flight readiness database for 52x F-16 fighter jet aircraft valued at over $1.04Bn.",
        "Created integrated aircraft maintenance records for trend analysis and logistics forecasting.",
        "Decorated military professional with proven record of leadership in high stress situations.",
      ],
    },
    {
      title: "Real Estate Salesman",
      company_name: "Century 21",
      icon: century21,
      iconBg: "#E6DEDD",
      date: "Oct 2012 - Aug 2014",
      points: [
        "Communicated complex information about to clients in a clear and concise manner.",
        "Deployed modern CRM system to retain clients and increase repeat and referral business.",
        "Remained focused on the clients' needs and goals throughout the home sale process.",
        "Demonstrated time management skills, seeing to multiple clients and transactions simultaneously.",
      ],
    },
    {
      title: "Benefits Program Manager",
      company_name: "City of Boston",
      icon: boston,
      iconBg: "#383E56",
      date: "Aug 2014 - Jul 2015",
      points: [
        "Participated in housing 717 homeless veterans aided by bespoke software tracking solutions.",
        "Oversaw an annual $4.6MM budget administered with close oversight of State audit agencies.",
        "Supervised a team of 6 employees engaged in advocacy for 589 low-income veterans.",
        "Established cloud based case management best practices to improve customer service.",
      ],
    },
    {
      title: "Director of Veterans' Services",
      company_name: "City of Attleboro",
      icon: attleboro,
      iconBg: "#E6DEDD",
      date: "Jul 2015 - Aug 2020",
      points: [
        "Managed parades and patriotic events with niche software for vendors, permits, and payments.",
        "Leveraged interagency software to orchestrate disability, finanical aid, and other benefits.",
        "Forged strong working relationships with State and local agencies to benefit local veterans.",
        "Led a team of 150 volunteers to fundraise $30k to host a travelling replica of the Vietnam Memorial.",
        ],
    },    
    {
      title: "Executive Director",
      company_name: "Attleboro Retirement Board",
      icon: attleboro,
      iconBg: "#E6DEDD",
      date: "Sept 2020 - Present",
      points: [
        "Upgraded 20 year old legacy application to a cloud-based retirement management platform.",
        "Devloped budget, managed payroll and certified expenses for a $200MM municipal pension plan.",
        "Analyzed complex regulations to make eligibility decisions for members and advise beneficiaries.",
        "Generate financial reports for State oversight agencies and auditors and public consumption.",
      ],
    },
  ];
  
  // TODO: update all these testimonials.
  const testimonials = [
    {
      testimonial:
        "Ken is a self starter with a vision of how things should be done and then executes with precision. His attention to detail ensured that nothing was left to spare.",
      name: "Glen Caron",
      designation: "Master Sergeant",
      company: "US Air Force",
      image: "https://res.cloudinary.com/diracbbg3/image/upload/v1680226059/Glen_Caron_m4u4m1.jpg",
    },
    {
      testimonial:
        "Ken is an excellent communicator and provides services that go beyond what is normally expected.",
      name: "Ron Grieger",
      designation: "Owner / CEO",
      company: "Diamond Associates",
      image: "https://res.cloudinary.com/diracbbg3/image/upload/v1680227137/RonGrieger_ltzein.jpg",
    },
    {
      testimonial:
        "If you want something done right, give it to Ken.",
      name: "Bryan Bishop",
      designation: "Deputy Commissioner",
      company: "Veterans Services",
      image: "https://res.cloudinary.com/diracbbg3/image/upload/v1680226279/Bryan_Bishop_bfr2ih.png",
    },
  ];
  
  const projects = [
    {
      name: "Yariga",
      description:
        "Full-stack MERN application with full Create-Read-Update-Delete functionality featuring modern MaterialUI components plus login and register with Google Auth.",
      tags: [
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "express.js",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: yariga,
      live_deploy_link: "https://realestateken.netlify.app/",
      source_code_link: "https://github.com/kenbadertscher/refine_dashboard",
    },
    {
      name: "Shoppy",
      description:
        "A fully mobile responsive admin dashboard application built with ReactJS; featuring theming, tables, charts, calendar, kanban, and more from SyncFusion.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "syncfusion",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: shoppy,
      live_deploy_link: "https://dashboardken.netlify.app/",
      source_code_link: "https://github.com/kenbadertscher/shoppy-dashboard",
    },
    {
      name: "GPT-3 Blog",
      description:
        "A modern and fully responsive blog website created with ReactJS from a Figma template, showcasing the Block-Element-Modifier (BEM) CSS methodology.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "responsive",
          color: "pink-text-gradient",
        },
      ],
      image: gpt3,
      live_deploy_link: "https://gpt3ken.netlify.app/",
      source_code_link: "https://github.com/kenbadertscher/gpt_ken",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };