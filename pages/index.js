import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link href="/sketch-canvas">
          <button>Sketch Canvas</button>
        </Link>
        <Link href="/square">
          <button>Square</button>
        </Link>
        <Link href="/freehand">
          <button>Freehand</button>
        </Link>
        <Link href="/combined">
          <button>Combined</button>
        </Link>
        <Link href="/combined">
          <button>Text</button>
        </Link>
      </div>
    </div>
  );
}
