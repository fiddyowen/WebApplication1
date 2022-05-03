Hours = {};
username2 = {};
password2 = {};
username2.value = "beans";
password2.value = "toast";
Lunch_break = 1;
Water_Break = 1;
Lesuire_Time = 1;
Mental_Break = 1;
// this code is to create varialbes to assian vaules later
// this funcation allowes the light comand to be ready and then to check the statsus and wait for a response.
function UsernameAndPassword() {
    if username2 == username.getElementById() && password2 = password.getElementById()
            $("#login").hide();
            $("#StudyForTitle").show();
            $("#OptinalPicks").show();
            $("#box").show();
            $("#color-picker").show();
            $("#start-time").show();
            $("#signUpPage").hide();
}
// this function will hide certan DIV's and show others with do display. this will me that yoy can change what is on display. as such when you input the log in and pasword it will 
// change the screen from the log in page to showing the second user interface.

function contact() {
    $("#contacts").show();

    $("#login").hide();
    $("#picture").hide();
    $("#StudyForTitle").hide();
    $("#OptinalPicks").hide();
    $("#box").hide();
    $("#color-picker").hide();
    $("#start-time").hide();

    $("#study").hide();
    $("#lunch").hide();
    $("#water").hide();
    $("#lessure").hide();
    $("#mental").hide();
    $("#finish").hide();
}
// this function will hide certan DIV's and show others with do display. this one hiding all divs open or not. then showing just the conract DIV resuting in the user veiwing the contact page
function aboutUs() {
    $("#picture").show();

    $("#contacts").hide();
    $("#login").hide();
    $("#StudyForTitle").hide();
    $("#OptinalPicks").hide();
    $("#box").hide();
    $("#color-picker").hide();
    $("#start-time").hide();

    $("#study").hide();
    $("#lunch").hide();
    $("#water").hide();
    $("#lessure").hide();
    $("#mental").hide();
    $("#finish").hide();
}
// this function will hide certan DIV's and show others with do display. this one hiding all divs open or not. then showing just the about us DIV resuting in the user veiwing the abput us page

