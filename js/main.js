// Create a variable to insert a style tag into the head of html document
let styleTag=document.createElement('style');
document.head.appendChild(styleTag);
let styleSheet=styleTag.sheet;
// Create a function to add messages to the carousel container
function createCarousel(carouselContainer, addMessage, repeatTimes, animationDuration, elementWidth){
    // Create a variable to save the ad message
    let carouselAdsText=""
    // Create a loop to add a message into carouselAdsText
    for(let x=0;x<repeatTimes;x++){
        carouselAdsText+=`<span class="adCarousel ${carouselContainer+"Item"}">${addMessage}</span>`;
    }
    // Find the carousel container and include the messages of carouselAdsText
    let container=document.querySelector(`.${carouselContainer}`)
    container.innerHTML=carouselAdsText;
    // Find the first ad message in the carousel container and obtain its width
    let carouselAd=document.querySelector(`.${carouselContainer+"Item"}`);
    // Create a time out
    setTimeout(() => {
        let carouselAdWidth=(carouselAd.offsetWidth)*elementWidth;
        // Set an animation for the first message in the carousel container
        let animationName=`${carouselContainer}Animation`;
        let keyframes=`@keyframes ${animationName}{0%{margin-left: 0px;}100%{margin-left: ${0 - carouselAdWidth}px;}}`;
        // Insert animation into the style tag
        styleSheet.insertRule(keyframes, 0);
        // Add animation
        carouselAd.style.animation = `${animationName} ${animationDuration}s linear infinite`
    }, 100);
}
// Create an array to save images and description
let carouselImageList=[["./assets/images/clientLogo1.svg","Client 1 description"], ["./assets/images/clientLogo2.svg","Client 2 description"], ["./assets/images/clientLogo3.svg","Client 3 description"], ["./assets/images/clientLogo4.svg","Client 4 description"], ["./assets/images/clientLogo5.svg","Client 5 description"], ["./assets/images/clientLogo6.svg","Client 6 description"]];
// Create a function which returns a text with the structure of a carousel list
function getImagesText(imagesArray) {
    let imagesText="";
    for(image in imagesArray){
        imagesText=imagesText+`<img src="${imagesArray[image][0]}" alt="${imagesArray[image][1]}">`
    }
    return imagesText;
}
// Add animation to a carousel using carouselContainerClassName, addMessage, repeatTimes, animationDuration
createCarousel("adCarouselContainer1", "+++ Open for new projects", 10, 7, 1)
createCarousel("adCarouselContainer2", getImagesText(carouselImageList), 4, 15, 1)
createCarousel("adCarouselContainer3", "Selected work", 6, 14, 2)
createCarousel("adCarouselContainer6", "Process", 6, 10, 2)
createCarousel("adCarouselContainer4", "+++ Finde me on Social Media", 12, 7, 1)
createCarousel("adCarouselContainer7", "Feedback", 6, 14, 2)
createCarousel("adCarouselContainer5", "+++ Let's talk", 12, 4, 1)

let cursor=document.querySelector(".cursor");

document.addEventListener("mousemove", function(event) {
    var x=event.clientX;
    var y=event.clientY;
    var scrollTop=document.documentElement.scrollTop;
    var scrollLeft=document.documentElement.scrollLeft;
    cursor.style.left=`${x+scrollLeft}px`;
    cursor.style.top=`${y+scrollTop}px`;
});