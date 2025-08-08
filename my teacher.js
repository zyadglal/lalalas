if (document.querySelector('.F-ahmed') && document.querySelector('.F-salah') && document.querySelector('.F-khaled') && document.querySelector('.F-mohamed') && document.querySelector('.Y-salah') && document.querySelector('.Y-ahmed')) {
    document.querySelector('.F-ahmed').addEventListener('click', function () {
        window.open("https://www.facebook.com/bashmohandesAE?locale=ar_AR", "_blank")
    })
    document.querySelector('.F-salah').addEventListener('click', function () {
        window.open("https://www.facebook.com/salah.bassthalk?locale=ar_AR", "_blank")
    })
    document.querySelector('.F-khaled').addEventListener('click', function () {
        window.open("https://www.facebook.com/profile.php?id=100064076050923&locale=ar_AR", "_blank")
    })
    document.querySelector('.F-mohamed').addEventListener('click', function () {
        window.open("https://www.facebook.com/Mr.AbdELMaaboud?locale=ar_AR", "_blank")
    })
    document.querySelector('.Y-salah').addEventListener('click', function () {
        window.open("https://www.youtube.com/@mohamedsalah.bassthalk/videos", "_blank")
    })
    document.querySelector('.Y-ahmed').addEventListener('click', function () {
        window.open("https://www.youtube.com/@BashmohandesAE", "_blank")
    })
    document.querySelector('.Y-khaled').addEventListener('click', function () {
        window.open("https://www.youtube.com/@khaledsakr8181", "_blank")
    })
    document.querySelector('.Y-mohamed').addEventListener('click', function () {
        window.open("https://www.youtube.com/@mr.abdelmaaboud", "_blank")
    })
    document.querySelector('.T-ahmed').addEventListener('click', function () {
        window.open("https://web.telegram.org/k/#@ahmedessamdx", "_blank")
    })
    document.querySelector('.T-ayman').addEventListener('click', function () {
        window.open("https://web.telegram.org/k/#6588738336", "_blank")
    })
    document.querySelector('.W-ayman').addEventListener('click', function () {
        window.open("https://web.whatsapp.com/", "_blank")
    })
    document.querySelector('.W-salah').addEventListener('click', function () {
        window.open("https://web.whatsapp.com/", "_blank")
    })
    document.querySelector('.I-salah').addEventListener('click', function () {
        window.open("https://www.instagram.com/mosalah.bassthalk/", "_blank")
    })
    document.querySelector('.I-mohamed').addEventListener('click', function () {
        window.open("https://www.instagram.com/mr.abdelmaaboud/", "_blank")
    })
    document.querySelector('.I-khaled').addEventListener('click', function () {
        window.open("https://www.instagram.com/mrkhaledsakr", "_blank")
    })
};
let isbar = true;
const bars = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.sidebar');
const dashboard = document.querySelector('.dashboard');

if (bars && sidebar && dashboard) {
    bars.addEventListener('click', function () {
        sidebar.classList.toggle('hide');
        sidebar.classList.toggle('slide');
        if (isbar) {
            dashboard.style.width = '84%';
            isbar = false;
        } else {
            dashboard.style.width = '100%';
            isbar = true;
        }
    });
}
if (localStorage.getItem("lessonsDone") === null) {
    localStorage.setItem("lessonsDone", 0);
} else {
    const numBox = document.getElementById("num");
    if (numBox) {
        numBox.innerHTML = `<i class="fa-solid fa-clock"></i>${localStorage.getItem("lessonsDone")}<br>Lessons Done`;
    }
}

// تحميل الصفحة: استرجاع الحالة القديمة
window.onload = function () {
    // 1- دروس
    const lessons = document.querySelectorAll('input[id="lessons"]');
    let lessonsCount = 0;
    lessons.forEach((checkbox, index) => {
        let savedState = localStorage.getItem(`lesson_${index}`);
        checkbox.checked = savedState === "true";
        if (checkbox.checked) lessonsCount++;
        checkbox.addEventListener('change', plus);
    });
    if (document.getElementById("num")) {
        document.getElementById("num").innerHTML = `<i class="fa-solid fa-clock"></i>${lessonsCount}<br>Lessons Done`;
    }
    localStorage.setItem("lessonsDone", lessonsCount);
    localStorage.setItem("lessons", lessons.length);

    // 2- الواجبات
    const homework = document.querySelectorAll('input[id="homework"]');
    let homeworkCount = 0;
    homework.forEach((checkbox, index) => {
        let savedState = localStorage.getItem(`homework_${index}`);
        checkbox.checked = savedState === "true";
        if (checkbox.checked) homeworkCount++;
        checkbox.addEventListener('change', homeworkFunc);
    });
    if (document.getElementById("homework-input")) {
        document.getElementById("homework-input").innerHTML = `<i class="fa-solid fa-clock"></i>${homeworkCount}<br>Homework Done`;
    }
    localStorage.setItem("homeworkDone", homeworkCount);
    localStorage.setItem("homework", homework.length);

    // 3- التقدم
    let savedProgress = localStorage.getItem("progress") || 0;
    if (document.getElementById("progress")) {
        document.getElementById("progress").innerHTML = `<i class="fa-solid fa-book"></i>${savedProgress}%<br>progress`;
    }
    updateProgress();
};

