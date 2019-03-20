function sketch(p, sketchProps) {
  let { diameter } = sketchProps
  p.setup = function() {
    p.createCanvas(300, 300)
    p.background(255)
    p.stroke(3)
    p.ellipse(p.width / 2, p.height / 2, diameter)
  }
}

export default sketch