function services() {
    $("#contacts").hide();
    $("#login").hide();
    $("#picture").hide();
    $("#StudyForTitle").hide();
    $("#OptinalPicks").hide();
    $("#box").hide();
    $("#color-picker").hide();
    $("#start-time").hide();

    $("#study").hide();
    $("#lunch").hide();
    $("#water").hide();
    $("#lessure").hide();
    $("#mental").hide();
    $("#finish").hide();
}
// this function will hide certan DIV's and show others with do display. this one hiding all divs open or not. then showing just the services DIV resuting in the user veiwing the services page
function studyTEXT() {
    $("#study").show();
    $("#lunch").hide();
    $("#water").hide();
    $("#lessure").hide();
    $("#mental").hide();
    $("#finish").hide();


}
function mentalTEXT() {
    $("#study").hide();
    $("#lunch").hide();
    $("#water").hide();
    $("#lessure").hide();
    $("#mental").show();
    $("#finish").hide();
}
function lunchTEXT() {
    $("#study").hide();
    $("#lunch").show();
    $("#water").hide();
    $("#lessure").hide();
    $("#mental").hide();
    $("#finish").hide();
}
function waterTEXT() {
    $("#study").hide();
    $("#lunch").hide();
    $("#water").show();
    $("#lessure").hide();
    $("#mental").hide();
    $("#finish").hide();
}
function lessureTEXT() {
    $("#study").hide();
    $("#lunch").hide();
    $("#water").hide();
    $("#lessure").show();
    $("#mental").hide();
    $("#finish").hide();
}
function finishTEXT() {
    $("#study").hide();
    $("#lunch").hide();
    $("#water").hide();
    $("#lessure").hide();
    $("#mental").hide();
    $("#finish").show();
}
// these show text when the light it running to idicate when its time to studdy
function createHours() {

    var Studyboi = document.getElementById("studyTimeBoi");
    localStorage.setItem("Studyboi", studyTimeBoi.value);
    var hue1 = document.getElementById("hue1");
    localStorage.setItem("hue1", hue1.value);
    var hue2 = document.getElementById("hue2");
    localStorage.setItem("hue2", hue2.value);
    var hue3 = document.getElementById("hue3");
    localStorage.setItem("hue3", hue3.value);
    var hue4 = document.getElementById("hue4");
    localStorage.setItem("hue4", hue4.value);


    var RGB1 = HEXtoRGB(hue1.value)
    localStorage.setItem("RGB1", RGB1);
    var RGB2 = HEXtoRGB(hue2.value)
    localStorage.setItem("RGB2", RGB2);
    var RGB3 = HEXtoRGB(hue3.value)
    localStorage.setItem("RGB3", RGB3);
    var RGB4 = HEXtoRGB(hue4.value)
    localStorage.setItem("RGB4", RGB4);
//these lines of code grabe the values of the amout of time wanted to study and the color of the hue lights wished to be set. then it sets thous values to places in local storige 
    const dataTime = {
        "Studyboi": Studyboi.value,
        "hue1": hue1.value,
        "hue2": hue2.value,
        "hue3": hue3.value,
        "hue4": hue4.value,
    }
    localStorage.setItem("dataTime", JSON.stringify(dataTime));
    //assine information to the local storige

        alert("press OK to start timer");
// alerts the uses to conforme they wishthe stuffing to comense
        $("#OptinalPicksTitle").html("Study Session Shall Begin");
        $("#OptinalPicksItems").empty();
// changes the tital
    $("#StudyForTitle").hide();
    $("#box").hide();
    $("#color-picker").hide();
    $("#start-time").hide();
// hides eveything on screen that is no longer needed. therfore taking it to the next page
    var total_time = studyTimeBoi.value * 60000;
// turning the inputed time to hours (this has been changed to minets for demestrations)
    var interval_time = total_time / 10;
// turning total hours into 10% of it. this is to use them as italvals for the lights to be on.
    study();
    study2();
    study3();
    study4();
    study5();
    study6();
// turns on all the lights
    if (Lunch_break == 1) {
        setTimeout(lunch, 2 * interval_time);
        setTimeout(lunch2, 2 * interval_time);
        setTimeout(lunch3, 2 * interval_time);
        setTimeout(lunch4, 2 * interval_time);
        setTimeout(lunch5, 2 * interval_time);
        setTimeout(lunch6, 2 * interval_time);
        // changes all the lights after 20% of the total time has occured
    }
// if lunch_breake equals 1 it waits a 20% of the total time before performaing the lunch function else will continue showing the studdy color

    setTimeout(study, 3 * interval_time);
    setTimeout(study2, 3 * interval_time);
    setTimeout(study3, 3 * interval_time);
    setTimeout(study4, 3 * interval_time);
    setTimeout(study5, 3 * interval_time);
    setTimeout(study6, 3 * interval_time);
        // changes all the lights after 30% of the total time has occured


    if (Water_Break == 1) {
        setTimeout(water, 4 * interval_time);
        setTimeout(water2, 4 * interval_time);
        setTimeout(water3, 4 * interval_time);
        setTimeout(water4, 4 * interval_time);
        setTimeout(water5, 4 * interval_time);
        setTimeout(water6, 4 * interval_time);
        // changes all the lights after 40% of the total time has occured

    }
// if Water_Break equals 1 it waits a 10% of the total time before performaing the lunch function else will continue showing the studdy color

    setTimeout(study, 5 * interval_time);
    setTimeout(study2, 5 * interval_time);
    setTimeout(study3, 5 * interval_time);
    setTimeout(study4, 5 * interval_time);
    setTimeout(study5, 5 * interval_time);
    setTimeout(study6, 5 * interval_time);
        // changes all the lights after 50% of the total time has occured



    if (Mental_Break == 1) {
        setTimeout(mental, 6 * interval_time);
        setTimeout(mental2, 6 * interval_time);
        setTimeout(mental3, 6 * interval_time);
        setTimeout(mental4, 6 * interval_time);
        setTimeout(mental5, 6 * interval_time);
        setTimeout(mental6, 6 * interval_time);
        // changes all the lights after 60% of the total time has occured

    }
// if Mental_Break equals 1 it waits a 10% of the total time before performaing the lunch function else will continue showing the studdy color

    setTimeout(study, 7 * interval_time);
    setTimeout(study2, 7 * interval_time);
    setTimeout(study3, 7 * interval_time);
    setTimeout(study4, 7 * interval_time);
    setTimeout(study5, 7 * interval_time);
    setTimeout(study6, 7 * interval_time);
        // changes all the lights after 70% of the total time has occured




    if (Lesuire_Time == 1) {
        setTimeout(lessure, 8 * interval_time);
        setTimeout(lessure2, 8 * interval_time);
        setTimeout(lessure3, 8 * interval_time);
        setTimeout(lessure4, 8 * interval_time);
        setTimeout(lessure5, 8 * interval_time);
        setTimeout(lessure6, 8 * interval_time);
        // changes all the lights after 80% of the total time has occured

    }
// if Lesuire_Time equals 1 it waits a 10% of the total time before performaing the lunch function else will continue showing the studdy color

    setTimeout(study, 9 * interval_time);
    setTimeout(study2, 9 * interval_time);
    setTimeout(study3, 9 * interval_time);
    setTimeout(study4, 9 * interval_time);
    setTimeout(study5, 9 * interval_time);
    setTimeout(study6, 9 * interval_time);
        // changes all the lights after 90% of the total time has occured




    setTimeout(finish, 10 * interval_time);
    setTimeout(finish1, 10 * interval_time);
    setTimeout(finish2, 10 * interval_time);
    setTimeout(finish3, 10 * interval_time);
    setTimeout(finish4, 10 * interval_time);
    setTimeout(finish5, 10 * interval_time);
    setTimeout(finish6, 10 * interval_time);




// turns light off when studdying as finished
    
}
function study() {
    studyTEXT()
    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/1/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };
    
    var data = '{"on": true, "bri":245, "xy" : [0.15,0.75]}';  // green
    xhr.send(data);
}
function study2() {
    studyTEXT()
    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/2/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.15,0.75] }';  // green
    xhr.send(data);
}
function study3() {
    studyTEXT()
    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/3/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.15,0.75]}';  // green
    xhr.send(data);
}
function study4() {
    studyTEXT()
    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/4/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.15,0.75]}';  // green
    xhr.send(data);
}
function study5() {
    studyTEXT()
    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/5/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.15,0.75]}';  // green
    xhr.send(data);
}
function study6() {
    studyTEXT()
    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/6/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.15,0.75]}';  // green
    xhr.send(data);
}
// changes the color of all the lights above to green and sends the command to the ligth
function lunch() {

    lunchTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/1/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var hue1 = document.getElementById("hue1");
    var RGB1 = HEXtoRGB(hue1.value)
    var data = '{"on": true, "bri":245, "xy" : [0.675,0.322]}'; // red
    xhr.send(data);
}
function lunch2() {

    lunchTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/2/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var hue1 = document.getElementById("hue1");
    var RGB1 = HEXtoRGB(hue1.value)
    var data = '{"on": true, "bri":245, "xy" : [0.675,0.322]}'; // red
    xhr.send(data);
} function lunch3() {

    lunchTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/3/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var hue1 = document.getElementById("hue1");
    var RGB1 = HEXtoRGB(hue1.value)
    var data = '{"on": true, "bri":245, "xy" : [0.675,0.322]}'; // red
    xhr.send(data);
} function lunch4() {

    lunchTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/4/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var hue1 = document.getElementById("hue1");
    var RGB1 = HEXtoRGB(hue1.value)
    var data = '{"on": true, "bri":245, "xy" : [0.675,0.322]}'; // red
    xhr.send(data);
} function lunch5() {

    lunchTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/5/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var hue1 = document.getElementById("hue1");
    var RGB1 = HEXtoRGB(hue1.value)
    var data = '{"on": true, "bri":245, "xy" : [0.675,0.322]}'; // red
    xhr.send(data);
} function lunch6() {

    lunchTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/6/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var hue1 = document.getElementById("hue1");
    var RGB1 = HEXtoRGB(hue1.value)
    var data = '{"on": true, "bri":245, "xy" : [0.675,0.322]}'; // red
    xhr.send(data);
}
// changes color of light to red and sends the command to the ligth

