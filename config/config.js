import profile from './profile.png';
import pythonLogo from './pythonLogo.png';
import cppLogo from './cpplogo.png';
import cLogo from './c-logo.png';
import javaLogo from './Java.png';
import sqlLogo from './postgresql-logo.png';
import javascriptLogo from './javascript-39417.png';
import reactLogo from './react-logo.png';
import tensorflowLogo from './TensorFlow.png';
import numpyLogo from './Numpy.png';
import pandasLogo from './Pandas.png';
import pytorchLogo from './pytorch.png';
import jaxLogo from './jax-logo.png';
import flaskLogo from './Flask.png';
import bootstrapLogo from './bootstrap.png';
import awsLogo from './aws.png';
import hadoopLogo from './hadoop-logo.png';
import DockerLogo from './docker.png';
import annDemo from './annDemo.gif'
// import beautifulSoupLogo from './beautifulsoup-logo.png';
// import matplotlibLogo from './matplotlib-logo.png';

// import bashLogo from './bash-logo.png';
// import htmlCssLogo from './htmlcss-logo.png';
// import matlabLogo from './matlab-logo.png';

import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Xiaocen",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Experiences",
      link: "#experiences",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Skills",
      link: "#skills",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
}
export const intro = {
  title: "Hey, I'm Xiaocen",
  description: "A rising senior student in University of Michigan major in Computer Science and Financial Math.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/18YEb0VJUCJ9ynRBgnijpGTktxKXqxxJ8tsisnXB94qI/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I'm currently pursuing Bachelor of Computer Science and Financial Math in University of Michigan, Ann Arbor, expected to graduate in May 2025. Before that, I went to UC, San Diego and transfered to U-M in 2022. They have totally different weather, but I love both of them!",
    "My track focuses on backend software(looking for SDE intern for 2024 summer!), data analysis. My research interest focuses machine learning theory, statistical learning my research interest. I'm always curious about knowledge and enjoying exploring the theoretical explanation for my observation.",
    "I'm Chinese,and speaks Mandarin as my native language(my Chinese name is 刘笑岑).  When I’m not working or studying, I focus on my hobbies which are: training in gym, playing piano, go hiking and hanging out with my friends!",
  ],
}

export const work = {
  title: "Skills",
  skill_bar: [
    {
      title: "Languages",
      skills: [{ s: "Python", picture: pythonLogo.src },
      { s: "C++", picture: cppLogo.src },
      { s: "C", picture: cLogo.src },
      { s: "Java", picture: javaLogo.src },
      { s: "PostgreSql", picture: sqlLogo.src },
      { s: "JavaScript", picture: javascriptLogo.src },

        // { s: "Bash", picture: bashLogo.src },
        // { s: "HTML/CSS", picture: htmlCssLogo.src },
        // { s: "MATLAB", picture: matlabLogo.src }
      ],
    },
    {
      title: "Libraries and Frameworks",
      skills: [
        { "s": "React.js", "picture": reactLogo.src },
        { "s": "TensorFlow", "picture": tensorflowLogo.src },
        { "s": "Numpy", "picture": numpyLogo.src },
        { "s": "Pandas", "picture": pandasLogo.src },
        { "s": "PyTorch", "picture": pytorchLogo.src },
        { "s": "Jax", "picture": jaxLogo.src },
        { "s": "Flask", "picture": flaskLogo.src },
        // { "s": "Node.js", "picture": "nodejsLogo.src" },
        // { "s": "BeautifulSoup", "picture": "beautifulSoupLogo.src" },
        { "s": "bootstrap", "picture": bootstrapLogo.src },
        // { "s": "AWS", "picture": awsLogo.src },
        // awsLogo
        // { "s": "Matplotlib", "picture": "matplotlibLogo.src" }
      ]
    },
    {
      title: "Technologies",
      skills: [
        { "s": "AWS", "picture": awsLogo.src },
        { "s": "Apach Hadoop", "picture": hadoopLogo.src },
        { "s": "Docker", "picture": DockerLogo.src },
        // DockerLogo
        // { "s": "Matplotlib", "picture": "matplotlibLogo.src" }
      ]
    }
  ],
}
export const experiences = {
  title: "Experiences",
  experience_card: [
    {
      company: "CPIC Fund",
      role: "Software Engineer Intern",
      details: [
        "Contributed to the development of feature X, leading to a Y% improvement in performance.",
        "Collaborated with the product team to refine project requirements and establish Z.",
        "Participated in the design and implementation of a scalable microservices architecture."
      ],
      time: "June 2021 - August 2021",
      location: "Shanghai, China",
      logo: numpyLogo.src
    },
    {
      company: "University of Michigan",
      role: "Research Assistant Intern",
      details: [
        "Contributed to the development of feature X, leading to a Y% improvement in performance.",
        "Collaborated with the product team to refine project requirements and establish Z.",
        "Participated in the design and implementation of a scalable microservices architecture."
      ],
      time: "June 2021 - August 2021",
      location: "Ann Arbor, MI",
      logo: numpyLogo.src
    },
    {
      company: "University of Michigan",
      role: "Research Assistant Intern",
      details: [
        "Contributed to the development of feature X, leading to a Y% improvement in performance.",
        "Collaborated with the product team to refine project requirements and establish Z.",
        "Participated in the design and implementation of a scalable microservices architecture."
      ],
      time: "June 2021 - August 2021",
      location: "Ann Arbor, MI",
      logo: numpyLogo.src
    },
  ]
}
export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Ann Leasing",
      description: ["Led a team of 3 and developed a full stack web application, for subletting aparments, with features like search, listings, user authentication, emphasizing responsiveness and security, hosted on AWS, using BeautifulSoup to enrich the listings.",
        "Utilized React.js and Tailwind CSS for the frontend, Node.js,  Flask, and REST API for the backend, and PostgreSQL for data management, managing user authentication and authorization using Firebase. ",],
      icons: [
        // {
        //   icon: faAppStore,
        //   link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
        // },
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/star_book",
        },
      ],
      imageUrl: annDemo.src,
    },
    {
      title: "Portfolio",
      description: ["A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year."],
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
        },
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/star_book",
        },
      ]
    },
    {
      title: "Handmade Search Engine",
      description: ["An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran."],
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
        },
      ]
    },
    {
      title: "Yoga Pose Correctness",
      description: ["A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer."],
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/portfolio",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at hashirshoaeb@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:xiaocen@umich.edu",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://topmate.io/hashirshoaeb",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Xiaocen Liu | 刘笑岑 | University of Michigan",
  description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@hashirshoaeb",
  description: "Computer Engineer | Flutter | Reactjs Developer",
  cards: [
    {
      title: "My website",
      link: "https://hashirshoaeb.com/",
    },
    {
      title: "QuranTalk App",
      link: "https://www.qurantalk.app/",
    },
    {
      title: "StarBook App",
      link: "https://starbook.dev/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/hashirshoaeb/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/hashirshoaeb/",
    },
  ]
}