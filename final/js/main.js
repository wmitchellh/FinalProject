var data;
var picture = [];
var person = [];
var gender = [];
var company = [];
var email = [];
var about = [];
var favoriteSport = [];

var maleCount = 0;
var femaleCount = 0;

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


function loadData(){

    $.ajax({
            type:"GET",
            url:"people.json",
            dataType:"json",
            success: parseData
});

}

function parseData(data){
    console.log(data);

     for (var i = 0, len = data.length; i < len; ++i) {
            //making individual arrays
            picture.push(data[i]["picture"]);
            person.push(data[i]["name"]);
            gender.push(data[i]["gender"]);
            company.push(data[i]["company"]);
            email.push(data[i]["email"]);
            about.push(data[i]["about"]);
            favoriteSport.push(data[i]["favoriteSport"]);

//attempt to incriment male and female count (math/variable statement)
            if (data[i]["gender"] == "male") {
                maleCount++;
            }else{
                femaleCount++;
            }
     }

console.log(data[i]["gender"]);
}

//donut chart for favorite sport
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

//adding math statemet to html
html = '<h4>There are ' + maleCount + ' males and ' + femaleCount +  ' females.</h4>'
$( "#math" ).html(html);
