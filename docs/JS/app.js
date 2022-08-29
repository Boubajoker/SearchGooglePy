let date = new Date();
let nav = document.querySelector('nav');
let footer = document.querySelector('footer');

function dark_mode() {
    footer.style.background = 'rgb(15, 15, 15)';
    nav.style.background = 'rgb(15, 15, 15)';
    document.body.style.background = 'rgb(55, 55, 55)';
};

function light_mode() {
    footer.style.background = 'rgb(255, 255, 255)';
    nav.style.background = 'rgb(255, 255, 255)';
    document.body.style.background = 'rgb(255, 255, 255)';
};

if (date.getHours() >= 19) {
    this.dark_mode();
} else {
    this.light_mode();
};