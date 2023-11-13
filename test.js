let tables = document.querySelectorAll(".table:not(.teacher)")

let table_row0 = document.querySelectorAll(".row:nth-child(2) > .table")
let table_row1 = document.querySelectorAll(".row:nth-child(3) > .table")
let table_row2 = document.querySelectorAll(".row:nth-child(4) > .table")

// let save_button = document.querySelector("#save")

let student_list = document.querySelector("#students > .student-list")

let students = []

function get_name(node) {
    let text = node.textContent
    if (text !== "") {
        students.push(node.textContent)
    }
}

tables.forEach(get_name)

// let changes = false
// let current = students

// function checkChanges() {
//     if (current == students) {
//         save_button.classList.add("hidden")
//         return false
//     }
//     else {
//         save_button.classList.remove("hidden")
//         return true
//     }
// }

function randomize(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// function setStudents(student) {
//     let new_student = document.createElement('div')
//     new_student.classList.add('student')
//     new_student.innerText = student
//     student_list.appendChild(new_student)
// }

// students = []
// tables.forEach(get_name)
// students.forEach(setStudents)

function update_student_list() {
    students = []
    tables.forEach(get_name)

    while (student_list.firstChild) {
        student_list.removeChild(student_list.firstChild)
    }
    
    function appendStudents(student) {
        let new_student = document.createElement('div')
        new_student.classList.add('student')
        new_student.innerText = student
        student_list.appendChild(new_student)
    }    
    students.forEach(appendStudents)
}

update_student_list()


function verify(element) {
    if (element.textContent == "") {
        element.classList.add('empty')
    }
    else {
        element.classList.remove('empty')
    }
    // changes = checkChanges()
    update_student_list()
}

tables.forEach(verify)

// function save_placement() {
//     current = student_list
//     changes = false
//     localStorage.setItem()
// }

function shuffle(){
    update_student_list()

    students = []

    tables.forEach(get_name)

    randomize(students);


    let currentIndex = 0
    let iteration = 0

    tables.forEach((table) => {table.firstChild.textContent = ""})

    while (currentIndex < students.length) {
        table_row0[(2*iteration)].firstChild.textContent = students[currentIndex]
        currentIndex++

        if (currentIndex >= students.length) {break}
        table_row2[(2*iteration)+1].firstChild.textContent = students[currentIndex]
        currentIndex++

        if (currentIndex >= students.length) {break}
        table_row1[(3*iteration)].firstChild.textContent = students[currentIndex]
        currentIndex++

        if (currentIndex >= students.length) {break}
        table_row1[(3*iteration)+2].firstChild.textContent = students[currentIndex]
        currentIndex++

        if (currentIndex >= students.length) {break}
        table_row0[(2*iteration)+1].firstChild.textContent = students[currentIndex]
        currentIndex++

        if (currentIndex >= students.length) {break}
        table_row2[(2*iteration)].firstChild.textContent = students[currentIndex]
        currentIndex++

        if (currentIndex >= students.length) {break}
        table_row1[(3*iteration)+1].firstChild.textContent = students[currentIndex]
        currentIndex++

        if (currentIndex >= students.length) {break}
        iteration++
        
    }
    tables.forEach(verify)
    // changes = checkChanges()

}
