// we are given array of marks of students. filter our marks of student that scoer 90+

let marks = [70,93,45,67,34,26,92,99,54,73,91,95,89];

const Topper = marks.filter((val) =>{
    return val > 90;
})

console.log(Topper);