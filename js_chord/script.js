////////////////////////////////////////////////////////////
//////////////////////// Set-Up ////////////////////////////
////////////////////////////////////////////////////////////

var margin = {left:90, top:90, right:90, bottom:90},
    width = Math.min(window.innerWidth, 700) - margin.left - margin.right,
    height = Math.min(window.innerWidth, 700) - margin.top - margin.bottom,
    innerRadius = Math.min(width, height) * .39,
    outerRadius = innerRadius * 1.1;
    
var Names = ["ATL","BKN","BOS","CHA","CHI","CLE","DAL","DEN","DET","GSW","HOU","IND","LAC","LAL","MEM","MIA","MIL","MIN","NOP","NYK","OKC","ORL","PHI","PHO","POR","SAC","SAS","TOR","UTA","WAS"],
    colors = ["#301E1E", "#083E77", "#342350", "#567235", "#8B161C", "#DF7C00"],
    opacityDefault = 0.8;

//// TRY TO LOAD NBA JSON DATA


// Raw data dump
var matrix = [
    [
        0.0,
        0.0,
        2.0,
        0.0,
        2.0,
        4.0,
        3.0,
        0.0,
        1.0,
        1.0,
        2.0,
        0.0,
        2.0,
        0.0,
        0.0,
        1.0,
        1.0,
        4.0,
        0.0,
        2.0,
        0.0,
        1.0,
        4.0,
        1.0,
        4.0,
        7.0,
        0.0,
        1.0,
        1.0,
        2.0
    ],
    [
        2.0,
        0.0,
        2.0,
        3.0,
        1.0,
        2.0,
        10.0,
        1.0,
        1.0,
        0.0,
        2.0,
        0.0,
        2.0,
        1.0,
        1.0,
        3.0,
        5.0,
        2.0,
        2.0,
        0.0,
        1.0,
        2.0,
        6.0,
        1.0,
        0.0,
        1.0,
        1.0,
        3.0,
        3.0,
        3.0
    ],
    [
        2.0,
        1.0,
        0.0,
        1.0,
        0.0,
        7.0,
        4.0,
        1.0,
        1.0,
        3.0,
        0.0,
        0.0,
        3.0,
        0.0,
        3.0,
        2.0,
        1.0,
        4.0,
        0.0,
        5.0,
        2.0,
        0.0,
        0.0,
        4.0,
        2.0,
        2.0,
        0.0,
        5.0,
        1.0,
        1.0
    ],
    [
        0.0,
        4.0,
        1.0,
        0.0,
        2.0,
        1.0,
        2.0,
        4.0,
        1.0,
        6.0,
        1.0,
        0.0,
        1.0,
        3.0,
        2.0,
        2.0,
        6.0,
        1.0,
        1.0,
        2.0,
        1.0,
        2.0,
        4.0,
        3.0,
        2.0,
        0.0,
        4.0,
        0.0,
        0.0,
        2.0
    ],
    [
        1.0,
        2.0,
        2.0,
        1.0,
        0.0,
        6.0,
        1.0,
        0.0,
        0.0,
        2.0,
        0.0,
        4.0,
        1.0,
        1.0,
        0.0,
        0.0,
        2.0,
        3.0,
        1.0,
        2.0,
        5.0,
        0.0,
        3.0,
        2.0,
        1.0,
        3.0,
        0.0,
        5.0,
        0.0,
        0.0
    ],
    [
        4.0,
        3.0,
        6.0,
        1.0,
        6.0,
        0.0,
        1.0,
        0.0,
        0.0,
        3.0,
        1.0,
        2.0,
        3.0,
        3.0,
        3.0,
        2.0,
        3.0,
        0.0,
        1.0,
        3.0,
        3.0,
        1.0,
        4.0,
        3.0,
        1.0,
        0.0,
        1.0,
        1.0,
        0.0,
        0.0
    ],
    [
        4.0,
        9.0,
        2.0,
        2.0,
        0.0,
        2.0,
        0.0,
        4.0,
        1.0,
        2.0,
        0.0,
        1.0,
        4.0,
        1.0,
        0.0,
        1.0,
        1.0,
        0.0,
        2.0,
        3.0,
        1.0,
        1.0,
        1.0,
        5.0,
        0.0,
        0.0,
        1.0,
        2.0,
        1.0,
        7.0
    ],
    [
        0.0,
        3.0,
        1.0,
        3.0,
        0.0,
        1.0,
        4.0,
        0.0,
        3.0,
        4.0,
        2.0,
        3.0,
        1.0,
        0.0,
        1.0,
        0.0,
        3.0,
        0.0,
        0.0,
        5.0,
        4.0,
        3.0,
        4.0,
        0.0,
        7.0,
        0.0,
        3.0,
        2.0,
        2.0,
        3.0
    ],
    [
        4.0,
        1.0,
        3.0,
        3.0,
        1.0,
        0.0,
        1.0,
        1.0,
        0.0,
        2.0,
        1.0,
        1.0,
        2.0,
        0.0,
        2.0,
        1.0,
        2.0,
        0.0,
        0.0,
        0.0,
        3.0,
        4.0,
        3.0,
        2.0,
        1.0,
        1.0,
        0.0,
        2.0,
        1.0,
        1.0
    ],
    [
        3.0,
        3.0,
        1.0,
        3.0,
        5.0,
        2.0,
        1.0,
        2.0,
        1.0,
        0.0,
        2.0,
        5.0,
        2.0,
        2.0,
        1.0,
        4.0,
        3.0,
        1.0,
        1.0,
        1.0,
        0.0,
        1.0,
        3.0,
        1.0,
        0.0,
        1.0,
        3.0,
        2.0,
        0.0,
        2.0
    ],
    [
        1.0,
        1.0,
        1.0,
        1.0,
        2.0,
        2.0,
        1.0,
        2.0,
        1.0,
        3.0,
        0.0,
        1.0,
        0.0,
        4.0,
        4.0,
        2.0,
        2.0,
        1.0,
        4.0,
        5.0,
        0.0,
        2.0,
        2.0,
        3.0,
        4.0,
        7.0,
        0.0,
        1.0,
        0.0,
        4.0
    ],
    [
        0.0,
        1.0,
        0.0,
        0.0,
        3.0,
        1.0,
        1.0,
        1.0,
        1.0,
        4.0,
        1.0,
        0.0,
        1.0,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
        1.0,
        1.0,
        3.0,
        0.0,
        0.0,
        0.0,
        0.0
    ],
    [
        1.0,
        0.0,
        1.0,
        3.0,
        1.0,
        2.0,
        1.0,
        2.0,
        1.0,
        0.0,
        3.0,
        0.0,
        0.0,
        0.0,
        2.0,
        3.0,
        0.0,
        1.0,
        1.0,
        0.0,
        3.0,
        0.0,
        1.0,
        1.0,
        3.0,
        2.0,
        0.0,
        1.0,
        0.0,
        3.0
    ],
    [
        1.0,
        1.0,
        0.0,
        4.0,
        0.0,
        2.0,
        0.0,
        1.0,
        1.0,
        2.0,
        1.0,
        0.0,
        0.0,
        0.0,
        2.0,
        0.0,
        0.0,
        0.0,
        1.0,
        0.0,
        2.0,
        2.0,
        0.0,
        2.0,
        0.0,
        1.0,
        1.0,
        0.0,
        1.0,
        0.0
    ],
    [
        0.0,
        1.0,
        1.0,
        1.0,
        0.0,
        3.0,
        0.0,
        1.0,
        0.0,
        1.0,
        6.0,
        0.0,
        4.0,
        1.0,
        0.0,
        4.0,
        1.0,
        2.0,
        1.0,
        1.0,
        0.0,
        2.0,
        2.0,
        1.0,
        0.0,
        2.0,
        1.0,
        1.0,
        0.0,
        1.0
    ],
    [
        2.0,
        0.0,
        4.0,
        2.0,
        0.0,
        2.0,
        3.0,
        1.0,
        1.0,
        3.0,
        0.0,
        0.0,
        3.0,
        0.0,
        3.0,
        0.0,
        0.0,
        1.0,
        2.0,
        0.0,
        1.0,
        0.0,
        0.0,
        2.0,
        2.0,
        2.0,
        1.0,
        2.0,
        0.0,
        0.0
    ],
    [
        1.0,
        3.0,
        3.0,
        5.0,
        1.0,
        1.0,
        1.0,
        1.0,
        4.0,
        1.0,
        2.0,
        1.0,
        1.0,
        1.0,
        2.0,
        0.0,
        0.0,
        2.0,
        2.0,
        1.0,
        5.0,
        5.0,
        4.0,
        2.0,
        0.0,
        0.0,
        4.0,
        2.0,
        0.0,
        1.0
    ],
    [
        2.0,
        4.0,
        2.0,
        1.0,
        1.0,
        0.0,
        1.0,
        1.0,
        3.0,
        2.0,
        3.0,
        0.0,
        0.0,
        0.0,
        1.0,
        0.0,
        2.0,
        0.0,
        1.0,
        0.0,
        1.0,
        0.0,
        1.0,
        1.0,
        0.0,
        3.0,
        3.0,
        0.0,
        1.0,
        0.0
    ],
    [
        0.0,
        2.0,
        0.0,
        1.0,
        2.0,
        1.0,
        1.0,
        0.0,
        0.0,
        1.0,
        3.0,
        0.0,
        2.0,
        0.0,
        2.0,
        0.0,
        1.0,
        0.0,
        0.0,
        1.0,
        1.0,
        2.0,
        2.0,
        0.0,
        0.0,
        4.0,
        0.0,
        1.0,
        0.0,
        1.0
    ],
    [
        0.0,
        1.0,
        2.0,
        1.0,
        2.0,
        2.0,
        3.0,
        6.0,
        0.0,
        1.0,
        6.0,
        1.0,
        3.0,
        1.0,
        2.0,
        1.0,
        2.0,
        3.0,
        0.0,
        0.0,
        2.0,
        1.0,
        4.0,
        2.0,
        0.0,
        0.0,
        6.0,
        3.0,
        0.0,
        1.0
    ],
    [
        0.0,
        0.0,
        2.0,
        1.0,
        4.0,
        5.0,
        0.0,
        3.0,
        1.0,
        0.0,
        1.0,
        0.0,
        2.0,
        1.0,
        0.0,
        0.0,
        4.0,
        1.0,
        1.0,
        4.0,
        0.0,
        0.0,
        2.0,
        1.0,
        2.0,
        2.0,
        1.0,
        0.0,
        1.0,
        2.0
    ],
    [
        0.0,
        2.0,
        0.0,
        4.0,
        0.0,
        2.0,
        0.0,
        2.0,
        2.0,
        2.0,
        1.0,
        0.0,
        1.0,
        2.0,
        4.0,
        0.0,
        5.0,
        0.0,
        1.0,
        1.0,
        0.0,
        0.0,
        1.0,
        6.0,
        0.0,
        2.0,
        0.0,
        3.0,
        1.0,
        2.0
    ],
    [
        2.0,
        6.0,
        0.0,
        2.0,
        2.0,
        1.0,
        2.0,
        3.0,
        3.0,
        5.0,
        2.0,
        2.0,
        2.0,
        2.0,
        0.0,
        4.0,
        5.0,
        0.0,
        1.0,
        3.0,
        1.0,
        0.0,
        0.0,
        1.0,
        1.0,
        3.0,
        2.0,
        2.0,
        3.0,
        2.0
    ],
    [
        0.0,
        0.0,
        4.0,
        5.0,
        2.0,
        3.0,
        5.0,
        1.0,
        2.0,
        4.0,
        1.0,
        0.0,
        0.0,
        2.0,
        1.0,
        5.0,
        6.0,
        1.0,
        4.0,
        5.0,
        1.0,
        4.0,
        1.0,
        0.0,
        0.0,
        1.0,
        1.0,
        4.0,
        1.0,
        1.0
    ],
    [
        1.0,
        3.0,
        3.0,
        3.0,
        0.0,
        1.0,
        0.0,
        5.0,
        3.0,
        1.0,
        3.0,
        0.0,
        4.0,
        0.0,
        1.0,
        1.0,
        1.0,
        1.0,
        2.0,
        1.0,
        1.0,
        0.0,
        1.0,
        0.0,
        0.0,
        2.0,
        2.0,
        3.0,
        0.0,
        0.0
    ],
    [
        3.0,
        2.0,
        3.0,
        1.0,
        4.0,
        0.0,
        0.0,
        1.0,
        2.0,
        1.0,
        5.0,
        3.0,
        1.0,
        0.0,
        3.0,
        2.0,
        0.0,
        3.0,
        2.0,
        1.0,
        1.0,
        2.0,
        4.0,
        0.0,
        2.0,
        0.0,
        1.0,
        5.0,
        1.0,
        1.0
    ],
    [
        2.0,
        2.0,
        1.0,
        4.0,
        0.0,
        2.0,
        1.0,
        5.0,
        0.0,
        3.0,
        3.0,
        1.0,
        0.0,
        1.0,
        2.0,
        0.0,
        1.0,
        1.0,
        0.0,
        6.0,
        1.0,
        1.0,
        0.0,
        0.0,
        1.0,
        0.0,
        0.0,
        3.0,
        5.0,
        4.0
    ],
    [
        2.0,
        2.0,
        1.0,
        0.0,
        6.0,
        0.0,
        1.0,
        3.0,
        4.0,
        0.0,
        0.0,
        1.0,
        0.0,
        1.0,
        1.0,
        2.0,
        1.0,
        0.0,
        3.0,
        4.0,
        0.0,
        1.0,
        3.0,
        0.0,
        4.0,
        4.0,
        1.0,
        0.0,
        0.0,
        0.0
    ],
    [
        0.0,
        2.0,
        1.0,
        0.0,
        0.0,
        0.0,
        2.0,
        2.0,
        2.0,
        0.0,
        0.0,
        0.0,
        2.0,
        0.0,
        1.0,
        0.0,
        0.0,
        1.0,
        1.0,
        2.0,
        3.0,
        1.0,
        3.0,
        0.0,
        2.0,
        0.0,
        2.0,
        0.0,
        0.0,
        1.0
    ],
    [
        4.0,
        1.0,
        1.0,
        0.0,
        1.0,
        2.0,
        6.0,
        2.0,
        1.0,
        1.0,
        0.0,
        0.0,
        2.0,
        0.0,
        2.0,
        2.0,
        2.0,
        1.0,
        1.0,
        1.0,
        0.0,
        1.0,
        3.0,
        3.0,
        2.0,
        3.0,
        1.0,
        0.0,
        0.0,
        1.0
    ]
]

