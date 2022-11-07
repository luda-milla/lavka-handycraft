$(document).ready(function() {

  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Ваша заявка принята! Ожидайте звонка. Спасибо!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});

//Highlighting the active menu
try{
var el=document.getElementById('actHref').getElementsByTagName('a');
var url=document.location.href;
for(var i=0;i<el.length; i++){
if (url==el[i].href){
el[i].className += ' active';
};
};
}catch(e){}


//Array of images which you want to show: Use path you want.
var images=new Array('img/1650818771167.jpg','img/товар9.jpg','img/товар10.jpg','img/Набор 38 фигурок/1650818890449.jpg','img/Набор Глена Домана/1653984675465.jpg');
var nextimage=0;
doSlideshow();
function doSlideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('.banner')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(500,function(){
        setTimeout(doSlideshow,3000);
    });
}

//Hamburger
let navToggle = $("#navToggle");
let nav = $("#nav");
navToggle.on("click", function(event){
event.preventDefault();
nav.toggleClass("show");
});

//Tabs
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll('.tabs__item');
  tabsBtn.forEach(function(item){
    item.addEventListener("click", function(){
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      tabsBtn.forEach(function(item){
        item.classList.remove('active');
      });
      tabsItems.forEach(function(item){
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    });
  });

  document.querySelector('.tabs__nav-btn').click();
