import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate front-end developer with a knack for building robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React, TypeScript, and Tailwind CSS, as well as back-end technologies like Node.js and SQL. Additionally, I have a degree in Systems Analysis and Development. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Freelance Front-End Developer",
    company: "Reforma Agora",
    description: `I developed a modern and responsive website for the company Reforma Agora, with an intuitive and high-quality user experience. I added the WhatsApp API to facilitate communication between users and the company.`,
    technologies: ["Javascript", "HTML", "CSS"],
  },
  {
    year: "2017 - 2018",
    role: "Soldier",
    company: "Brazilian Army - 2nd Anti-Aircraft Artillery Group (2° GAAAe)",
    description: ` I developed skills in teamwork, leadership, discipline and resilience, as well as improving my ability to follow procedures and instructions accurately, and I performed security and operational support activities in a disciplined, high-pressure environment.`,
  },
];

export const PROJECTS = [
  {
    title: "Plann.er",
    image: project1,
    description:
      "Plann.er is a website that makes group travel planning easy, allowing friends to collaborate in real time to create itineraries, log activities, and share useful links.",
    technologies: ["TypeScript", "Tailwind CSS", "React", "date fns"],
  },
  {
    title: "ToDo List",
    image: project2,
    description:
      "Todo List is a task management platform that makes personal organization easier, allowing you to create and manage lists in a practical and intuitive way.",
    technologies: ["React", "TypeScript", "Toastify", "CSS"],
  },
  {
    title: "Reforma Agora",
    image: project3,
    description:
      "I developed a modern and responsive website for Reforma Agora, a well-established company in the general renovation sector in the city of São Paulo.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Expert Notes",
    image: project4,
    description:
      "Front-end application that converts audio notes into text, making it easier to organize ideas with an intuitive interface and editing and sharing features.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Sonner"],
  },
];

export const CONTACT = {
  address: "São Paulo - SP, Brazil",
  phoneNo: "+5513988354347 ",
  email: "gmario.sh@gmail.com",
};
