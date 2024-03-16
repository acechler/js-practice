class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(value) {
      const childNode = new TreeNode(value);
      this.children.push(childNode);
      return childNode; 
    }
  }
  