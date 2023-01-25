// type Book ={
//     author: string  
//     title: string 
//      readingStatus: boolean
// }
// let  library:Book  [] = [  
//     { 
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];
//     if(library[0].readingStatus == true){
//         console.log(`${library[0].title} by ${library[0].author} is read `); 
//     }else{
//         console.log(`${library[0].title} by ${library[0].author} is not read `); 
//     }
//     if(library[1].readingStatus == true){
//         console.log(`${library[1].title} by ${library[1].author} is read `); 
//     }else{
//         console.log(`${library[1].title} by ${library[1].author} is not read `); 
//     }
//     if(library[2].readingStatus == true){
//         console.log(`${library[2].title} by ${library[2].author} is read `); 
//     }else{
//         console.log(`${library[2].title} by ${library[2].author} is not read `); 
//     }

// !                            Homework
// type home = {
//     clock : number
//     minute : number
//     sec : number
// }
// let clocks : home[]=[
//     {
//         clock : 14,
//         minute : 34,
//         sec : 32
//     },
//     {
//         clock : 524,
//         minute : 956,
//         sec : 1123
//     },
//     {
//         clock : 17,
//         minute : 14,
//         sec : 55
//     }
// ]
// clocks.forEach(hom => {
//     console.log(`${hom.clock}:${hom.minute}:${hom.sec}`);

// })

if (clocks[0].sec < 60) {
    let a: number = clocks[0].sec
    console.log(a);

} else if (clocks[0].sec > 60) {
    let b: number = Math.ceil(clocks[0].sec - 60)
    console.log(b);

}
else {

}
console.log();










