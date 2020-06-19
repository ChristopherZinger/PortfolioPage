const data =
{
  "projects":[
    {
      "id":1,
      "title": "Typing for fun",
      "description": "The project is a tool to practice typing skills. It generates a random letter, gives the player time to find it on the keyboard and type it. It takes advantage of concepts like encapsulation, arrow functions, IFFE or higher-order-functions",
      "animationSrc":"animations/animation.ai",
      "technologies":["Javascript","HTML","CSS"],
      "urlGit": "https://github.com/ChristopherZinger/Learn-Typing-Tool",
      "url": "https://typingforfun.netlify.app/"
    },
    {
      "id":2,
      "title": "Recipe app",
      "description": "Recipe app is a single page application made with React.js that takes advantage of Tasty database and rapidapi.com to provide you with delicious ideas for your meal.",
      "animationSrc":"animations/animation.ai",
      "technologies":["React","Javascript","HTML","CSS"],
      "urlGit": "",
      "url": ""
    },
    {
      "id":3,
      "title": "Portfolio website",
      "description": "here goes the description. here goes the descriptionhere goes the description. here goes the descriptionhere goes the description.here goes the description here goes the description. here goes the description",
      "animationSrc":"animations/animation.ai",
      "technologies":["Javascript","HTML","CSS"],
      "urlGit": "",
      "url": ""
    },
    {
      "id":4,
      "title": "Spaceship Game",
      "description": "It is a variation of the iconic game Space Invaders. It takes advantage of OOP and concepts like lambda functions, list comprehension and data structures to create awesome game experience and animations!",
      "animationSrc":"animations/animation.ai",
      "technologies":["Python","Pygame"],
      "urlGit": "https://github.com/ChristopherZinger/SpaceShipGame",
      "url": ""
    },
    {
      "id":5,
      "title": "Performance Manager",
      "description": "This WIP is a tool  that runs in the background and monitors my keystrokes, mouse events and active software. Data is saved in SQLite database.",
      "animationSrc":"animations/animation.ai",
      "technologies":["Python","Pandas","NumPy"],
      "urlGit": "https://github.com/ChristopherZinger/performance_monitor",
      "url": ""
    },
    {
      "id":6,
      "title": "Dijksta Shortest Path",
      "description": "It is a app coded entirely with Python and PyGame. It visualize how Dijkstra shortest path algorithm works. It allows user to choose start and end point on 2 dimension array and draw walls that path has to pass around",
      "animationSrc":"animations/animation.ai",
      "technologies":["Python","PyGame"],
      "urlGit": "https://github.com/ChristopherZinger/Dijkstra-Shortest-Path-Algorithm",
      "url": ""
    }
  ],
   "skills":[
      {
        "id":1,
        "type": "Technologies",
        "technologies":[
          {
            "type":"frontend",
            "all":[
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
        "id":2,
        "type": "Technologies",
        "technologies":[
          {
            "type":"Backend",
            "all":[
              "Python",
              "Django",
              "REST API"
            ]
          },
          {
            "type":"Libraries",
            "all":[
              "Pandas",
              "NumPy",
              "PyGame"
            ]
          }
        ]
      },
      {
        "id":2,
        "type": "Software",
        "technologies":[
          {
            "type":"Adobe",
            "all":[
              "Photoshop",
              "Illustrator",
              "InDesing"
            ]
          },
          {
            "type":"3d Software",
            "all":[
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
const myDOM = function(){
  const byID = query =>{
    return document.getElementById(query)
  }
  const byQuery = query=>{
    return document.querySelector(query)
  }
  return {
    menuicon: byID('menuicon'),
    wrappercontainer: byQuery('.wrapper-container'),
    jumbotron: byQuery('.jumbotron'),
    jumbotronTitle: byQuery('.jumbotron h1'),
    projects: byQuery('.proj-list'),
    skills: byQuery('.skill-list'),
    email: byID('email'),
    whatsapp: byID('whatsapp'),
    footer: byQuery('footer'),
    svgContainer: byID('svg-container'),
    contactBtn: byID('contactBtn'),
    menu: byQuery('.folding-menu'),
    skillScrollIndicator: byID('indicator'),
    window:{
      isBig:()=>{
        return window.innerWidth >= 1200 ? true : false;
      },

      isMedium: ()=>{
        const vw = window.innerWidth;
        if(vw<1200 && vs>750){ return true };
        return false;
      },

      isSmall: ()=>{
        return window.innerWidth <= 750 ? true : false;
      }
    }

  }
}();// myDOM

// DOM Controller --------------------------------
const ctrlDOM = function(){
  // get all technologies
  const stats = {
    technologies:[],
    projects:[],  }
  // populate technologies list
  data.projects.forEach((proj)=>{
    proj.technologies.forEach((item) => {
      stats.technologies.includes(item) ?
          null : stats.technologies.push(item);
    });
  })
  // populate projects list
  data.projects.forEach((item) => {
    stats.projects.push(item.title)
  });

  // populate html in case of big screen
  const popBigScr = () =>{
    const proj = data.projects[0]
    const techList = stats.technologies.reduce((acc, item)=>{
      const isActive = proj.technologies.includes(item) ? 'active-tech' : '';
       return  acc + '\n' + `<li class="${isActive ? isActive : ""}" id="tech-${item}">${item}</li>`
    },"")
    const projectList = stats.projects.reduce((acc, item)=>{
      return acc + "\n" + `<li class="projItem" id="${item}">${item}</li>`
    },"")

  // generate title
  const title = Array.from(proj.title).reduce((acc, el)=>{
    return acc + '<span>' + el + '</span>'
  },'')

  console.log(title);

    projHTML = `
      <div class="project card">
        <h4>${proj.id<10 ? "0"+ proj.id : proj.id}</h4>
        <h3>${title}</h3>
        <p>${proj.description}</p>
        <div class="links">
          <a href='${proj.urlGit}' target='_blank'>github</a>
           ${ proj.url !== "" ?
                "<a href='${proj.url}' target='_blank'>view project</a>" :
                "<a href=''></a>"}
        </div>
      </div>
      <div class="nav">
        <a href="">about</a>
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
  const popProjSmall = ()=>{
    let projHTML = [];
    data.projects.forEach( proj => {
      const technologies = proj.technologies.reduce((acc, item)=>{
         return  acc + ' ' + item
      })
      projHTML.push( `
      <div class="project card">
        <h4>${proj.id<10 ? "0"+ proj.id : proj.id}</h4>
        <h3>${proj.title}</h3>
        <p style="color:yellow;
          font-weight: bold; ${ document.body.clientWidth>1200 ? "display:none" : null}">
        ${technologies}</p>
        <p>${proj.description}</p>
        <div class="animation"></div>
        <div class="links">
          <a href='${proj.urlGit}' target='_blank'>github</a>
           ${ proj.url !== "" ?
                "<a href='${proj.url}' target='_blank'>view project</a>" :
                "<a href=''></a>"}
        </div>
      </div>
      `)
    });
    myDOM.projects.innerHTML = projHTML.join('\n')
  }

  return{
    populateProjects : ()=>{
      window.innerWidth < 1200 ? popProjSmall() : popBigScr();
    },
    populateSkills : ()=>{
      if(myDOM.window.isBig()){return}

      elementHTML = myDOM.skills
      let newHTML = data.skills.reduce((accSkill, skill,) => {
          return accSkill + `
          <div class="skill card">
            <h4>${skill.type}</h4>
              ${ skill.technologies.reduce((accTech, tech)=>{
                return accTech +`<ul>
                    <li class=\'listtitle\' style="color:var(--color)">${tech.type}</li>
                    ${ tech.all.reduce((accTechItem, techItem)=>{
                      return accTechItem + `
                        <li>${techItem}</li>
                      `
                    },'')}
                  </ul>\n`
              },'')}
          </div>
          `
        },'')
        elementHTML.innerHTML =  newHTML;
      },
    changeProject: (target)=>{
      // find project in data
      const project = data.projects
          .find(el => {
            return el.title === target.id ? true : false;
        });
      // substitute html
      if(project){
        document.querySelector('.project h3')
            .innerHTML = project.title;
        document.querySelector('.project h4')
            .innerHTML = project.id<10 ? "0" + project.id : project.id;
        document.querySelector('.project p')
            .innerHTML = project.description;
        const links = Array.from(document
          .querySelectorAll('.project .links a'));
        links[0].href = project.urlGit;
        if(project.url){
          links[1].style.display = 'inline-block';
          links[1].href = project.url;
        } else{
          links[1].style.display = 'none';
          links[1].href = '#'
        }

        return{
          updateTech: ()=>{
            myDOM.technologiesList.forEach(el=>{
                const tech = el.innerHTML;
                el.classList.remove('active-tech')
                project.technologies.includes(tech)
                  ? el.classList.add('active-tech') : el.classList.remove('active-tech');
            })
          },
        }
      }
    },
  }
}();

// ANIMATIONS ------------------------------------
const animations = function() {
  const state = {
    oldOffset : window.pageYOffset,
  }
  const toggleMenu = (item)=>{
    while(item.nodeName !== 'BODY'){
      if(item == myDOM.menuicon){
        myDOM.menu.classList.toggle('folding-menu-on')
        break;
      }
      item = item.parentNode
    }
  }
return {
    animateJumbotron: (offset)=>{
      // animate jumbotron when scrolling down
      //on mobiel devices
      const el = myDOM.wrappercontainer
      let jumbotronHeight = myDOM.jumbotron.clientHeight;
      let delta = (100-offset)/100
      if(offset < 200){
        // animate margin on element below jumbotron
        let newMargin = delta * jumbotronHeight;
        newMargin >= 0 ?
          el.style.marginTop = `${newMargin}px`
          : '';

      }
      if(offset<100){
        // animate opacity of h1 in jumbotron
        Array.from(
          myDOM.jumbotron.children)
          .forEach((item)=>{
          item.id !== "svg-container" ?
          item.style.opacity = `${Math.round((100-offset))/100}` : null
        });
      }
    },
    animateJumbotronFrame:(offset)=>{
      const h = myDOM.svgContainer.clientHeight;
      const w = myDOM.svgContainer.clientWidth;
      const points = [
        0,0,
        w,0,
        w,h,
        0,h,
        0,0
      ]

      let svgProp = {
        stroke: 10,
      }
      if(window.innerWidth>1200){
        svgProp.stroke =15 ;
      }


      let svgHTML = `
      <svg >
        <polyline points="${points}"
        stroke-dasharray="10"
        stroke-dashoffset="0"
        style="fill:none;stroke:#38393F;stroke-width:${svgProp.stroke}" />
      </svg>
      `
      myDOM.svgContainer.innerHTML = svgHTML;
    },
    animateScrollIndicator: ()=>{
        // additional parameter to adjust scroll
        // behavior according to window width
        let srcWidthParameter = window.innerWidth < 750 ? data.skills.length - 1 : .5 ;
        // calculate width of skill container
        let left = (myDOM.skills.scrollLeft /
          ( srcWidthParameter * myDOM.skills.clientWidth))
          * 100;
        myDOM.skillScrollIndicator.style.left = left+ '%'
    },
    animateProjectChange: ()=>{
      // animate Technologies
      return new Promise(resolve=>{
          myDOM.technologiesList.forEach((item, i) => {
            setTimeout(()=>{
              item.classList.toggle('technology-fade-out');
              if(i+1===myDOM.technologiesList.length){
                resolve();
              }
            },i*70)
          })
      })

    },
    hideFooter: (offset)=>{
      if(window.pageYOffset < window.innerHeight){
        myDOM.jumbotron.style.display = "block";
        myDOM.footer.style.display = "none";
      }else{
        myDOM.jumbotron.style.display = "none";
        myDOM.footer.style.display = "block";
      }
    },
    jumpToSection: (item)=>{

      while(item.nodeName!=="BODY"){
        if(item.nodeName==="LI" && item.parentNode.id ==="menu-list"){
          toggleMenu(myDOM.menuicon);// fold side menu
          let section = item.getAttribute('data-goto');
            section !== "footer" ?
            setTimeout(()=>{

              myDOM[section]
              .scrollIntoView({ behavior: 'smooth' })
            },500)
            :
            setTimeout(()=>{
              document.body
              .scrollIntoView({ behavior: 'smooth', block:'end' })
            },500)

          break;
        }
        item = item.parentNode
      }
    },
    toggleContact: (item)=>{
      if(item === "contactBtn"){
        myDOM.contactBtn.classList.add('toggleContactBtn')
        setTimeout(()=>{
          const footer = myDOM.contactBtn.parentNode
            footer.innerHTML=
            `
            <div>
              <h3>
                <a href="mailto:krzysztof.zinger@gmail.com">
                krzysztof.zinger@gmail.com</a></h3>
              <h3>(+48) 791555945</h3>
            </div>
            `
            Array.from(footer.children[0].children).forEach((item, i) => {
              setTimeout(()=>{
                item.classList.add('showInfo')
              },((i+1)*100))
            });
        },500)
      }
    },
    toggleMenu:toggleMenu,
    toggleMenuIcon: (offset)=>{
      // Hide menu circle on scroll
      const newOffset = window.pageYOffset;
      let delta = state.oldOffset - newOffset;
      if( Math.abs(delta) > 50 && newOffset > 300){
        delta < 0 ?
          myDOM.menuicon.classList.add('moveNavIconUp') :
          myDOM.menuicon.classList.remove('moveNavIconUp')
        state.oldOffset = newOffset;
        }
      },

  }
}();


// CONTROLLER ------------------------------------
const controller = function(){
  const changeProject = (target)=>{
    if(!Array.from(target.classList).includes("projItem")){return;}
    animations.animateProjectChange()
    .then(()=>{
      ctrlDOM.changeProject(target).updateTech()
      animations.animateProjectChange()
    })
  }
  const setEventListeners = ()=>{
    //scroll
    document.addEventListener('scroll', ()=>{
      const offset = window.pageYOffset;
      animations.toggleMenuIcon(offset);
      animations.animateJumbotron(offset);
      animations.hideFooter(offset); // prevent footer form being displayed on the top of the page
      animations.animateJumbotronFrame(offset);
      // animations.animateCard(offset);
    })
    // toogle contact info
    document.addEventListener('click', (e)=>{
      animations.toggleContact.call(this, e.target.id )
      animations.toggleMenu(e.target);
      animations.jumpToSection(e.target);
      changeProject(e.target);
    })
    // react on window resize
    window.addEventListener('resize', ()=>{
      scrSizeError();
      const offset = window.pageYOffset;
      animations.animateJumbotronFrame(offset);
    })
    myDOM.skills.addEventListener('scroll', ()=>{
      animations.animateScrollIndicator();
    })
  }

  return {
    init: ()=>{
      setEventListeners();
      ctrlDOM.populateProjects();
      ctrlDOM.populateSkills();
      animations.animateJumbotronFrame();
    }
  }
}();

controller.init();
