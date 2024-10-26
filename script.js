let tabLinks = document.getElementsByClassName("tab-links");
let tabContents =document.getElementsByClassName("tab-contents");
let sidebar = document.getElementById("side-logo");

  function opentab(tabname){
    for(let tablink of tabLinks){
        tablink.classList.remove("active-link");

    }
    for(let tab of tabContents){
        tab.classList.remove("active-tab"); 
    }
      event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }
  let typed =new Typed(".text",{strings:["Kevin"],
     typeSpeed : 100,
     backSpeed:100,backDelay:1000,loop: true});

function open(){
  sidebar.style.right ="0";
}
function close(){
  sidebar.style.right ="-200px";
}



    


