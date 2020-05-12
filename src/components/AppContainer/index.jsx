import React from 'react'
import SiteNavContext from '../../context/site-nav'
import useSiteNav from '../../hooks/use-site-nav'

const AppContainer = ({ children }) => {
  const { nav } = useSiteNav()
  return (
    <SiteNavContext.Provider value={{ nav }}>
      {children}
    </SiteNavContext.Provider>
  )
}

export default AppContainer
