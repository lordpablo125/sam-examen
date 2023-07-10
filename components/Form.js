import { addStudents } from '@/store/store'
import { useForm } from 'react-hook-form'

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = (studentData) => {
    const newStudent = {
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      ...studentData
    }
    addStudents(newStudent)
    alert('Student submition successfull!')
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full items-center"
    >
      <h2 className="text-3xl font-bold">Student data</h2>
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
      <input type="submit" />
    </form>
  )
}
