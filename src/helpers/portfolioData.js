import fitnessTracker from "../images/projectsicon/FitnessTrackerApp.png";
import noteTaker from "../images/projectsicon/NoteTakerApp.png";
import weather from "../images/projectsicon/WeatherApp.jpg";
import passWord from "../images/projectsicon/passWordGenerator.png"


const portfolioData = [
    {
        image: fitnessTracker,
        link: 'https://dry-fortress-22156.herokuapp.com/',
        title: 'Fitness Tracker App',
        summary: 'A fitness tracker app that allows the user to track their exercises and record the type of exercise, amount of weights used, and teh day.',
        tech: 'MongoDB, node.js, and JavaScript'

    },
    {
        image: noteTaker,
        link: ' https://jallen-note-taker-express.herokuapp.com/',
        title: 'Note Taker App',
        summary: 'An app that allows the user to take notes and add a title to each note, save the note, and have the note be displayed on the screen while entering a new note.',
        tech: 'JavaScript, Node.js'

    },

    {
        image: passWord,
        link: 'https://janayal.github.io/passwordgenerator/',
        title: 'Password Generator',
        summary: 'A web application that generates a random password based on selections made by the user.',
        tech: 'JavaScript, HTML, CSS'

    },

]


export default portfolioData