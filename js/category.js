import { getAndShowCategoryCourses } from "./funcs/shared.js";

window.addEventListener('load', () => {
    getAndShowCategoryCourses().then(responseCourses => {
        let courses = [...responseCourses]
        let coursesShowType = 'row'
        const coursesShowTtypeIcons = document.querySelectorAll(".courses-top-bar__icon-parent")
        const categoryCoursesWrapper = document.querySelector('#category-courses-wrapper')
        // show category courses by row showtype
        if (courses.length) {
            courses.map(course => {
                categoryCoursesWrapper.insertAdjacentHTML("beforeend", `


                        <div class="col-4">

                            <div class="course-box">

                                <a href="#">
                                    <img src=http://localhost:4000/courses/covers/${course.cover} alt="course img" class="course-box__img">
                                </a>

                                <div class="course-box__main">

                                    <a href="#" class="course-box__title">${course.name}</a>

                                    <div class="course-box__rating-teacher">

                                        <div class="course-box__teacher">
                                            <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                                            <a href="#" class="course-box__teacher-link">${course.creator}</a>
                                        </div>

                                        <div class="course-box__rating">
                                        ${Array(5 - course.courseAverageScore).fill(0).map(score => '<img src="images/svgs/star.svg" alt="rating" class="course-box__star">').join('')
                    }

                                        ${Array(course.courseAverageScore).fill(0).map(score => '<img src="images/svgs/star_fill.svg" alt="rating" class="course-box__star">').join('')
                    }
                                        </div>

                                    </div>

                                    <div class="course-box__status">

                                        <div class="course-box__users">
                                            <i class="fas fa-users course-box__users-icon"></i>
                                            <span class="course-box__users-text">${course.registers}</span>
                                        </div>

                                        <span class="course-box__price">${course.price == 0 ? "رایگان" : course.price.toLocaleString()}</span>

                                    </div>

                                </div>

                                <div class="course-box__footer">

                                    <a href="#" class="course-box__footer-link">
                                        مشاهده اطلاعات دوره
                                        <i class="fas fa-arrow-left course-box__footer-icon"></i>
                                    </a>

                                </div>

                            </div>

                        </div>


            ` )
            })
        } else {
            categoryCoursesWrapper.insertAdjacentHTML("beforeend", `
            <div class="alert alert-danger">هیچ دوره ای برای این دسته بندی وجود ندارد</div>
            `)
        }


        coursesShowTtypeIcons.forEach(coursesShowTtypeIcons => {
            coursesShowTtypeIcons.addEventListener('click', event => {
                coursesShowTtypeIcons.forEach(icon => icon.cllasList.remove('courses-top-bar__icon--active'))

                event.target.cllasList.add('courses-top-bar__icon--active')
            })
        })


    })
})