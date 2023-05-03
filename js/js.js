
    const home = document.getElementById('Home');
    const homTop = home.offsetTop;
    const services = document.getElementById('Services');
    const servicesTop = services.offsetTop;
    const about = document.getElementById('About');
    const aboutTop = about.offsetTop;
    const client = document.getElementById('Client');
    const clientTop = client.offsetTop;
    const contact = document.getElementById('Contact');
    const contactTop = contact.offsetTop;
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');
    var section4 = document.getElementById('section4');
    var section5 = document.getElementById('section5');
    window.onscroll = function () {
    Navstyle();
    };
    function Navstyle() {
    const back = document.querySelector('.hero');
    const nav = document.querySelector('.navbar.navbar-expand-lg.border');
    const brand = document.querySelector('.navbar-brand')
    if (window.scrollY > 100) {
        nav.classList.add("new");
        brand.classList.add("navbrand")
    } else {
        nav.classList.remove("new");
        brand.classList.remove("navbrand")
    }
    if (window.scrollY > 10) {
        back.classList.add("newhero")
    } else {
        back.classList.remove("newhero")
    }
}
// local storage
    const first =document.querySelector(".first");
    const last =document.querySelector(".last");
    const email =document.querySelector(".email");
    const subject =document.querySelector(".subject");
    const message = document.querySelector(".area")
    const data = JSON.parse(localStorage.getItem("form"))||[];
    const btn = document.querySelector(".btn");
    btn.addEventListener('click',()=>{
    const next ="The next new data --->"
    const formD = `firs name :${fname.value} last name : ${lname.value} email: ${email.value} subject:${subject.value} message:${message.value}`
    data.push(formD);
    data.push(next);

localStorage.setItem("form",JSON.stringify(data));
})




