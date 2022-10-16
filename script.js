const container = document.querySelectorAll(".container");
const containerExcept = document.querySelector(".container-except");
const containerResult1 = document.querySelector(".container11");
console.log(containerResult1);
const containerResult2 = document.querySelector(".container22");
const containerResult3 = document.querySelector(".container33");
const containerResult4 = document.querySelector(".container44");
const containerResult5 = document.querySelector(".container55");

container.forEach(function(boxes) {
    boxes.addEventListener("click", function(e) {
        let myTaget = e.currentTarget;
        if(myTaget.style.backgroundColor === "white") {
            myTaget.style.backgroundColor = "green";
            myTaget.style.border = "none";
            myTaget.style.transition = "none";
            containerExcept.style.backgroundColor = "white"
            containerExcept.style.border = "1px solid black";
            console.log("Hello");
        }
        else {
            myTaget.style.backgroundColor = "white";
            myTaget.style.border = "1px solid black";

        }

    });
});


containerExcept.addEventListener("click", function() {
    if(containerExcept.style.backgroundColor === "white") {
        containerExcept.style.backgroundColor = "green";
        containerExcept.style.border = "none";
        for(i = 0; i < container.length; i++) {
            container[i].style.backgroundColor = "white";
            container[i].style.border = "1px solid black";
        }
        containerResult1.style.transition = "all 2.5s ease";
        containerResult2.style.transition = "all 2s ease";
        containerResult3.style.transition = "all 1.5s ease";
        containerResult4.style.transition = "all 1s ease";
        containerResult5.style.transition = "all 0.5s ease";
        
    }
    else {
        containerExcept.style.backgroundColor = "white";
        containerExcept.style.border = "1px solid black";
        for(i = 0; i < container.length; i++) {
            container[i].style.backgroundColor = "green";
            container[i].style.border = "none";
        }
        containerResult1.style.transition = "all 0.5s ease";
        containerResult2.style.transition = "all 1s ease";
        containerResult3.style.transition = "all 1.5s ease";
        containerResult4.style.transition = "all 2s ease";
        containerResult5.style.transition = "all 2.5s ease";

    }

        // console.log("World");
})

