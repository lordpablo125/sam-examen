export function addStudents(newStudent) {
  const storedStudents = getAllStudents()
  const studentsArray = [...storedStudents, newStudent]
  localStorage.setItem('students', JSON.stringify(studentsArray))
}

export function getAllStudents() {
  const storedStudents = localStorage.getItem('students')
  return storedStudents ? JSON.parse(storedStudents) : []
}

export function clearStore() {
  localStorage.clear()
}

export function deleteStudent(id) {
  const idNumber = Number(id)
  const storedStudents = getAllStudents()
  const studentsFiltered = storedStudents.filter(
    (student) => student.id !== idNumber
  )
  localStorage.setItem('students', JSON.stringify(studentsFiltered))
}

export function getStudent(id) {
  const idNumber = Number(id)
  const storedStudents = getAllStudents()
  const arrayStudents = storedStudents.filter(
    (student) => student.id === idNumber
  )
  const foundStudent = arrayStudents[0]
  return foundStudent
}

export function editStudent(editedStudent) {
  const studentsArray = getAllStudents()
  const studentIndex = studentsArray.findIndex(
    (student) => student.id === editedStudent.id
  )

  studentsArray[studentIndex] = editedStudent
  localStorage.setItem('students', JSON.stringify(studentsArray))
}
