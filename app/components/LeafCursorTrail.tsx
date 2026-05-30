"use client";

import { useEffect, useRef, useState } from "react";

type Leaf = {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  driftX: number;
  driftY: number;
};

const MAX_LEAVES = 24;

export default function LeafCursorTrail() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const lastSpawnRef = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    const spawnLeaf = (event: PointerEvent) => {
      const now = performance.now();

      if (now - lastSpawnRef.current < 80) {
        return;
      }

      lastSpawnRef.current = now;
      const id = idRef.current;
      idRef.current += 1;

      const leaf: Leaf = {
        id,
        x: event.clientX,
        y: event.clientY,
        rotation: Math.random() * 120 - 60,
        scale: 0.72 + Math.random() * 0.5,
        driftX: Math.random() * 44 - 22,
        driftY: 28 + Math.random() * 34,
      };

      setLeaves((current) => [...current.slice(-MAX_LEAVES + 1), leaf]);
      window.setTimeout(() => {
        setLeaves((current) => current.filter((item) => item.id !== id));
      }, 1900);
    };

    window.addEventListener("pointermove", spawnLeaf, { passive: true });

    return () => {
      window.removeEventListener("pointermove", spawnLeaf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="leaf-trail">
      {leaves.map((leaf) => (
        <span
          className="leaf-trail-item"
          key={leaf.id}
          style={
            {
              "--leaf-x": `${leaf.x}px`,
              "--leaf-y": `${leaf.y}px`,
              "--leaf-rotate": `${leaf.rotation}deg`,
              "--leaf-scale": leaf.scale,
              "--leaf-drift-x": `${leaf.driftX}px`,
              "--leaf-drift-y": `${leaf.driftY}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
