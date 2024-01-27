import { Image, Input, Pagination } from '@nextui-org/react'
import { Card } from '../components/Card'
import NavbarComponent from '../components/Navbar'
import { useState } from 'react'
import { SearchIcon } from '../components/icons'

export default function UserPage() {
  const [page, setPage] = useState(1)

  const users = [
    { nombre: 'Stiven', apellido: 'Blandón Urrego', celular: '123456789', numeroDocumento: '12345678' },
    { nombre: 'Guillermo Stiven', apellido: 'Benjumea MoralesBenjumea MoralesBenjumea MoralesBenjumea MoralesBenjumea Morales', celular: '987654321', numeroDocumento: '87654321' },
    { nombre: 'Carlos Eduardo', apellido: 'Morales Estrada', celular: '112233445', numeroDocumento: '11223344' },
    { nombre: 'Ana', apellido: 'Martínez', celular: '556677889', numeroDocumento: '55667788' },
    { nombre: 'Luis', apellido: 'García', celular: '998877665', numeroDocumento: '99887766' },
    { nombre: 'Sofía', apellido: 'Morales', celular: '554433221', numeroDocumento: '55443322' },
    { nombre: 'Jorge', apellido: 'Molina', celular: '112233445', numeroDocumento: '11223344' },
    { nombre: 'Patricia', apellido: 'Soto', celular: '556677889', numeroDocumento: '55667788' },
    { nombre: 'Jorge', apellido: 'Molina', celular: '112233445', numeroDocumento: '11223344' },
    { nombre: 'Patricia', apellido: 'Soto', celular: '556677889', numeroDocumento: '55667788' },
    { nombre: 'Jorge', apellido: 'Molina', celular: '112233445', numeroDocumento: '11223344' },
    { nombre: 'Patricia', apellido: 'Soto', celular: '556677889', numeroDocumento: '55667788' }
  ]

  const usersPerPage = 6

  const startIndex = (page - 1) * usersPerPage
  const endIndex = startIndex + usersPerPage
  const displayedUsers = users.slice(startIndex, endIndex)

  const totalPages = Math.ceil(users.length / usersPerPage)

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  return (
    <section className='relative flex flex-col items-center justify-start w-full h-screen'>
      <NavbarComponent />
      <section className='grid py-8 text-2xl font-bold place-content-center gap-7'>
        <section className='flex flex-col items-center justify-between gap-2'>
          <h1>Usuarios</h1>
          <Input
            type='text'
            variant='bordered'
            placeholder='Buscar un usuario'
            className='w-[18rem]'
            endContent={<SearchIcon />}
          />
        </section>

        <article className='grid gap-4 md:grid-cols-3'>
          {displayedUsers.map((item, index) => (
            <Card
              className='flex w-auto h-[12rem] gap-4 bg-white border border-gray-500 cursor-pointer rounded-xl max-w-[22rem]'
              key={index}>
              <Image
                src='./users.png'
                width={100}
                height={100}
              />
              <section className='flex flex-col items-start w-full gap-2 text-xl min-w-[12rem] h-[8rem] '>
                <h1 className='line-clamp-2'>{item.nombre + ' ' + item.apellido}</h1>
                <p className='text-sm font-normal text-gray-400'>Celular: {item.celular}</p>
                <p className='text-lg font-normal text-gray-400'>Documento: {item.numeroDocumento}</p>
              </section>
            </Card>
          ))}
        </article>
        <section className='flex justify-center'>
          <section className='fixed bottom-12'>
            <Pagination
              loop
              showControls
              color='primary'
              total={totalPages}
              initialPage={1}
              onChange={handlePageChange}
            />
          </section>
        </section>
      </section>
    </section>
  )
}