// Ideally, want to load the 'nba_matrix_by_year.json' list-of-list-of-list's and
// have it iterate through the outer list (which is the YEAR), and display the matrix
// contained within each one...

/*
var json = require('./nba_matrix_array.json');
var matrix = JSON.parse(json);
*/

/*
// Load as js obj
var json = (function() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "/nba_matrix_array.json",
        'dataType': "json",
        'sucess': function (data) {
            json = data;
        }

    });
    return json;
})();

var matrix = JSON.parse(json);
*/

/*
var matrix = [
    [0,4,3,2,5,2], //Black Widow
    [4,0,3,2,4,3], //Captain America
    [3,3,0,2,1,3], //Hawkeye
    [2,2,2,0,3,3], //The Hulk
    [5,4,3,3,0,2], //Iron Man
    [2,3,3,3,2,0], //Thor
];
*/

////////////////////////////////////////////////////////////
/////////// Create scale and layout functions //////////////
////////////////////////////////////////////////////////////

var colors = d3.scale.ordinal()
    .domain(d3.range(Names.length))
    .range(colors);

var chord = d3.layout.chord()
    .padding(.15)
    .sortChords(d3.descending)
    .matrix(matrix);
        
var arc = d3.svg.arc()
    .innerRadius(innerRadius*1.01)
    .outerRadius(outerRadius);

