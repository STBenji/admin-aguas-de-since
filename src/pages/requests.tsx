import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Skeleton, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, Input } from '@nextui-org/react'
import { useState } from 'react'
import { DropDownIcon, SearchIcon } from '../components/icons'

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

export default function RequestUser() {
  const [page, setPage] = useState<number>(1)

  const users: DataUser[] = [
    { nombre: 'Stiven', apellido: 'Blandón Urrego', celular: '123456789', numeroDocumento: '12345678', tipoDocumento: 'CC', servicios: 'Acueducto y Alcantarillado', direccion: 'cr 24 # 75 c - 118 int 107', barrio: 'Manrique La cruz' },
    { nombre: 'Guillermo Stiven', apellido: 'Benjumea Morales', celular: '987654321', numeroDocumento: '87654321', tipoDocumento: 'CC', servicios: 'Alcantarillado', direccion: 'cr 24 # 75 c - 118 int 107', barrio: 'Manrique La cruz' },
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

  const usersPerPage = 8

  const totalPages = Math.ceil(users.length / usersPerPage)

  const startIndex = (page - 1) * usersPerPage
  const endIndex = startIndex + usersPerPage
  const displayedUsers = users.slice(startIndex, endIndex)

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  return (
    <section className='flex flex-col items-center w-full h-full gap-5 px-4'>
      <div className='flex justify-between mt-4 w-[90%]'>
        <h2 className='text-xl font-bold md:text-2xl'>Solicitudes de instalación de servicios</h2>
        <Input
          isClearable
          classNames={{
            base: 'w-full sm:max-w-[44%]',
            inputWrapper: 'border-1'
          }}
          placeholder='Busca un nombre...'
          startContent={<SearchIcon />}
          size='sm'
          variant='bordered'
        />
      </div>
      <div className='w-[90%]'>
        <Table
          className=' max-h-[80vh]'
          aria-label='Example static collection table'
          bottomContent={
            <Pagination
              loop
              showControls
              color='primary'
              total={totalPages}
              initialPage={1}
              onChange={handlePageChange}
            />
          }>
          <TableHeader>
            <TableColumn className='w-[32ch]'>Nombre completo</TableColumn>
            <TableColumn>Tipo de documento</TableColumn>
            <TableColumn>Número de documento</TableColumn>
            <TableColumn>Celular</TableColumn>
            <TableColumn>Servicios</TableColumn>
            <TableColumn>Lugar de instalación</TableColumn>
            <TableColumn>Estado </TableColumn>
          </TableHeader>
          <TableBody>
            {displayedUsers.length > 0
              ? displayedUsers.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.nombre + ' ' + user.apellido}</TableCell>
                    <TableCell>{user.tipoDocumento}</TableCell>
                    <TableCell>{user.numeroDocumento}</TableCell>
                    <TableCell>{user.celular}</TableCell>
                    <TableCell>{user.servicios}</TableCell>
                    <TableCell>{user.direccion + ', ' + user.barrio}</TableCell>
                    <TableCell>
                      <Dropdown>
                        <DropdownTrigger>
                          <Button
                            disableRipple
                            className='p-0 bg-transparent data-[hover=true]:bg-transparent'
                            radius='sm'
                            variant='light'
                            endContent={<DropDownIcon />}>
                            Pendiente
                          </Button>
                        </DropdownTrigger>

                        <DropdownMenu>
                          <DropdownItem key='Servicio Instalado'>Servicio Instalado</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </TableCell>
                  </TableRow>
                ))
              : [...Array(8)].map((index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Skeleton className='w-3/5 h-3 rounded-lg' />
                    </TableCell>
                    <TableCell>
                      <Skeleton className='w-3/5 h-3 rounded-lg' />
                    </TableCell>
                    <TableCell>
                      <Skeleton className='w-3/5 h-3 rounded-lg' />
                    </TableCell>
                    <TableCell>
                      <Skeleton className='w-3/5 h-3 rounded-lg' />
                    </TableCell>
                    <TableCell>
                      <Skeleton className='w-3/5 h-3 rounded-lg' />
                    </TableCell>
                    <TableCell>
                      <Skeleton className='w-3/5 h-3 rounded-lg' />
                    </TableCell>
                    <TableCell>
                      <Skeleton className='w-3/5 h-3 rounded-lg' />
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
