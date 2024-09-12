import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a second-year student at Maulana Azad National Institute of Technology (MANIT), Bhopal. I am a passionate tech enthusiast and interested in the fields of Software Engineering and Robotics. I love to make innovative solutions using software and hardware technologies.`;

export const ABOUT_TEXT = `My passion lies in exploring new technologies and acquiring new skills. I have a particular interest in web development and programming, which keeps me actively engaged in various web design and development projects. Additionally, I occasionally work with Python programming.

I am also delving into the realms of electronics and microcontrollers, learning Arduino programming using C++, and researching new project ideas related to electronics. Furthermore, I am dedicated to mastering Data Structures and Algorithms (DSA) with C++, regularly practicing on LeetCode to sharpen my problem-solving skills.

Beyond my technical expertise, I am committed to enhancing my soft skills. I actively participate in teamwork within college societies, always eager to collaborate and network with others.

As a dedicated student, I strive to work hard and consistently, aiming to balance my academic responsibilities with extracurricular activities. I am looking forward to my overall growth and development in the coming years.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Web Developer",
    company: "Entreprenureship-Cell MANIT Bhopal",
    description: `Maintaining and developing the website for the society, regularly optimising the data flow and fixing bugs. Also significantly contributing as an Event Manager in various events organised by the society on regular basis.`,
    technologies: ["Javascript", "HTML", "CSS", "TailwindCSS", "Git & GitHub"],
  },
  {
    year: "2024 - present",
    role: "Technical Executive",
    company: "Robotics Club, MANIT",
    description: `Working on various projects involving electronics and microcontrollers like Arduino, ESP32, Raspberry Pi, Sensor modules, etc to prototype robots, working for various workshops, fetching parteners for conduction of events, and web design & development. `,
    technologies: ["Arduino", "Microcontrollers", "electronic sensors", "Next.js"],
  },
  {
    year: "jan 2024 - feb 2024",
    role: "Full Stack Developer",
    company: "Evehere (Startup)",
    description: `Involved in planning of the the full-stack application of the startup at the initial stage.`,
    technologies: ["Web development", "Communication"],
  },
  {
    year: "2022 - 2022",
    role: "Team Leader",
    company: "Sanskriti Techfest",
    description: `secured secoond position in inter-school web-development competetion in which 10+ top schools of Bhopal participated.`,
    technologies: ["HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Note-saving Website",
    link:"https://github.com/maasir554/notes-app/",
    image: project1,
    description:
      "A fully functional note-saving website which saves your notes to the local storage of your browser.",
    technologies: ["HTML", "CSS", "JavaScript", "localStorage"],
  },
  {
    title: "ToDude - a todo lists app",
    link:"https://github.com/maasir554/todo-ts/",
    image: project2,
    description:
      "An application for adding and tracking your tasks. uses local strage to save data.",
    technologies: ["Vite", "TypScript", "localStorage"],
  },
  {
    title: "Portfolio Website",
    link:"https://github.com/maasir554/portfolio-ecell/",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Vite", "React", "TailwindCSS"],
  },
  {
    title: "Object avoiding robot",
    link:"https://roboticsnitb.com/",
    image: project4,
    description:
      "A simple auto-driving car which senses its front usning an ultrasonic sensor and uses Arduino to control DC motoes via L298N Motor Driver.",
    technologies: ["Arduino", "C++", "Sensors and Hardware"],
  }
];

export const CONTACT = {
  address: "191/4, Professor's Colony, Bhopal, Madhya Pradesh, India ",
  phoneNo: "+91 626 898 7937 ",
  email: "maasir554@gmail.com",
};
