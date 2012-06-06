window.onload = function(){
    var now = new Date();
    document.getElementById("greeting").innerHTML = getGreeting(now); 
}; 

var getGreeting = function(now) {
    var hour = now.getHours(); 
    var greeting = "";

    if (hour < 12) { 
        greeting = "morning"; 
    }
    else {
        greeting = "evening"; 
    } 
    greeting = "Good " + greeting + "!"; 
    return greeting; 
};
