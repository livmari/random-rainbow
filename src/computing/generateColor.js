function randomize() {
  return Math.floor(Math.random() * Math.floor(255))
}

export const generateColor = () => {
  // Create random rgb values
  const red = randomize()
  const green = randomize()
  const blue = randomize()

  // Create rgb string for css
  return `rgb(${red.toString()}, ${green.toString()}, ${blue.toString()})`
}
