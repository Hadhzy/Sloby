import React from 'react'
import { ErrorPageContainer, ErrorDescription } from '../styles/global'

function ErrorPage({ errorMessage }: { errorMessage: string }) {
  return (
    <ErrorPageContainer>
      <img src="https://img.icons8.com/officel/344/stop-sign.png" alt="" />
      <ErrorDescription>{errorMessage}</ErrorDescription>
    </ErrorPageContainer>
  )
}

export default ErrorPage
