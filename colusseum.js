const arrayData = [
    {
        id: 1,
        imageUrl: "resources/images/appchallenge.png",
        heading: "Congressional App Challenge",
        description: "Competition",
        link: "https://www.congressionalappchallenge.us/",
        category: "competitions"
    },
    {
        id: 2,
        imageUrl: "resources/images/codecademy.png",
        heading: "Codecademy",
        description: "Course",
        link: "https://www.codecademy.com/",
        category: "course"
    },
    {
        id: 3,
        imageUrl: "resources/images/firstdive.png",
        heading: "First Dive",
        description: "Competition",
        link: "https://info.firstinspires.org/first-dive?utm_source=first-inspires&utm_medium=pop-up&utm_campaign=fir-registration-025#actions",
        category: "competitions"
    },
    {
        id: 4,
        imageUrl: "resources/images/iac.png",
        heading: "IAC",
        description: "Competition",
        link: "https://www.iacompetitions.com/our-competitions/#nationalacademicbowl",
        category: "competitions"
    },
    {
        id: 5,
        imageUrl: "resources/images/nationalstemchallenge.png",
        heading: "National Stem Challenge",
        description: "Competition",
        link: "https://nationalstemchallenge.com/2024",
        category: "competitions"
    },
    {
        id: 6,
        imageUrl: "resources/images/perennialmath.jpg",
        heading: "Perennial Math",
        description: "Competition",
        link: "https://perennialmath.com/",
        category: "competitions"
    },
    {
        id: 7,
        imageUrl: "resources/images/integem.png",
        heading: "Camp Integem",
        description: "Program",
        link: "https://camp.integem.com/?utm_source=teenlife",
        category: "programs"
    },
    {
        id: 8,
        imageUrl: "resources/images/standfordprecollege.png",
        heading: "Standford Pre-College Courses",
        description: "Course",
        link: "https://summerinstitutes.spcs.stanford.edu/courses/2024?time=1715500980950",
        category: "courses"
    },
    {
        id: 9,
        imageUrl: "resources/images/svhs.png",
        heading: "SVHS Summer Courses",
        description: "Course",
        link: "https://svhs.co/course-catalog/?gad_source=1&gclid=CjwKCAjw0YGyBhByEiwAQmBEWm783z4ONd8S22N3kMTmCOZOeSxvT6CnDI2zvQaopKzKhmHMibcC6BoCto8QAvD_BwE",
        category: "courses"
    },
    {
        id: 10,
        imageUrl: "resources/images/khan-academy.png",
        heading: "Khan Academy",
        description: "Course",
        link: "https://www.khanacademy.org/",
        category: "courses"
    },
    {
        id: 11,
        imageUrl: "resources/images/kodable.jpg",
        heading: "Kodable Education",
        description: "Game",
        link: "https://www.kodable.com/learn/online-stem-games-for-elementary-students",
        category: "games"
    },
    {
        id: 12,
        imageUrl: "resources/images/engineeringcom.jpg",
        heading: "Engineering.com",
        description: "Game",
        link: "https://www.engineering.com/viewAll?category=stem-games",
        category: "games"
    },
    {
        id: 13,
        imageUrl: "resources/images/smithsonian.png",
        heading: "Smithsonian Science Center",
        description: "Game",
        link: "https://ssec.si.edu/stemvisions-blog/educational-stem-games-students",
        category: "games"
    },
    {
        id: 14,
        imageUrl: "resources/images/mind.png",
        heading: "Mind Education",
        description: "Resource",
        link: "https://www.mindresearch.org/stem-resources",
        category: "resources"
    },
    {
        id: 15,
        imageUrl: "resources/images/classcentral.png",
        heading: "Class Central",
        description: "Resource",
        link: "https://www.classcentral.com/",
        category: "resources"
    },
    {
        id: 16,
        imageUrl: "resources/images/coursera.png",
        heading: "Coursera",
        description: "Resource",
        link: "https://www.coursera.org/courses?query=stem",
        category: "resources"
    },
    {
        id: 17,
        imageUrl: "resources/images/edx.png",
        heading: "Edx",
        description: "Resource",
        link: "https://www.edx.org/learn/stem",
        category: "resources"
    },
    {
        id: 18,
        imageUrl: "resources/images/dornslife.png",
        heading: "USC Dornsife",
        description: "Program",
        link: "https://dornsife.usc.edu/joint-educational-project/stem-education-programs/",
        category: "programs"
    },
    {
        id: 19,
        imageUrl: "resources/images/veritasai.jpg",
        heading: "Veritas AI",
        description: "Program",
        link: "https://www.veritasai.com/ai-scholars",
        category: "programs"
    },
    {
        id: 20,
        imageUrl: "resources/images/uclasummer.jpg",
        heading: "UCLA Summer Sessions",
        description: "Program",
        link: "https://summer.ucla.edu/program/applications-of-nanoscience-summer-institute/",
        category: "programs"
    },
    {
        id: 21,
        imageUrl: "resources/images/nasaspaceplace.jpg",
        heading: "NASA Space Place",
        description: "Game",
        link: "https://spaceplace.nasa.gov/menu/play/",
        category: "games"
    },
    {
        id: 22,
        imageUrl: "resources/images/brainpop.png",
        heading: "BrainPOP",
        description: "Game",
        link: "https://www.brainpop.com/games/",
        category: "games"
    },
    {
        id: 23,
        imageUrl: "resources/images/casewestern.png",
        heading: "Case Western STEM Programs",
        description: "Program",
        link: "https://case.precollegeprograms.org/stem?utm_term=stem%20summer%20programs&utm_campaign=Origins&utm_source=adwords&utm_medium=ppc&hsa_acc=9445349837&hsa_cam=12344142655&hsa_grp=122616577417&hsa_ad=533420137813&hsa_src=g&hsa_tgt=kwd-31478405035&hsa_kw=stem%20summer%20programs&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwupGyBhBBEiwA0UcqaPloEaBoolpzYwDppuoPFcwuUkxjkqcXgaiWrWNN5zJoKFu8TBb7YBoCtJgQAvD_BwE",
        category: "programs"
    },
    {
        id: 24,
        imageUrl: "resources/images/codeninjas.jpg",
        heading: "Code Ninjas",
        description: "Program",
        link: "https://www.codeninjas.com/ca-torrance",
        category: "programs"
    },
    {
        id: 25,
        imageUrl: "resources/images/concord.png",
        heading: "The Concord Consortium",
        description: "Resource",
        link: "https://learn.concord.org/",
        category: "resources"
    },
    {
        id: 26,
        imageUrl: "resources/images/riceuniversity.png",
        heading: "Rice STEM Programs",
        description: "Course",
        link: "https://precollege.rice.edu/stem-programs?gad_source=1&gclid=CjwKCAjwo6GyBhBwEiwAzQTmc26UWNbNW7XplYClAhmIUEO5OtjlzZm5EU3VI9qWFH65m5jgkTeeRRoCs84QAvD_BwE",
        category: "courses"
    },
];

const cardContainer = document.querySelector('.card-container');

const createCardHTML = (data) => {
    return `
        <div class="card" data-category="${data.category}">
            <img src="${data.imageUrl}" alt="${data.heading}">
            <div class="card-content">
                <h3>${data.heading}</h3>
                <p>${data.description}</p>
                <div class="button"><a href="${data.link}" target="_blank" class="btn">Website</a></div>
            </div>
        </div>
    `;
};

const functionCards = (filter = 'all') => {
    cardContainer.innerHTML = '';
    arrayData.filter(data => filter === 'all' || data.category === filter)
             .forEach(data => {
        cardContainer.innerHTML += createCardHTML(data);
    });
};

//filter based on search bar
function searchSTEM() {
    const input = document.getElementById('filterInput').value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
        const heading = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        if (heading.includes(input)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

//filter based on category
function filterSelection(filter) {
    document.querySelectorAll('.button-container .but').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    document.querySelectorAll('.card').forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => functionCards());
