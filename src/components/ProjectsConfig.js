import Emojigit from "../images/Emojigit.PNG";
import PortfolioPreview from "../images/PortfolioPreview.PNG";
import TalkativePreview from "../images/talkative.png";
import LastMealPreview from "../images/LastMealPreview.png";
import YelpcampPreview from "../images/yelpcamp.png";

const projectsConfig = [
  {
    title: "Portfolio",
    previewImage: PortfolioPreview,
    description:
      "Portfolio website built using ReactJS and TailwindCSS. Includes information about me and my skills along with side projects.",
    liveDemoLink: "https://ganesh129.github.io/my-portfolio",
    githubLink: "https://github.com/ganesh129/My-portfolio",
    backgroundColor: "bg-blue-500",
  },
  {
    title: "TheLast-Meal",
    previewImage: LastMealPreview,
    description:
      "A clone of swiggy ehere you will get the same experience as compared to swiggy.",
    liveDemoLink: "https://last-meal.netlify.app/",
    githubLink: "https://github.com/ganesh129/food-club",
    backgroundColor: "",
  },
  {
    title: "Talk-A-Tive(chat App)",
    previewImage: TalkativePreview,
    description:
      "Talk-a-tive is a Full Stack Chatting App.Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database",
    githubLink: "https://github.com/ganesh129/talk-a-tive",
  },
  {
    title: "YelpCamp",
    previewImage: YelpcampPreview,
    description:
      "It's a fully functional NodeJs web app. This is a camping ground website.An user can login and write travelling blog,read and make comments on other blogs",
    githubLink: "https://github.com/ganesh129/yelpcamp",
    backgroundColor: "bg-blue-500",
  },
];

export default projectsConfig;
