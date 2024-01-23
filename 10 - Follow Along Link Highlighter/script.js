// Select the Elements (links in this case)
const links=document.querySelectorAll('a')
// crete span element to add for highligth and give a class to it 
const highlight=document.createElement('span') 
highlight.className='highlight'
// Add the class to the body of the document
document.body.appendChild(highlight)

// function to highlight the link
function highlightLink() {
  const linkCoords=this.getBoundingClientRect()
  //take coords of linkcoords
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };
  // Add the styles to the highlight element
  highlight.style.height=`${coords.height}px`
  highlight.style.width=`${coords.width}px`
  highlight.style.transform=`translate(${coords.left}px, ${coords.top}px)`
  ;

}
// addEventListener to each link for the function to operate
links.forEach(a=>a.addEventListener('mouseenter',highlightLink))