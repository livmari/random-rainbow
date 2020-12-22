const generateDegree = () => {
  let value = Math.floor(Math.random() * Math.floor(360))

  return `${value.toString()}deg`
}

export default generateDegree
