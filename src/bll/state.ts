import todoImage from "../assets/images/note.jpg"
import chatImage from "../assets/images/chatImage.jpg"
import learningCards from "../assets/images/learn-learning-education-studying-concept.jpg"
import redux from "../assets/images/redux_logo_icon_144932.png"
import js from "../assets/images/test_js_icon_131933.png"
import sass from "../assets/images/icons8-sass-150.png"
import ts from "../assets/images/test_typescript_icon_131927.png"
import react from "../assets/images/react_logo_icon_144942.png"
import css from "../assets/images/css_logo_icon_181257.png"
import nodejs from "../assets/images/nodeJS.png"
import other from "../assets/images/other.png"
import git from "../assets/images/icons8-git-100.png"
import swift from "../assets/images/swift.png"
import telegram from "../assets/images/telegram.png"
import linkedin from "../assets/images/linkedin.png"
import github from "../assets/images/github.png"
import skype from "../assets/images/skype.png"

export const state = {
  EN() {
    return {
      header: {
        navTitle: ["Main", "Skills", "Projects", "Contacts"],
      },
      about: {
        p1: "Hi There",
        h1_1: "I'm",
        h1_2: " Valeriy Radionov",
        p2: "Frontend Developer",
      },
      project: {
        btnTitle: "Watch",
      },
      projects: {
        title: "Projects",
        projectData: [
          {
            title: "Learning cards",
            linkGit: "https://github.com/Valeriy-Radionov/cards",
            linkGhPage: "https://valeriy-radionov.github.io/cards/#/registration",
            description:
              "This application is a platform which allows to learn from cards. You can create, edit, delete decks with cards, learn from your own cards as well as from other people's cards, and add cards as photos. Technologies used: React(TS) + Redux, UI - SCSS+mui.",
            img: {
              backgroundImage: `url(${learningCards})`,
            },
          },
          {
            title: "To-do-list",
            linkGit: " https://github.com/Valeriy-Radionov/ToDoList",
            linkGhPage: "https://to-do-list-plum-psi.vercel.app/",
            description:
              "The functionality of the application allows all CRUD operations with notes (all notes are stored on the server). Technologies used: React(TS) + Redux, UI-CSS+mui, unit tests",
            img: {
              backgroundImage: `url(${todoImage})`,
            },
          },
          {
            title: "Anonimus chat",
            linkGit: "https://github.com/Valeriy-Radionov/anonymous-chat",
            linkGhPage: "https://valeriy-radionov.github.io/anonymous-chat/",
            description:
              "The application is an anonymous chat room where messages can be exchanged by specifying the recipient's name, subject and text of the message (login is by username). Technologies used: React(TS) + Redux Toolkit, UI-CSS+mui, Nodejs, MongoDB",
            img: {
              backgroundImage: `url(${chatImage})`,
            },
          },
        ],
      },
      skills: {
        title: "Skills",
        skillsData: [
          {
            title: "JS",
            description: "Objects, Loops, Event loop, Closures, Promise and etc.",
            img: {
              backgroundImage: `url(${js})`,
            },
          },
          {
            title: "TS",
            description: "I prefer to use Typescript in my work. Because it is a strongly typed programming language. Typescript speeds up development and prevents a lot of bugs.",
            img: {
              backgroundImage: `url(${ts})`,
            },
          },
          {
            title: "CSS",
            description: "Sass, Module CSS, Styled components and Bootstrap, MUI frameworks",
            img: {
              backgroundImage: `url(${css})`,
            },
          },
          {
            title: "REACT",
            description: "I have a clear understanding of the work React library. Used: hooks, functional components, classes, API...",
            img: {
              backgroundImage: `url(${react})`,
            },
          },
          {
            title: "Redux",
            description: "Redux, Redux Toolkit + thunk",
            img: {
              backgroundImage: `url(${redux})`,
            },
          },
          {
            title: "Node js",
            description: "Used Express framework for: created authorization block, СRUD database operations(MongoDB), interaction with third-party services(google, sendgrid)",
            img: {
              backgroundImage: `url(${nodejs})`,
            },
          },
          {
            title: "GIT",
            description: "Commits, branches, merge, pull/push, teamwork",
            img: {
              backgroundImage: `url(${git})`,
            },
          },
          {
            title: "Other",
            description: "OOP, SOLID principles, Figma(Sketch), Storybook, Unit testing",
            img: {
              backgroundImage: `url(${other})`,
            },
          },
          {
            title: "Swift",
            description: "Also studied programming language Swift(ios). Wrote several test projects.",
            img: {
              backgroundImage: `url(${swift})`,
            },
          },
        ],
      },
      contacts: {
        title: "Contacts",
        placeHoldName: "Name",
        btnName: "SEND",
        placeHoldMsg: "Your message",
      },
      footerData: {
        myNameTitle: "Radionov Valeriy",
        reserved: "©️2022 All rights reserved",
        footer: [
          {
            title: "skype",
            img: {
              backgroundImage: `url(${skype})`,
            },
          },
          {
            title: "linkedIn",
            img: {
              backgroundImage: `url(${linkedin})`,
            },
          },
          {
            title: "telegram",
            img: {
              backgroundImage: `url(${telegram})`,
            },
          },
          {
            title: "github",
            img: {
              backgroundImage: `url(${github})`,
            },
          },
        ],
      },
    }
  },

  RU() {
    return {
      header: {
        navTitle: ["Главная", "Навыки", "Проекты", "Контакты"],
      },
      about: {
        p1: "Всем Привет",
        h1_1: "Я",
        h1_2: " Валерий Радионов",
        p2: "Frontend developer",
      },
      project: {
        btnTitle: "Смотреть",
      },
      projects: {
        title: "Проекты",
        projectData: [
          {
            title: "Обучение по карточкам",
            linkGit: "https://github.com/Valeriy-Radionov/cards",
            linkGhPage: "https://valeriy-radionov.github.io/cards/#/registration",
            description:
              "Данное приложение представляет собой платформу, которая позволяет обучаться по карточкам. Можно создавать редактировать, удалять колоды с карточками, обучаться как по своим созданным карточкам, так и по чужим, реализован функционал по добавлению карточек в виде фото. Используемые технологии: React(TS) + Redux, UI- SCSS+mui.",
            img: {
              backgroundImage: `url(${learningCards})`,
            },
          },
          {
            title: "Список задач",
            linkGit: " https://github.com/Valeriy-Radionov/ToDoList",
            linkGhPage: "https://valeriy-radionov.github.io/cards/#/registration",
            description:
              "Функционал приложения позволяет проделывать все CRUD операции с заметками(все заметки сохраняются на сервере). Используемые технологии: React(TS) + Redux, UI-CSS+mui, unit tests",
            img: {
              backgroundImage: `url(${todoImage})`,
            },
          },
          {
            title: "Анонимный чат",
            linkGit: "https://github.com/Valeriy-Radionov/anonymous-chat",
            linkGhPage: "https://valeriy-radionov.github.io/anonymous-chat",
            description:
              "Приложение представляет собой: анонимный чат(вход по имени), в котором можно обмениваться сообщениям, указав имя получателя, тему и текст сообщения. Используемые технологии: React(TS) + Redux Toolkit, UI-CSS+mui, Nodejs, MongoDB",
            img: {
              backgroundImage: `url(${chatImage})`,
            },
          },
        ],
      },
      skills: {
        title: "Навыки",
        skillsData: [
          {
            title: "JS",
            description: "Objects, Loops, Event loop, Closures, Promise и др.",
            img: {
              backgroundImage: `url(${js})`,
            },
          },
          {
            title: "TS",
            description:
              "Предпочитаю использовать в работе именно Typescript. Так как это строго типизированный язык программирования. Typescript ускоряет разработку и предохраняет от множества ошибок.",
            img: {
              backgroundImage: `url(${ts})`,
            },
          },
          {
            title: "CSS",
            description: "Sass,Module CSS, Styled components, а также Bootstrap, MUI фреймворки",
            img: {
              backgroundImage: `url(${css})`,
            },
          },
          {
            title: "REACT",
            description: "Имею четкое представление о работе библиотеки React. Использую: хуки, функциональные компоненты, классы, API...",
            img: {
              backgroundImage: `url(${react})`,
            },
          },
          {
            title: "Redux",
            description: "Redux, Redux Toolkit + thunk",
            img: {
              backgroundImage: `url(${redux})`,
            },
          },
          {
            title: "Node js",
            description: "Использовал фреймворк Express для: создания блока авторизации, СRUD операций с базой данных , взаимодействия со сторонними сервисами (google, sendgrid)",
            img: {
              backgroundImage: `url(${nodejs})`,
            },
          },
          {
            title: "GIT",
            description: "Commits, branches, merge, pull/push, работа в команде",
            img: {
              backgroundImage: `url(${git})`,
            },
          },
          {
            title: "Other",
            description: "ООП, SOLID принцыпы, Figma(Sketch), Storybook, Unit testing",
            img: {
              backgroundImage: `url(${other})`,
            },
          },
          {
            title: "Swift",
            description: "Также изучал язык программирования Swift(ios). Написал несколько тестовых проектов.",
            img: {
              backgroundImage: `url(${swift})`,
            },
          },
        ],
      },
      contacts: {
        title: "Контакты",
        placeHoldName: "Имя",
        placeHoldMsg: "Твое сообщение",
        btnName: "ОТПРАВИТЬ",
      },
      footerData: {
        myNameTitle: "Радионов Валерий",
        reserved: "©️2022 Все права защищены",
        footer: [
          {
            title: "skype",
            img: {
              backgroundImage: `url(${skype})`,
            },
          },
          {
            title: "linkedIn",
            img: {
              backgroundImage: `url(${linkedin})`,
            },
          },
          {
            title: "telegram",
            img: {
              backgroundImage: `url(${telegram})`,
            },
          },
          {
            title: "github",
            img: {
              backgroundImage: `url(${github})`,
            },
          },
        ],
      },
    }
  },
}
