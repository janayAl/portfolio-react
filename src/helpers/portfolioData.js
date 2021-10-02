import fitnessTracker from "../images/projectsicon/FitnessTrackerApp.png";
import noteTaker from "../images/projectsicon/NoteTakerApp.png";
import weather from "../images/projectsicon/WeatherApp.jpg";
import passWord from "../images/projectsicon/passWordGenerator.png"
import happyclock from "../images/projectsicon/happyclock.gif";
import WeatherApp from "../images/projectsicon/WeatherApp.jpg";
import teamprofile from "../images/projectsicon/TeamProfileGenerator.png";
import datenight from "../images/projectsicon/datenight.jpg"

const portfolioData = [
    {
        image: fitnessTracker,
        link: 'https://dry-fortress-22156.herokuapp.com/',
        title: 'Fitness Tracker App:',
        summary: 'A fitness tracker app that allows the user to track their exercises and record the type of exercise, amount of weights used, and the day.',
        tech: 'MongoDB, node.js, and JavaScript'

    },
    {
        image: noteTaker,
        link: ' https://jallen-note-taker-express.herokuapp.com/',
        title: 'Note Taker App:',
        summary: 'An app that allows the user to take notes and add a title to each note, save the note, and have the note be displayed on the screen while entering a new note.',
        tech: 'JavaScript, Node.js'

    },

    {
        image: passWord,
        link: 'https://janayal.github.io/passwordgenerator/',
        title: 'Password Generator:',
        summary: 'A web application that generates a random password based on selections made by the user.',
        tech: 'JavaScript, HTML, CSS'

    },
    {
        image: happyclock,
        link: 'https://github.com/janayAl/workdailyschedule',
        title: 'Work Day Scheduler:',
        summary: 'A web application that allows you to schedule your day by the hour.',
        tech: 'JavaScript, HTML, CSS'

    },
    {
        image: WeatherApp,
        link: 'https://janayal.github.io/weatherapp/',
        title: 'Weather App:',
        summary: 'A web application that allows the user to type in a city and have the current weather displayed.',
        tech: 'HTML, CSS, jQuery'

    },
    {
        image: datenight,
        link: 'https://pazjenni04.github.io/Date-night-in/',
        title: 'Date Night App:',
        summary: 'A web application that allows the user to have movie and dinner recommendation generated. This was a group project that tought me how to build web applications with  more than one person and how to work on multiple branches on Github',
        tech: 'HTML, CSS, Javascript'

    },



]


export default portfolioData