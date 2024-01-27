import { useRef, useState } from 'react'
import { Button, Input } from '@nextui-org/react'

import { Card } from '../components/Card'

export default function Login() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isValid, setIsValid] = useState({
    username: true,
    password: true
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <section className='grid h-screen px-8 md:px-0 place-content-center'>
      <Card
        className='flex flex-col justify-center gap-10 bg-white'
        isRounded>
        <h2 className='font-semibold text-large'>Digita tus credenciales para continuar</h2>
        <form
          ref={formRef}
          className='grid grid-rows-3 gap-6'>
          <Input
            label='Usuario'
            name='username'
            required
            isInvalid={!isValid.username}
            errorMessage={!isValid.username && 'El usuario no está vacío o no tiene como mínimo 3 letras'}
            variant='bordered'
          />
          <Input
            label='Contraseña'
            name='password'
            required
            isInvalid={!isValid.password}
            errorMessage={!isValid.password && 'La contraseña debe ser de 8 carácteres, 1 mayúscula, 1 minúscula y 1 número'}
            variant='bordered'
          />
          <Button
            type='submit'
            color='primary'
            className='mx-auto w-fit'
            isLoading={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </Button>
        </form>
      </Card>
    </section>
  )
}
