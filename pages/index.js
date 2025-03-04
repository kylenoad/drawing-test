import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link href="/sketch-canvas">
          <button>Sketch Canvas</button>
        </Link>
        <Link href="/canvas">
          <button>Canvas</button>
        </Link>
        <Link href="/freehand">
          <button>Freehand</button>
        </Link>
      </div>
    </div>
  );
}