function water() {

    waterTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/1/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.2425,0.1892]}';  //blue
    xhr.send(data);
}
function water2() {

    waterTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/2/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.2425,0.1892]}';  //blue
    xhr.send(data);
} function water3() {

    waterTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/3/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.2425,0.1892]}';  //blue
    xhr.send(data);
} function water4() {

    waterTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/4/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.2425,0.1892]}';  //blue
    xhr.send(data);
} function water5() {

    waterTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/5/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.2425,0.1892]}';  //blue
    xhr.send(data);
} function water6() {

    waterTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/6/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.2425,0.1892]}';  //blue
    xhr.send(data);
}
// changes color of light to blue and sends the command to the ligth


function mental() {

    mentalTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/1/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.4325,0.5007]}';  // yellow
    xhr.send(data);
}
function mental2() {

    mentalTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/2/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.4325,0.5007]}';  // yellow
    xhr.send(data);
} function mental3() {

    mentalTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/3/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.4325,0.5007]}';  // yellow
    xhr.send(data);
} function mental4() {

    mentalTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/4/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.4325,0.5007]}';  // yellow
    xhr.send(data);
} function mental5() {

    mentalTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/5/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.4325,0.5007]}';  // yellow
    xhr.send(data);
} function mental6() {

    mentalTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/6/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.4325,0.5007]}';  // yellow
    xhr.send(data);
}
// changes color of light to yellow and sends the command to the ligth


