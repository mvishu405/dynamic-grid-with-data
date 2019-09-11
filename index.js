import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";


function people(id, name, title, imageLink, description){
  this.id = id;
  this.name = name;
  this.title = title;
  this.imageLink = imageLink;
  this.description = description;
}

const peopleArray = [
  new people(1, 'Vishal', 'position' , 'https://placehold.it/500x500', 'description'),
  new people(2, 'Vishal1', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(3, 'Vishal2', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(4, 'Vishal2', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(5, 'Vishal', 'position' , 'https://placehold.it/500x500', 'description'),
  new people(6, 'Vishal1', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(7, 'Vishal2', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(8, 'Vishal2', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(9, 'Vishal', 'position' , 'https://placehold.it/500x500', 'description'),
  new people(10, 'Vishal1 sec last', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(11, 'Vishal2 last', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(0, 'Vishaluyyuui', 'position' ,'https://placehold.it/500x500', 'description'),
];


peopleArray.sort((a, b) => {
  if(a.id < b.id)
  return 1;
  if(a.id > b.id)
  return -1;
  return 0;
});

const peopleUI = peopleArray.map((people) => {
  let peopleGrid;
  peopleGrid = `
  <div class="col-md-3">
    <div class="card">
      <div class="card-header">${people.name}</div>
      <div class="card-body">
        <img class="img-fluid" src="${people.imageLink}">
      </div>
      <div class="card-footer">${people.title}</div>
    </div> 
  </div>
  `;
  return peopleGrid;
});

let peopleContainer = document.getElementById('peopleContainer');
peopleContainer.innerHTML = peopleUI.join('');