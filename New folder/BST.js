let root = null;
let lastState = null;
let msg = '';
let printOutput = '';
let canvasWidth;
let delay = 1000;

class Node {
  constructor(d, height, y, parent, loc) {
    if (d instanceof Node) { 
      this.data = d.data;
      this.left = d.left;
      this.right = d.right;
      this.parent = d.parent;
      this.loc = d.loc;
      this.height = d.height;
      this.x = d.x;
      this.y = d.y;
      this.highlighted = d.highlighted;
    }
    else {
      this.data = d;
      this.left = null;
      this.right = null;
      this.parent = parent;
      this.loc = loc;
      this.height = height;
      this.x = canvasWidth / 2;
      this.y = y;
      this.highlighted = false;
    }
  }
}


function treeClone(node) {
  if (node == null) return null;
  const neww = new Node(node);
  neww.left = treeClone(node.left);
  neww.right = treeClone(node.right);
  return neww;
}


function sleep(ms) {
  const start = Date.now();
  while (Date.now() < start + ms);
}


function unhighlightAll(node) {
  if (node !== null) {
    node.highlighted = false;
    unhighlightAll(node.left);
    unhighlightAll(node.right);
  }
}

function getHeight(node) {
  if (node == null) return 0;
  return node.height;
}


function search(curr, key) {
  if (!curr) {
    msg = 'Searching for ' + key + ' : (Element not found)';
    self.postMessage([root, msg, '']);
    return 0;
  }
  unhighlightAll(root);
  curr.highlighted = true;
  self.postMessage([root, msg, '']);
  if (key < curr.data) {
    msg = 'Searching for ' + key + ' : ' + key + ' < ' + curr.data + '. Looking at left subtree.';
    self.postMessage([root, msg, '']);
    sleep(delay);
    search(curr.left, key);
  }
  else if (key > curr.data) { 
    msg = 'Searching for ' + key + ' : ' + key + ' > ' + curr.data + '. Looking at right subtree.';
    self.postMessage([root, msg, '']);
    sleep(delay);
    search(curr.right, key);
  }
  else { 
    msg = 'Searching for ' + key + ' : ' + key + ' == ' + curr.data + '. Element found!';
    self.postMessage([root, msg, '']);
    sleep(delay);
  }
  return 0;
}


function pop(startingNode, key) {
  let node = startingNode;
  if (!node) { 
    msg = 'Searching for ' + key + ' : (Element not found)';
    self.postMessage([root, msg, '']);
    return null;
  }
  else {
    unhighlightAll(root);
    node.highlighted = true;
    self.postMessage([root, msg, '']);
    if (key < node.data) { 
      msg = 'Searching for ' + key + ' : ' + key + ' < ' + node.data + '. Looking at left subtree.';
      self.postMessage([root, msg, '']);
      sleep(delay);
      node.left = pop(node.left, key);
    }
    else if (key > node.data) { 
      msg = 'Searching for ' + key + ' : ' + key + ' > ' + node.data + '. Looking at right subtree.';
      self.postMessage([root, msg, '']);
      sleep(delay);
      node.right = pop(node.right, key);
    }
    else {
      msg = key + ' == ' + node.data + '. Found node to delete.'; 
      self.postMessage([root, msg, '']);
      sleep(delay);
      if (!node.left && !node.right) { 
        msg = 'Node to delete is a leaf. Delete it.';
        node = null;
        self.postMessage([root, msg, '']);
      }
      else if (!node.left) { 
        msg = 'Node to delete has no left child.\nSet parent of deleted node to right child of deleted node';
        self.postMessage([root, msg, '']);
        sleep(delay);
        
        for (let i = 0; i < 2; i += 1) {
          node.right.highlighted = true;
          if (node === root) node.highlighted = true;
          else node.parent.highlighted = true;
          self.postMessage([root, msg, '']);
          sleep(delay / 2);
          node.right.highlighted = false;
          if (node === root) node.highlighted = false;
          else node.parent.highlighted = false;
          self.postMessage([root, msg, '']);
          sleep(delay / 2);
        }
        
        let del = node;
        node.right.parent = node.parent;
        node.right.loc = node.loc;
        node = node.right;
        del = null;
        node.y -= 40;
      }
      else if (!node.right) { 
        msg = 'Node to delete has no right child.\nSet parent of deleted node to left child of deleted node';
        self.postMessage([root, msg, '']);
        sleep(delay);
        for (let i = 0; i < 2; i += 1) {
          node.left.highlighted = true;
          if (node === root) node.highlighted = true;
          else node.parent.highlighted = true;
          self.postMessage([root, msg, '']);
          sleep(delay / 2);
          node.left.highlighted = false;
          if (node === root) node.highlighted = false;
          else node.parent.highlighted = false;
          self.postMessage([root, msg, '']);
          sleep(delay / 2);
        }
        let del = node;
        node.left.parent = node.parent;
        node.left.loc = node.loc;
        node = node.left;
        del = null;
        node.y -= 40;
      }
      else { 
        msg = 'Node to delete has two children.\nFind largest node in left subtree.';
        self.postMessage([root, msg, '']);
        sleep(delay);
        let largestLeft = node.left;
        while (largestLeft.right) {
          unhighlightAll(root);
          largestLeft.highlighted = true;
          self.postMessage([root, msg, '']);
          sleep(delay / 2);
          largestLeft = largestLeft.right;
        }
        unhighlightAll(root);
        largestLeft.highlighted = true;
        msg = 'Largest node in left subtree is ' + largestLeft.data + '.\nCopy largest value of left subtree into node to delete.';
        self.postMessage([root, msg, '']);
        sleep(delay);

        for (let i = 0; i < 2; i += 1) {
          largestLeft.highlighted = true;
          node.highlighted = true;
          self.postMessage([root, msg, '']);
          sleep(delay / 2);
          largestLeft.highlighted = false;
          node.highlighted = false;
          self.postMessage([root, msg, '']);
          sleep(delay / 2);
        }
    
        node.data = largestLeft.data;
        unhighlightAll(root);
        self.postMessage([root, msg, '']);
        sleep(delay);
        msg = 'Recursively delete largest node in left subtree';
        self.postMessage([root, msg, '']);
        sleep(delay);
        node.left = pop(node.left, largestLeft.data);
      }
    }
  }
  if (node == null) return node;

  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1; 

  return node; 
}


