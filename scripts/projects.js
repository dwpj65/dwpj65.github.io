// https://www.w3schools.com/js/js_whereto.asp

window.onload = function() {
    // alert("Loaded");
    // console.log('Loaded');
    updateTimeDisplay()
};

updateTimeDisplay = function() {
    var date = new Date()
    document.getElementById("clock").innerHTML = date
    var t = setTimeout(function(){ updateTimeDisplay() }, 1000); /* setting timer */
}
