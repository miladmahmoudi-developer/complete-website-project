import { getAndShowCategoryCourses, insertCourseBoxHtmlTemplate } from "./funcs/shared.js";
import { searchInArray } from "./funcs/utils.js";

window.addEventListener('load', () => {
    getAndShowCategoryCourses().then(responseCourses => {
        let courses = [...responseCourses]

        let coursesShowType = 'row';

        const coursesShowTypeIcons = document.querySelectorAll('.courses-top-bar__icon-parent');

        const categoryCoursesWrapper = document.querySelector('#category-courses-wrapper');

        const coursesFiltringSelections = document.querySelectorAll('.courses-top-bar__selection-item')
        const selectionTitleElem = document.querySelector('.courses-top-bar__selection-title')

        const coursesSearchInput = document.querySelector('.courses-top-bar__input')






        // show category cources by row show type
        if (courses.length) {

            coursesShowType = 'row';
            insertCourseBoxHtmlTemplate(courses, coursesShowType, categoryCoursesWrapper)

        } else {

            categoryCoursesWrapper.insertAdjacentHTML('beforeend', `
            <div class="alert alert-danger">هیچ دوره ای برای این دسته بندی وجود ندارد</div>
            `)

        }
        // show category courses by row showtype (user selection)
        coursesShowTypeIcons.forEach(coursesShowTypeIcon => {
            coursesShowTypeIcon.addEventListener('click', event => {
                coursesShowTypeIcons.forEach(icon => icon.classList.remove('courses-top-bar__icon--active'))

                event.target.classList.add('courses-top-bar__icon--active')



                if (String(event.target.className).includes('row')) {
                    coursesShowType = 'row';
                    insertCourseBoxHtmlTemplate(courses, coursesShowType, categoryCoursesWrapper)

                } else {
                    coursesShowType = 'column';
                    insertCourseBoxHtmlTemplate(courses, coursesShowType, categoryCoursesWrapper)
                }
            })
        })



        // show category courses by user filtering method
        coursesFiltringSelections.forEach(coursesFiltringSelection => {
            coursesFiltringSelection.addEventListener('click', event => {

                coursesFiltringSelections.forEach(selectionElem => selectionElem.classList.remove('courses-top-bar__selection-item--active'));
                event.target.classList.add('courses-top-bar__selection-item--active');


                selectionTitleElem.innerHTML = '';
                selectionTitleElem.insertAdjacentHTML('beforeend', `
                    
                    ${event.target.innerHTML}
                    <i class="fas fa-angle-down courses-top-bar__selection-icon"></i>
                    `);

            })
        })


        // handle search in courses
        coursesSearchInput.addEventListener('input', event => {
            const showCourses = searchInArray([...responseCourses], 'name', event.target.value)


            if (showCourses.length) {
                insertCourseBoxHtmlTemplate(showCourses, coursesShowType, categoryCoursesWrapper)

            } else {

                categoryCoursesWrapper.innerHTML = "";
                categoryCoursesWrapper.insertAdjacentHTML('beforeend', `
            <div class="alert alert-danger">هیچ دوره ای برای جست و جو شما وجود ندارد</div>
            `)

            }


        })

    })
})