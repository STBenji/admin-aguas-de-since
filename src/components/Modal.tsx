import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'

interface ModalUserData {
  handleOpen: boolean
  handleClose: () => void
  user: {
    nombre: string
    apellido: string
    celular: string
    numeroDocumento: string
    tipoDocumento: string
    servicios: string
    direccion: string
    barrio: string
  }[]
}

export default function ModalComponent({ handleOpen, handleClose, user }: ModalUserData) {
  return (
    <>
      <Modal
        isOpen={handleOpen}
        onOpenChange={handleClose}>
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1 font-bold'>Datos de usuario</ModalHeader>
          <ModalBody>
            {user &&
              user.length > 0 &&
              user.map((item, index) => (
                <section key={index}>
                  <p className='font-bold'>Nombre completo:</p>
                  <p className='text-[#666]'>{item.nombre + ' ' + item.apellido}</p>
                  <hr className='py-2' />
                  <p className='font-bold'>Tipo de documento:</p>
                  <p className='text-[#666]'>{item.tipoDocumento}</p>
                  <hr className='py-2' />
                  <p className='font-bold'>Número de documento:</p>
                  <p className='text-[#666]'>{item.numeroDocumento}</p>
                  <hr className='py-2' />
                  <p className='font-bold'>Número celular:</p>
                  <p className='text-[#666]'>{item.celular}</p>
                  <hr className='py-2' />
                  <p className='font-bold'>Servicios solicitados:</p>
                  <p className='text-[#666]'>{item.servicios}</p>
                  <hr className='py-2' />
                  <p className='font-bold'>Lugar de instalación:</p>
                  <p className='text-[#666]'>{item.direccion + ', ' + item.barrio}</p>
                </section>
              ))}
          </ModalBody>
          <ModalFooter className='flex justify-center '>
            <Button
              color='primary'
              onClick={handleClose}>
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
