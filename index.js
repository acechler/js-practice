
  
  // Creating the car tree
  const car = new TreeNode('Car');
  
  // Main components of the car
  const chassis = new TreeNode('Chassis');
  const engine = new TreeNode('Engine');
  const interior = new TreeNode('Interior');
  
  // Adding main components to the car
  car.addChild(chassis);
  car.addChild(engine);
  car.addChild(interior);
  
  // Sub-components of the chassis
  const wheels = new TreeNode('Wheels');
  const doors = new TreeNode('Doors');
  
  chassis.addChild(wheels);
  chassis.addChild(doors);
  
  // Sub-components of the engine
  const pistons = new TreeNode('Pistons');
  const fuelSystem = new TreeNode('Fuel System');
  
  engine.addChild(pistons);
  engine.addChild(fuelSystem);
  
  // Sub-components of the interior
  const seats = new TreeNode('Seats');
  const dashboard = new TreeNode('Dashboard');
  
  interior.addChild(seats);
  interior.addChild(dashboard);
  
  // Print the car components tree

  const wheels_element = document.createElement('div');
  const doors_element = document.createElement('div');
  const pistons_element = document.createElement('div');
  const fuel_system_element = document.createElement('div');
  const seat_element = document.createElement('div');
  const dashboard_element = document.createElement('div');

  
// Function to create DOM elements based on the TreeNode structure
function createDomFromTree(node, parentElement) {
    // Create a new div element for the current node
    let element = document.createElement('div');
    element.textContent = node.value;
    element.style.marginLeft = '20px'; // Indent child elements for better visualization
  
    // Append the current element to the parent element
    parentElement.appendChild(element);
  
    // Recursively create and append elements for each child node
    node.children.forEach(childNode => {
      createDomFromTree(childNode, element);
    });
}
  
  // Use the document's body as the initial parent element for the car node
  createDomFromTree(car, document.body);