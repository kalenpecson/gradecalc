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
    testweight= document.getElementById("testsweight").value;
    quizweight= document.getElementById("quizzesweight").value;
    midtermweight= document.getElementById("midtermsweight").value;
    homeworkweight= document.getElementById("homeworksweight").value;

    if (checkweights()==false){
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
    var averagehomework=averagestring(document.getElementById("homeworkgrades").value);
    var averagequiz=averagestring(document.getElementById("quizzesgrades").value);
    var averagetest=averagestring(document.getElementById("testgrades").value);
    document.getElementById("homeworkgrades").value= averagehomework;
    document.getElementById("quizzesgrades").value=averagequiz;
    document.getElementById("testgrades").value= averagetest;
    colorbox(averagehomework,homeworkrow,homeworkgrades,homeworksweight);
    colorbox(averagequiz,quizzesrow,quizzesgrades,quizzesweight);
    colorbox(averagetest,testsrow,testgrades,testsweight);
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

function averagestring(string){
    var average=0;
    var array= string.split(",");
    for(var i=0; i<array.length; i++){
        array[i] = parseInt(array[i])
    }
    checkvalues(array);
    for(var i=0; i<array.length;i++){
        average+=array[i];
    }
    average= (average/(array.length));
    return average;
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
        if (x[i]<0 || x[i]>100){
            alert("Are you sure those are your grades??")
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