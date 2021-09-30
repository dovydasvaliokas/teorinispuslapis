window.onload = function() {
    var sidebarMenu = document.getElementById("sidebarMenu");

    var spoilerDivs = document.getElementsByClassName("spoiler");
    var spoilerButtons = document.getElementsByClassName("spoiler");
    var spoilerContents = document.getElementsByClassName("spoiler-content");

    var openImageButtons = document.querySelectorAll(".open-image > img");
    var openImageContent = document.querySelectorAll(".open-image");
    console.log(openImageButtons);
    console.log(openImageContent);



    // Sidebar menu toggling
    sidebarMenu.addEventListener("click", function(){
        toggleMenu();
    });


    // Spoiler button toggling
    // selection - what is selected on the page (for example text)
    // If there is something selected, then toggling should not be executed.
    for (let i = 0; i < spoilerDivs.length; i++) {
        spoilerDivs[i].addEventListener("click", function() {
            var selection = window.getSelection();
            if (selection.toString().length === 0) {
                toggleActive(spoilerDivs[i]);
            }
        });
    }
    

    // Open image spoiler toggling
    for (let i = 0; i < openImageButtons.length; i++) {
        openImageButtons[i].addEventListener("click", function() {
            toggleActive(openImageContent[i]);
        })
    }
}


function toggleMenu() {
    var menu = document.getElementById("sidebarMenu");
    var menuArrow = document.getElementById("sidebarArrow");


    if (toggleActive(menu)) {
        menuArrow.src = "../assets/img/menu-arrow-left.jpg";
    }
    else {
        menuArrow.src = "../assets/img/menu-arrow-right.jpg";
    }
}

function toggleActive(element) {
    return element.classList.toggle("active");
}