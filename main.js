let leadsInput = [];
const inputElement = document.getElementById("input-el");
const saveInputBtn = document.getElementById("input-btn");
const leadList = document.getElementById("ul-el");



saveInputBtn.addEventListener("click", () => {
    leadsInput.push(inputElement.value);
    leadsInput.value = "";
    renderLeads()
});



const renderLeads = () => {
    let listItems = "";
    for (let i = 0; i < leadsInput.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leadsInput[i]}'>
                    ${leadsInput[i]}
                </a>
            </li>
        `
    }

    leadList.innerHTML = listItems;
};