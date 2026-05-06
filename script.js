const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
 const imageMode = (color)=>{
    image1.src = `img/undraw_proud_coder_${color.toLowerCase()}.svg`;
    image2.src = `img/undraw_feeling_proud_${color.toLowerCase()}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color.toLowerCase()}.svg`;
 }

 const toggleDarkLightMode = (isDark) =>{
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent =isDark ?  'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : 
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
 }
// event listeer
function switchTheme(event){
    // console.log(event.target.checked)
    event.target.checked? (document.documentElement.setAttribute('data-theme', 'dark'),localStorage.setItem('theme', 'dark'), toggleDarkLightMode(true)): (document.documentElement.setAttribute('data-theme', 'light'),localStorage.setItem('theme', 'light'), localStorage.setItem('theme', 'light'), toggleDarkLightMode(false));
}

toggleSwitch.addEventListener('change', switchTheme);

// check locally stored theme
const currentTheme = localStorage.getItem('theme')

currentTheme? document.documentElement.setAttribute('data-theme', currentTheme): null;
currentTheme === 'dark'? (toggleSwitch.checked = true, toggleDarkLightMode(true)): null;
// ? localStorage.getItem('theme'): null;