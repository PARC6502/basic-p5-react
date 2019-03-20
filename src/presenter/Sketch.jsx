import React, { useEffect } from "react"
import p5 from "p5"

const Sketch = props => {
  let { sketch, ...sketchProps } = props
  let sketchContainer = React.createRef()

  useEffect(() => {
    let canvas = new p5(p => sketch(p, sketchProps), sketchContainer.current)
    return () => {
      canvas.remove()
    }
  })
  return <div id="sketchContainer" ref={sketchContainer} />
}

export default Sketch
