// key board shortcut to comment selected block of code: ctrl+K+C and ctrl+K+U to uncomment

// in this module we'll learn about the implementation of basic data structures in javascript along
// with some basic algorithms

// knowledge of DS-algo is important for writing an efficient code

// arrays
// array can be used to store different types of elements like strings,boolean,numbers,etc
// code example

// var arr=['BMW',3500000,10000000,true];
// console.log(`${arr[0]} starts at ${arr[1]} and can range upto ${arr[2]} in India and this is ${arr[3]} not ${arr[0]==arr[3]}`)
// if(k=arr.length){
//     for(i=0;i<k;i++){
//         console.log(arr[i])
//     }
// }

//inserting all elements of an array to other at the back of the first array

var arr1=[1,69,'stringshit',true];
var arr2=[false,'its going into arr1',96];
arr2.forEach(element=>{
    arr1.push(element);
})

arr1.forEach(element=>{
    console.log(element);
})
// use arr1.unshift() to append at the front

// array.length is a property not function
// pop: returns the last element of array and removes it

// console.log(arr1.length);
// console.log(arr1.pop());
// console.log(arr1.length);

// use array.shift() to remove element from front

// arrar.splice(start, no. of elements to be deleted, item to be inserted(optional), item to be inserted(optional), item to be inserted(optional),...)
// removes the specified no. of elements to be deleted from the start and inserts in order the later parameters
// if you don't want to delete any element, put 0 as the second element

// console.log('\n')
// console.log(arr1.length);
// arr1.splice(1,3,'inserted item 1','inserted item 2')// will remove 3 elements from index=1 and insert 2 elements there
// console.log(arr1.length);
// console.log('\n\n')
// arr1.forEach(element=>{
//     console.log(element);
// })






// linked lists
// implementing a linked list in javascript

// class node
class Node{
    // constructor: we'll construct 2 most basic parts of a node of linked list, ie. element(information) and next(pointer)
    constructor(element){
        this.element=element;
        this.next= null;
    }
}
// class LinkedList
class LinkedList{
    // constructor: we'll construct 2 most basic parts of a linked list, ie. head and size
    constructor(){
        this.head=null;
        this.size=0;

    }
    // add(element)
    addElement=(value)=>{
        var node=new Node(value);
        var current;
        if(this.head==null)
            this.head=node;
        else{
            this.current=this.head;

            while(this.current.next){
                this.current=this.current.next;
            }
            this.current.next=node;
        }

        this.size++;
    }

    // insertAt(element, location)
    insertAt(index,value){
        // head is always at index 0 if not null
        var node= new Node(value);
        var current;
        var at=0;
        this.current=this.head;
        if(index<0 || index>this.size)
            console.log(`can't insert at ${index}`);
        else{
            while(index-at){
                this.current=this.current.next;
                this.at++;
            }
            var buff=this.current;
            this.current=node;
            node.next=buff;
            if(index==0)
                this.head=node;
        }
        this.size++;
    }


    // removeFrom(location)
    // removeElement(element)

    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList
}
var ll=new LinkedList();
ll.addElement('cat');
ll.addElement('dog');
ll.addElement('cow');
ll.addElement('mouse');
ll.insertAt(0,'bull');
console.log(ll.head);






// hash tables
