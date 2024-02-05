import { Image, Input, Pagination } from '@nextui-org/react'
import { useState, lazy, Suspense } from 'react'
import { SearchIcon } from '../components/icons'
import ModalComponent from '../components/Modal'
import Loading from '../lib/Loading'

const Card = lazy(() => import('../components/Card'))

interface DataUser {
  nombre: string
  apellido: string
  celular: string
  numeroDocumento: string
  tipoDocumento: string
  servicios: string
  direccion: string
  barrio: string
}

export default function UserPage() {
  const [page, setPage] = useState<number>(1)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [userData, setUserData] = useState<Array<DataUser>>([])

  const users: DataUser[] = [
    { nombre: 'Stiven', apellido: 'Blandón Urrego', celular: '123456789', numeroDocumento: '12345678', tipoDocumento: 'CC', servicios: 'Acueducto y Alcantarillado', direccion: 'cr 24 # 75 c - 118 int 107', barrio: 'Manrique La cruz' },
    { nombre: 'Guillermo Stiven', apellido: 'Benjumea Morales', celular: '987654321', numeroDocumento: '87654321', tipoDocumento: 'CC', servicios: 'Acueducto y Alcantarillado', direccion: 'cr 24 # 75 c - 118 int 107', barrio: 'Manrique La cruz' },
    { nombre: 'Carlos Eduardo', apellido: 'Morales Estrada', celular: '112233445', numeroDocumento: '11223344', tipoDocumento: 'CC', servicios: 'Acueducto y Alcantarillado', direccion: 'cr 24 # 75 c - 118 int 107', barrio: 'Manrique La cruz' },
    { nombre: 'Ana', apellido: 'Martínez', celular: '556677889', numeroDocumento: '55667788', tipoDocumento: 'CC', servicios: 'Acueducto y Alcantarillado', direccion: 'cr 24 # 75 c - 118 int 107', barrio: 'Manrique La cruz' },
    { nombre: 'Luis', apellido: 'García', celular: '998877665', numeroDocumento: '99887766', tipoDocumento: 'CC', servicios: 'Acueducto y Alcantarillado', direccion: 'cr 24 # 75 c - 118 int 107', barrio: 'Manrique La cruz' },
    { nombre: 'Sofía', apellido: 'Morales', celular: '554433221', numeroDocumento: '55443322', tipoDocumento: 'CC', servicios: 'Acueducto y Alcantarillado', direccion: 'cr 24 # 75 c - 118 int 107', barrio: 'Manrique La cruz' },
    { nombre: 'Jorge', apellido: 'Molina', celular: '112233445', numeroDocumento: '11223344', tipoDocumento: 'CC', servicios: 'Acueducto y Alcantarillado', direccion: 'cr 24 # 75 c - 118 int 107', barrio: 'Manrique La cruz' },
    { nombre: 'Patricia', apellido: 'Soto', celular: '556677889', numeroDocumento: '55667788', tipoDocumento: 'CC', servicios: 'Acueducto y Alcantarillado', direccion: 'cr 24 # 75 c - 118 int 107', barrio: 'Manrique La cruz' },
    { nombre: 'Jorge', apellido: 'Molina', celular: '112233445', numeroDocumento: '11223344', tipoDocumento: 'CC', servicios: 'Acueducto y Alcantarillado', direccion: 'cr 24 # 75 c - 118 int 107', barrio: 'Manrique La cruz' },
    { nombre: 'Patricia', apellido: 'Soto', celular: '556677889', numeroDocumento: '55667788', tipoDocumento: 'CC', servicios: 'Acueducto y Alcantarillado', direccion: 'cr 24 # 75 c - 118 int 107', barrio: 'Manrique La cruz' },
    { nombre: 'Jorge', apellido: 'Molina', celular: '112233445', numeroDocumento: '11223344', tipoDocumento: 'CC', servicios: 'Acueducto y Alcantarillado', direccion: 'cr 24 # 75 c - 118 int 107', barrio: 'Manrique La cruz' },
    { nombre: 'Patricia', apellido: 'Soto', celular: '556677889', numeroDocumento: '55667788', tipoDocumento: 'CC', servicios: 'Acueducto y Alcantarillado', direccion: 'cr 24 # 75 c - 118 int 107', barrio: 'Manrique La cruz' }
  ]

  const usersPerPage = 6

  const totalPages = Math.ceil(users.length / usersPerPage)

  const startIndex = (page - 1) * usersPerPage
  const endIndex = startIndex + usersPerPage
  const displayedUsers = users.slice(startIndex, endIndex)

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  const openModal = (id: number) => {
    setIsOpen(true)
    const userFind = displayedUsers[id]
    setUserData(userFind ? [userFind] : [])
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Suspense fallback={<Loading />}>
      {userData && userData.length > 0 && (
        <ModalComponent
          handleOpen={isOpen}
          handleClose={closeModal}
          user={userData}
        />
      )}

      <section className='relative flex flex-col items-center justify-start w-full '>
        <section className='grid py-8 text-2xl font-bold place-content-center gap-7'>
          <section className='flex flex-col items-center justify-between gap-2'>
            <h2>Usuarios</h2>
            <Input
              type='text'
              variant='bordered'
              placeholder='Buscar un usuario'
              className='w-[18rem]'
              endContent={<SearchIcon />}
            />
          </section>

          <article className='grid gap-4 md:grid-cols-3'>
            {displayedUsers && displayedUsers.length > 0 ? (
              displayedUsers.map((item, index) => (
                <Card
                  className='flex w-auto h-[12rem] gap-4 bg-white border border-gray-500 cursor-pointer rounded-xl max-w-[22rem]'
                  key={index}
                  onClick={() => openModal(index)}>
                  <Image
                    src='./users.png'
                    width={100}
                    height={100}
                  />
                  <section className='flex flex-col items-start w-full gap-2 text-xl min-w-[12rem] h-[8rem] '>
                    <h2 className='line-clamp-2'>{item.nombre + ' ' + item.apellido}</h2>
                    <p className='text-sm font-normal text-gray-400'>Celular: {item.celular}</p>
                    <p className='text-lg font-normal text-gray-400'>Documento: {item.numeroDocumento}</p>
                  </section>
                </Card>
              ))
            ) : (
              <section>
                <h3>hola</h3>
              </section>
            )}
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
    </Suspense>
  )
}
