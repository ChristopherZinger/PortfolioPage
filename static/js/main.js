const data =
{
  "projects": [
    {
      "id": 1,
      "title": "Typing for fun",
      "description": "The project is a tool to practice typing skills. It generates a random letter, gives the player time to find it on the keyboard and type it. It takes advantage of concepts like encapsulation, arrow functions, IFFE or higher-order-functions",
      "animationSrc": "animations/animation.ai",
      "technologies": ["Javascript", "HTML", "CSS"],
      "urlGit": "https://github.com/ChristopherZinger/Learn-Typing-Tool",
      "url": "https://typingforfun.netlify.app/"
    },
    {
      "id": 2,
      "title": "To-do app",
      "description": "This single page application allows users to create accounts,  login and create multiple to-do lists. It uses node.js and express on the backend. Authorization and authentication is built with bcrypt and JWT. Frontend uses react.js and bootstrap.",
      "animationSrc": "animations/animation.ai",
      "technologies": ["Javascript", "HTML", "CSS", "React", "Node.js"],
      "urlGit": "https://github.com/ChristopherZinger/to-do-app",
      "url": ""
    },
    {
      "id": 3,
      "title": "Quiz creator",
      "description": "With this multi page application users can create a quiz by themselves or play with quizzes created by other users. It is built with node.js, express and Jquery.",
      "animationSrc": "animations/animation.ai",
      "technologies": ["Javascript", "HTML", "CSS", "Node.js"],
      "urlGit": "https://github.com/ChristopherZinger/NodeJS-Quiz-Game-Creator",
      "url": ""
    },
    {
      "id": 4,
      "title": "Recipe app",
      "description": "Recipe app is a single page application made with React.js that takes advantage of Tasty database and rapidapi.com to provide you with delicious ideas for your meal.",
      "animationSrc": "animations/animation.ai",
      "technologies": ["React", "Javascript", "HTML", "CSS"],
      "urlGit": "https://github.com/ChristopherZinger/Receipe-App",
      "url": ""
    },
    {
      "id": 5,
      "title": "Portfolio website",
      "description": "This is my previous portfolio website. It is a static website created exclusively with CSS, JS and HTML, no framework needed. I designed and coded custom motions and animations in order to create unique user experience. I used this project to practice multiple js concepts and features like promises, DOM manipulation, iiffe, and more. ",
      "animationSrc": "animations/animation.ai",
      "technologies": ["Javascript", "HTML", "CSS"],
      "urlGit": "",
      "url": ""
    },
    {
      "id": 6,
      "title": "Spaceship Game",
      "description": "It is a variation of the iconic game Space Invaders. It takes advantage of OOP and concepts like lambda functions, list comprehension and data structures to create awesome game experience and animations!",
      "animationSrc": "animations/animation.ai",
      "technologies": ["Python", "Pygame"],
      "urlGit": "https://github.com/ChristopherZinger/SpaceShipGame",
      "url": ""
    },
    {
      "id": 7,
      "title": "Performance Manager",
      "description": "This WIP is a tool  that runs in the background and monitors my keystrokes, mouse events and active software. Data is saved in SQLite database.",
      "animationSrc": "animations/animation.ai",
      "technologies": ["Python", "Pandas", "NumPy"],
      "urlGit": "https://github.com/ChristopherZinger/performance_monitor",
      "url": ""
    },
    {
      "id": 8,
      "title": "Dijkstra Shortest Path",
      "description": "It is a app coded entirely with Python and PyGame. It visualize how Dijkstra shortest path algorithm works. It allows user to choose start and end point on 2 dimension array and draw walls that path has to pass around",
      "animationSrc": "animations/animation.ai",
      "technologies": ["Python", "PyGame"],
      "urlGit": "https://github.com/ChristopherZinger/Dijkstra-Shortest-Path-Algorithm",
      "url": ""
    },
    {
      "id": 9,
      "title": "Architecture Quiz",
      "description": "Quiz with questions about architecture. This webapp is built with django. asynchronous calls are executed with JQuery",
      "animationSrc": "animations/animation.ai",
      "technologies": ["Python", "Javascript", "HTML", "CSS"],
      "urlGit": "https://github.com/ChristopherZinger/Quiz",
      "url": ""
    },
  ],
  "skills": [
    {
      "id": 1,
      "type": "Technologies",
      "technologies": [
        {
          "type": "frontend",
          "all": [
            "Javascript",
            "React",
            "JQuery",
            "HTML",
            "Sass",
            "CSS"
          ]
        }
      ]
    },
    {
      "id": 2,
      "type": "Technologies",
      "technologies": [
        {
          "type": "Backend",
          "all": [
            "Python",
            "Django",
            "REST API"
          ]
        },
        {
          "type": "Libraries",
          "all": [
            "Pandas",
            "NumPy",
            "PyGame"
          ]
        }
      ]
    },
    {
      "id": 2,
      "type": "Software",
      "technologies": [
        {
          "type": "Adobe",
          "all": [
            "Photoshop",
            "Illustrator",
            "InDesing"
          ]
        },
        {
          "type": "3d Software",
          "all": [
            "Rhinoceros 3D",
            "3ds max",
            "Sketchup"
          ]
        }
      ]
    }
  ]
}

