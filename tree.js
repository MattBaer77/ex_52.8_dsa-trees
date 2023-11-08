/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {

    let sum = 0;

    let toSumQueue = [this.root];

    while (toSumQueue.length) {

      let current = toSumQueue.shift();

      if (current) {

        sum = sum + current.val

        for (let child of current.children){
          toSumQueue.push(child)
        }

      }

    }

    return sum;
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

    let numOfEvens = 0;

    let toCheckQueue = [this.root];

    while (toCheckQueue.length) {

      let current = toCheckQueue.shift();

      if (current) {

        if(!(current.val % 2)) {

          numOfEvens++

        }

        for (let child of current.children){

          toCheckQueue.push(child)

        }

      }

    }

    return numOfEvens;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

    let numOfGreater = 0;

    let toCheckQueue = [this.root];

    while (toCheckQueue.length) {

      let current = toCheckQueue.shift();

      if (current) {

        if(current.val > lowerBound) {

          numOfGreater++

        }

        for (let child of current.children){

          toCheckQueue.push(child)

        }

      }

    }

    return numOfGreater;

  }

}

module.exports = { Tree, TreeNode };
