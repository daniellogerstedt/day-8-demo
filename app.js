'use strict';

var form = document.getElementById('sample-form');
var table = document.getElementById('student-table');
var data = [];

function Student(first, last, status, future){
  this.first = first;
  this.last = last;
  this.enrolled = status;
  this.future_classes = future;
}
// pull form data into object constructor
function formData(event) {
  event.preventDefault();

  var first = event.target.firstname.value;
  var last = event.target.lastname.value;
  var status = event.target.enrolled.checked;
  var future = event.target.future.value;

  data.push(new Student(first, last, status, future));

  // create our table here

  buildTable();

  form.reset();
}

function buildTable() {
  var row;

  for (var i = 0; i < data.length; i++) {
    row = document.createElement('tr');
    row.innerHTML = '<td>' + data[i].first + '</td>' + '<td>' + data[i].last + '</td>' + '<td>' + data[i].enrolled + '</td>' + '<td>' + data[i].future_classes + '</td>';
  }

  table.appendChild(row);
}

form.addEventListener('submit', formData);
