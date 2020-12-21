import { generateColor } from './generateColor'
import { generateDegree } from './generateDegree'

export const getRainbow = () => {
  let firstColor = generateColor()
  let secondColor = generateColor()

  do {
    secondColor = generateColor()
  } while (firstColor === secondColor)

  return `linear-gradient(${generateDegree()}, ${firstColor} 0%, ${secondColor} 100%)`
}
