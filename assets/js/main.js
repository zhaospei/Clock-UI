const hour = document.getElementById("clock-hour"),
    min = document.getElementById("clock-min"),
    sec = document.getElementById("clock-sec")

const clock = () =>{
    let date = new Date() 

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6;
    
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    min.style.transform = `rotateZ(${mm}deg)`
    sec.style.transform = `rotateZ(${ss}deg)`
}

setInterval(clock, 1000)

const textHour = document.getElementById("text-hour"),
    textMin = document.getElementById("text-min"),
    textampm = document.getElementById("text-ampm"),
    textday = document.getElementById("date-day"),
    textmonth = document.getElementById("date-month"),
    textyear = document.getElementById("date-year")

const clocktext = () =>{
    let date = new Date() 

    let hh = date.getHours(),
        mm = date.getMinutes(),
        ampm,
        day = date.getDate(),
        mon = date.getMonth(),
        year = date.getFullYear()
    
    if (hh > 12){
        hh = hh - 12
        ampm = "PM"
    }
    else {
        ampm = "AM"
    }
    if (hh == 0) {hh = 12}
    if (hh < 10) {hh = `0` + hh}
    hh = hh + `:`;
    if (mm < 10) {mm = `0` + mm}
    let Mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    textHour.innerHTML = hh
    textMin.innerHTML = mm
    textampm.innerHTML = ampm
    textday.innerHTML = day
    textmonth.innerHTML = Mon[mon] + `,`
    textyear.innerHTML = year
}
setInterval(clocktext, 1000);

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

document.getElementById("color1").addEventListener("click",
function myFunction() {
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--hue-color', 240);
    document.getElementById("clchoose").style.display = "none";
})

document.getElementById("color2").addEventListener("click",
function myFunction() {
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--hue-color', 154);
    document.getElementById("clchoose").style.display = "none";
})

document.getElementById("color3").addEventListener("click",
function myFunction() {
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--hue-color', 312);
    document.getElementById("clchoose").style.display = "none";
})

document.getElementById("color4").addEventListener("click",
function myFunction() {
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--hue-color', 45);
    document.getElementById("clchoose").style.display = "none";

});

document.getElementById("change-color").addEventListener("click", 
    function myFunction(){
        var x = document.getElementById('clchoose');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    }
)