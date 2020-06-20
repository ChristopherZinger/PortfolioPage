content = {
  sections:[
    {
      title:"Hi, I am Chris",
      img_url:"assets/gifs/krzysiek_mowi1_small.gif",
      hiddenTitle: "",
      hiddenParagraph: `I am a designer by profession and a
developer by passion. I am looking for the opportunity to
prove and advance my Javascript, React and Python skills.`,
      styles:{
        color:'white',
      }
    },
    {
      title:"Me and coding",
      img_url:"assets/gifs/krzysiek_pisze1.gif",
      hiddenTitle: "The coding journay",
      hiddenParagraph: `During my architecture studies I discovered how programming can foster
my design capabilities. I used LISP and Python scripting to automate my daily
tasks and generate geometries. I started discovering variety of programming
aspects by engaging in many fun projects like game development with C++, robotics with Arduino and Raspberry-Pi, or web development with PHP. I became
curious how programming works under the hood. I started researching OOP,
data structures, algorithms or computation history. `,
      styles:{
        color:'white',
      }
    },
    {
      title:"Web technologies",
      img_url:"assets/projects/center_div.gif",
      hiddenTitle: "web dev",
      hiddenParagraph: `Web development especially grabbed my attention. I committed to modern web technologies - Javascript and Python (Django). Topics for my projects
emerge from my own interests or problems I want to solve, I am not just following the tutorials. `,
    styles:{
      color:'black',
    }
    },
    {
      title:"Architecture Office Manager",
      img_url:"assets/projects/project_AOM.gif",
      hiddenTitle: "",
      hiddenParagraph: ` Architecture Office Manager is an app that allows users to
manage projects by assigning team members and adding tasks within each
project. It includes features like authentication and permissions.`,
      styles:{
        color:'black',
      }
    },
    {
      title:"Typing For Fun",
      img_url:"assets/projects/project_typingforfun.gif",
      hiddenTitle: "",
      hiddenParagraph: `Typing For Fun is a app that exercises JS ES6+ and concepts like encapsulation, arrow functions, IFFE or higher-order-functions`,
      styles:{
        color:'black',
      }
    },
    {
      title:"Portfolio Page",
      img_url:"assets/projects/project_PortfolioPage.gif",
      hiddenTitle: "",
      hiddenParagraph: "Don't hesitate to check all my projects. just click on <br/> '<-to project' in top corner.",
      styles:{
        color:'white',
      }
    },
    {
      title:"Spaceship Game",
      img_url:"assets/projects/project_spaceshipGame.gif",
      hiddenTitle: "",
      hiddenParagraph: `It is a variation of the iconic game Space Invaders. I made it to practice 4 pillars
of OOP in Python as well as other concepts like lambda functions, list comprehension, data structures, object live cycle management... and of course to
create an awesome game with cool animations!`,
      styles:{
        color:'white',
      }
    },
    {
      title:"Dijkstra Shortest Path Algorithm Viusalisation",
      img_url:"assets/projects/project_Dijkstra_krotszy.gif",
      hiddenTitle: "",
      hiddenParagraph: `It is a app coded entirely with Python and PyGame. It visualize how Dijkstra shortest path algorithm works. It allows user to choose start and end point on 2 dimension array and draw walls that path has to pass around`,
      styles:{
        color:'white',
      }
    },
    {
      title:"Lets Hack Together",
      img_url:"https://cdn190.picsart.com/230925670045202.gif?to=min&r=640",
      hiddenTitle: "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Thanks! Don't hesitate to contact me.",
      hiddenParagraph: "",
      styles:{
        color:'white',
      }
    }
  ]
}
// DOM selector
myDOM = (()=>{
  return {
    arrowUp : document.getElementById("up"),
    arrowDown : document.getElementById("down"),

  }
})();

// UI controller
ctrlUI = (()=>{
  return {

  }

    }
  )();

// Main controller
mainCtrl = (()=>{
  state = {
    currentSection: 0,
  }

  const setEventListeners = ()=>{
    // arrow events
    myDOM.arrowUp
      .addEventListener('click', scroll.bind(this, 'up'))
    myDOM.arrowDown
      .addEventListener('click', scroll.bind(this, 'down'))
    // scroll events
    document.addEventListener('scroll', ()=>{
      const section = Math.floor(window.scrollY/window.innerHeight);
      state.currentSection !== section ? state.currentSection=section : null;

    })
  }
  const scroll = (direction)=>{
    const tag = "section-";
    if(direction==="up"){
      if(state.currentSection>=1){
        state.currentSection -= 1;
        let section = tag + state.currentSection;
        document.getElementById(section).scrollIntoView({behavior: "smooth", block: "end"});
      }
    }else if (direction==="down"){
      if(state.currentSection+1<content.sections.length){
        state.currentSection += 1;
        let section = tag + state.currentSection;
        document.getElementById(section).scrollIntoView({behavior: "smooth", block: "end"});
      }
    }
  }

  const generateSections = () =>{
    let sections = ""
    content.sections.forEach((item, i) => {
      sections += `
      <div id="section-${i}" class="card">
        <div class="section-wrapper">
          <div class="center">
            <h1>${item.title}</h1>
            <div class="container">
              <div class="img-wrapper">
                <img class="img" src="${item.img_url}" alt="image is missing">
                <div class="hidden-text-wrapper full">
                  <div style="width:75%" class="center" >
                    <h3 style="color:${item.styles.color}">${item.hiddenTitle}</h3>
                    <p style="color:${item.styles.color}">${item.hiddenParagraph}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
    });
    document.getElementById('sections').innerHTML = sections;

  }

  return {
    init: ()=>{
      generateSections();
      setEventListeners();
    }
  }
})();

mainCtrl.init();
