declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.png' {
  const content: { [className: HTMLImageElement]: string }
  export default content
}

declare module '*.svg' {
  const content: { [className: HTMLImageElement]: string }
  export default content
}
