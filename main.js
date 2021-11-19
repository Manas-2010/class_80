name_of_the_students_array=[];

function submit(){
    var display_array=[]
    for(var j=1;j<=4; j++){
        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        name_of_the_students_array.push(name_of_the_student);
    }
console.log(name_of_the_students_array);

var length_of_name_of_students_array=name_of_the_students_array.length;
console.log(length_of_name_of_students_array);

for(var k = 0; k < length_of_name_of_students_array; k++){
    display_array.push("<h4>Name - "+ name_of_the_students_array[k] + "</h4>");
    console.log(display_array);
}
console.log(display_array);
document.getElementById("display_name_with_commas").innerHTML = display_array;

var remove_commas = display_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){
    name_of_the_students_array.sort();
    console.log(name_of_the_students_array);

    var display_student_array_sort = [];

    var length_of_name_of_students_array = name_of_the_students_array.length;
    console.log(length_of_name_of_students_array);

    for(var k = 0; k < length_of_name_of_students_array; k++){
        display_student_array_sort.push("<h4>Name - "+ name_of_the_students_array[k] + "</h4>");
        console.log(display_student_array_sort);
    }

    remove_commas = display_student_array_sort.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}