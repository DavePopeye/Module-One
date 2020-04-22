if(x==="value1") {
    //SOMETHING
}
else if (x==="value2"){
    //something else
}
else if(x==="value3"){
}


const x = "value2";

switch (x) {
    case "value1":
        console.log("VALUE 1 BRANCH");
        break;
    case "value2":
        console.log("VALUE 2 BRANCH");
        //THE BREAK STATEMENT (THE EXECUTION WILL GO ON WITH BRANCH 3 CODE)
    case "value3":
        console.log("VALUE 3 BRANCH");
        break;
    default:
        console.log("NONE OF THE PREVIOUS");
        break;
}    
