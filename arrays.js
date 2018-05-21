var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
    
function addElementToBeginningOfArray(array,element) {
  var catsPajamas = [ 
    'Macy',
    'Paca',
    'Marissa'
    ];
  [...catsPajamas,
    'Kendall'];  
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  var timmyTim = [
    'Tim',
    'Timmy',
    'Lil Timmy T',
    'Lil Timmy Tim'
    ];
    timmyTim.unshift('Timothee');
}

function addElementToEndOfArray(array,element) {
  var musicians = [
    'Borns',
    'Drake',
    'Cardi B',
    'Muna',
    'Jack Antnoff'
    ];
    [...musicians, 
    'Wet'];
}

function destructivelyAddElementToEndOfArray(array,element) {
  var newYorkCity = [
    'Manhattan',
    'Bronx',
    'Brooklyn',
    'Queens',
    'Staten Island'
    ];
    newYorkCity.unshift('Harlem');
}

function accessElementInArray() {
  var movies = [
    'CMBYN',
    'Love, Simon',
    'Breakfast Club',
    '10 Things I Hate About You',
    'Funny Face',
    'Breakfast At Tiffanys'
    ];
    movies[4];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var bands = [
    'Bleachers',
    'Nirvana',
    'Pink Floyd',
    'Taylor Swift'
    ];
    return bands;
}

function removeElementFromBeginningOfArray(array) {
  var words = [
    'decaf',
    'here',
    'wild heart',
    'cute'
    ]
    
    return words.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  
}