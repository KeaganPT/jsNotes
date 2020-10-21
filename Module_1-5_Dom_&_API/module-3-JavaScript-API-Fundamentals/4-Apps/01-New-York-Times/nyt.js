const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //created a const to hold the api web address
const key = 'kbMbh9fAVcoR631mAbMvPZMJKnAkGlK6'; //Stores key needed for the api into a variable
let url; //us declaring the variable url to use later

//SEARCH FORM
const searchTerm = document.querySelector('.search'); //storing the first element with the class "search"
const startDate = document.querySelector('.start-date'); //storing the start date box into a variable
const endDate = document.querySelector('.end-date'); //storing the end-date input tble into a variable
const searchForm = document.querySelector('form'); //storing the form into a variable
const submitBtn = document.querySelector('.submit'); //storing submit button into a variable

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next'); //storing next button that goes in the navbar
const previousBtn = document.querySelector('.prev'); // storing the previous button
const nav = document.querySelector('nav'); // storing the navbar

//RESULTS SECTION
const section = document.querySelector('section'); //storing the section into a variable

nav.style.display = 'none'; // changing CSS style of Nav to none
let pageNumber = 0; //setting the variable pageNumber to 0
console.log('PageNumber:', pageNumber); //console.log-ing to check page number
let displayNav = false; //declaring the variable display nav and setting it to false

searchForm.addEventListener('submit', fetchResults); //creating an event listener when the form is submitted by the button to do the callback function to retrieve fetch results
previousBtn.addEventListener('click', previousPage);//calling back the function previous page when the previous btn is clicked 
nextBtn.addEventListener('click', nextPage); //clicking the next btn will fire the call back function of next page

function fetchResults(e){ //declaring the function fetchResults and givng it the param of e
    e.preventDefault(); //e is in reference to the search, prevent default stops it from refreshing the page
    //Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //we initialize url inside of the function to give it the string we need for fetch
    console.log("URL:", url);

    if(startDate.value !== ''){ //if there is a start date run this
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value; //includes the start date into the search
    };

    if(endDate.value !== '') { //if there is a end date inputed run this
        url += '&end_date=' + endDate.value; //includes end date into the search
    };

    fetch(url) //this is teh fetch request using the url we made inside this function
        .then(function(result) { //get the results
            return result.json(); //convert the results into JSON
        }) .then(function(json) {   //function of the results in json
            displayResults(json); // display json results with a callback function
        });
}

function displayResults(json) { //creating displayResults(json)
    while (section.firstChild) { //while loop was made to delete the previous search results if there are any.
        section.removeChild(section.firstChild); //the remove child is what deletes the first search results.
    }

    let articles = json.response.docs; //declaring and initializing articles to be the search headlines
    
    if(articles.length === 10){ //
        nav.style.display = 'block'; //shws the nav display if 10 items are in the array
    } else {
        nav.style.display = 'none'; // hides the nav display if less than 10 items are in the array
    }

    if(articles.length === 0) { //checking if there are any results in the search
        console.log("No results");
    } else {                    // else run the for loop
       for(let i = 0; i < articles.length; i++) {   // for loop for the search results we find
           let article = document.createElement('article'); //creates the element article for html
           let heading = document.createElement('h2'); //creates an h2 tag for html
           let link = document.createElement('a'); //creates the anchor tag for html
           let img = document.createElement('img'); //creates an img tag for html
           let para = document.createElement('p'); //creates a paragraph tag for html
           let clearfix = document.createElement('div'); //creates a div for html

           let current = articles[i]; //set articles to the current index
           console.log("Current:", current);

            // if(articles.length === 10 && pageNumber > 0) { //checks if the page will have more than 10 results and page number is greater than 0
            //     nextBtn.style.display ="block"; //show next button
            //     previousBtn.style.display = "block" //show previous button
            // } else if(articles.length === 10 && pageNumber === 0){ //checks if there are more than 10 articles and that the page number is 0
            //     nextBtn.style.display = "block";
            //     previousBtn.style.display = "none";
            // } else if(!articles.length === 10 && pageNumber === 0){ //checks if there are not 10 or more items and page number is greater than 1
            //     nextBtn.stlye.display = "none";
            //     previousBtn.style.display = "block";
            // } else {
            //     nextBtn.style.display = "none";
            //     previousBtn.style.display = "none";
            // }

           link.href = current.web_url; // sets the articles link so you can click the result to take you to the article
           link.textContent = current.headline.main;    //shows headline and makes the headline link to article

           para.textContent = 'Keywords: '; //changes the text content to start with keywords so it shows up 'Keywords: <keywords of article>'

            for(let j =0; j < current.keywords.length; j++){ //for all the keywords to the articles[i]
                let span = document.createElement('span'); //creates span tag to store the content in (span is what puts spacing between each word).
                span.textContent += current.keywords[j].value + ' '; //sets and seperates the keywords for the span tag that will populate the page
                para.appendChild(span); //appends the span to the html so it populates
            }

            if(current.multimedia.length > 0) {  // if the article has an img
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url; //set the source for the img to the url from the object
                img.alt = current.headline.main; //sets alt tag to show waht the image is if it does not populate on the page
            }

            clearfix.setAttribute('class','clearfix'); //sets the div's class to clearfix
            
           article.appendChild(heading); //to make of the articles
           heading.appendChild(link); //sets the heading of the article to link to the article's webpage
           article.appendChild(img); //adds the img into the article if there is one
           article.appendChild(para); //adds all the keywords to the article
           article.appendChild(clearfix); //creates space between each article result
           section.appendChild(article); //sets the above made article to the section to keep the articles organized.

       }
    }
};

function nextPage(e){ //function for the next button to show the next 10 results
    pageNumber++; //increases the page number by 1
    fetchResults(e); //brings back the results of where we are now
    console.log("Page Number:", pageNumber);
}

function previousPage(e){ //function that takes the user back to the previous 10 results
    if(pageNumber > 0) { //if the page number is greater than 1
        pageNumber--; //subtract 1 from the page number
    } else { //otherwise
        return; //do nothing
    }
    fetchResults(e); //fetch the results of the current page number
    console.log("Page:", pageNumber);
}