
//VERY EASY
function min(n1, n2){
    if (n1 < n2){
        return n1;
    } else {
        return n2;
    }
}
console.log(min(6592650, 92469))


//EASY
var student1 = ["Sarah", "Doe", 12];
var student2 = ["Jeremy", "Black", 14];
var student3 = ["Gary", "Marlin", 13];

let allStudents = [student1, student2, student3]

console.log(`Hello, my name is ${allStudents[1][0]} ${allStudents[1][1]}, and I am ${allStudents[1][2]} years old`)


//MEDIUM
const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let birthMonth = Number(prompt('Enter your birth month by chosing a number from 1 - 12', 'Enter month number'));

if (birthMonth == 1) {
    console.log(months[0]);
} else if (birthMonth == 2) {
    console.log(months[1]);
} else if (birthMonth == 3) {
    console.log(months[2]);
} else if (birthMonth == 4) {
    console.log(months[3]);
} else if (birthMonth == 5) {
    console.log(months[4]);
} else if (birthMonth == 6) {
    console.log(months[5]);
} else if (birthMonth == 7) {
    console.log(months[6]);
} else if (birthMonth == 8) {
    console.log(months[7]);
} else if (birthMonth == 9) {
    console.log(months[8]);
} else if (birthMonth == 10) {
    console.log(months[9]);
} else if (birthMonth == 11) {
    console.log(months[10]);
} else if (birthMonth == 12) {
    console.log(months[11]);
} else{
    alert("Please enter valid month number");
}



//HARD


let tom = {
    Name: "Tom",
    Height: 9,
    Mass: 8,
};

let jerry = {
    Name: "Jerry",
    Height: 10,
    Mass: 45,
};


function BMI(height, mass){
    let formula = (mass / height ** 2);
    return formula
}

console.log(BMI(tom.Height, tom.Mass))

console.log(`Is ${tom.Name}'s BMI higher than ${jerry.Name}'s? ${BMI(tom.Height, tom.Mass) > BMI(jerry.Height, jerry.Mass)}`);
