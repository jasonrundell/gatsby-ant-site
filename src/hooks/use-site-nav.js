const useSiteNav = () => {
  const nav = [
    {
      id: '/',
      title: 'Home',
      url: '/',
    },
    {
      id: '/blog/',
      title: 'Blog',
      url: '/blog/',
    },
    {
      id: '/products/',
      title: 'Products',
      url: '/products/',
    },
    {
      id: '/contact-us/',
      title: 'Contact Us',
      url: '/contact-us/',
    },
  ]

  return { nav }
}

export default useSiteNav
