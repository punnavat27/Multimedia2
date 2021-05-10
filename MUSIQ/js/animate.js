//Target location of the 3D animation
const card = document.querySelector(".card");
const container = document.querySelector(".card-container");
//Items in the location
const title = document.querySelector(".title");
const song = document.querySelector(".song img");
const watch = document.querySelector(".watch");
const description = document.querySelector(".info h3");

//Adjusting 3D animation with X and Y axis
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / -10 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 100;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animation when mouse is on the container
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout effect
  title.style.transform = "translateZ(150px)";
  song.style.transform = "translateZ(100px)";
  description.style.transform = "translateZ(125px)";
  watch.style.transform = "translateZ(150px)";
});
//When mouse is now on the container
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback effect
  title.style.transform = "translateZ(0px)";
  song.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  watch.style.transform = "translateZ(0px)";
});
