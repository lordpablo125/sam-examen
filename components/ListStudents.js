import React, { useEffect, useState } from 'react'
import { clearStore, deleteStudent, getAllStudents } from '@/store/store'

import Link from 'next/link'

export default function ListStudents() {
  const [students, setStudents] = useState([])

  function handleDelete(idStudent) {
    if (!confirm('Are you sure you want to delete?')) {
      return
    }

    deleteStudent(idStudent)
    retriveStudents()
  }

  function retriveStudents() {
    const storedStudents = getAllStudents()
    setStudents(storedStudents)
  }
  useEffect(retriveStudents, [])

  function handleClearList() {
    clearStore()
    retriveStudents()
  }
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold">Students List</h2>
      <button
        className="p-3  rounded mt-2 my-2 shadow-md bg-gray-300 "
        onClick={handleClearList}
      >
        Clear List
      </button>
      <table className="w-full">
        <thead className="text-left text-xl border-b font-medium dark:border-neutral-300">
          <tr>
            <th scope="col" className="px-6 py-4">
              Name
            </th>
            <th scope="col" className="px-6 py-4">
              Last name
            </th>
            <th scope="col" className="px-6 py-4">
              Age
            </th>
            <th scope="col" className="px-6 py-4">
              options
            </th>
          </tr>
        </thead>
        {students.map((student) => {
          return (
            <tbody key={student.id} className="text-lg">
              <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-300 dark:hover:bg-neutral-300">
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.lastname}</td>
                <td className="px-6 py-4">{student.age}</td>
                <td className="px-6 py-4 flex">
                  <Link href={`/edit-student/${student.id}`} className="px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>

                  <button id="delete" onClick={() => handleDelete(student.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}