function push(node, data, posY, parent, loc) {
  let curr = node;

  if (curr != null) { 
    curr.highlighted = true;
    self.postMessage([root, msg, '']);
  }

  if (curr == null) { 
    curr = new Node(data, 1, posY, parent, loc);
  }
  else if (data < curr.data) { 
    msg = data + ' < ' + curr.data + '. Looking at left subtree.';
    self.postMessage([root, msg, '']);
    sleep(delay);
    curr.highlighted = false;
    curr.left = push(curr.left, data, posY + 40, curr, 'left');
  }
  else if (data >= curr.data) { 
    msg = data + ' >= ' + curr.data + '. Looking at right subtree.';
    self.postMessage([root, msg, '']);
    sleep(delay);
    curr.highlighted = false;
    curr.right = push(curr.right, data, posY + 40, curr, 'right');
  }

  curr.height = Math.max(getHeight(curr.left), getHeight(curr.right)) + 1; 

  return curr; 
}


function updatePosition(node) {
  if (node != null) {
    if (node.loc === 'left') node.x = node.parent.x - ((2 ** (getHeight(node.right) + 1)) * 10);
    else if (node.loc === 'right') node.x = node.parent.x + ((2 ** (getHeight(node.left) + 1)) * 10);
    else if (node.loc === 'root') {
      node.x = canvasWidth / 2;
      node.y = 50;
    }
    if (node.parent != null) node.y = node.parent.y + 40;
    if (node.left != null) node.left.parent = node; 
    if (node.right != null) node.right.parent = node; 
    updatePosition(node.left);
    updatePosition(node.right);
  }
}






self.addEventListener('message', (event) => {
  switch (event.data[0]) {
    case 'Insert': {
      lastState = treeClone(root); 
      const value = event.data[1];
      canvasWidth = event.data[2];
      root = push(root, value, 50, null, 'root'); 
      updatePosition(root); 
      self.postMessage([root, msg, 'Finished']);
      break;
    }
    case 'Delete': {
      lastState = treeClone(root); 
      const key = event.data[1]; 
      if (root == null) {
        self.postMessage([root, 'Tree is empty', 'Finished']); 
      }
      else {
        root = pop(root, key); 
        updatePosition(root); 
        unhighlightAll(root); 
        self.postMessage([root, msg, 'Finished']); 
      }
      break;
    }
    case 'Find': {
      const key = event.data[1]; 
      if (root == null) {
        self.postMessage([root, 'Tree is empty', 'Finished']); 
      }
      else {
        search(root, key);
        unhighlightAll(root); 
        self.postMessage([root, msg, 'Finished']); 
      }
      break;
    }
    case 'Undo': {
      root = treeClone(lastState); 
      updatePosition(root);
      self.postMessage([root, '', 'Finished']); d
      break;
    }
    case 'Set Animation Speed': {
      delay = event.data[1]; 
      break;
    }
    default: break;
  }
});