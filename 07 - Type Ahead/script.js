const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
// create an empty array which will capture all cities
const cities=[]
//fetch the data from the endpoint
fetch(endpoint)
  .then(bunch=>bunch.json())
  .then(data=>cities.push(...data))

  function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(){
  // 1. Get the matching cities using findMatches function
  const matchArray=findMatches(this.value,cities);
  // 2. Generate HTML for each matching city
  const html=matchArray.map(place=>{
    // 3. Create a regular expression for highlighting
    const regex= new RegExp(this.value, 'gi')
    // 4. Replace matched text with highlighted text in city and state names
    const cityName=place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    // 5. Create HTML for each city
    
    return    `<li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>`;
  }).join('');  // 6. Join HTML for all cities into a single string
  // 7. Insert the generated HTML into the 'suggestions' element
  suggestions.innerHTML=html
}

const searchInput=document.querySelector('.search');
const suggestions=document.querySelector('.suggestions');

searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup', displayMatches)