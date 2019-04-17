const aboutButton = document.querySelector('.about-us-selected');
aboutButton.addEventListener('click', (event) => {
    event.preventDefault();
})
class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.title = attributes.title;
        this.github = attributes.github;
    }
}

//team members

const Sam = new Person ({
    'name': 'Sam Landsman',
    'title': 'Team Lead',
    'github': 'https://github.com/sam202020',
})
// console.log(Sam.github);
const Alan = new Person ({
    'name': 'Alan Perez',
    'title': 'Front End Architect',
    'github': 'https://github.com/alanperez'
})
const Tom = new Person ({
    'name': 'Thomas Hessburg',
    'title': 'Backend Architect',
    'github': 'https://github.com/TomHessburg'
})
const Vivek = new Person ({
    'name': 'Vivek Vishwanath',
    'title': 'Android Developer',
    'github': 'https://github.com/VivekV95'
})
const Hugo = new Person ({
    'name': 'Hugo Martínez',
    'title': 'User Interface Developer',
    'github': 'https://github.com/HuMart'
})
const Chris = new Person ({
    'name': 'Chris Petito',
    'title': 'User Interface Developer',
    'github': 'https://github.com/chrispetito'
})

//team array
const team = [Sam, Alan, Tom, Vivek, Hugo, Chris];


//names
const member = document.querySelectorAll('.member-name');
for (let i = 0; i < team.length; i++) {
    for (let i = 0; i < member.length; i ++) {
        member[i].innerHTML = team[i].name;
    }
}

//titles
const title = document.querySelectorAll('.member-title');
for (let i = 0; i < team.length; i++) {
    for (let i = 0; i < title.length; i ++) {
        title[i].innerHTML = team[i].title;
    }
}

//github handles
const github = document.querySelectorAll('.github-handle');
for (let i = 0; i < team.length; i++) {
    for (let i = 0; i < github.length; i ++) {
        github[i].href = team[i].github;
    }
}


//member images

document.querySelectorAll('.member-img')[0].src = "img/samlandsman.png";

document.querySelectorAll('.member-img')[1].src = "img/Tipsease favicon.png";

document.querySelectorAll('.member-img')[2].src = "img/52601962_2354627347882064_7750757111176364032_o.jpg";

document.querySelectorAll('.member-img')[3].src = "img/14591865_10205644882800564_918547281151035239_n.jpg";

document.querySelectorAll('.member-img')[4].src = "img/Tipsease favicon.png";

document.querySelectorAll('.member-img')[5].src = "img/chrispetito.png";

//view on github text
for (let i = 0; i < github.length; i++){
    github[i].innerHTML = 'View on Github';
}


//names

// let SamName = document.querySelectorAll('.member-name')[0]
// SamName.innerHTML = Sam.name;

// let AlanName = document.querySelectorAll('.member-name')[1]
// AlanName.innerHTML = Alan.name;

// let TomName = document.querySelectorAll('.member-name')[2]
// TomName.innerHTML = Tom.name;

// let VivekName = document.querySelectorAll('.member-name')[3]
// VivekName.innerHTML = Vivek.name;

// let HugoName = document.querySelectorAll('.member-name')[4]
// HugoName.innerHTML = Hugo.name;

// let ChrisName = document.querySelectorAll('.member-name')[5]
// ChrisName.innerHTML = Chris.name;

// //titles

// let SamTitle = document.querySelectorAll('.member-title')[0]
// SamTitle.innerHTML = Sam.title;

// let AlanTitle = document.querySelectorAll('.member-title')[1]
// AlanTitle.innerHTML = Alan.title;

// let TomTitle = document.querySelectorAll('.member-title')[2]
// TomTitle.innerHTML = Tom.title;

// let VivekTitle = document.querySelectorAll('.member-title')[3]
// VivekTitle.innerHTML = Vivek.title;

// let HugoTitle = document.querySelectorAll('.member-title')[4]
// HugoTitle.innerHTML = Hugo.title;

// let ChrisTitle = document.querySelectorAll('.member-title')[5]
// ChrisTitle.innerHTML = Chris.title;

// //github handles
// let SamGithub = document.querySelectorAll('.github-handle')[0]
// SamGithub.href = Sam.github;

// let AlanGithub = document.querySelectorAll('.github-handle')[1]
// AlanGithub.href = Alan.github;

// let TomGithub = document.querySelectorAll('.github-handle')[2]
// TomGithub.href = Tom.github;

// let VivekGithub = document.querySelectorAll('.github-handle')[3]
// VivekGithub.href = Vivek.github;

// let HugoGithub = document.querySelectorAll('.github-handle')[4]
// HugoGithub.href = Hugo.github;

// let ChrisGithub = document.querySelectorAll('.github-handle')[5]
// ChrisGithub.href = Chris.github;
