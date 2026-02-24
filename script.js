
const allCount = document.getElementById("all");
const interviewCount = document.getElementById("interview");
const rejectedCount = document.getElementById("rejected");


const btnAll = document.getElementById("btn-all");
const btnInterviewTab = document.getElementById("btn-interview");
const btnRejectedTab = document.getElementById("btn-rejected");


const noJob = document.getElementById("no-job");
const cards = document.querySelectorAll(".job-card");


let currentTab = "all";


function setActiveTab(tabBtn) {

    btnAll.classList.remove("bg-blue-800", "text-white");
    btnInterviewTab.classList.remove("bg-green-800", "text-white");
    btnRejectedTab.classList.remove("bg-red-800", "text-white");

    btnAll.classList.add("bg-blue-800", "text-white");
    btnInterviewTab.classList.add("bg-green-300");
    btnRejectedTab.classList.add("bg-red-300");


    tabBtn.classList.add("text-white");
    if (tabBtn === btnAll) tabBtn.classList.add("bg-blue-800");
    if (tabBtn === btnInterviewTab) tabBtn.classList.add("bg-green-800");
    if (tabBtn === btnRejectedTab) tabBtn.classList.add("bg-red-800");
}

function updateDashboard() {
    let total = 0, interview = 0, rejected = 0;

    cards.forEach(function (card) {
        const status = card.getAttribute("data-status");
        if (card.parentNode) {
            total++;
            if (status === "interview") interview++;
            if (status === "rejected") rejected++;
        }
    });

    allCount.innerText = total;
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;


    if (currentTab === "all") showAll();
    if (currentTab === "interview") filterTab("interview");
    if (currentTab === "rejected") filterTab("rejected");
}


function showAll() {
    let visible = 0;
    cards.forEach(function (card) {
        if (card.parentNode) {
            card.style.display = "block";
            visible++;
        }
    });
    toggleNoJob(visible);
}

function filterTab(status) {
    let visible = 0;
    cards.forEach(function (card) {
        if (card.parentNode) {
            if (card.getAttribute("data-status") === status) {
                card.style.display = "block";
                visible++;
            } else {
                card.style.display = "none";
            }
        }
    });
    toggleNoJob(visible);
}

function toggleNoJob(visible) {
    if (visible === 0) noJob.classList.remove("hidden");
    else noJob.classList.add("hidden");
}


cards.forEach(function (card) {
    const interviewBtn = card.querySelector(".btn-interview");
    const rejectBtn = card.querySelector(".btn-rejected");
    const deleteBtn = card.querySelector(".btn-delete");
    const statusText = card.querySelector(".status");

    interviewBtn.addEventListener("click", function () {
        card.setAttribute("data-status", "interview");
        if (statusText) statusText.innerText = "Status: Interview";
        updateDashboard();
    });

    rejectBtn.addEventListener("click", function () {
        card.setAttribute("data-status", "rejected");
        if (statusText) statusText.innerText = "Status: Rejected";
        updateDashboard();
    });

    deleteBtn.addEventListener("click", function () {
        card.remove();
        updateDashboard();
    });
});


btnAll.addEventListener("click", function () {
    currentTab = "all";
    showAll();
    setActiveTab(btnAll);
});

btnInterviewTab.addEventListener("click", function () {
    currentTab = "interview";
    filterTab("interview");
    setActiveTab(btnInterviewTab);
});

btnRejectedTab.addEventListener("click", function () {
    currentTab = "rejected";
    filterTab("rejected");
    setActiveTab(btnRejectedTab);
});


updateDashboard();
setActiveTab(btnAll);