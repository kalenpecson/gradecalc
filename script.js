
var averagehomework=0;
var averagequiz=0;
var averagetest=0;
var midterm=0;
var homeworkweight=0;
var testweight=0;
var quizweight=0;
var midtermweight=0;
var currentgrade=0;
var wantedgrade=0;
var finalweight=0;
var necessarygrade=0;

function calculateGradeNeeded(){
    if (!checkweights()){
        return;
    }
    calculateCurrentGrade();
    wantedgrade= document.getElementById("desiredgrade").value;
    var wantedgradearray=[];
    wantedgradearray.push(wantedgrade);
    for(var i=0;i<(wantedgradearray.length); i++){
        wantedgradearray[i] = parseInt(wantedgradearray[i]);
        wantedgrade= wantedgradearray[i];
    }
    finalweight = document.getElementById("finalweight").value;
    var finalweightarray=[];
    finalweightarray.push(finalweight);
    for(var i=0;i<(finalweightarray.length); i++){
        finalweightarray[i] = parseInt(finalweightarray[i]);
        finalweight= finalweightarray[i];
    }
    necessarygrade= (((wantedgrade*100)-(currentgrade*(100-finalweight)))/finalweight);
    document.getElementById("neededgrade").innerHTML= necessarygrade+"%";
    message(necessarygrade);

}
function checkweights(){
    var hwweightarray=[];
    var testweightarray=[];
    var quizweightarray=[];
    var midtermweightarray=[];
    hwweightarray.push(homeworkweight);
    testweightarray.push(testweight);
    quizweightarray.push(quizweight);
    midtermweightarray.push(midtermweight);
    for (var i=0; i<1; i++){
        hwweightarray[i]=parseInt(hwweightarray[i]);
        testweightarray[i]= parseInt(testweightarray[i]);
        quizweightarray[i]=parseInt(quizweightarray[i]);
        midtermweightarray[i]=parseInt(midtermweightarray[i]);
    }
    var a=hwweightarray[0];
    var b=testweightarray[0];
    var c=quizweightarray[0];
    var d=midtermweightarray[0];
    if((a+c+b+d)!=100){
        alert("Invalid Weights");
        return false;
    }
    return true;
}

function calculateCurrentGrade(){
    gethomework();
    getquizzes();
    gettests();
    midterm= document.getElementById("midtermgrades").value;
    var midtermarray=[];
    midtermarray.push(midterm);
    for(var i=0;i<(midtermarray.length); i++){
        midtermarray[i] = parseInt(midtermarray[i]);
        midterm=midtermarray[i];
    }
    colorbox(midterm,midtermrow,midtermgrades,midtermsweight);
    checkvalues(midtermarray);
    var currentgradesarray=[averagehomework, averagequiz, averagetest, midterm];
    testweight= document.getElementById("testsweight").value;
    quizweight= document.getElementById("quizzesweight").value;
    midtermweight= document.getElementById("midtermsweight").value;
    homeworkweight= document.getElementById("homeworksweight").value;
    var currentweightsarray=[homeworkweight, quizweight, testweight, midtermweight];
    for(var i=0;i<currentweightsarray.length; i++){
        currentweightsarray[i] = parseInt(currentweightsarray[i])
    }
    console.log(currentweightsarray);
    currentgrade=0;
    for(var i=0;i< currentgradesarray.length ;i++ ){
        var x= currentgradesarray[i];
        var y= currentweightsarray[i];
        currentgrade += (x*y);
    }
    currentgrade= (currentgrade/100);
}


function gethomework(){
    averagehomework =0;
    var hwstr= document.getElementById("homeworkgrades").value;
    var hwarray= hwstr.split(",");
    for(var i=0; i<hwarray.length; i++){
        hwarray[i] = parseInt(hwarray[i])
    }
    checkvalues(hwarray);
    for(var i=0; i<hwarray.length;i++){
        averagehomework+=hwarray[i];
    }
    averagehomework= (averagehomework/(hwarray.length));
    colorbox(averagehomework,homeworkrow,homeworkgrades,homeworksweight);
    document.getElementById("homeworkgrades").value = averagehomework;

}

function getquizzes(){
    averagequiz =0;
    var quizstr= document.getElementById("quizzesgrades").value;
    var quizarray= quizstr.split(",");
    for(var i=0; i<quizarray.length; i++){
        quizarray[i] = parseInt(quizarray[i])
    }
    checkvalues(quizarray);
    for(var i=0; i<quizarray.length;i++){
        averagequiz+=quizarray[i];
    }
    averagequiz= (averagequiz/(quizarray.length));
    colorbox(averagequiz,quizzesrow,quizzesgrades,quizzesweight);
    document.getElementById("quizzesgrades").value = averagequiz;


}

function gettests(){
    averagetest =0;
    var teststr= document.getElementById("testgrades").value;
    var testarray= teststr.split(",");
    for(var i=0; i<testarray.length; i++){
        testarray[i] = parseInt(testarray[i])
    }
    checkvalues(testarray);
    for(var i=0; i<testarray.length;i++){
        averagetest+=testarray[i];
    }
    averagetest= (averagetest/(testarray.length));
    document.getElementById("testgrades").value = averagetest;
    colorbox(averagetest,testsrow,testgrades,testsweight);
}

function colorbox(x,y,z,b){
    if(x>=90){
        y.style.backgroundColor= "lime";
        z.style.backgroundColor= "lime";
        b.style.backgroundColor= "lime";
    }else if( x<90 && x>=80 ){
        y.style.backgroundColor="yellow";
        z.style.backgroundColor="yellow";
        b.style.backgroundColor="yellow";
    }else if (x<80 && x>=70){
        y.style.backgroundColor= "orange";
        z.style.backgroundColor= "orange";
        b.style.backgroundColor= "orange";
    }else if (x<70 && x>=60){
        y.style.backgroundColor="red";
        z.style.backgroundColor="red";
        b.style.backgroundColor="red";
    }else if(x<60){
        y.style.backgroundColor="fuchsia";
        z.style.backgroundColor="fuchsia";
        b.style.backgroundColor="fuchsia";
    }
}

function checkvalues(x){
    for(var i=0; i<x.length; i++){
        if (x[i]<0){
            alert("invalid input!")
        }
    }
}

function message(z){
    if (z>100){
        document.getElementById("neededgrade").innerHTML+= "<br/>"+"It's Looking Rough Mate...";
    }else if (z<75){
        document.getElementById("neededgrade").innerHTML+= "<br/>"+"Easy Dub!";
    }else if (z>=75 && z<=100){
        document.getElementById("neededgrade").innerHTML+= "<br/>"+"That's feasible, right?";
    }
}