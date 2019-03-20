import React, { useState } from "react"
import SketchDisplay from "../presenter/Sketch"
import Slider from "../presenter/Slider"

import sketch from "./sketch"

const SketchContainer = props => {
  const [diameter, setDiameter] = useState(200)
  console.log(diameter)
  return (
    <>
      <SketchDisplay sketch={sketch} diameter={diameter} />
      <Slider
        min={10}
        max={500}
        step={10}
        value={diameter}
        onChange={val => setDiameter(Number(val))}
      />
    </>
  )
}

export default SketchContainer
