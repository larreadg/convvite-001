export const redirectToGoogleMaps = (url) => {
  window.open(url, "_blank")
}

export const elementObserver = (classNames) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(...classNames)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  return observer
}
