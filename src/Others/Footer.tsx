import React, { useContext, useState, useEffect } from 'react'
import { ContentContext } from './Context/ContentContext'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import PreventUrls from './libraries/globalHelper/preventUrls'
import { IFooterItem } from './types'

function Footer() {
  const { footer } = useContext(ContentContext)
  const currentUrl = useLocation()
  const footerClassName = new PreventUrls({
    className: 'footer-container',
    urlToPreventFrom: ['/editor/dashboard', '/admin'],
    currentUrl: currentUrl.pathname,
  })

  return <div>This is the footer</div>
}
export default Footer
