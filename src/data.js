import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoWechat,
  IoLogoLinkedin,
} from "react-icons/io5";

import { MdOutlineMailOutline } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

import img1 from "./images/thumb-fooddeliveryapp-reactjs-dec.png";
import img2 from "./images/thumb-fullstack-socialmedia-app-react-sanity.png";
import img3 from "./images/thumb-google-map-clone-nextjs-feb22.png";
import img4 from "./images/thumb-pinterest-clone-reactjs.png";
import img5 from "./images/welcome-to-java-island.png";
import img6 from "./images/java-ood-workbook.png";

export const Experience = [
  {
    id: 1,
    date: "2016 - present",
    iconsSrc: <IoCodeWorking />,
    title: "Creative Director",
    location: "Doha, Qatar",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    id: 2,
    date: "2014 - 2016",
    iconsSrc: <IoCodeWorking />,
    title: "Creative Director",
    location: "Doha, Qatar",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    id: 3,
    date: "2012 - 2014",
    iconsSrc: <IoCodeWorking />,
    title: "Creative Director",
    location: "Doha, Qatar",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    id: 4,
    date: "2011 - 2012",
    iconsSrc: <IoCodeWorking />,
    title: "Creative Director",
    location: "Doha, Qatar",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    id: 5,
    date: "2010 - 2011",
    iconsSrc: <IoCodeWorking />,
    title: "Creative Director",
    location: "Doha, Qatar",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Food Delivery UI Mockup",
    imageSrc: img1,
    techs: "React Js, Redux, Material UI",
    link: "#",
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
  },
  {
    id: 2,
    name: "Full Stack Social Media App ",
    imageSrc: img2,
    techs: "React Js, Sanity, Tailwind CSS",
    link: "#",
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
  },
  {
    id: 3,
    name: "Travel Advisor",
    imageSrc: img3,
    techs: "React Js, Chakra UI, Google API",
    link: "#",
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
  },
  {
    id: 4,
    name: "Pintrest UI Clone 2.0 ",
    imageSrc: img4,
    techs: "React Js,  Material UI",
    link: "#",
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
  },
  {
    id: 5,
    name: "Java Basics Blog",
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
  // {
  //   id: 1,
  //   iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
  //   name: "YouTube",
  //   link: "#",
  // },
  {
    id: 1,
    iconSrc: (
      <IoLogoWechat className="text-green-600 text-3xl cursor-pointer" />
    ),
    name: "Wechat",
    link: "weixin://weixin.qq.com/r/kFEybsDBmUDvgNicB_POuns",
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
