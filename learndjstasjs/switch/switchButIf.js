"use strict"
let UserBrowser=prompt("Which browser do you use?","Internet Explorer");
if (UserBrowser==="Edge"){
    alert( "You've got the Edge!" );
}
else if (UserBrowser==="Chrome"||UserBrowser==="Firefox"||UserBrowser==="Safari"||UserBrowser==="Opera")
{
    alert( "Okay, we support these browsers too" );
}
else
{
    alert( "We hope that this page looks ok!" );
}
