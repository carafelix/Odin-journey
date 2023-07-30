
const middleBox1 = [];
const middleBox2 = [];
const middleBox3 = ['empty','key'];
const middleBox4 = [middleBox1,middleBox3];


const mainBox = [middleBox2,middleBox4];


function searchKey(arr){
    let i=0;
    do {
        if(arr[i] == 'key'){
            return 'nice key bro'
        } else if(typeof arr[i] == 'object' ){
            return searchKey(arr[i])
        } else {
            i++;
            continue
        }
    } while (i<arr.length);
    
    return
};

// function searchKey(arr){
//     for(i=0;i<=arr.length;i++){
//         if(arr[i] == 'key'){
//             return 'nice key bro'
//         } else if(typeof arr[i] == 'object' ){
//             return searchKey(arr[i])
//         } 
//     }
//     return
// };
 
searchKey(mainBox);