
enum TagNameType {
  div = "div",
  p = "p",
  section = "section",
  article = "article"
}
type ReturnType = HTMLDivElement | HTMLElement | HTMLParagraphElement

function createElement(tagName: TagNameType, className: string) : ReturnType {
  const element = document.createElement(tagName)
  if (className.length) {
    element.className = className
  }
  return element
}

export const p = (className = '') => createElement(TagNameType.p, className)
export const div = (className = '') => createElement(TagNameType.div, className)
export const section = (className = '') => createElement(TagNameType.section, className)
export const article = (className = '') => createElement(TagNameType.article, className)
