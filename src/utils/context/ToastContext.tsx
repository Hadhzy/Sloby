import React, { createContext, FC, useEffect, useState } from 'react'
import axios from 'axios'
import { ContextChildren } from '../types'
import { IContentContext } from '../types'
import { ContentContext } from './ContentContext'
import { Toast } from 'react-toastify/dist/components'
export type TToastContext = {
  activateToast: any
  toastify: boolean
}

export const ToastContext = createContext<TToastContext>(undefined!)
export const ToastContextProvider = ({ children }: ContextChildren) => {
  const [toastify, setToastify] = useState(false)

  const activateToast = () => setToastify((prev) => !prev)

  return (
    <ToastContext.Provider
      value={{
        activateToast,
        toastify,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}
