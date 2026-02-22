// get Element by id
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

// set new counting number in heading section
function countTotal() {
    total.innerText = allCards.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}

// Show if Empty 
function emptySection() {
    allCards.classList.add("hidden");
    filterSection.classList.add("hidden");
    empty.classList.remove('hidden');
}
