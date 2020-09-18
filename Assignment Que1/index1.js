// Create a  array containing five objects with properties { name, age , city , salary }
// A. Display all the objects in a table
// B. Create a search functionality for name and city
// C. Delete button to delete records
//  D. Data is not permanent

let cricketer = [
  {
    name: "Virat kohli",
    age: 40,
    city: "Delhi",
    salary: 50000,
  },
  {
    name: "Rohit shrma",
    age: 45,
    city: "Mumbai",
    salary: 43000,
  },
  {
    name: "Virendra Sehwag",
    age: 60,
    city: "Delhi",
    salary: 80000,
  },
  {
    name: "KL Rahul",
    age: 26,
    city: "Mumbai",
    salary: 65000,
  },
  {
    name: "M.S Dhoni",
    age: 26,
    city: "chennai",
    salary: 98000,
  },
];
function displayElement(array) {
  let tableData = "";

  array.forEach(function (cricket, index) {
    let currentData = `
    <tr><td>${index + 1}</td>
    <td>${cricket.name}</td>
    <td>${cricket.age}</td>
    <td>${cricket.city}</td>
    <td>${cricket.salary}</td>
    <td><button onclick='deletecricketer(${index})'>Delete</button></td>
    </tr>`;
    tableData += currentData;
  });
  document.getElementsByClassName("tdata")[0].innerHTML = tableData;
}

displayElement(cricketer);

function searchByName() {
  let searchValue = document.getElementById("searchName").value;
  let newarray = cricketer.filter(function (cricket) {
    return cricket.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });
  displayElement(newarray);
}
function searchByCity() {
  let searchValue = document.getElementById("searchCity").value;
  let newarray = cricketer.filter(function (cricket) {
    return cricket.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });
  displayElement(newarray);
}

function deletecricketer(index) {
  cricketer.splice(index, 1);
  displayElement(cricketer);
}
