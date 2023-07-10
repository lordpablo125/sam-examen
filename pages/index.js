import { Form } from '@/components/Form'
import { Inter } from 'next/font/google'
import ListStudents from '@/components/ListStudents'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-8 ${inter.className}`}
    >
      <ListStudents />
    </div>
  )
}

// nombre, apellido, edad y Género
