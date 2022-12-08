

  document.getElementById('upcoming-event-btn');
function openEvents(event,id) {
    var i;
    var x = document.getElementsByClassName("events");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(event).style.display = "block"; 
    var y=document.getElementsByClassName("btn");
    for(i = 0; i < y.length; i++){
if (y[i].classList.contains('active-event')){
  y[i].classList.remove('active-event');
}
console.log(id);
document.getElementById(id).classList.add('active-event');
    }

  }
  

  window.addEventListener('load', 
  function() { 
    document.getElementById('upcoming-event-btn').click();
    console.log("HI");

  }, false)


//   let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// } 



var slideshowContainers = document.getElementsByClassName("slideshow-container");
let alldots = document.getElementsByClassName("dot-section");
            for(let s = 0; s < slideshowContainers.length; s++) {
             
            var cycle = slideshowContainers[s].dataset.cycle;
            
            var slides = slideshowContainers[s].querySelectorAll('.mySlides');
            var getdots=alldots[s].querySelectorAll('.dot');
            var slideIndex = 0;
            console.log('hello console');
            showSlides(slides, slideIndex, cycle, getdots);
            };



            function showSlides(slides, slideIndex, cycle, getdots) {
              for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";
              };
              slideIndex++;
              if (slideIndex > slides.length) {
                  slideIndex = 1
              };

              for (i = 0; i < getdots.length; i++) {
                    getdots[i].className = getdots[i].className.replace(" active-dot", "");
                  }
              slides[slideIndex - 1].style.display = "block";
             getdots[slideIndex-1].className+=' active-dot';
              setTimeout(function() {
                  showSlides(slides, slideIndex, cycle,getdots)
              }, 5000);

          };
          

function disbled(){

}


