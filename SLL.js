class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// SLL
// - add (to head... append, prepend, tail)
// - remove (from head, by value... tail)
// - read (print all, count)
// - search (contains)
// - isEmpty

class SLL {
    constructor() {
        this.head = null;
    }

    // return true or false if this.head is null
    isEmpty() {
        return this.head == null;
    }

    // console log (print) the data of every node in the current list
    read() {
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
     }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() { 
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp;


    }

    // add given node to the head, if it exists. return void
    addToFront(node) { 
        node.next = this.head;
        this.head = node;
    }


    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it
}

// step 1: instantiate the SLL!
var unicornList = new SLL();
var node = new Node(20);
console.log(unicornList);
unicornList.addToFront(node);
unicornList.addToFront(new Node(30));
unicornList.addToFront(new Node(40));
unicornList.addToFront(new Node(50));
console.log(unicornList);
unicornList.read();
unicornList.removeFromFront();
console.log(unicornList);

// step 2: add a few nodes first!

// step 3: call the methods and test!