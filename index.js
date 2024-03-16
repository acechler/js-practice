
const car = new TreeNode('Car');
const chassis = car.addChild('Chassis');
chassis.addChild('Wheels');
chassis.addChild('Doors');

const engine = car.addChild('Engine');
engine.addChild('Pistons');
engine.addChild('Fuel System');

const interior = car.addChild('Interior');
interior.addChild('Seats');
interior.addChild('Dashboard');
// Function to create and append DOM elements from the TreeNode structure
function createDomFromTree(node, parentElement = document.body, level = 0) {
  let element = document.createElement('div');
  element.textContent = `${'-'.repeat(level)}${node.value}`;
  parentElement.appendChild(element);

  node.children.forEach(childNode => createDomFromTree(childNode, parentElement, level + 1));
}

document.addEventListener('DOMContentLoaded', () => createDomFromTree(car));