// دروس
function plus() {
    const checkboxes = document.querySelectorAll('input[id="lessons"]');
    let x = 0;
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            x++;
            localStorage.setItem(`lesson_${index}`, "true");
        } else {
            localStorage.setItem(`lesson_${index}`, "false");
        }
    });

    document.getElementById("num").innerHTML = `<i class="fa-solid fa-clock"></i>${x}<br>Lessons Done`;
    localStorage.setItem("lessonsDone", x);
    localStorage.setItem("lessons", checkboxes.length);
}

// واجبات
function homeworkFunc() {
    const checkboxes = document.querySelectorAll('input[id="homework"]');
    let x = 0;
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            x++;
            localStorage.setItem(`homework_${index}`, "true");
        } else {
            localStorage.setItem(`homework_${index}`, "false");
        }
    });

    document.getElementById("homework-input").innerHTML = `<i class="fa-solid fa-clock"></i>${x}<br>Homework Done`;
    localStorage.setItem("homeworkDone", x);
    localStorage.setItem("homework", checkboxes.length);
}

function updateProgress() {
    const lessons = document.querySelectorAll('input[id="lessons"]');
    const homework = document.querySelectorAll('input[id="homework"]');
    const total = lessons.length + homework.length;

    let completed = 0;

    lessons.forEach(ch => { if (ch.checked) completed++; });
    homework.forEach(ch => { if (ch.checked) completed++; });

    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
    if (document.getElementById("progress")) {
        document.getElementById("progress").innerHTML = `<i class="fa-solid fa-book"></i>${percent}%<br>progress`;
    }
    localStorage.setItem("progress", percent);
}
updateProgress();

function explore() {
    window.scrollTo({
        top: 1356,
        behavior: 'smooth'
    });
}


const addBtn = document.querySelector('.add-btn');
const input = document.querySelector('.task-input');
const taskContainer = document.getElementById('task-container');

if (input && addBtn) {
    input.onkeyup = function () {
        let task = input.value;
        if (task.length > 0) {
            addBtn.style.display = 'inline-block';
        } else {
            addBtn.style.display = 'none';
        }
    };

    let newTask = JSON.parse(localStorage.getItem("tasks")) || [];

    addBtn.onclick = function () {
        let task = input.value;
        newTask.push(task);
        input.value = '';
        addBtn.style.display = 'none';
        localStorage.setItem('tasks', JSON.stringify(newTask));
        display();

    }

    function display() {
        let table = '';
        const states = JSON.parse(localStorage.getItem('taskStates')) || [];
        // Pair each task with its checked state and index
        const paired = newTask.map((task, i) => ({
            task,
            checked: !!states[i],
            index: i
        }));
        // Sort: unchecked first, checked last
        paired.sort((a, b) => a.checked - b.checked);
        // Render in sorted order
        for (let i = 0; i < paired.length; i++) {
            const { task, checked, index } = paired[i];
            const checkedAttr = checked ? 'checked' : '';
            const doneClass = checked ? 'done' : '';
            table += `
        <div class="task ${doneClass}"><input type="checkbox" onclick="ChangeBgToGreen()" ${checkedAttr}>${task}<button onclick="deleteTask(${index})"><i class="fa-solid fa-trash">
        </i></button></div>`;
        }
        taskContainer.innerHTML = table;
        updateStats();
    }
    display();

    function deleteTask(i) {
        newTask.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(newTask));
        // Remove the corresponding state
        let states = JSON.parse(localStorage.getItem('taskStates')) || [];
        states.splice(i, 1);
        localStorage.setItem('taskStates', JSON.stringify(states));
        display();
    }

    function saveTaskStates() {
        const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
        const states = [];
        checkboxes.forEach(cb => {
            states.push(cb.checked);
        });
        localStorage.setItem('taskStates', JSON.stringify(states));
    }

    function ChangeBgToGreen() {
        const checkbox = event.target;
        const taskDiv = checkbox.closest('.task');
        taskDiv.classList.toggle('done', checkbox.checked);
        saveTaskStates();
        display();
    }

    function updateStats() {
        const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
        const total = checkboxes.length;
        let done = 0;


        checkboxes.forEach(cb => {
            if (cb.checked) { done++ };
        });



        const remaining = total - done;
        const progress = total === 0 ? 0 : Math.round((done / total) * 100);

        // تحديث الصناديق في الصفحة
        if (document.getElementById('total2')) {
            document.getElementById('total2').innerHTML = `<i class="fa-solid fa-list-check"></i>${remaining}<br>Tasks`;
        }
        if (document.getElementById('progres2s') && document.getElementById('total') && document.getElementById('comp') && document.getElementById('rem')) {
            document.getElementById('total').innerHTML = `<i class="fa-solid fa-bars-progress"></i>${total}<br>Total Tasks`;
            document.getElementById('comp').innerHTML = `<i class="fa-regular fa-square-check"></i>${done}<br>Completed`;
            document.getElementById('rem').innerHTML = `<i class="fa-regular fa-square"></i>${remaining}<br>Remaining`;
            document.getElementById('progres2s').innerHTML = `<i class="fa-solid fa-bars-progress"></i>${progress}%<br> progress`;
            display();
        }
    }
};