var path = d3.svg.chord()
    .radius(innerRadius);
    
////////////////////////////////////////////////////////////
////////////////////// Create SVG //////////////////////////
////////////////////////////////////////////////////////////
    
var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + (width/2 + margin.left) + "," + (height/2 + margin.top) + ")");
        
////////////////////////////////////////////////////////////
////////////////// Draw outer Arcs /////////////////////////
////////////////////////////////////////////////////////////

var outerArcs = svg.selectAll("g.group")
    .data(chord.groups)
    .enter().append("g")
    .attr("class", "group")
    .on("mouseover", fade(.1))
    .on("mouseout", fade(opacityDefault));

outerArcs.append("path")
    .style("fill", function(d) { return colors(d.index); })
    .attr("d", arc);
    
////////////////////////////////////////////////////////////
////////////////////// Append Names ////////////////////////
////////////////////////////////////////////////////////////

//Append the label names on the outside
outerArcs.append("text")
  .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
  .attr("dy", ".35em")
  .attr("class", "titles")
  .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
  .attr("transform", function(d) {
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
        + "translate(" + (outerRadius + 10) + ")"
        + (d.angle > Math.PI ? "rotate(180)" : "");
  })
  .text(function(d,i) { return Names[i]; });
    
////////////////////////////////////////////////////////////
////////////////// Draw inner chords ///////////////////////
////////////////////////////////////////////////////////////
  
svg.selectAll("path.chord")
    .data(chord.chords)
    .enter().append("path")
    .attr("class", "chord")
    .style("fill", function(d) { return colors(d.source.index); })
    .style("opacity", opacityDefault)
    .attr("d", path);

////////////////////////////////////////////////////////////
////////////////// Extra Functions /////////////////////////
////////////////////////////////////////////////////////////

//Returns an event handler for fading a given chord group.
function fade(opacity) {
  return function(d,i) {
    svg.selectAll("path.chord")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
        .transition()
        .style("opacity", opacity);
  };
} //fade