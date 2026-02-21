
// to push interview & rejected card in array
let interviewList = [];
let rejectedList = [];

// get counting number from header 
let total = getElement("total");
let interview = getElement("interview");
let rejected = getElement("rejected")

// get all card in a node/array
let allCards = document.getElementById("allCards");

// get all button from Main section
const allBtn = getElement("main-all");
const interviewBtn = getElement("main-interview");
const rejectedBtn = getElement("main-rejected");

// set new counting number in heading section
function countTotal() {
    total.innerText = allCards.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}
countTotal();

// Toggle between main section buttons 
function toggleStyle(id) {
    // first remove default classes
    allBtn.classList.remove('bg-[#3B82F6]', 'text-white', 'hover:bg-blue-400');
    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white', 'hover:bg-blue-400');
    rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white', 'hover:bg-blue-400');
    
    // add a single default class
    allBtn.classList.add('bg-base-200', 'text-black');
    interviewBtn.classList.add('bg-base-200', 'text-black');
    rejectedBtn.classList.add('bg-base-200', 'text-black');

    // set clicked btn classes
    const selected = getElement(id);
    selected.classList.remove('bg-base-200', 'text-black')
    selected.classList.add('bg-[#3B82F6]', 'text-white', 'hover:bg-blue-400')

}