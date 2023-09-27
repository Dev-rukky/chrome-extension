let leadsInput = [];
const inputElement = document.getElementById("input-el");
const saveInputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadList = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


if (leadsFromLocalStorage) {
    leadsInput = leadsFromLocalStorage;
    render(leadsInput);
}

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        leadsInput.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(leadsInput));
        render(leadsInput);
    });
});

const render = (leads) => {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }

    leadList.innerHTML = listItems;
};


deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear();
    leadsInput = [];
    render(leadsInput);
})


saveInputBtn.addEventListener("click", () => {
    leadsInput.push(inputElement.value);
    leadsInput.value = "";
    localStorage.setItem("myLeads", JSON.stringify(leadsInput));
    render(leadsInput);
});





