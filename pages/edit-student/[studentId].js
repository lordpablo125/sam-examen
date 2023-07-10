import { useEffect, useLayoutEffect, useState } from 'react'

import FormEdit from '@/components/FormEdit'
import { getStudent } from '@/store/store'
import { useRouter } from 'next/router'

export default function EditStudent() {
  const router = useRouter()
  const studentId = router.query.studentId
  const [studentData, setStudentData] = useState({})

  useEffect(() => {
    if (!studentId) return

    const student = getStudent(studentId)
    setStudentData(student)
  }, [studentId])

  return Object.keys(studentData).length > 0 && <FormEdit {...studentData} />
}
