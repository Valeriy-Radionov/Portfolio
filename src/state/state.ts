import todoImage from "../assets/images/todolist.jpg"
import socialImage from "../assets/images/socialnetwork.png"
import redux from "../assets/images/icons8-redux-144.png"
import js from "../assets/images/free-icon-js-5968509.png"
import sass from "../assets/images/icons8-sass-144.png"
import ts from "../assets/images/free-icon-file-8173901.png"
import react from "../assets/images/icons8-react-a-javascript-library-for-building-user-interfaces-96.png"
import css from "../assets/images/icons8-css-60.png"
import telegram from "../assets/images/telegram.png"
import linkedin from "../assets/images/free-icon-linkedin-3536505.png"
import github from "../assets/images/free-icon-github-270798.png"
import facebook from "../assets/images/free-icon-facebook-733547.png"


export const state = {
    projects: [{
        title: "Social-network",
        description: "It progect is social-network! Nfnrfn onforenfornf  nonofrf rfnrnnnfrjfjnfnjr nf jrfrfnrjfjrnfrfrnjfrfrnfrnfnrj nnnnfnr 493434  94 499 4",
        img: {
            backgroundImage: `url(${socialImage})`
        }
    }, {
        title: "To-do-list",
        description: "fkrfmrrngrngln lnrn frnfrnl nrlgnr gnlrng lngn gelgngelglegle  ngnlegnerlng",
        img: {
            backgroundImage: `url(${todoImage})`
        }
    }],
    skills: [{
        title: "Redux", description: "frkfkrkrgkrggrkgfkv  k k knk nk n kn kn kn kk    kvn kvn kv v v v ", img: {
            backgroundImage: `url(${redux})`
        }
    }, {
        title: "JS",
        description: "frkfkrkrgkrggrkgfkv  k k knk nk n rgrggrgrg g r gr g r r grgrrkn kn knr kk    kvn kvn kv v v v ",
        img: {
            backgroundImage: `url(${js})`
        }
    },
        {
            title: "JS",
            description: "frkfkrkrgkrggrkgfkv  k k knk nk n knfrlfrm lmf lrlmf rmf rlfm l;rf;mr; gr gr mgt 5t 5t5 t5m tlk5 mtlk5 t5t5lk tt5 t t mm5tm5tm;5t m5 kn kn kk    kvn kvn kv v v v ",
            img: {
                backgroundImage: `url(${css})`
            }
        },
        {
            title: "JS", description: "frkfkrkrgkrggrkgfkv  k k knk nk n kn kn kn kk    kvn kvn kv v v v ", img: {
                backgroundImage: `url(${ts})`
            }
        },
        {
            title: "JS",
            description: "frkfkrkrgkrggrkgfkv  k k knk nk n kn frfr;,rf,rfmr l  lmflrmlmf lrmlf r f rmf rl mfrlm fkn kn kk    kvn kvn kv v v v ",
            img: {
                backgroundImage: `url(${sass})`
            }
        },
        {
            title: "JS",
            description: "frkfkrkrgkrggrkgfkv  k k knk nk n kn kn kn kk    kvnf ,rp,frmf lrm m flrlf r kvn kv v v v ",
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