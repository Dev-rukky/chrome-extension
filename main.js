// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     renderLeads()
// })

// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         listItems += `
//             <li>
//                 <a target='_blank' href='${myLeads[i]}'>
//                     ${myLeads[i]}
//                 </a>
//             </li>
//         `
//     }
//     ulEl.innerHTML = listItems  
// }

let leadsInput = [];
const inputElement = document.getElementById("input-el");
const saveInputBtn = document.getElementById("input-btn");
const leadList = document.getElementById("ul-el");







const renderLeads = () => {
    let listItems = "";
    for (let i = 0; i < leadsInput.length; i++) {
        listItems += `
        <
        
        ` 
    }
};