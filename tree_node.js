class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(childNode) {
      this.children.push(childNode);
    }
  
    print(node = this, prefix = '') {
      console.log(prefix + node.value);
      node.children.forEach(childNode => {
        childNode.print(childNode, prefix + '  ');
      });
    }
  }