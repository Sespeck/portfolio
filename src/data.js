import {
  IoLogoGithub,
  IoLogoWhatsapp,
  IoLogoLinkedin,
  IoSchool,
} from "react-icons/io5";

import { MdOutlineMailOutline, MdOutlineWork } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

import img1 from "./images/puddle-project.png";
import img2 from "./images/harbor.png";
import img3 from "./images/welcome-to-java-island.png";
import img4 from "./images/KOF22.png";
import img5 from "./images/welcome-to-java-island.png";
import img6 from "./images/java-ood-workbook.png";

export const Experience = [
  {
    id: 1,
    date: "2022 - present",
    iconsSrc: <IoSchool className=" animate-pulse text-teal-100" />,
    title: "MSc in Computer Science",
    location: "Northeastern University, Portland, ME, USA",
    description: [
      "MS in Computer Science",
      <br />,
      "Relevant Coursework: Database Management, Mobile App Development, Algorithms, Web Development",
    ],
  },
  {
    id: 2,
    date: "2019 - 2021",
    iconsSrc: <MdOutlineWork className=" animate-pulse text-blue-200" />,
    title: "Avaloq Software Engineer & Tableau Consultant",
    location: "Synpulse Management Consulting, Singapore",
    description: [
      "Managed business analysis for investment banks in Asia-Pacific region, including HSBC and UBS; acted as subject matter expert and consultant on Tableau business intelligence, Avaloq financial static data, security trading and reporting.",
      <br />,
      "Trading System Developer, Agile Development, OOD of Financial Products, Data Modelling in PL/SQL.",
      <br />,
      "Project Management and Test management.",
      <br />,
      "Expertise Trainer in Trading Desk Operation.",
      <br />,
      "Reporting Auomation, Tableau Business Intelligence Developer",
    ],
  },
  {
    id: 3,
    date: "2019 Jan - Apr",
    iconsSrc: <MdOutlineWork className=" animate-pulse text-blue-200" />,
    title: "Data Science Intern",
    location: "Shopee, Singapore",
    description: [
      "Led sales business intelligence project; produced insights into buyer behaviour, promotion, pricing; proposed a complex Python-scripted Power BI deployment project and held BI development training.",
      <br />,
      "Designed A/B test plans to study customer purchasing pattern impacted by rebate and marketing campaigns.",
    ],
  },
  {
    id: 4,
    date: "2015 - 2019",
    iconsSrc: <IoSchool className=" animate-pulse text-teal-100" />,
    title: " BSc in Maritime Studies & Commodities Trading",
    location: "Nanyang Technological University, Singapore",
    description: [
      "NTU Science and Engineering Undergraduate Full Scholarship",
      <br />,
      "Relevant Coursework: Data Structure, Python Computational Thinking, Digital Logic, Probability and Statistics",
    ],
  },
];

export const Projects = [
  {
    id: 1,
    name: "Puddle",
    info: "proximity-based community group",
    imageSrc: img1,
    techs: "Android, Firebase, Google Maps, Material UI",
    link: "https://github.com/Sespeck/NUMAD22Su_Team24_Puddle",
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
  },
  {
    id: 2,
    name: "Harbor",
    info: "Full stack CRUD web app with React and Spring Boot",
    imageSrc: img2,
    techs: "Next.JS, Tailwind CSS, Redux, Spring",
    link: "https://github.com/Sespeck/harbor-frontend",
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
  },
  // {
  //   id: 3,
  //   name: "Travel Advisor",
  //   info: "info",
  //   imageSrc: img3,
  //   techs: "React Js, Chakra UI, Google API",
  //   link: "#",
  //   iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
  // },
  {
    id: 4,
    name: "King of Figher 2022",
    info: "Java OOD course creative lab",
    imageSrc: img4,
    techs: "Java, JavaFX",
    link: "https://github.com/Sespeck/King-Of-Fighters",
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
  },
  {
    id: 5,
    name: "Java Basics Blog",
    info: "Structured blog posts on Java basics learning points",
    imageSrc: img5,
    techs: "Java, Blogging, HTML",
    link: "https://aaaa329m.wixsite.com/javaisland",
    iconSrc: (
      <FiExternalLink className="text-textBase text-3xl cursor-pointer" />
    ),
  },
  {
    id: 6,
    name: "Java OOD Workbook",
    info: "Self-crafted lab assignments for Java OOD learning",
    imageSrc: img6,
    techs: "Java, Blogging, HTML",
    link: "https://aaaa329m.wixsite.com/workbook",
    iconSrc: (
      <FiExternalLink className="text-textBase text-3xl cursor-pointer" />
    ),
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-gray-300 text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/Sespeck",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-600 text-3xl cursor-pointer" />
    ),
    name: "WhatsApp",
    link: "https://wa.me/6594489584",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-600 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zhenyuwangsean/",
  },
  {
    id: 1,
    iconSrc: (
      <MdOutlineMailOutline className=" text-red-300 text-3xl cursor-pointer" />
    ),
    name: "Email",
    link: "mailto:wang_zhenyu_sean@foxmail.com",
  },
];