window.addEventListener('scroll', function () {
    const el1 = document.getElementById('smart_time');
    const el2 = document.getElementById('T-channels');
    const el3 = document.getElementById('element3');
    const el4 = document.getElementById('element4');
    const el5 = document.getElementById('element5');
    const el6 = document.getElementById('homework-input');
    const el7 = document.getElementById('num');
    const el8 = document.getElementById('element8');
    const el9 = document.getElementById('progress');
    const el10 = document.getElementById('element10');
    const el11 = document.getElementById('element11');
    const el12 = document.getElementById('element12');
    const el13 = document.getElementById('element13');
    const el14 = document.getElementById('element14');
    const el15 = document.getElementById('element15');
    const el16 = document.getElementById('total');
    const el17 = document.getElementById('comp');
    const el18 = document.getElementById('rem');
    const el19 = document.getElementById('progres2s');
    [el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16, el17, el18, el19].forEach(el => {
        if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 180) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        }
    });

});
// if(document.getElementById('body')){
// if (document.getElementById('body').offsetWidth > 750) {
//     view.onclick = function () {
//         window.scrollTo({
//             top: 1319,
//             behavior: 'smooth'
//         });
//     }
//     contacts.onclick = function () {
//         window.scrollTo({
//             top: 2317,
//             behavior: 'smooth'
//         });
//     }
//     time_table.onclick = function () {
//         window.scrollTo({
//             top: 1319,
//             behavior: 'smooth'
//         });
//     }
//     links.onclick = function () {
//         window.scrollTo({
//             top: 2317,
//             behavior: 'smooth'
//         });
//     }
//     channels.onclick = function () {
//         window.scrollTo({
//             top: 2582,
//             behavior: 'smooth'
//         });
//     }
//     tasks.onclick = function () {
//         window.scrollTo({
//             top: 3632,
//             behavior: 'smooth'
//         });
//     }
//     timetable.onclick = function () {
//         window.scrollTo({
//             top: 1701,
//             behavior: 'smooth'
//         });
//     }
//     h2ome.onclick = function () {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     }
//     t2imetable.onclick = function () {
//         window.scrollTo({
//             top: 1319,
//             behavior: 'smooth'
//         });
//     }
//     c2hannels.onclick = function () {
//         window.scrollTo({
//             top: 2582,
//             behavior: 'smooth'
//         });
//     }
//     t2asks.onclick = function () {
//         window.scrollTo({
//             top: 3632,
//             behavior: 'smooth'
//         });
//     }
// }else{
//     view.onclick = function () {
//         window.scrollTo({
//             top: 2441,
//             behavior: 'smooth'
//         });
//     }
//     contacts.onclick = function () {
//         window.scrollTo({
//             top: 3926,
//             behavior: 'smooth'
//         });
//     }
//     time_table.onclick = function () {
//         window.scrollTo({
//             top: 2409,
//             behavior: 'smooth'
//         });
//     }
//     links.onclick = function () {
//         window.scrollTo({
//             top: 3425,
//             behavior: 'smooth'
//         });
//     }
//     channels.onclick = function () {
//         window.scrollTo({
//             top: 4634,
//             behavior: 'smooth'
//         });
//     }
//     tasks.onclick = function () {
//         window.scrollTo({
//             top: 6373,
//             behavior: 'smooth'
//         });
//     }
//     timetable.onclick = function () {
//         window.scrollTo({
//             top: 3301,
//             behavior: 'smooth'
//         });
//     }
//     h2ome.onclick = function () {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     }
//     t2imetable.onclick = function () {
//         window.scrollTo({
//             top: 2376,
//             behavior: 'smooth'
//         });
//     }
//     c2hannels.onclick = function () {
//         window.scrollTo({
//             top: 3863,
//             behavior: 'smooth'
//         });
//     }
//     t2asks.onclick = function () {
//         window.scrollTo({
//             top: 6317,
//             behavior: 'smooth'
//         });
//     }
// }}



