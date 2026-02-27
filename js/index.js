


// برای تکرار نکردن مدام کلمه document
const $ = document;

const landingTitle = $.querySelector('.landing__title');

window.addEventListener('load', () => {
    let landingText = 'ما به هر قیمتی دوره آموزشی تولید نمی کنیم!';
    let typeIndex = 0;

    typeWriter(landingText, typeIndex);

})

// تابع بازگشتی که درون خودش صدا می شود و اجرا می شود
function typeWriter(text, index) {
    if (index < text.length) {
        landingTitle.innerHTML += text[index]
        index++
    }

    setTimeout(() => {
        typeWriter(text, index);
    }, 100);
}


// ------------------------------------------------------------------تکه کد بالا به عنوان کامپوننت افکت تایپ می تواند استفاده شود




window.addEventListener('load', () => {

    makeCounter(40, landingCoursesCount);
    makeCounter(3071, landingUsersCount);
    makeCounter(3320, landingMinutesCount);


    console.log(getAndShowAllCourses);
    
    // getAndShowAllCourses().then(data => {
    //     console.log(data);

    // })

})



const landingCoursesCount = $.querySelector('#courses-counter');
const landingUsersCount = $.querySelector('#users-counter');
const landingMinutesCount = $.querySelector('#minutes-counter');

function makeCounter(max, elem) {

    let counter = 0;

    const interval = setInterval(() => {

        if (counter == max) {
            clearInterval(interval);
        };
        elem.innerHTML = counter;
        counter++;


    }, 0.5)
}



// ------------------------------------------------------------------تکه کد بالا به عنوان کامپوننت کانتر یا شمارنده با گرفتن دو پارامتر می تواند استفاده شود







import { getAndShowAllCourses } from "./funcs/shared.js";

window.addEventListener('load', () => {

    
    getAndShowAllCourses().then(data => {
        console.log(data);

    })

})
