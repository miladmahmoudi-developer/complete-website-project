// برای تکرار نکردن مدام کلمه document
const $ = document;

const landingTitle = $.querySelector('.landing__title');

window.addEventListener('load' , () => {
    let landingText = 'ما به هر قیمتی دوره آموزشی تولید نمی کنیم!';
    let typeIndex = 0;

    typeWriter(landingText , typeIndex);
})

// تابع بازگشتی که درون خودش صدا می شود و اجرا می شود
function typeWriter(text,index) {
    if (index < text.length) {
        landingTitle.innerHTML += text[index]
        index++
    }

    setTimeout(() => {
        typeWriter(text , index);
    },100);
}


// ------------------------------------------------------------------تکه کد بالا به عنوان کامپوننت افکت تایپ می تواند استفاده شود