// DOM SELECTORS ----------------------------------
const myDOM = function () {
  const stats = {
    big: 1050,
    medium: 750,
  }
  const byID = query => {
    return document.getElementById(query)
  }
  const byQuery = query => {
    return document.querySelector(query)
  }

  return {
    contactBtn: byID('contactBtn'),
    getDescription: () => { return byQuery('.project p') },
    getLinks: () => {
      return Array.from(document
        .querySelectorAll('.project .links a'))
    },
    getPointer: () => { return byQuery('.customPointer') },
    email: byID('email'),
    footer: byQuery('footer'),
    getTitle: () => { return byID('proj-title') },
    getProjId: () => {
      return Array.from(
        document.querySelectorAll('.nr-wrapper')//project h4 div
      )
    },
    jumbotron: byQuery('.jumbotron'),
    jumbotronTitle: byQuery('.jumbotron h1'),
    menuicon: byID('menuicon'),
    menu: byQuery('.folding-menu'),
    projects: byQuery('.proj-list'),
    skills: byQuery('.skill-list'),
    svgContainer: byID('svg-container'),
    skillScrollIndicator: byID('indicator'),
    whatsapp: byID('whatsapp'),
    window: {
      isBig: () => {
        return window.innerWidth >= stats.big ? true : false;
      },

      isMedium: () => {
        const vw = window.innerWidth;
        if (vw < stats.big && vs > stats.medium) { return true };
        return false;
      },

      isSmall: () => {
        return window.innerWidth <= stats.medium ? true : false;
      }
    },
    wrappercontainer: byQuery('.wrapper-container'),
  }
}();// myDOM

