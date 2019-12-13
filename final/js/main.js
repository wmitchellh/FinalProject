
$(document).ready(function(){
  $('#table').dataTable( {
    "ajaxSource": "people.json",
    "columns": [
      // { "data": "index" },
      // { "data": "isActive" },
      // { "data": "balance" },
      { "data": "picture" },
      // { "data": "age" },
      { "data": "name" },
      { "data": "gender" },
      { "data": "company" },
      { "data": "email" },
      // { "data": "phone" },
      // { "data": "address" },
      { "data": "about" },
      // { "data": "registered" },
      // { "data": "latitude" },
      // { "data": "longitude" },
      { "data": "favoriteSport" },
    ]
  } );

loadData();
});

$( document ).ready(function() {
    loadData();
});


function loadData(){

    $.ajax({
            type:"GET",
            url:"people.json",
            dataType:"json",
            success: parseData
});


}

var maleCount = 0;
var femaleCount = 0;

function parseData(data){
    console.log(data);
    //dataObj = JSON.parse(data);
    //console.log(dataObj);

     for (var i = 0, len = data.length; i < len; ++i) {
            //sets data to arrays for charts
            picture.push(data[i]["picture"]);
            person.push(data[i]["name"]);
            gender.push(data[i]["gender"]);
            company.push(data[i]["company"]);
            email.push(data[i]["email"]);
            about.push(data[i]["about"]);
            favoriteSport.push(data[i]["favoriteSport"]);

//attempt to incriment male and female count
            if (data[i]["gender"] == "male") {
                maleCount++;
            }else{
                femaleCount++;
            }
     }
}


var chart = c3.generate({
    bindto: '#donut',
    data: {
        columns: [
            ['Soccer', 1],
            ['Basketball', 1],
            ['unknown', 2],
        ],
        type : 'donut',
        colors: {
          Soccer: '#00A2B8',
          Basketball: '#FF7F1C',
          unknown: '#272727',

        },
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Favorite Sport"
    }
});

document.getElementById("math").innerHTML = "There are " + maleCount + " males and " + femaleCount + " females."
