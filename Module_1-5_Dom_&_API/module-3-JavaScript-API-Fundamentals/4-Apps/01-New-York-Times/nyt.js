const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; 
const key = 'kbMbh9fAVcoR631mAbMvPZMJKnAkGlK6';
let url;

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';
let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e){
    e.preventDefault();
    //Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; 

    if(startDate.value !== ''){
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };

    if(endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };

    fetch(url)
        .then(function(result) {
            return result.json();
        }) .then(function(json) {
            displayResults(json);
        });
}

function displayResults(json) {
    let articles = json.response.docs;
    console.log(articles);
};

function nextPage(){
    console.log("Next button clicked");
}

function previousPage(){
    console.log("previous button clicked");
}