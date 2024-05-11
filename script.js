

const header = document.querySelector(".header");
let listBtn = document.querySelector(".list-btn");

listBtn.addEventListener('click', function() {
  header.classList.toggle("nav-open");
})


/*********************************************************make smoothy*****************
 * ********************/
  const allLinks = document.querySelectorAll("a");
  allLinks.forEach(function(link){

    link.addEventListener('click', function(event){

      event.preventDefault();
      const href = link.getAttribute("href");

      if (href!="#" && href.startsWith("#")){
        const section = document.querySelector(href);

       section.scrollIntoView({
          behavior:"smooth"
        })

        const header = document.querySelector("header");
        if (header.classList.contains("nav-open")){
          header.classList.toggle("nav-open");
        }
}


      
   

    })


  })


  // make sticky navigation bar
  const logo = document.querySelector(".logo");
 
  
  // Create a new MutationObserver
  const observer = new MutationObserver(() => {
    
    if (header.classList.contains("sticky")) {
      logo.setAttribute("src", "img/white-logo.png");
    } else {
      logo.setAttribute("src", "img/omnifood-logo.png");
    }
  });

  
  
  // Configure the observer to monitor changes in the attributes of the header element
  observer.observe(header, { attributes: true });

// 
//   const sectionHeroEl = document.querySelector(".hero-section");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
