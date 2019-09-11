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
  new people(1, 'Vishal1', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(1, 'Vishal2', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(1, 'Vishal2', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(1, 'Vishal', 'position' , 'https://placehold.it/500x500', 'description'),
  new people(1, 'Vishal1', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(1, 'Vishal2', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(1, 'Vishal2', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(1, 'Vishal', 'position' , 'https://placehold.it/500x500', 'description'),
  new people(1, 'Vishal1', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(1, 'Vishal2', 'position' ,'https://placehold.it/500x500', 'description'),
  new people(1, 'Vishal2', 'position' ,'https://placehold.it/500x500', 'description'),
];

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