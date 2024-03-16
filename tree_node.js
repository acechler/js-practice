class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(childNode) {
      this.children.push(childNode);
    }
  
    // Optional: You can remove the print method if you're not using it
    print(node = this, prefix = '') {
      console.log(prefix + node.value);
      node.children.forEach(childNode => {
        childNode.print(childNode, prefix + '  ');
      });
    }
}

