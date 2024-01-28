import { useEffect, useState } from 'react'
import { Button, ButtonGroup } from '@nextui-org/button'
import { AnimatePresence, motion } from 'framer-motion'

import { Card } from '../components/Card'
import { DeleteIcon, EditIcon, EyeIcon } from '../components/icons'

const data = [
  {
    id: 1,
    title: 'Información de la entidad',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum, vel eius ad, nostrum iure repellat optio consectetur saepe quaerat aliquam incidunt quis porro amet in inventore cumque! Consectetur placeat, saepe laudantium dolorum nesciunt ipsum, esse laborum qui eius iusto sit maiores fugiat expedita in modi ex suscipit odit ut. Aut deleniti reprehenderit quia corrupti doloremque tenetur expedita pariatur illum ex eaque, voluptatum explicabo ea? Nam explicabo similique facilis eius ipsam. Sapiente quisquam blanditiis harum numquam deserunt quae earum pariatur eos sint, ducimus officiis amet ad dolorem hic quos omnis ea quia explicabo maiores perspiciatis ipsum qui? Obcaecati, corporis accusantium!'
  },
  {
    id: 2,
    title: 'Información de la entidad',
    description: 'Información'
  },
  {
    id: 3,
    title: 'Información de la entidad',
    description: 'Información'
  },
  {
    id: 4,
    title: 'Información de la entidad',
    description: 'Información'
  },
  {
    id: 5,
    title: 'Información de la entidad',
    description: 'Información'
  }
]

interface ModalStateProps {
  show: boolean
  id: number | null
}

export default function ContentManager() {
  const [showModal, setShowModal] = useState<ModalStateProps>({
    show: false,
    id: null
  })

  const alternateModal = (id: number | null) =>
    setShowModal((prev) => ({
      show: !prev.show,
      id
    }))

  useEffect(() => {
    document.body.style.overflow = showModal.show === true ? 'hidden' : ''
  }, [showModal.show])

  return (
    <>
      <AnimatePresence>
        {showModal.show === true ? (
          <section className='absolute inset-0 z-40 grid w-full h-full backdrop-blur'>
            <span
              onClick={() => alternateModal(null)}
              className='absolute z-50 font-bold cursor-pointer top-5 right-10'>
              x
            </span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='relative grid max-w-xl mx-auto place-content-center '>
              <Card
                className='grid grid-rows-[auto_1fr] gap-3 p-4'
                isRounded>
                <header className='pb-1 border-b-small'>
                  <h2 className='font-bold'>{data[showModal.id ?? 0].title}</h2>
                </header>
                <section className='flex flex-col gap-1 max-h-64'>
                  <span className='font-semibold'>Descripción: </span>
                  <p className='overflow-auto'>{data[showModal.id ?? 0].description}</p>
                </section>
              </Card>
            </motion.div>
          </section>
        ) : null}
      </AnimatePresence>

      <section className='container grid grid-cols-2 gap-3 mx-auto my-8 auto-rows-auto'>
        {data.map(({ description, id, title }, index) => (
          <Card
            className='grid grid-rows-[auto_1fr_auto] gap-3 p-4'
            key={id}
            isRounded>
            <header className='pb-1 border-b-small'>
              <h2 className='font-bold'>{title}</h2>
            </header>
            <section className='flex flex-col h-32 gap-1'>
              <span className='font-semibold'>Descripción: </span>
              <p className='line-clamp-3'>{description}</p>
            </section>
            <footer className='justify-self-end'>
              <ButtonGroup>
                <Button
                  variant='ghost'
                  color='success'
                  startContent={<EyeIcon />}
                  onClick={() => alternateModal(index)}>
                  Ver
                </Button>
                <Button
                  variant='ghost'
                  color='primary'
                  startContent={<EditIcon />}>
                  Editar
                </Button>
                <Button
                  variant='ghost'
                  color='danger'
                  startContent={<DeleteIcon />}>
                  Eliminar
                </Button>
              </ButtonGroup>
            </footer>
          </Card>
        ))}
      </section>
    </>
  )
}
