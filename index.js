/* Home Page*/

function checkForBlank() {
if (document.getElementById('destination').value == "") {
    return false;
}
else if (document.getElementById('userEmail').value == "") {
    return false;
}
else (document.getElementById("button1").innerHTML = "Got it, thanks!")
}

/* Search Page*/
var listOfResults = document.getElementsByClassName('search_result');

function searchSubmit(e) {
    var searchValue = document.getElementById('searchBox').value;
    
    Array.from(listOfResults).map(
    function (item, index){

      if(item.dataset.countryname.toLowerCase().includes(searchValue)){
        listOfResults[index].style.display="block";
      }
      else {
      listOfResults[index].style.display="none";
    }
  }
  )
  
    e.preventDefault();

console.log('listOfResultsis:', listOfResults.length);
console.log('The search value is:', searchValue);
  }