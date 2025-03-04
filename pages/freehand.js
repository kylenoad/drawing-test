import { useEffect, useState } from "react";
import rough from "roughjs/bundled/rough.esm";

const generator = rough.generator();

function createFreehandPath(points) {
  return generator.curve(points, {
    stroke: "black",
    roughness: 0.5,
    strokeWidth: 3,
  });
}

export default function freehand() {
  const [drawing, setDrawing] = useState(false);
  const [elements, setElements] = useState([]);
  const [path, setPath] = useState([]);
  console.log(path);

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 600;

    const roughCanvas = rough.canvas(canvas);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    elements.forEach((element) => {
      roughCanvas.draw(element);
    });
    const currentElement = createFreehandPath(path);
    roughCanvas.draw(currentElement);
  }, [elements, path]);

  const handleMouseDown = (event) => {
    event.preventDefault();
    setDrawing(true);
    setPath[[event.clientX, event.clientY]];
  };

  const handleMouseMove = (event) => {
    if (!drawing) return;
    event.preventDefault();
    setPath((prevPath) => [...prevPath, [event.clientX, event.clientY]]);
  };

  const handleMouseUp = () => {
    const newElement = createFreehandPath(path);
    setElements((prevElements) => [...prevElements, newElement]);
    setDrawing(false);
    setPath([]);
  };

  return (
    <canvas
      id="canvas"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ border: "1px solid black" }}
    ></canvas>
  );
}
