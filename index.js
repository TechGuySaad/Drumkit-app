
for(var i = 0; i<document.getElementsByTagName("button").length;i++){
    document.getElementsByTagName("button")[i].addEventListener("click",soundByClick);
    document.addEventListener("keydown",soundByKey);
    


        
        

       
    ;
} // loop to get all the buttons selected

function soundByClick(){
    var innerHtmlKey = this.innerHTML ;

    
    makeSound(innerHtmlKey);
    buttonAnimation(innerHtmlKey);

}

function soundByKey(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    // alert("keypress");
}


function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();

            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
    
        default:
            break;
    }


}

function buttonAnimation(key){
    
    // document.get("."+key)[0].classList;
    document.getElementsByClassName(key)[0].classList.add("pressed");
    setTimeout(function (){
        document.getElementsByClassName(key)[0].classList.remove("pressed");

    },100);
}
