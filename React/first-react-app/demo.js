/**
 * sideeffect
 */

const list = [1, 2, 3];

//it does not have a sideeffect
function add(a, b) {
  return a + b;
}


//it has a side-effect
function addToArray(item) {
  let name = "abc";
  name = "efg";
  list.push(item)
}

/**
 * API call -> server, network communication, modify the DB
 */