function lessure() {

    lessureTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/1/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.3947,0.3114]}';  // purple
    xhr.send(data);
}
function lessure2() {

    lessureTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/2/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.3947,0.3114]}';  // purple
    xhr.send(data);
} function lessure3() {

    lessureTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/3/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.3947,0.3114]}';  // purple
    xhr.send(data);
} function lessure4() {

    lessureTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/4/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.3947,0.3114]}';  // purple
    xhr.send(data);
} function lessure5() {

    lessureTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/5/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.3947,0.3114]}';  // purple
    xhr.send(data);
} function lessure6() {

    lessureTEXT()

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/6/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"on": true, "bri":245, "xy" : [0.3947,0.3114]}';  // purple
    xhr.send(data);
}
// changes color of all the lights to purple and sends the command to the ligths

function finish() {

    finishTEXT();

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/1/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"off": true, "bri":1, "xy" : [0.4325,0.5007]}';  //off
    xhr.send(data);
}
function finish2() {

    finishTEXT();

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/2/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"off": true, "bri":1, "xy" : [0.4325,0.5007]}';  //off
    xhr.send(data);
} function finish3() {

    finishTEXT();

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/3/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"off": true, "bri":1, "xy" : [0.4325,0.5007]}';  //off
    xhr.send(data);
} function finish4() {

    finishTEXT();

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/4/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"off": true, "bri":1, "xy" : [0.4325,0.5007]}';  //off
    xhr.send(data);
} function finish5() {

    finishTEXT();

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/5/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"off": true, "bri":1, "xy" : [0.4325,0.5007]}';  //off
    xhr.send(data);
} function finish6() {

    finishTEXT();

    var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/6/state";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Length", "0");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{"off": true, "bri":1, "xy" : [0.4325,0.5007]}';  //off
    xhr.send(data);
}
// turns off lighs

function change1() {
    $("#item1").addClass("color");
    Lunch_break = 1;
    localStorage.setItem("Lunch_break", Lunch_break);
}
function change2() {
    $("#item2").addClass("color");
    Water_Break = 1;
    localStorage.setItem("Water_Break", Water_Break);
} function change3() {
    $("#item3").addClass("color");
    Mental_Break = 1;
    localStorage.setItem("Mental_Break", Mental_Break);

} function change4() {
    $("#item4").addClass("color");
    Lesuire_Time = 1;
    localStorage.setItem("Lesuire_Time", Lesuire_Time);
}
//these save 1 into the local storige foe each option when yes is selected
function change5() {
    $("#item1").removeClass("color");
    Lunch_break = 0;
    localStorage.setItem("Lunch_break", Lunch_break);
}
function change6() {
    $("#item2").removeClass("color");
     Water_Break = 0;
    localStorage.setItem("Water_Break", Water_Break);
} function change7() {
    $("#item3").removeClass("color");
     Mental_Break = 0;
    localStorage.setItem("Mental_Break", Mental_Break);
} function change8() {
    $("#item4").removeClass("color");
     Lesuire_Time = 0;
    localStorage.setItem("Lesuire_Time", Lesuire_Time);
}

//these save 0 into the local storige foe each option when no is selected



function HEXtoRGB(hex) {
    hex = hex.replace(/#/g, '');
    if (hex.length === 3) {
        hex = hex.split('').map(function (hex) {
            return hex + hex;
        }).join('');
    }
    // validate hex format
    var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(hex);
    if (result) {
        var red = parseInt(result[1], 16);
        var green = parseInt(result[2], 16);
        var blue = parseInt(result[3], 16);


        red1 = red / 255.0
        green1 = green / 255.0
        blue1 = blue / 255.0

        if (red1 > 0.04045)
            r = ((red1 + 0.055) / (1.0 + 0.055)) ** 2.4;
        else
            r = (red1 / 12.92);

        if (green1 > 0.04045)
            g = ((green1 + 0.055) / (1.0 + 0.055)) ** 2.4
        else
            g = (green1 / 12.92)

        if (blue1 > 0.04045)
            b = ((blue1 + 0.055) / (1.0 + 0.055)) ** 2.4
        else
            b = (blue1 / 12.92)

        X = r * 0.664511 + g * 0.154324 + b * 0.162028
        Y = r * 0.283881 + g * 0.668433 + b * 0.047685
        Z = r * 0.000088 + g * 0.072310 + b * 0.986039

        cx = X / (X + Y + Z)
        cy = Y / (X + Y + Z)

        return [cx,cy];

    } else {
        // invalid color
        return null;
    }
}
// converts hex to RGB then the RGB to XY witch can be taken by the philleps lights to therefore be used. 
// resulting in useing the hex code color picker to select the color of which the lights will change to

$(document).ready(function () {
    console.info("ready");
});


