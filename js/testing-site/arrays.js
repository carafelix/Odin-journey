
const fruta = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruta[fruta.length - 1]; // last element access


// loop trough array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";   //thats the clever line!!!
}
text += "</ul>";

// apply function to each array items https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_loop_foreach
// push >  const fruits = ["Banana", "Orange", "Apple"];
//         fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits 
// but thats clever since lenght provides the total lenght and indexes are count from 0, so thats allways add to the last.
// Something to keep in mind, could be useful later. 
// WAR: If an array has for ex 3 items and you add something to an index number that is > than the amount of items
// in the array, it fills that gap with undefined items

// to access an element of a nested array you go top to bottom 'array[0][2]' would acess the third element of the first element that is an array

// .join > toString
// POPPING & PUSHING JAJAJA
// .pop return the last item (the one that was pop out)
// push return the new array lenght
// The shift() method removes the first array element and "shifts" all other elements to a lower index. return shifted element
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements. return new array lenght

// concat(), obvious
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
// flat blablabla  const myArr = [[1,2],[3,4],[5,6]];

// splice

// slice open the waters in a certain point, remove the (first parameter) amount of items (https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_splice_return)
// Important to note that if the removed amount of elements is counted from the first parameter and onwards
// so if having 4 elements and removing only 1 and adding 2 results in a 5 lenght array with the original 3 element removed
// and the original last in last
// The first parameter (x) defines the position where new elements should be added (spliced in).
// The second parameter (y) defines how many elements should be removed.

// splice can be used cleverly to remove (multiple) elements from a specific index of the array

//The rest of the parameters ("foo" , "bar") define the new elements to be added.

// The slice() method slices out a piece of an array into a new array.
// can take 2 arguments
// The method then selects elements from the start argument, and up to (but not including) the end argument.
// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.


const arrPapi = ['sexo', 'sei', 'sogai']
arrPapi.forEach(myCallbackFunction);