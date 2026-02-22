
// to push interview & rejected card in array
let interviewList = [];
let rejectedList = [];
let currentStatus ='all';

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

// get main container
const mainContainer = getElement("main-container");

// get filter section
const filterSection = getElement("filter-section");


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
    currentStatus = id;
    selected.classList.remove('bg-base-200', 'text-black')
    selected.classList.add('bg-[#3B82F6]', 'text-white', 'hover:bg-blue-400')

    
    // toggle
    if( id === "main-interview" ) {
        allCards.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderInterview();
    }
    else if( id === "main-all" ) {
        allCards.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if( id === 'main-rejected' ) {
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }

}

mainContainer.addEventListener('click',function(event){

    // Interview
    if( event.target.classList.contains('btn1') ) {
        
        const parentNode = event.target.parentNode.parentNode;

        const Title = parentNode.querySelector('.card-title').innerText;
        const post = parentNode.querySelector('.card-post').innerText;
        const location = parentNode.querySelector('.card-location').innerText;
        const status = parentNode.querySelector('.card-status').innerText;
        const description = parentNode.querySelector('.discription').innerText;
        
        parentNode.querySelector('.card-status').innerText = 'Interview';

        const cardInfo ={
            Title,
            post,
            location,
            status:'Interview',
            description
        }
        
        
        const cardExist = interviewList.find(item=> item.Title == cardInfo.Title && item.post == cardInfo.post);
        
        if(!cardExist) {
            interviewList.push(cardInfo);
        }
        
        rejectedList = rejectedList.filter(item=> item.Title !== cardInfo.Title && item.post !== cardInfo.post);

        if( currentStatus === 'main-rejected' ) {
            renderRejected();
        }
        
        countTotal();
    }

    // Rejected 
    else if( event.target.classList.contains('btn2') ) {
        
        const parentNode = event.target.parentNode.parentNode;

        const Title = parentNode.querySelector('.card-title').innerText;
        const post = parentNode.querySelector('.card-post').innerText;
        const location = parentNode.querySelector('.card-location').innerText;
        const status = parentNode.querySelector('.card-status').innerText;
        const description = parentNode.querySelector('.discription').innerText;
        
        parentNode.querySelector('.card-status').innerText = 'Rejected';

        const cardInfo ={
            Title,
            post,
            location,
            status:'Rejected',
            description
        }
        
        
        const cardExist = rejectedList.find(item=> item.Title == cardInfo.Title && item.post == cardInfo.post);
        
        if(!cardExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item=> item.Title !== cardInfo.Title && item.post !== cardInfo.post)

        if( currentStatus ==='main-interview' ) {
            renderInterview();
        }
        
        countTotal();
    }
})

// Interview
function renderInterview() {
    filterSection.innerHTML = '';

    for (const interview of interviewList) {
        
        let div = document.createElement('div');
        div.className = 'card card-border bg-base-100 shadow flex flex-row';
        div.innerHTML =  `
        
                <div class="card-body space-y-3">
                    <h2 class="card-title text-[#323B49] font-bold">${interview.Title}</h2>
                    
                    <p class="card-post text-[#64748B]">${interview.post}</p>
                    <p class="card-location text-[#64748B]">${interview.location}</p>    
                    <p class="card-status text-[#323B49] bg-[#EEF4FF] py-2 px-3 font-bold w-28 rounded-md">${interview.status}</p>
                    <p class="discription">${interview.description}</p>
                    
                    <div class="card-actions">
                        <button class="btn btn1 font-bold text-green-500 border-2 border-green-500">INTERVIEW</button>
                        <button class="btn btn2 font-bold text-red-500 border-2 border-red-500">REJECTED</button>
                    </div>
                </div>
                
                <button class="btn w-10 h-10 m-8 bg-base-100 rounded-full"><i class="fa-regular fa-trash-can"></i></button>

        `;
        filterSection.appendChild(div);
    }
}

// Rejected
function renderRejected() {
    filterSection.innerHTML = '';

    for (const rejected of rejectedList) {
        
        let div = document.createElement('div');
        div.className = 'card card-border bg-base-100 shadow flex flex-row';
        div.innerHTML =  `
        
                <div class="card-body space-y-3">
                    <h2 class="card-title text-[#323B49] font-bold">${rejected.Title}</h2>
                    
                    <p class="card-post text-[#64748B]">${rejected.post}</p>
                    <p class="card-location text-[#64748B]">${rejected.location}</p>    
                    <p class="card-status text-[#323B49] bg-[#EEF4FF] py-2 px-3 font-bold w-28 rounded-md">${rejected.status}</p>
                    <p class="discription">${rejected.description}</p>
                    
                    <div class="card-actions">
                        <button class="btn btn1 font-bold text-green-500 border-2 border-green-500">INTERVIEW</button>
                        <button class="btn btn2 font-bold text-red-500 border-2 border-red-500">REJECTED</button>
                    </div>
                </div>
                
                <button class="btn w-10 h-10 m-8 bg-base-100 rounded-full"><i class="fa-regular fa-trash-can"></i></button>

        `;
        filterSection.appendChild(div);
    }
}