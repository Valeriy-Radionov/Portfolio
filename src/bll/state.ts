import todoImage from "../assets/images/note.jpg"
import socialImage from "../assets/images/socialnetwork.jpg"
import learningCards from "../assets/images/learn-learning-education-studying-concept.jpg"
import redux from "../assets/images/redux_logo_icon_144932.png"
import js from "../assets/images/test_js_icon_131933.png"
import sass from "../assets/images/icons8-sass-150.png"
import ts from "../assets/images/test_typescript_icon_131927.png"
import react from "../assets/images/react_logo_icon_144942.png"
import css from "../assets/images/css_logo_icon_181257.png"
import telegram from "../assets/images/telegram.png"
import linkedin from "../assets/images/free-icon-linkedin-3536505.png"
import github from "../assets/images/free-icon-github-270798.png"
import facebook from "../assets/images/free-icon-facebook-733547.png"


export const state = {
    projects: [{
        title: "Social-network",
        description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
        img: {
            backgroundImage: `url(${socialImage})`
        }
    }, {
        title: "To-do-list",
        description: "In issues, comments, and pull request descriptions are incredibly useful for project coordination and keeping track of important items. Starting today, we are adding read-only task lists to all Markdown documents in repositories and wikis. So now, when you write",
        img: {
            backgroundImage: `url(${todoImage})`
        }
    }, {
        title: "Learning cards ",
        description: "Do you like practising English vocabulary? In this section there are lots of flashcards for you to print. Play flashcards games to help you remember new words. There are also some flashcards for you to colour and write!",
        img: {
            backgroundImage: `url(${learningCards})`
        }
    }],
    skills: [{
        title: "Redux",
        description: "Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",
        img: {
            backgroundImage: `url(${redux})`
        }
    }, {
        title: "JS",
        description: "Every time a web page does more than just sit there and display static information for you to look at—displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, or more—you can bet that JavaScript is probably involved",
        img: {
            backgroundImage: `url(${js})`
        }
    },
        {
            title: "CSS",
            description: "With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!",
            img: {
                backgroundImage: `url(${css})`
            }
        },
        {
            title: "TS",
            description: "JavaScript is a powerful programming language. But as it continues to evolve, outdated code gets messy and difficult to maintain. That’s where TypeScript comes in. It builds on your JavaScript foundation so you can develop higher-quality",
            img: {
                backgroundImage: `url(${ts})`
            }
        },
        {
            title: "SASS",
            description: "CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world",
            img: {
                backgroundImage: `url(${sass})`
            }
        },
        {
            title: "REACT",
            description: "The techniques you'll learn in the tutorial are fundamental to building any React app, and mastering it will give you a deep understanding of React.",
            img: {
                backgroundImage: `url(${react})`
            }
        }
    ],
    footer: [{
        title: "facebook", img: {
            backgroundImage: `url(${facebook})`
        }
    }, {
        title: "linkedIn", img: {
            backgroundImage: `url(${linkedin})`
        }
    }, {
        title: "telegram", img: {
            backgroundImage: `url(${telegram})`
        }
    }, {
        title: "github", img: {
            backgroundImage: `url(${github})`
        }
    }]
}