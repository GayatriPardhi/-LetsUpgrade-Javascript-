// Create a blank array and later on create a add bus functionality bus object contains {name, source, destination, number, passenger capacity} A
// . A form to add new bus
//  B. Display data in table format
//   C. Search by source and destination
//   D. Data should be stored permanently in localstorage
window.onload = function () {
  let busObj = [];
  if (localStorage.getItem("buses") == null) {
    localStorage.setItem("buses", JSON.stringify(busObj));
  }
};
function displayBus(mybus = undefined) {
  let tableData = "";
  let buses;
  if (mybus == undefined) {
    buses = JSON.parse(localStorage.getItem("buses"));
  } else {
    buses = mybus;
  }
  buses.forEach(function (bus, index) {
    let currentData = `
      <tr><td>${index + 1}</td>
      <td>${bus.name}</td>
      <td>${bus.source}</td>
      <td>${bus.destination}</td>
      <td>${bus.num}</td>
      <td>${bus.passanger}</td>
     
      </tr>`;
    tableData += currentData;
  });
  document.getElementsByClassName("tdata")[0].innerHTML = tableData;
}

displayBus();
function addBus(event) {
  event.preventDefault();
  let bus = {};
  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  let num = document.getElementById("num").value;
  let passanger = document.getElementById("passanger").value;
  bus.name = name;
  bus.source = source;
  bus.destination = destination;
  bus.num = Number(num);
  bus.passanger = Number(passanger);
  console.log(name, source, destination, num, passanger);
  let buses = JSON.parse(localStorage.getItem("buses"));
  buses.push(bus);

  localStorage.setItem("buses", JSON.stringify(buses));
  displayBus();
  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("num").value = "";
  document.getElementById("passanger").value = "";
}

function searchBySource() {
  let searchValue = document.getElementById("searchBySource").value;
  let buses = JSON.parse(localStorage.getItem("buses"));
  let newarray = buses.filter(function (bus) {
    return bus.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });
  displayBus(newarray);
}

function searchByDestination() {
  let searchValue = document.getElementById("searchByDestination").value;
  let buses = JSON.parse(localStorage.getItem("buses"));
  let newarray = buses.filter(function (bus) {
    return (
      bus.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });
  displayBus(newarray);
}
