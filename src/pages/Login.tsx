import { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Card from '../components/Card'

interface FormData {
  username: string
  password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })
  const navigate = useNavigate()

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const onSubmit: SubmitHandler<FormData> = async (payload) => {
    setIsSubmitting(true)
    await axios.post(`http://localhost:3000/api/v1/users/login`, payload, {
      withCredentials: true
    })
    setIsSubmitting(false)
    navigate('/dashboard')
  }

  return (
    <section className='grid h-screen px-8 md:px-0 place-content-center'>
      <Card
        className='flex flex-col justify-center gap-10 shadow max-w-96 max-h-96'
        isRounded>
        <h2 className='font-semibold text-large'>Digita tus credenciales para continuar</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col w-full'>
          <section className='flex flex-col gap-3 min-h-20'>
            <Input
              {...register('username', { required: 'El campo usuario es obligatorio' })}
              label='Usuario'
              name='username'
              required
              isInvalid={!!errors.username?.message}
              errorMessage={errors.username?.message}
              variant='bordered'
            />
          </section>
          <section className='flex flex-col gap-3 min-h-24'>
            <Input
              {...register('password', {
                required: 'El campo contraseña es obligatorio',
                minLength: {
                  value: 8,
                  message: 'La contraseña debe ser de 8 carácteres, 1 mayúscula y minúscula.'
                }
              })}
              label='Contraseña'
              name='password'
              required
              isInvalid={!!errors.password?.message}
              errorMessage={errors.password?.message}
              variant='bordered'
            />
          </section>
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
