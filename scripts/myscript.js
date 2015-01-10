window.addEventListener('load',init,false);
window.addEventListener('unload',end,false);

var myframe;
//creating shortcut for less verbose code
var scorm = pipwerks.SCORM;

function init()
{
    myframe = document.getElementById("myframe");
    myframe.src = "pages/one.html";
    
    //Specify SCORM 1.2:
	scorm.version = "1.2";
	
	var callSucceeded = scorm.init();
    if(!callSucceeded)
    {
        console.log("can`t Open session");
        
    }
    
}


function end(){

	var callSucceeded = scorm.quit();

}