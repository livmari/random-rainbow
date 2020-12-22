const generateGradient = (deg, firstRgb, secondRgb) => {
  return `linear-gradient(${deg}, ${firstRgb} 0%, ${secondRgb} 100%)`
}

export default generateGradient
