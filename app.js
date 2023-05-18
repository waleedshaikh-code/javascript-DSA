// Data Traversing in array

// let data = [9,45,2,8,12,31,12,72,55,62]
// for (let i = 0; i< data.length; i++) {

//   document.write(`Array ${i} is ${data[i]} <br>`);
//     }

// Data Accessing

// let data = [9,45,2,8,12,31,12,72,55,62]
// let x = 3;
// document.write(data[x]);

//Data Accessing from button with function with validation too

// let data = [9, 45, 2, 8, 12, 31, 12, 72, 55, 62];

// function getElement() {
//   let el = document.getElementById("element").value;
//   if (el < data.length && typeof parseInt==='number' && el>= 0) {
//     alert(data[el]);
//   } else {
//     alert("Please input valid  number");
//   }
// }

// Insert element in array Data Structure

// let data = [9, 45, 2, 8, 12, 31, 12, 72, 55, 62];

// let newEl = 20

// let position = 0
// console.warn(data)

// for(let i=data.length-1;i>=0;i--)
// {
//     if(i>=position){
//         data[i+1]=data[i]
//         if(i==position){
//             data[i]=newEl
//         }
//     }
// }
// console.warn(data)

// by function
// function insertEl() {
//   let data = [9, 45, 2, 8, 12, 31, 12, 72, 55, 62];
//   let newEl = document.getElementById('newEl').value
//   newEl = parseInt[newEl]

//   let position = document.getElementById('position').value
//   console.warn(data);

//   for (let i = data.length - 1; i >= 0; i--) {
//     if (i >= position) {
//       data[i + 1] = data[i];
//       if (i == position) {
//         data[i] = newEl;
//       }
//     }
//   }
//   console.warn(data)
// }

// by splice inserting data
//   let item = [9, 45, 2, 8, 12, 31, 12, 72, 55, 62];
//   item.splice(2,1,1000)
//   console.warn(item)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// var list = fruits.shift()
// console.log(fruits)

// DATA STRUCTURES

// const arr = [1, 2, 3,5,6,7,8]

// const three = arr.indexOf(3)

// console.log(arr[three-1])
// console.log(arr[three+1])

// arr.push(9)
// console.log(arr)

// Arrays
// An array is a collection of items stored at contiguous memory locations.
// Each item can be accessed through its index (position) number. Arrays always start at index 0, so in an array of 4 elements we could access the 3rd element using the index number 2.

// const arr = ['a', 'b', 'c', 'd']
// console.log(arr[2])

// The length property of an array is defined as the number of elements it contains. If the array contains 4 elements, we can say the array has a length of 4.

// const arr = ['a', 'b', 'c', 'd']
// console.log(arr.length)

// var fruits = ["Banana", "Orange", "Apple", "Mango",'hassan'];
// fruits.splice(4,0,'waleed')
// // At position 4(insert),0(delete elements quantity), then the value you wanted to insert in position 4
// console.log(fruits);

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits)
// var items = fruits.slice(2,4)
// console.log(items)

// let arr = [3, 2, 8, 4, 5, 34, 56, 12, 27];

// function insertionSort(array){
//   for (let i = 1; i <array.length; i++) {
//     for (let j = i; j>0; j--) {
//       if (array[j] < array[j-1]) {
//         [array[j], array[j-1]] = [array[j-1], array[j]];
//       }
//     }
//   }
//   return array;
// }

// console.log(insertionSort(arr));

// let stack = [1,2,3,4,5]
// stack.push(6)
// console.log(stack)
// stack.push(7)
// console.log(stack)
// stack.push(8)
// console.log(stack)
// stack.push(9)
// console.log(stack)
// stack.push(10)
// console.log(stack)

// console.log('******************')

// console.log(stack.pop())
// console.log(stack)
// console.log(stack.pop())
// console.log(stack)
// console.log(stack.pop())
// console.log(stack)
// console.log(stack.psop())
// console.log(stack)
// console.log(stack.pop())
// console.log(stack)

// function reverse(str) {
//   let stack = [];
//   // push letters into stack
//   for (let i = 0; i < str.length; i++) {
//     stack.push(str[i]);
//   }

//   let reverseStr = "";

//   while (stack.length > 0) {
//     reverseStr += stack.pop();
//   }
//   return reverseStr;
// }

// let message = 'waleed'

// let reverseMsg = reverse(message)

// console.log(message)
// console.log(reverseMsg)

// const isPlindrome = message == reverseMsg ?

// 'Palindrome' : 'Not Palindrome'

// console.log(isPlindrome)


// var firstArray = [];

// var secondArray = [1,2,3,4,5,6,7,8,9,10];

// console.log(secondArray)

//  //first loop runs
//  for(i = 0; i < secondArray.length;  i++){ 

//    secondArray.pop();         
//    console.log(secondArray)
//  }



// 10-->16-->20

// Linked list for understanding purpose head to tail

// let linkedList ={
//   head:{
//     value:10,
//     next:{
//       value:16,
//       next:{
//         value:20,
//         next:null
//       }
//     }
//   }
// }

// program

// class linkedList{
//   constructor(data){
//   this.head={
//     value:data,
//     next:null
//   }
//   this.tail =this.head
//   this.length = 1
// }
// }
// const myList = new linkedList(10)
// console.log(myList)



// 2-->10-->16-->20


// Append and prepend in linked list

// class linkedList{
//   constructor(data){
//   this.head={
//     value:data,
//     next:null
//   }
//   this.tail =this.head
//   this.length =1
// }
//   append(data){
//   const newNode = {
//     value:data,
//     next:null
//   }
//   this.tail.next = newNode
//   this.tail = newNode
//   this.length++
//   }
//   prepend(data)
//   {
//     const newNode ={
//       value:data,
//       next:null
//     }
//     newNode.next = this.head
//     this.head = newNode
//   }

// }
// const myList = new linkedList(10)
// myList.append(16)
// myList.append(20)
// myList.prepend(2)
// console.log(myList)


//  2    10-->16-->20
//  \   /
//    4

// insert using linked list

// traversing(req){
//   let counter = 0
//   let currentNode = this.head

//   while(counter != req)
//   {
//     counter++
//   currentNode = currentNode.next
//   }
//   return currentNode
// }
  
// insert(index,data)
// {
//   const newNode ={
//     value:data,
//     next:null
//   }

//   const leaderNode = this.traversing(index - 1)
// const nextNode = leaderNode.next

// leaderNode.next = newNode
// newNode.next = nextNode
// }

// //Remove/ Delete

// delete(index) {
//   const leaderNode = this.traversing(index - 1);
//   const unwantedNode = leaderNode.next;
//   const nextNode = unwantedNode.next;

//   leaderNode.next = nextNode;
//   this.length--;
// }



// }
// const myList = new linkedList(10)
// myList.append(16)
// myList.append(20)
// myList.prepend(2)
// myList.insert(1,4)
// myList.delete(2);
// console.log(myList)



// tree DSA (JAVASCRIPT)

