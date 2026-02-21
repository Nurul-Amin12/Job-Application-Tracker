
// to push interview & rejected card in array
let interviewList = [];
let rejectedList = [];

// get counting number from header 
let total = getElement("total");
let interview = getElement("interview");
let rejected = getElement("rejected")

// get all card in a node/array
let allCards = document.getElementById("allCards");


// set new counting number in heading section
function countTotal() {
    total.innerText = allCards.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}
countTotal();

