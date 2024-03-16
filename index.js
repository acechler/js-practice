
// Creating the car tree and its components
const car = new TreeNode('Car');
const chassis = new TreeNode('Chassis');
const engine = new TreeNode('Engine');
const interior = new TreeNode('Interior');

car.addChild(chassis);
car.addChild(engine);
car.addChild(interior);

const wheels = new TreeNode('Wheels');
const doors = new TreeNode('Doors');
chassis.addChild(wheels);
chassis.addChild(doors);

const pistons = new TreeNode('Pistons');
const fuelSystem = new TreeNode('Fuel System');
engine.addChild(pistons);
engine.addChild(fuelSystem);

const seats = new TreeNode('Seats');
const dashboard = new TreeNode('Dashboard');
interior.addChild(seats);
interior.addChild(dashboard);

// Function to create DOM elements based on the TreeNode structure
function createDomFromTree(node, parentElement) {
  let element = document.createElement('div');
  element.textContent = node.value;
  element.style.marginLeft = '20px';

  parentElement.appendChild(element);

  node.children.forEach(childNode => {
    createDomFromTree(childNode, element);
  });
}

// Use the document's body as the initial parent element for the car node
document.addEventListener('DOMContentLoaded', () => {
  createDomFromTree(car, document.body);
});

