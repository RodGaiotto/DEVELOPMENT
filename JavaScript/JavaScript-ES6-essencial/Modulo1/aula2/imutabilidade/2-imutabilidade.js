const students = [
    {
        name: 'Rodrigo',
        grade: 7
    },
    {
        name: 'Josias',
        grade: 4
    },
    {
        name: 'Camila',
        grade: 10
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);