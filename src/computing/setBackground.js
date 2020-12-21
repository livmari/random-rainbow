import { getRainbow } from './getRainbow'

export const setBackground = id => {
  let element = document.getElementById(id)

  element.style.background = getRainbow()
}
