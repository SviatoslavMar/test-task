import glideSlider from "./module/glide";
import accordion from "./module/accordion";
import select from "./module/select";
import { counter } from "./module/counter";

glideSlider.mount();
accordion();
select();
counter();

const body = document.querySelector('body');
const btn = document.querySelector('.btn-open');
const close = document.querySelector('.popup-close');
const addClass = () => body.classList.add('body-modal');
const removeClass = () => body.classList.remove('body-modal');

btn.addEventListener('click', addClass);
close.addEventListener('click', removeClass);

function showdate() {
  let customerDate = document.querySelector('.date-input').value;
  let months = new Array();
  months[0] = "Jan";
  months[1] = "Feb";
  months[2] = "Mar";
  months[3] = "Apr";
  months[4] = "May";
  months[5] = "Jun";
  months[6] = "Jul";
  months[7] = "Aug";
  months[8] = "Sep";
  months[9] = "Oct";
  months[10] = "Nov";
  months[11] = "Dec";

  let date = new Date(customerDate);
  let month = months[date.getMonth()];
  let dateArr = customerDate.split("-");
  document.querySelector(".date-span").innerHTML = dateArr[2]+ " " + month + " " + dateArr[0];
}
const dateInput = document.querySelector('.date-input');
dateInput.addEventListener('change', showdate);

function mobileMenu() {
  const element = document.querySelector(".header-nav");
  element.classList.toggle("header-nav_mobile");
}

document.querySelector(".header-mobile-btn").addEventListener('click', mobileMenu);
