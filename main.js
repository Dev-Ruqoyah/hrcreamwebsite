// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // let icons = document.querySelectorAll(".icons");
  let swipers = document.querySelectorAll(".swiper-one");
  
  swipers.forEach(swiper => {
    let associatedIcons = swiper.querySelectorAll(".icons");
    swiper.addEventListener("mouseover", () => {
      associatedIcons.forEach(icon => {
        icon.style.display = "flex";
        icon.style.flexDirection = "column";
        icon.style.transition = ".9s";
        if(window.innerWidth <= 1024){
          icon.style.display = "none"
        }
      });
    });
  
    swiper.addEventListener("mouseout", () => {
      associatedIcons.forEach(icon => {
        icon.style.display = "none";
      });
    });
  });


  














// )