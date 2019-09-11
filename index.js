// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;




function people(id, name, title, imageLink, description){
  this.id = id;
  this.name = name;
  this.title = title;
  this.imageLink = imageLink;
  this.description = description;
}

const peopleArray = [
  new people(1, 'Vishal', 'image', 'description'),
  new people(1, 'Vishal1', 'image', 'description'),
  new people(1, 'Vishal2', 'image', 'description'),
  new people(1, 'Vishal3', 'image', 'description'),
  new people(1, 'Vishal4', 'image', 'description'),
];

const peopleUI = peopleArray.map((people) => {
  let peopleGrid;
  peopleGrid = `
  <div>
  <p>${people.name}</p>
  <p>${people.title}</p>
  <p>${people.imageLink}</p>
  </div>  
  `;
  return peopleGrid;
});

let peopleContainer = document.getElementById('peopleContainer');
peopleContainer.innerHTML = peopleUI;