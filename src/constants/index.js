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
        "Upgrade to PTG",
        "Manage Budget",
        "Analyze Complex Data",
        "Generate Reports",
      ],
    },
  ];
  
  // TODO: update all these testimonials.
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Yariga",
      // TODO: update this description
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      live_deploy_link: "https://realestateken.netlify.app/",
      source_code_link: "https://github.com/kenbadertscher/refine_dashboard",
    },
    {
      name: "Shoppy",
      // TODO: update this description
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      live_deploy_link: "https://dashboardken.netlify.app/",
      source_code_link: "https://github.com/kenbadertscher/shoppy-dashboard",
    },
    {
      name: "GPT-3 Blog",
      // TODO: update this description
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      live_deploy_link: "https://gpt3ken.netlify.app/",
      source_code_link: "https://github.com/kenbadertscher/gpt_ken",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };