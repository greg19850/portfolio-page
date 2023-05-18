import skinScan from "../img/projects/skin-scan.png";
import ncNewsFront from "../img/projects/nc-news-front.png";
import ncNewsBack from "../img/projects/nc-news-back.png";
import hangman from "../img/projects/hangman.png";
import slotMachine from "../img/projects/slot-machine-OOP.png";
import cinemaBook from "../img/projects/cinema-ticket-booking.png";
import mealFinder from "../img/projects/meal-finder-API.png";
import rateExchange from "../img/projects/rate-exchange-calculator-API.png";
import expenseTracker from "../img/projects/expense-tracker.png";
import myPage from "../img/projects/Greg M Page.png";


const ProjectsList = [
  {
    id: 1,
    link1: "https://main.d2lr9qljwqxiia.amplifyapp.com/",
    link2: null,
    img: skinScan,
    title: "Skin Scan",
    language: ['JavaScript', 'Python'],
    stack: 'full-stack',
    text: "Skin Scan is Northcoders final project. This is a full-stack application, which offers a possibility to take a skin self-exam, and receive skin cancer risk assessment based on skin photograph.",
    technologies: ['JavaScript', 'Vue.js', 'CSS', 'Node.js', 'Express.js', 'MySql Database', 'AWS Cloud Hosting', 'Python', 'Flask', 'PyTorch'],
  },
  {
    id: 2,
    link1: "https://nc-news-xi.vercel.app/",
    link2: "https://github.com/greg19850/nc-news",
    img: ncNewsFront,
    title: "NC News",
    language: ['JavaScript'],
    stack: 'full-stack',
    text: "An UI/Front-end interface, which connects with NC News back-end server endpoints. Login option, logged user can add and delete comments, as well as vote for each article. Page created with React.js and CSS, with use of axios to connect with backend API.",
    technologies: ['JavaScript', 'React.js', 'CSS', 'Node.js', 'Express.js', 'PostgreSQL Database'],
  },
  {
    id: 3,
    link1: "https://my-personal-page-gm.vercel.app/",
    link2: "https://github.com/greg19850/my-page",
    img: myPage,
    title: "My Portfolio Page Retro Style",
    language: ['JavaScript'],
    stack: 'front-end',
    text: "My personal page, made in retro game style from 1980's. I created this page as an original portfolio page, but decided to change style, however it's worth checking my original page as it has few different, interesting solutions.",
    technologies: ['JavaScript', 'React.js', 'CSS'],
  },
  {
    id: 4,
    link1: "https://nc-backend-project-nc-news.onrender.com/api",
    link2: "https://github.com/greg19850/nc-backend-project",
    img: ncNewsBack,
    title: "NC News back-end",
    language: ['JavaScript'],
    stack: 'back-end',
    text: "Back-end project. RESTful API offering various endpoints connected with NC News database. Designed and built with Model View Controller pattern, server hosts database containing tables like: topics, articles, comments, users. ",
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Jest', 'SuperTest'],
  },
  {
    id: 5,
    link1: "https://hangmann-game.netlify.app/",
    link2: "https://github.com/greg19850/Hangman",
    img: hangman,
    title: "Hangman Game",
    language: ['JavaScript'],
    stack: 'front-end',
    text: "Classic Hangman game. Player needs to guess hidden word, any missed letter results in another part of hangman come up on screen. Game ends when full hangman. Desktop only app, keyboard required",
    technologies: ["HTML5", "CSS", "JavaScript"]
  },
  {
    id: 6,
    link1: "https://movie-tickets-booking-vert.vercel.app/",
    link2: "https://github.com/greg19850/Movie-Tickets-Booking",
    img: cinemaBook,
    title: "Cinema Ticket Booking",
    language: ['JavaScript'],
    stack: 'front-end',
    text: "Cinema tickets booking app. Pick seats for one of available films. Some seats are already taken, and can't be picked. Project made with use of local storage - seats selection, and tickets price don't reset, after refreshing page.",
    technologies: ["HTML5", "CSS", "JavaScript"],
  },
];

export default ProjectsList;