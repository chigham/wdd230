const currentDate = new Date();
const currentDay = currentDate.getDay();

const banner = document.createElement("div");
const main = document.querySelector("main");


function meetingBanner() {
    if (currentDay >= 1 && currentDay <= 3) {
        banner.classList.add("meeting-banner");
        banner.textContent = "Attend the Chamber of Commerce Meet and Greet on Wednesday at 7:00 p.m.";
        main.insertBefore(banner, main.firstChild);
    };
};

meetingBanner();