import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import './styles.postcss'

import { NextUIProvider } from '@nextui-org/react'
import Loading from './lib/Loading.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider
        router={router}
        fallbackElement={<Loading />}
      />
    </NextUIProvider>
  </React.StrictMode>
)
