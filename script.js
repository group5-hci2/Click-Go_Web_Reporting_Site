function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

/* OPEN IMAGE */
function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!lightbox || !lightboxImg) return;

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;

    document.body.style.overflow = "hidden";
}

/* CLOSE IMAGE */
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");

    if (!lightbox) return;

    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
}

/* VIDEO */
const video = document.getElementById("gmeetVideo");
const playBtn = document.getElementById("playBtn");

/* sync UI only */
function updateButton() {
    if (!video || !playBtn) return;

    playBtn.style.display = video.paused ? "block" : "none";
}

/* click overlay ONLY toggles video */
if (video && playBtn) {
    playBtn.addEventListener("click", () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    video.addEventListener("play", updateButton);
    video.addEventListener("pause", updateButton);
    video.addEventListener("ended", updateButton);
}

/* DROPDOWN CLICK TOGGLE */
function toggleDropdown(event) {
    event.stopPropagation();

    const dropdown = document.getElementById("moreDropdown");
    if (dropdown) {
        dropdown.classList.toggle("show");
    }
}

/* CLOSE DROPDOWN WHEN CLICKING OUTSIDE */
window.addEventListener("click", function (event) {
    const dropdown = document.getElementById("moreDropdown");

    if (
        dropdown &&
        !event.target.closest(".dropdown")
    ) {
        dropdown.classList.remove("show");
    }
});

const sections = document.querySelectorAll("section.container");

window.addEventListener("scroll", () => {
    let current = 0;

    sections.forEach((sec, index) => {
        if (scrollY >= sec.offsetTop - 400) {
            current = index;
        }
    });

    sections.forEach((sec, index) => {
        const lines = sec.querySelectorAll(".step-line");

        lines.forEach((line, i) => {
            line.classList.remove("active");

            if (i === current) {
                line.classList.add("active");
            }
        });
    });
});

function openModal(person) {

    const modal = document.getElementById("modal");
    const name = document.getElementById("modal-name");
    const role = document.getElementById("modal-role");
    const list = document.getElementById("modal-text");

    const data = {
        analyn: {
            name: "Maria Analyn Cantor",
            role: "Member",
            contributions: [
                  "Acted as GMeet Observer during usability testing",
                  "Assisted in distribution of usability surveys",
                  "Helped in collecting responses from respondents",
            "Compiled PDF of completed Heuristic Evaluation Workbook",
            "Developed Reflections Page",
            "Assisted in Prototype Walkthrough",
            "Recorded observations during testing sessions",
            "Supported documentation validation and completeness"
            ]
        },
        joan: {
            name: "Joan Mae Palaypayon",
            role: "Group Leader",
            contributions: [
            "Created Google forms (SUS questionnaire distribution)",
            "Managed distribution of usability testing surveys",
              "Developed Results, Discussion, and Recommendation Page",
            "Organized Summary of Usability Testing Results section",
            "Analyzed key issues identified",
            "Interpreted findings and organized discussion",
            "Created video demonstration of the prototype",
            "Managed overall project structure and coordination",
            "Compiled final documentation outputs"
            ]
        },
        blesszy: {
            name: "Blesszy Joy Nabus",
            role: "Member",
            contributions: [
               "Developed Home Page",
            "Created Google Forms (assisted distribution and setup)",
            "Assisted in distribution of usability surveys",
            "Helped in collecting responses from respondents",
            "Handled Documentation section",
            "Created Prototype Walkthrough",
            "Assisted in page layout and content organization",
            "Supported content organization for project documentation"
            ]
        },
        greg: {
            name: "Jose Greg Picaso",
            role: "Member",
            contributions: [
               "Managed GMeet session timing and coordination",
               "Assisted in distribution of usability surveys",
               "Helped in collecting responses from respondents",
            "Developed Data Gathering Page",
            "Created Consent Form section",
            "Created Usability Testing Survey Instruments (SUS-based) section",
            "Collected and created Respondent Information section",
            "Assisted in organizing collected responses"
            ]
        },
        harold: {
            name: "Harold Hector Vale",
            role: "Member",
            contributions: [
                 "Recorded GMeet sessions (video and screenshots)",
                 "Assisted in distribution of usability surveys",
                 "Helped in collecting responses from respondents",
                 "Analyzied user feedback",
            "Created Recommendations for Improving the Prototype section",
            "Created Suggested Design Improvements section",
            "Developed Additional Findings Page",
            "Supported documentation of testing process"
            ]
        }
    };

    name.textContent = data[person].name.toUpperCase();
    role.textContent = data[person].role;

    list.innerHTML = "";

    data[person].contributions.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });

    modal.style.display = "flex";
    document.body.classList.add("modal-open");
}


/* CLOSE MODAL */
function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.body.classList.remove("modal-open");
}


/* EVENTS */
document.addEventListener("DOMContentLoaded", function () {

    const closeBtn = document.querySelector(".modal .close");

    closeBtn?.addEventListener("click", closeModal);

    const modal = document.getElementById("modal");

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});
