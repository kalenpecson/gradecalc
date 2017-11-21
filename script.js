// calculateCurrentGrade() → takes data from page, calls on sub-functions to calculate the student grade and output it back to page.
//     Also “return” the result so that calculateGradeNeeded() can use it.
// convertArrayStringToNumber() → takes an array of strings (from page) and returns the same array, except all the items are numbers.
//     Use string.split(“,”)  to convert a string into an array of strings, then iterate through and convert each item in the array into a
// number like:
//     array[i] = parseInt(array[i])
// averageArray() → takes an array of numbers and returns the average of those numbers
// calculateGradeNeeded() → takes the current grade returned by calculateCurrentGrade() and the grade desired and does the math to determine
// what the user needs on the final.

var averagehomework=0;
var averagequiz=0;
var averagetest=0;
var midterm=0;
var homeworkweight=0;
var testweight=0;
var quizweight=0;
var midtermweight=0;

function calculateCurrentGrade(){
    gethomework();
    getquizzes();
    gettests();
    midterm= document.getElementById("midtermgrades").value;
    var currentgradesarray=[averagehomework, averagequiz, averagetest, midterm];
    testweight= document.getElementById("testsweight").value;
    quizweight= document.getElementById("quizzesweight").value;
    midtermweight= document.getElementById("midtermweight").value;
    homeworkweight= document.getElementById("homeworkweight").value;
    var currentweightsarray=[homeworkweight, quizweight, testweight, midtermweight];
    var currentgrade=0;
    for(var i=0;i< currentgradesarray;i++ ){
        currentgrade= ((currentgradesarray[i])*(currentweightsarray[i]))
    }
    currentgrade= (currentgrade/100);
    console.log(currentgrade);
}


function gethomework(){
    averagehomework =0;
    var hwstr= document.getElementById("homeworkgrades").value;
    var hwarray= hwstr.split(",");
    for(var i=0; i<hwarray.length; i++){
        hwarray[i] = parseInt(hwarray[i])
    }
    for(var i=0; i<hwarray.length;i++){
        averagehomework+=hwarray[i];
    }
    averagehomework= (averagehomework/(hwarray.length));
}

function getquizzes(){
    averagetest =0;
    var quizstr= document.getElementById("quizzesgrades").value;
    var quizarray= quizstr.split(",");
    for(var i=0; i<quizarray.length; i++){
        quizarray[i] = parseInt(quizarray[i])
    }
    for(var i=0; i<quizarray.length;i++){
        averagequiz+=quizarray[i];
    }
    averagequiz= (averagequiz/(quizarray.length));
}

function gettests(){
    averagequiz =0;
    var teststr= document.getElementById("testgrades").value;
    var testarray= teststr.split(",");
    for(var i=0; i<testarray.length; i++){
        testarray[i] = parseInt(testarray[i])
    }
    for(var i=0; i<testarray.length;i++){
        averagetest+=testarray[i];
    }
    averagetest= (averagetest/(testarray.length));
}

