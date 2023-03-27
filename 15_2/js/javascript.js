function pageLoaded() {

    const btn = document.getElementById("button");
    
    btn.addEventListener("click", getSize);

    function getSize() {
        
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;

        alert (`Ширина экрана ${screenWidth}, высота экрана ${screenHeight}`);

      }
}


document.addEventListener("DOMContentLoaded", pageLoaded);