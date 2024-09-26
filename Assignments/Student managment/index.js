// Parsing Students data from localStorage

let students = JSON.parse(localStorage.getItem("students")) || [];

// Adding EventListener on submit of form

document.getElementById("studentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if(editIndex<0){
    addStudent();
  } else {
    modifyStudent();
  }
  showStudentData();
});

const studentName = document.getElementById("name");
const studentID = document.getElementById("studentID");
const studentEmail = document.getElementById("email");
const studentContact = document.getElementById("contact");
let editIndex = -1;

const addStudent = () => {
  // Basic contact validation
    if(studentContact.value <5999999999 || studentContact.value > 9999999999){
        window.alert("Enter a valid 10 digit contact number.");
        return;
    }
  const newStudent = {
    name: studentName.value,
    id: studentID.value,
    email: studentEmail.value,
    contact: studentContact.value,
  };
  
  // Preventing duplicating of IDs
  for (student of students) {
      if (student.id == studentID.value) {
          window.alert("Student ID already present!");
          return;
        }
    }
    
    document.getElementById("studentForm").reset();
  
    students.push(newStudent);
  localStorage.setItem("students", JSON.stringify(students));
};

const deleteStudentDetails = (id) => {

    let newArray = students.filter((student)=>student.id!=id);

    students=newArray;

  localStorage.setItem("students", JSON.stringify(students));
  window.alert(`Student with id ${id} has been deleted.`)
  showStudentData();
};

const editStudentDetails = (name, id, email, contact, index) => {
    studentName.value = name;
    studentID.value = id;
    studentEmail.value = email;
    studentContact.value = contact;

    editIndex = index;

    studentID.disabled = true;
}

const modifyStudent = () => {
    students[editIndex].name = studentName.value;
  students[editIndex].email = studentEmail.value;
  students[editIndex].contact = studentContact.value;

  studentID.disabled = false;

  document.getElementById("studentForm").reset();

  editIndex = -1;

  localStorage.setItem("students", JSON.stringify(students));

  window.alert("Student details have been modified.")
}

const showStudentData = () => {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = null;
  if (students.length == 0) {
    // checking if data if present
    const container = document.getElementById("listOfStudents");
    const message = document.createElement("p");
    message.innerText = "No Data Present Currently.";
    message.style.color = "red";
    container.innerHTML = message.innerText;
    
  } else {
    // Appending data if student data is present
    students.forEach((student, index) => {
        const list = document.createElement("tr");
      const nameItem = document.createElement("td");
      const idItem = document.createElement("td");
      const emailItem = document.createElement("td");
      const contactItem = document.createElement("td");
      const actionButtons = document.createElement("td");
      const editItem = document.createElement("button");
      const deleteItem = document.createElement("button");

      nameItem.innerText = student.name;
      idItem.innerText = student.id;
      emailItem.innerText = student.email;
      contactItem.innerText = student.contact;
      editItem.innerHTML =
        '<i class="fa-solid fa-pencil" style="color: blue"></i>';
      deleteItem.innerHTML =
        '<i class="fa-solid fa-trash-can" style="color: red"></i>';
      editItem.setAttribute("class", "editButton");
      deleteItem.setAttribute("class", "deleteButton");
      actionButtons.append(editItem, deleteItem);
      list.append(nameItem, idItem, emailItem, contactItem, actionButtons);
      tableBody.appendChild(list);

      let editBtn = list.querySelector(".editButton");
      let deleteBtn = list.querySelector(".deleteButton");

      deleteBtn.addEventListener("click", () => deleteStudentDetails(student.id));

      editBtn.addEventListener("click", ()=>editStudentDetails(student.name, student.id, student.email, student.contact, index));
    });
  }
};
showStudentData();
