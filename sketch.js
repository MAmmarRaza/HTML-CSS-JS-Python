var tree;

function setup() {
  let array=[40,30,51,1,44,82,39,65]
  createCanvas(600, 400);
  background(51);
  tree = new Tree();
  // for (var i = 0; i < 10; i++) {
  //   tree.addValue(floor(random(0, 100)));
  // }
  for(var i=0;i<array.length;i++){
    tree.addValue(array[i])
}
  console.log(tree);
  tree.traverse();

  // var result = tree.search(10);
  // if (result == null) {
  //   console.log('not found');
  // } else {
  //   console.log(result);
  // }
}