// DOM Controller --------------------------------
const ctrlDOM = function () {
  // get all technologies
  const stats = {
    technologies: function () {
      let list = [];
      data.projects.forEach((proj) => {
        proj.technologies.forEach((item) => {
          list.includes(item) ?
            null : list.push(item);
        });
      })
      return list
    }(),
    projects: function () {
      let list = [];
      data.projects.forEach((item) => {
        list.push(item.title)
      });
      return list;
    }(),
    currProject: data.projects[0],
  }

  // populate html in case of big screen
  const popBigScr = () => {
    const proj = stats.currProject;
    const techList = stats.technologies.reduce((acc, item) => {
      const isActive = proj.technologies.includes(item) ? 'active-tech' : '';
      return acc + '\n' + `<li class="${isActive ? isActive : ""}" id="tech-${item}">${item}</li>`
    }, "")
    const projectList = stats.projects.reduce((acc, item) => {
      return acc + "\n" + `<li class="projItem" id="${item}">${item}</li>`
    }, "")

    // generate title
    const titleHTML = ctrlDOM.generateTitle(proj.title, []);
    // generate id
    const idHTML = ctrlDOM.generateId();
    projHTML = `
      <div class="project card">
        <h4>${idHTML}</h4>
        <h3 id="proj-title">${titleHTML}</h3>
        <p>${proj.description}</p>
        <div class="links">
          <a href='${proj.urlGit}' target='_blank'>github</a>
           ${proj.url !== "" ?
        "<a href='${proj.url}' target='_blank'>view project</a>" :
        "<a href=''></a>"}
        </div>
      </div>
      <div class="nav">
        <a href="about.html">about</a>
      </div>
      <div id="listOfTechnologies">
        <ul class="technology-wrapper">
          ${techList}
        </ul>
      </div>
      <div id="listOfProjects">
        <ul class="projList-wrapper">
          ${projectList}
        </ul>
      </div>
    `;
    myDOM.projects.innerHTML = projHTML;
    myDOM.technologiesList = document.querySelectorAll('.technology-wrapper li');
  }
  // populate projects in case of small list
  const popProjSmall = () => {
    let projHTML = [];
    data.projects.forEach(proj => {
      const technologies = proj.technologies.reduce((acc, item) => {
        return acc + ' ' + item
      })
      projHTML.push(`
      <div class="project card">
        <h4>${proj.id < 10 ? "0" + proj.id : proj.id}</h4>
        <h3>${proj.title}</h3>
        <p style="color:yellow;
          font-weight: bold; ${myDOM.window.isBig() ? "display:none" : null}">
        ${technologies}</p>
        <p>${proj.description}</p>
        <div class="animation"></div>
        <div class="links">
          <a href='${proj.urlGit}' target='_blank'>github</a>
           ${proj.url !== "" ?
          "<a href='${proj.url}' target='_blank'>view project</a>" :
          "<a href=''></a>"}
        </div>
      </div>
      `)
    });
    myDOM.projects.innerHTML = projHTML.join('\n')
  }
  return {
    changeProject: (target) => {
      // find project in data
      const project = data.projects
        .find(el => {
          return el.title === target.id ? true : false;
        });
      // substitute html
      if (project) {
        document.querySelector('.project h3')
          .innerHTML = project.title;
        document.querySelector('.project h4')
          .innerHTML = project.id < 10 ? "0" + project.id : project.id;
        document.querySelector('.project p')
          .innerHTML = project.description;
        const links = Array.from(document
          .querySelectorAll('.project .links a'));
        links[0].href = project.urlGit;
        if (project.url) {
          links[1].style.display = 'inline-block';
          links[1].href = project.url;
        } else {
          links[1].style.display = 'none';
          links[1].href = '#'
        }

        return {
          updateTech: () => {
            myDOM.technologiesList.forEach(el => {
              const tech = el.innerHTML;
              el.classList.remove('active-tech')
              project.technologies.includes(tech)
                ? el.classList.add('active-tech') : el.classList.remove('active-tech');
            })
          },
        }
      }
    },
    generateId: () => {
      let id = stats.currProject.id;
      id < 10 ? id = '0' + id : id.toString();
      // `<span>${item}</span>`
      return Array.from(id).reduce((acc, item) => {
        return acc += `
        <div class='nr-wrapper' style="display:inline-block";>
          <div>${item}</div>
          <div>2</div>
        </div>`
      }, "")
    },
    generateTitle: (title, classNameList) => {
      // generate string with all class names
      const classList = classNameList.reduce((acc, item) => {
        return acc + ' ' + item;
      }, "")
      // generate html
      return Array.from(title).reduce((acc, el) => {
        el === " " ? el = '&nbsp' : null;
        return acc + `<span class="
          ${classList}
        ">` + el + '</span>'
      }, '')
    },
    getNextProject: () => { return stats.currProject },
    populateProjects: () => {
      !myDOM.window.isBig() ? popProjSmall() : popBigScr();
    },
    populateSkills: () => {
      // poplates skills for mobile devices
      if (myDOM.window.isBig()) { return }
      elementHTML = myDOM.skills
      let newHTML = data.skills.reduce((accSkill, skill,) => {
        return accSkill + `
          <div class="skill card">
            <h4>${skill.type}</h4>
              ${skill.technologies.reduce((accTech, tech) => {
          return accTech + `<ul>
                    <li class=\'listtitle\' style="color:var(--color)">${tech.type}</li>
                    ${tech.all.reduce((accTechItem, techItem) => {
            return accTechItem + `
                        <li>${techItem}</li>
                      `
          }, '')}
                  </ul>\n`
        }, '')}
          </div>
          `
      }, '')
      elementHTML.innerHTML = newHTML;
    },
    setNextProject: (target) => {
      const project = data.projects
        .find(el => {
          return el.title === target.id ? true : false;
        });
      // update curr project
      project ? stats.currProject = project : null;
    },
    updateDescription: (desc) => {
      myDOM.getDescription().innerHTML = desc;
    },
    updateTechTags: () => {
      if (stats.currProject.technologies) {
        const techTags = stats.currProject.technologies;
        myDOM.technologiesList.forEach(el => {
          const tech = el.innerHTML;
          el.classList.remove('active-tech')
          techTags.includes(tech)
            ? el.classList.add('active-tech') : el.classList.remove('active-tech');
        })
      }
    },
    updateTitle: (classNameList) => {
      const titleHTML = ctrlDOM.generateTitle(stats.currProject.title, classNameList);
      myDOM.getTitle().innerHTML = titleHTML;
    },
    updateId: () => {
      const idHTML = ctrlDOM.generateId();
      const idwrapper = document.querySelector('.nr-wrapper').parentNode;
      idwrapper.innerHTML = idHTML;
    },
    updateLinks: (project) => {
      const links = myDOM.getLinks();
      links[0].href = project.urlGit;
      if (project.url) {
        links[1].style.display = 'inline-block';
        links[1].href = project.url;
      } else {
        links[1].style.display = 'none';
        links[1].href = '#'
      }
    }

  }
}();

