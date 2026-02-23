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

// delete item name
 function deletedCardName(name) {   
    if( name == 'Mobile First Crop' ) name = '.Mobile';
    else if( name == 'WebFlow Agency' ) name = '.WebFlow';
    else if( name == 'DataViz Solutions' ) name = '.DataViz';
    else if( name == 'CloudFirst Inc' ) name = '.CloudFirst';
    else if( name == 'Innovation Labs' ) name = '.Innovation';
    else if( name == 'MegaCorp Solutions' ) name = '.MegaCorp';
    else if( name == 'StartupXYZ' ) name = '.StartupXYZ';
    else if( name == 'TechCorp Industries' ) name = '.TechCorp';

    return name;
 }