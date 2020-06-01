const data =
{
  "projects":[
    {
      "id":1,
      "title": "Typing for fun",
      "description": "here goes the description",
      "animationSrc":"animations/animation.ai",
      "technologies":["Javascript","HTML","CSS"],
      "urlGit": "https://github.com/ChristopherZinger/Learn-Typing-Tool",
      "url": "https://typingforfun.netlify.app/"
    },
    {
      "id":2,
      "title": "future js project",
      "description": "here goes the description",
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
      "title": "Space Ship Game",
      "description": "here goes the description",
      "animationSrc":"animations/animation.ai",
      "technologies":["Python","Pygame"],
      "urlGit": "https://github.com/ChristopherZinger/SpaceShipGame",
      "url": ""
    },
    {
      "id":5,
      "title": "Performance Manager",
      "description": "here goes the description",
      "animationSrc":"animations/animation.ai",
      "technologies":["Python","Pandas","MatPlotLib"],
      "urlGit": "https://github.com/ChristopherZinger/performance_monitor",
      "url": ""
    },
    {
      "id":6,
      "title": "Dijksta Shortest Path",
      "description": "here goes the description",
      "animationSrc":"animations/animation.ai",
      "technologies":["Python","PyGame"],
      "urlGit": "https://github.com/ChristopherZinger/Dijkstra-Shortest-Path-Algorithm",
      "url": ""
    },
    {
      "id":7,
      "title": "Volume controller",
      "description": "here goes the description",
      "animationSrc":"animations/animation.ai",
      "technologies":["Arduino","Python"],
      "urlGit": "https://github.com/ChristopherZinger/volume-controll-with-arduino",
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
              "REST"
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

// DOM SELECTORS -----------------------------------------------------------
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
  }
}();// myDOM

// ANIMATIONS -----------------------------------------------------------
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
      !offset ? offset = 0 : "";

      let windXstatic= myDOM.jumbotron.clientWidth;
      let windY = (parseInt(window.getComputedStyle(
          myDOM.wrappercontainer).marginTop) - offset) ;
      let windYstatic = myDOM.jumbotron.clientHeight;
      const rel = [.20,.25] // margins  [topbottom, leftright] in %
      let delta = 1;
      offset/(windY) < 1 ? delta = (offset/windY)
        : delta = 0

      let points = [
        [windXstatic*rel[0], windYstatic*rel[1]],
        [windXstatic*(1-rel[0]), windYstatic*rel[1]],
        [windXstatic*(1-rel[0]), windYstatic*(1-rel[1])],
        [windXstatic*rel[0], windYstatic*(1-rel[1])],
        [windXstatic*rel[0], windYstatic*rel[1]],
      ];
      let myFrameX = (points[1][0] - points[0][0]);
      let myFrameY = (points[3][1] - points[0][1]);
      const svgLength =
        (myFrameX *2)
        + (myFrameY *2)
      //console.log('svg length delta: ', delta);
      offset/(windYstatic/10) < 1 ? delta = offset/(windYstatic/10)
        : delta = 1

      let svgHTML = `
      <svg height="${windY>0 ? windY : 0}" width="${windXstatic}" style="position:absolute;">
        <polyline points="${points}"
        stroke-dasharray="${(myFrameX + myFrameY)*(1-delta)},${((myFrameX + myFrameY)*(delta))}"
        stroke-dashoffset="-${(myFrameX/2)*delta}"
        style="fill:none;stroke:#38393F;stroke-width:10" />
      </svg>
      `
      myDOM.svgContainer.innerHTML = svgHTML;
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
          console.log(myDOM[section]);
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
    animateScrollIndicator: ()=>{

        // additional parameter to adjust scroll
        // behavior according to window width
        let srcWidthParameter = window.innerWidth < 750 ? data.skills.length - 1 : .5 ;
        // calculate width of skill container
        let left = (myDOM.skills.scrollLeft /
          ( srcWidthParameter * myDOM.skills.clientWidth))
          * 100;
        myDOM.skillScrollIndicator.style.left = left+ '%'

    }
  }
}();

// CONTROLLER ---------------------------------------------------
const controller = function(){
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

  const populateProjects = ()=>{
    let projHTML = [];

    data.projects.forEach( proj => {
      const technologies = proj.technologies.reduce((acc, item)=>{
         return  acc + ' ' + item
      })
      projHTML.push( `
      <div class="project card">
        <h4>${proj.id<10 ? "0"+ proj.id : proj.id}</h4>
        <h3>${proj.title}</h3>
        <p style="color:yellow; font-weight: bold;">${technologies}</p>
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
    };

  const populateSkills = ()=>{
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
    };
  const scrSizeError = ()=>{
    if(window.innerWidth>1199){
      document.body.style.backgroundColor = 'var(--black)';
      document.body.innerHTML = `
        <div class="center">
          <h1>
            Sorry,
          </h1>
          <h4>
            At the moment this page runs on smaller, mobile devices only.
          </h4>
        </div>
        `;
    }
  }
  return {
    init: ()=>{
      if(window.innerWidth<1199){
        setEventListeners();
        populateProjects();
        populateSkills();
        animations.animateJumbotronFrame();
      }else{
        scrSizeError();
      }

    }
  }
}();

controller.init();