// ANIMATIONS ------------------------------------
const animations = function () {
  const state = {
    oldOffset: window.pageYOffset,
  }
  const toggleMenu = (item) => {
    while (item.nodeName !== 'BODY') {
      if (item == myDOM.menuicon) {
        myDOM.menu.classList.toggle('folding-menu-on')
        break;
      }
      item = item.parentNode
    }
  }
  const animateTechTags = () => {
    return new Promise(resolve => {
      myDOM.technologiesList.forEach((item, i) => {
        setTimeout(() => {
          item.classList.toggle('technology-fade-out');
          if (i + 1 == myDOM.technologiesList.length) {
            resolve();
          }
        }, i * 70)
      })
    })
  }
  const animateTitle = () => {
    // https://stackoverflow.com/questions/9071573/is-there-a-simple-way-to-make-a-random-selection-from-an-array-in-javascript-or
    function choose(choices) {
      var index = Math.floor(Math.random() * choices.length);
      return choices[index];
    }
    titleHTML = document.getElementById('proj-title');
    const titleArr = Array.from(titleHTML.children);
    return new Promise(resolve => {
      let myArr = [...titleArr]; // array to substract from
      titleArr.reverse().forEach((item, i) => {
        const randItem = choose(myArr); // choose random letter
        myArr = myArr.filter((value) => { return value !== randItem })// remove letter form array
        setTimeout(() => {
          randItem.classList.toggle('toggleTitleByLetter')
          if (i + 1 === titleArr.length) {
            setTimeout(() => {
              resolve();
            }, 500)
          }
        }, i * 50)
      });
    })
  }
  const animateId = (id) => {
    id < 10 ? id = Array.from('0' + id) : id = Array.from(id.toString)
    const idNodesList = myDOM.getProjId();
    idNodesList.forEach((item, i) => {
      new Promise(resolve => {
        Array.from(item.children)[1].innerHTML = id[i];
        setTimeout(() => {
          item.classList.add('nr-wrapper-top')
          if (i + 1 === idNodesList.length) {
            setTimeout(() => { resolve() }, 1000)
          }
        }, 300 + (i * 400))
      }).then(() => {
        ctrlDOM.updateId();
      })
    });
  }
  const animateLinks = () => {
    const fadeout = (array) => {
      array.forEach((item, i) => {
        setTimeout(() => {
          item.classList.toggle('hidden');
        }, i * 500)
      });
    }
    const links = myDOM.getLinks();
    fadeout(links);
    setTimeout(() => {
      // update HTML
      ctrlDOM.updateLinks(ctrlDOM.getNextProject());
      setTimeout(() => { fadeout(links); }, 1000)
    }, 750);

  }
  const animateDescriptions = (proj) => {
    myDOM.getDescription().classList.toggle('hidden');
    setTimeout(() => {
      ctrlDOM.updateDescription(proj.description)
      setTimeout(() => {
        myDOM.getDescription().classList.toggle('hidden');
      }, 700)
    }, 750);
  }
  const animateFrameInOut = () => {
    const animationTime = 2000; // in miliseconds
    document.querySelector('polyline')
      .style.animation = `dash ${animationTime / 1000}s linear forwards`;
    setTimeout(() => {
      document.querySelector('polyline')
        .style.animation = 'none';
    }, animationTime)
  }
  return {
    animateJumbotron: (offset) => {
      // animate jumbotron when scrolling down
      //on mobiel devices
      const el = myDOM.wrappercontainer
      let jumbotronHeight = myDOM.jumbotron.clientHeight;
      let delta = (100 - offset) / 100
      if (offset < 200) {
        // animate margin on element below jumbotron
        let newMargin = delta * jumbotronHeight;
        newMargin >= 0 ?
          el.style.marginTop = `${newMargin}px`
          : '';

      }
      if (offset < 100) {
        // animate opacity of h1 in jumbotron
        Array.from(
          myDOM.jumbotron.children)
          .forEach((item) => {
            item.id !== "svg-container" ?
              item.style.opacity = `${Math.round((100 - offset)) / 100}` : null
          });
      }
    },
    animateJumbotronFrame: (offset = 0, dashArray = 0) => {
      const h = myDOM.svgContainer.clientHeight;
      const w = myDOM.svgContainer.clientWidth;
      const points = [
        0, 0,
        w, 0,
        w, h,
        0, h,
        0, 0
      ]

      let svgProp = {
        stroke: 10,
      }
      if (myDOM.window.isBig()) {
        svgProp.stroke = 15;
      }


      // stroke-dashoffset="${offset}"
      let svgHTML = `
      <svg>
        <polyline
        points="${points}"
        stroke-dasharray="${dashArray}"
        style="fill:none;
        stroke:#38393F;
        stroke-width:${svgProp.stroke}

        " />
      </svg>
      `
      myDOM.svgContainer.innerHTML = svgHTML;
    },
    animateScrollIndicator: () => {
      // additional parameter to adjust scroll
      // behavior according to window width
      let srcWidthParameter = window.innerWidth < 750 ? data.skills.length - 1 : .5;
      // calculate width of skill container
      let left = (myDOM.skills.scrollLeft /
        (srcWidthParameter * myDOM.skills.clientWidth))
        * 100;
      myDOM.skillScrollIndicator.style.left = left + '%'
    },
    animateProjectChange: () => {
      // animate Technologies
      return new Promise(resolve => {
        myDOM.technologiesList.forEach((item, i) => {
          setTimeout(() => {
            item.classList.toggle('technology-fade-out');
            if (i + 1 === myDOM.technologiesList.length) {
              resolve();
            }
          }, i * 70)
        })
      })

    },
    hideFooter: (offset) => {
      if (window.pageYOffset < window.innerHeight) {
        myDOM.jumbotron.style.display = "block";
        myDOM.footer.style.display = "none";
      } else {
        myDOM.jumbotron.style.display = "none";
        myDOM.footer.style.display = "block";
      }
    },
    jumpToSection: (item) => {

      while (item.nodeName !== "BODY") {
        if (item.nodeName === "LI" && item.parentNode.id === "menu-list") {
          toggleMenu(myDOM.menuicon);// fold side menu
          let section = item.getAttribute('data-goto');
          section !== "footer" ?
            setTimeout(() => {

              myDOM[section]
                .scrollIntoView({ behavior: 'smooth' })
            }, 500)
            :
            setTimeout(() => {
              document.body
                .scrollIntoView({ behavior: 'smooth', block: 'end' })
            }, 500)

          break;
        }
        item = item.parentNode
      }
    },
    renderNextProject: (project) => {
      // animate tech tags
      animateTechTags().then(() => {
        ctrlDOM.updateTechTags();
        animateTechTags();
      });
      // animate the title
      animateTitle().then(() => {
        ctrlDOM.updateTitle(classNameList = ['toggleTitleByLetter']);
        animateTitle();
      });
      // animate id
      animateId(project.id);
      // animate Links
      animateLinks();
      // update description
      animateDescriptions(project);
      // animate the frame
      animateFrameInOut();
    },
    toggleContact: (item) => {
      if (item === "contactBtn") {
        myDOM.contactBtn.classList.add('toggleContactBtn')
        setTimeout(() => {
          const footer = myDOM.contactBtn.parentNode
          footer.innerHTML =
            `
            <div>
              <h3>
                <a href="mailto:krzysztof.zinger@gmail.com">
                krzysztof.zinger@gmail.com</a></h3>
              <h3><a>+31 621362826</a></h3>
            </div>
            `
          Array.from(footer.children[0].children).forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('showInfo')
            }, ((i + 1) * 100))
          });
        }, 500)
      }
    },
    toggleMenu: toggleMenu,
    toggleMenuIcon: (offset) => {
      // Hide menu circle on scroll
      const newOffset = window.pageYOffset;
      let delta = state.oldOffset - newOffset;
      if (Math.abs(delta) > 50 && newOffset > 300) {
        delta < 0 ?
          myDOM.menuicon.classList.add('moveNavIconUp') :
          myDOM.menuicon.classList.remove('moveNavIconUp')
        state.oldOffset = newOffset;
      }
    },
  }
}();