if (document.getElementById('title').innerText == 'Timetable') {
    document.addEventListener('DOMContentLoaded', function () {
        //     // Chain menu logic
        const updateBtn = document.querySelector('.update');
        const options = document.getElementById('options');
        const displayBtn = document.querySelector('.display');
        const subjectBtn = document.querySelector('.Subject');
        const subjectContainer = document.querySelector('.subject-container');
        const displayContainer = document.querySelector('.display-container');
        const displayOptions = document.querySelector('.display-options');
        const subjectOptions = document.querySelector('.Subject-options');
        const addBtn = document.querySelector('.Add');
        const addSubject = document.querySelector('.add-subject');
        const deleteBtn = document.querySelector('.Delete');
        const deleteSubject = document.querySelector('.delete-subject');
        const lessonBtn = document.querySelector('.Lesson');
        const lessonOptions = document.querySelector('.Lesson-options');
        const homeworkBtn = document.querySelector('.Homework');
        const homeworkOptions = document.querySelector('.Homework-options');
        const linkBtn = document.querySelector('.Link');
        const AddBtn = document.querySelector('.add-sub');
        const linkPage = document.querySelector('.link-page');
        //     const listBtn = document.querySelector('.list');
        //     const gridBtn = document.querySelector('.grid');
        //     const table = document.querySelector('.timetable-table');

        //     // Show options when Edit Timetable is clicked
        updateBtn.addEventListener('click', function () {
            if (!displayContainer.classList.contains('visible') && !subjectContainer.classList.contains('visible')) {
                displayContainer.classList.toggle('visible');
                console.log('clicked dis');
                subjectContainer.classList.toggle('visible');
                console.log('clicked sub');
            } else {
                displayContainer.classList.remove('visible');
                console.log('clicked dis');
                subjectContainer.classList.remove('visible');
                console.log('clicked sub');
                displayOptions.classList.remove('visible');
                subjectOptions.classList.remove('visible');

            }
        });

        //     // Show display options
        displayBtn.addEventListener('click', function () {
            console.log('jsajdjsa');
            displayOptions.classList.toggle('visible');
            console.log('sub done');
            subjectContainer.classList.toggle('visible');


        });

        //     // Show subject options
        subjectBtn.addEventListener('click', function () {
            subjectOptions.classList.toggle('visible');
            displayContainer.classList.toggle('visible');

        });

        //     // Show/hide Add Subject
        addBtn.addEventListener('click', function () {
            addSubject.classList.toggle('visible');
            deleteSubject.classList.add('visible');
            lessonOptions.classList.add('visibie');
            homeworkOptions.classList.add('hide');
            linkPage.classList.add('hide');
        });







        //     // Show/hide Delete Subject
        //     deleteBtn.addEventListener('click', function () {
        //         deleteSubject.classList.toggle('hide');
        //         addSubject.classList.add('hide');
        //         lessonOptions.classList.add('hide');
        //         homeworkOptions.classList.add('hide');
        //         linkPage.classList.add('hide');
        //     });

        //     // Show/hide Lesson Day
        //     lessonBtn.addEventListener('click', function () {
        //         lessonOptions.classList.toggle('hide');
        //         addSubject.classList.add('hide');
        //         deleteSubject.classList.add('hide');
        //         homeworkOptions.classList.add('hide');
        //         linkPage.classList.add('hide');
        //     });

        //     // Show/hide Homework Day
        //     homeworkBtn.addEventListener('click', function () {
        //         homeworkOptions.classList.toggle('hide');
        //         addSubject.classList.add('hide');
        //         deleteSubject.classList.add('hide');
        //         lessonOptions.classList.add('hide');
        //         linkPage.classList.add('hide');
        //     });

        //     // Show/hide Link
        //     linkBtn.addEventListener('click', function () {
        //         linkPage.classList.toggle('hide');
        //         addSubject.classList.add('hide');
        //         deleteSubject.classList.add('hide');
        //         lessonOptions.classList.add('hide');
        //         homeworkOptions.classList.add('hide');
        //     });

        //     // Display: List view (default)
        //     listBtn.addEventListener('click', function () {
        //         table.classList.add('list-view');
        //         table.classList.remove('grid-view');
        //     });

        //     // Display: Grid view
        //     gridBtn.addEventListener('click', function () {
        //         table.classList.add('grid-view');
        //         table.classList.remove('list-view');
        //     });

        //     // Set default view to list
        //     table.classList.add('list-view');
    });


    const AddBtn = document.querySelector('.add-sub');
    const addSubject = document.querySelector('.add-subject');


    let new_subject = JSON.parse(localStorage.getItem('new_subject')) || [];


    AddBtn.addEventListener('click', function () {
        console.log('add click')
        addSubject.classList.toggle('visible');

        let subject_info = {
            "subject": document.getElementById('subject').value,
            "teacher": document.getElementById('teacher').value,
            "day": document.getElementById('day').value,
            "lesson": document.getElementById('lesson').value,
            "homework": document.getElementById('homewor2k').value,
            "link": document.getElementById('link').value,
            "color": document.getElementById('color').value,
        }
        new_subject.push(subject_info);
        localStorage.setItem('new_subject', JSON.stringify(new_subject));
        console.log(new_subject);
        display_list();

    });

    function onHoldSubject(index) {
        // Your custom logic here
        new_subject.splice(index, 1);
        localStorage.setItem('new_subject', JSON.stringify(new_subject));
        // Remove the corresponding state
        display_list();
        updateStats();
        display();
        alert(`Subject: ${new_subject[index].subject} deleted`);
    }

    // In your display_list function, add event listeners after rendering:
    function display_list() {
        let table = `<tr>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Lesson Day</th>
                <th>Homework Day</th>
                <th>Link</th>
                <th>Lesson</th>
                <th>Homework</th>
            </tr>`;
        for (let i = 0; i < new_subject.length; i++) {
            table += `
        <tr>
            <td>
                <h5 id="subject-h5-${i}" style="color: ${new_subject[i].color};background-color: ${new_subject[i].color}40;display: inline-block;padding: 10px;text-align: center;border-radius: 25px;font-size: 14px;">${new_subject[i].subject}</h5>
            </td>
            <td>${new_subject[i].teacher}</td>
            <td>${new_subject[i].day}<br>${new_subject[i].lesson}</td>
            <td>${new_subject[i].homework}</td>
            <td><a href="${new_subject[i].link}" class="join" target="_blank"><i
                        class="fa-solid fa-up-right-from-square"></i> Join</a></td>
            <td><input type="checkbox" id="lessons" onclick="plus(), updateProgress()"></td>
            <td><input type="checkbox" id="homework" onclick="homeworkFunc(), updateProgress()"></td>
        </tr>
        `;
        }
        document.getElementById('table_sub').innerHTML = table;

        // Add hold event listeners
        for (let i = 0; i < new_subject.length; i++) {
            const h5 = document.getElementById(`subject-h5-${i}`);
            let holdTimer;
            h5.addEventListener('mousedown', function () {
                holdTimer = setTimeout(() => onHoldSubject(i), 1000);
            });
            h5.addEventListener('mouseup', function () {
                clearTimeout(holdTimer);
            });
            h5.addEventListener('mouseleave', function () {
                clearTimeout(holdTimer);
            });
            // For touch devices
            h5.addEventListener('touchstart', function () {
                holdTimer = setTimeout(() => onHoldSubject(i), 1000);
            });
            h5.addEventListener('touchend', function () {
                clearTimeout(holdTimer);
            });
            h5.addEventListener('touchcancel', function () {
                clearTimeout(holdTimer);
            });
        }
    }
    display_list();
    
    




}








document.getElementById('contacts').onclick = function () {
    window.location.href = 'project-contact/index.html';
};

document.getElementById('view').onclick = function () {
    window.location.href = 'project-timetable/index.html';
};

document.getElementById('links').onclick = function () {
    window.location.href = 'project-timetable/index.html';
};

document.getElementById('channels').onclick = function () {
    window.location.href = 'project-contact/index.html';
};

document.getElementById('tasks').onclick = function () {
    window.location.href = 'project-To-Do-list/index.html';
};

document.getElementById('timetable').onclick = function () {
    window.location.href = 'project-timetable/index.html';
};

document.getElementById('time_table').onclick = function () {
    window.location.href = 'project-timetable/index.html';
};













