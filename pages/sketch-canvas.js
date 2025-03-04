import Link from "next/link";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { useRef, useState } from "react";

export default function SketchCanvas() {
  const canvasRef = useRef(null);
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [eraserWidth, setEraserWidth] = useState(10);
  const [strokeColor, setStrokeColor] = useState("#000000");

  const handleEraserClick = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  };

  const handlePenClick = () => {
    setEraseMode(false);
  };

  const handleStrokeWidthChange = (event) => {
    setStrokeWidth(event.target.value);
  };

  const handleEraserWidthChange = (event) => {
    setEraserWidth(event.target.value);
  };

  const handleStrokeColorChange = (event) => {
    setStrokeColor(event.target.value);
  };

  return (
    <div>
      <h1>Sketch Canvas</h1>
      <div>
        <div>
          <h2>Tools</h2>
          <div>
            <button
              type="button"
              disabled={!eraseMode}
              onClick={handlePenClick}
            >
              Pen
            </button>
            <button
              type="button"
              disabled={eraseMode}
              onClick={handleEraserClick}
            >
              Eraser
            </button>
            <label>Stroke width</label>
            <input
              disabled={eraseMode}
              type="range"
              min="1"
              max="20"
              step="1"
              id="strokeWidth"
              value={strokeWidth}
              onChange={handleStrokeWidthChange}
            />
            <label>Eraser width</label>
            <input
              disabled={!eraseMode}
              type="range"
              min="1"
              max="20"
              step="1"
              id="eraserWidth"
              value={eraserWidth}
              onChange={handleEraserWidthChange}
            />
            <label>Stroke color</label>
            <input
              type="color"
              value={strokeColor}
              onChange={handleStrokeColorChange}
            />
          </div>
          <h2>Canvas</h2>
          <ReactSketchCanvas
            ref={canvasRef}
            strokeWidth={strokeWidth}
            eraserWidth={eraserWidth}
            style={{
              height: "800px",
              width: "90%",
              border: "2px solid black",
            }}
            strokeColor={strokeColor}
            allowOnlyPointerType="all"
          />
        </div>
      </div>

      <Link href="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}