// CONTROLLER ------------------------------------
const controller = function () {

  const changeProject = (target) => {
    // check if click was on li of proj list
    if (myDOM.window.isBig() && Array.from(target.classList).includes("projItem")) {
      ctrlDOM.setNextProject(target);
      animations.renderNextProject(
        ctrlDOM.getNextProject()
      )
    }
  }
  const createCustomPointer = () => {
    if (myDOM.window.isBig()) {
      const pointer = document.createElement('div');
      pointer.classList.add('customPointer')
      document.body.insertBefore(pointer,
        document.querySelector('.container')
      )
      //document.body.style.cursor = 'none';
    }
  }
  const setEventListeners = () => {
    //scroll
    document.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      animations.toggleMenuIcon(offset);
      animations.animateJumbotron(offset);
      animations.hideFooter(offset); // prevent footer form being displayed on the top of the page
      animations.animateJumbotronFrame(offset);
      // animations.animateCard(offset);
    })
    //click
    document.addEventListener('click', (e) => {
      if (myDOM.window.isBig()) {
        changeProject(e.target);
      } else {
        animations.toggleContact.call(this, e.target.id)
        animations.toggleMenu(e.target);
        animations.jumpToSection(e.target);
      }
    })
    // react on window resize
    window.addEventListener('resize', () => {
      if (myDOM.window.isBig()) {
        // populate main HTML for big screen

        // create cusom pointer if not exists
        myDOM.getPointer() ? null : createCustomPointer()
      }
      ctrlDOM.populateProjects();
      ctrlDOM.populateSkills(); // populate skills

      const offset = window.pageYOffset;
      animations.animateJumbotronFrame(offset);
    })
    // mobile , horizontal scroll on skill div
    myDOM.skills.addEventListener('scroll', () => {
      animations.animateScrollIndicator();
    })
    // mouse move
    document.addEventListener('mousemove', e => {
      if (myDOM.window.isBig()) {
        const x = e.clientX;
        const y = e.clientY;
        const pointer = document.querySelector('.customPointer');
        pointer.style.left = x + 'px';
        pointer.style.top = y + 'px';

        let target = e.target;
        let resetColor = true;
        let classNameList = Array.from(
          pointer.classList
        )
        //change cursor style if mouse over LI element
        while (target.nodeName !== "BODY") {
          if (target.nodeName === "LI" || target.nodeName === "A") {
            if (!classNameList.includes('customPointerFilter')) {
              pointer.classList.add('customPointerFilter')
            }
            if (classNameList.includes('customPointerNoFilter')) {
              pointer.classList.remove('customPointerNoFilter')
            }
            resetColor = false;
            break;
          }
          target = target.parentNode;
        }
        // go back to previous curos scale
        if (resetColor) {
          if (classNameList.includes('customPointerFilter')) {
            pointer.classList.remove('customPointerFilter')
          }
          if (!classNameList.includes('customPointerNoFilter')) {
            pointer.classList.add('customPointerNoFilter')
          }
        }
      }
    })
  }

  return {
    init: () => {
      createCustomPointer();
      setEventListeners();
      ctrlDOM.populateProjects();
      ctrlDOM.populateSkills();
      animations.animateJumbotronFrame();
    }
  }
}();
document.addEventListener("DOMContentLoaded", function () {
  controller.init();
});
