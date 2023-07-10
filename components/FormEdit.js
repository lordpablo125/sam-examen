import React, { useEffect } from 'react'

import { editStudent } from '@/store/store'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

export default function FormEdit({ id, name, lastname, age }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      id,
      name,
      lastname,
      age
    }
  })
  const router = useRouter()

  function onSubmit(editedStudent) {
    editStudent(editedStudent)
    alert('Student edited')
    router.push('/')
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full items-center"
    >
      <h2 className="text-3xl font-bold">Edit Student</h2>
      <div className="flex flex-col w-3/4 mb-4">
        <label>Name</label>
        <input
          className="p-3 pl-6 rounded mt-2 my-2 shadow-md w-full "
          type="text"
          {...register('name', {
            required: true
          })}
        />
        {errors.name?.type === 'required' && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="flex flex-col w-3/4 mb-4">
        <label>Lastname</label>
        <input
          className="p-3 pl-6 rounded mt-2 my-2 shadow-md"
          type="text"
          {...register('lastname', {
            required: true
          })}
        />
        {errors.lastname?.type === 'required' && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="flex flex-col w-3/4 mb-4">
        <label>Age</label>
        <input
          className="p-3 pl-6 rounded mt-2 my-2 shadow-md"
          type="number"
          {...register('age', {
            required: true
          })}
        />
        {errors.age?.type === 'required' && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="flex flex-col w-3/4 mb-4">
        <label>Gender</label>
        <select
          {...register('gender')}
          className="p-3 pl-6 rounded mt-2 my-2 shadow-md"
        >
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
      </div>
      <input {...register('id')} hidden={true} />
      <input type="submit" />
    </form>
  )
}
