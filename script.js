const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


let featuredSection = document.querySelectorAll(".div-box");
let fixedImage = document.querySelector(".fixed-image");
featuredSection.forEach(function(e){
    e.addEventListener("mouseover",()=>{
        let image = e.getAttribute("image-url");
        console.log(image);
        fixedImage.style.backgroundImage = `url(${image})`;
        fixedImage.style.backgroundPosition = "center";
        fixedImage.style.backgroundRepeat = "no-repeat";
        fixedImage.style.backgroundSize = "cover";
        fixedImage.style.display = "block";
    });

    e.addEventListener("mouseleave",()=>{
        fixedImage.style.display = "none";
    });
});
// featuredSection.forEach(function(e){
//     e.addEventListener("mouseleave",()=>{
//         fixedImage.style.display = "none";
//     })
// });

// let input = document.querySelector(".inp");
// input.addEventListener("")

function slider_Style() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
    });

}
slider_Style();