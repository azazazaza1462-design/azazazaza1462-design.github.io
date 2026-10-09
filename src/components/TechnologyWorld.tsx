import { useEffect, useRef } from "react";
import { skills } from "../data/skills";

const colors = ["#79d6ff", "#b8a1ff", "#69e1bc", "#ffc681", "#ef9ec8", "#a5c2ff"];
const technologies = Array.from(new Map([
  ...skills.flatMap((group, category) => group.items.map((name) => [name, { name, color: colors[category] }] as const)),
  ["OpenAI", { name: "OpenAI", color: "#69e1bc" }] as const,
  ["Playwright", { name: "Playwright", color: "#69e1bc" }] as const,
  ["PDFsharp / MigraDoc", { name: "PDFsharp / MigraDoc", color: "#79d6ff" }] as const,
]).values());

type Point = { x: number; y: number; z: number };
const continents = [
  [[-168, 65], [-135, 72], [-100, 72], [-55, 48], [-82, 25], [-100, 15], [-118, 31], [-145, 55]],
  [[-80, 12], [-51, 5], [-35, -8], [-48, -30], [-70, -55], [-76, -25]],
  [[-12, 36], [8, 60], [30, 71], [66, 58], [125, 65], [163, 55], [145, 30], [115, 15], [102, 0], [78, 8], [53, 28], [32, 34]],
  [[-17, 32], [13, 37], [38, 22], [50, 10], [32, -32], [18, -35], [5, -5], [-16, 10]],
  [[113, -12], [137, -10], [154, -25], [147, -39], [115, -32]],
  [[-53, 60], [-22, 64], [-20, 80], [-45, 83]],
];

function isLand(longitude: number, latitude: number) {
  return continents.some((polygon) => {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const [xi, yi] = polygon[i], [xj, yj] = polygon[j];
      if ((yi > latitude) !== (yj > latitude) && longitude < (xj - xi) * (latitude - yi) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  });
}

function sphere(latitude: number, longitude: number): Point {
  return { x: Math.cos(latitude) * Math.sin(longitude), y: Math.sin(latitude), z: Math.cos(latitude) * Math.cos(longitude) };
}

const land: Point[] = [];
for (let lat = -60; lat <= 80; lat += 4) {
  for (let lon = -180; lon < 180; lon += 4) {
    if (isLand(lon, lat)) land.push(sphere(lat * Math.PI / 180, lon * Math.PI / 180));
  }
}
const nodes = technologies.map((technology, index) => {
  const y = 1 - (index + .5) / technologies.length * 2;
  const longitude = index * Math.PI * (3 - Math.sqrt(5));
  return { ...technology, point: sphere(Math.asin(y), longitude) };
});
const wireframes: { points: Point[]; color: string }[] = [];
for (let latitude = -60; latitude <= 60; latitude += 20) {
  wireframes.push({ points: Array.from({ length: 73 }, (_, i) => sphere(latitude * Math.PI / 180, i / 72 * Math.PI * 2)), color: "#6ebfec" });
}
for (let longitude = 0; longitude < 180; longitude += 20) {
  wireframes.push({ points: Array.from({ length: 73 }, (_, i) => sphere(i / 72 * Math.PI * 2, longitude * Math.PI / 180)), color: "#9a9deb" });
}

export default function TechnologyWorld() {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const element = canvas.current;
    const context = element?.getContext("2d");
    if (!element || !context) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0, height = 0, frame = 0, previous = 0, angle = .35;
    let centerX = 0, centerY = 0, radius = 0;
    let targetX = 0, targetY = 0, targetRadius = 0;
    let pointerX = 0, pointerY = 0;
    let lastDraw = 0;
    let sinYaw = 0, cosYaw = 1, sinPitch = 0, cosPitch = 1;
    const updateAnchor = () => {
      const anchor = document.querySelector(".technology-stage")?.getBoundingClientRect();
      if (anchor && anchor.bottom > 80 && anchor.top < height) {
        targetX = anchor.left + anchor.width / 2;
        targetY = anchor.top + anchor.height / 2;
        targetRadius = Math.min(anchor.width * .39, anchor.height * .42);
      } else {
        targetX = width < 761 ? width * .65 : width * .82;
        targetY = height * .54;
        targetRadius = Math.min(width * (width < 761 ? .54 : .3), height * .44, 440);
      }
    };
    const resize = () => {
      width = window.innerWidth; height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      element.width = Math.round(width * pixelRatio);
      element.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      updateAnchor();
      centerX = targetX; centerY = targetY; radius = targetRadius;
      if (motion.matches) draw(0);
    };
    const rotate = (point: Point): Point => {
      const x = point.x * cosYaw + point.z * sinYaw;
      const z = point.z * cosYaw - point.x * sinYaw;
      return { x, y: point.y * cosPitch - z * sinPitch, z: point.y * sinPitch + z * cosPitch };
    };
    const project = (point: Point, size = 1) => {
      const rotated = rotate(point);
      const perspective = 3.8 / (3.8 - rotated.z * .36);
      return { x: centerX + rotated.x * radius * size * perspective, y: centerY - rotated.y * radius * size * perspective, z: rotated.z, scale: perspective };
    };
    const wire = (points: Point[], color: string) => {
      for (let i = 1; i < points.length; i++) {
        const a = project(points[i - 1]), b = project(points[i]);
        context.globalAlpha = a.z > 0 ? .28 : .08;
        context.strokeStyle = color;
        context.lineWidth = .75;
        context.beginPath(); context.moveTo(a.x, a.y); context.lineTo(b.x, b.y); context.stroke();
      }
    };
    const draw = (time: number) => {
      const yaw = angle + pointerX * .13, pitch = -.18 + pointerY * .1;
      sinYaw = Math.sin(yaw); cosYaw = Math.cos(yaw);
      sinPitch = Math.sin(pitch); cosPitch = Math.cos(pitch);
      context.clearRect(0, 0, width, height);
      const backdrop = context.createRadialGradient(centerX, centerY, radius * .1, centerX, centerY, radius * 1.8);
      backdrop.addColorStop(0, "#18486a30"); backdrop.addColorStop(.6, "#152c5620"); backdrop.addColorStop(1, "#080e1b00");
      context.fillStyle = backdrop; context.globalAlpha = 1;
      context.fillRect(0, 0, width, height);
      // Ambient data particles across the entire page background.
      for (let i = 0; i < (width < 761 ? 36 : 74); i++) {
        const x = ((i * 137.3 + Math.sin(i * 3) * 80 + time * .004 * (i % 3 + 1)) % (width + 40)) - 20;
        const y = ((i * 83.7 - time * .008 * (i % 2 + 1)) % height + height) % height;
        context.globalAlpha = .16 + (Math.sin(time * .001 + i) + 1) * .15;
        context.fillStyle = i % 3 === 0 ? "#b8a1ff" : "#79d6ff";
        context.beginPath(); context.arc(x, y, i % 4 === 0 ? 1.7 : 1, 0, Math.PI * 2); context.fill();
      }
      const glow = context.createRadialGradient(centerX - radius * .25, centerY - radius * .3, 0, centerX, centerY, radius);
      glow.addColorStop(0, "#2a6b8e2b"); glow.addColorStop(.75, "#15395a25"); glow.addColorStop(1, "#0b17262b");
      context.globalAlpha = 1; context.fillStyle = glow;
      context.beginPath(); context.arc(centerX, centerY, radius, 0, Math.PI * 2); context.fill();
      // Latitude and longitude make this a rotating world, rather than a flat tag cloud.
      for (const mesh of wireframes) wire(mesh.points, mesh.color);
      for (const point of land) {
        const p = project(point, .99);
        context.globalAlpha = p.z > 0 ? .18 + p.z * .35 : .045;
        context.fillStyle = "#7ed6ff";
        context.beginPath(); context.arc(p.x, p.y, p.z > 0 ? 1.5 : 1, 0, Math.PI * 2); context.fill();
      }
      // Inclined orbital rings and small packets circulating around the planet.
      for (let ring = 0; ring < 2; ring++) {
        context.lineWidth = 1;
        for (let i = 1; i <= 100; i++) {
          const a = (i - 1) / 100 * Math.PI * 2, b = i / 100 * Math.PI * 2;
          const tilt = ring === 0 ? .32 : -.6;
          const pa = project({ x: Math.cos(a), y: Math.sin(a) * tilt, z: Math.sin(a) * Math.sqrt(1 - tilt * tilt) }, 1.24);
          const pb = project({ x: Math.cos(b), y: Math.sin(b) * tilt, z: Math.sin(b) * Math.sqrt(1 - tilt * tilt) }, 1.24);
          context.globalAlpha = pa.z > 0 ? .38 : .12;
          context.strokeStyle = ring === 0 ? "#79d6ff" : "#b8a1ff";
          context.beginPath(); context.moveTo(pa.x, pa.y); context.lineTo(pb.x, pb.y); context.stroke();
        }
        for (let packet = 0; packet < 3; packet++) {
          const a = time * .0003 * (ring === 0 ? 1 : -1) + packet * Math.PI * 2 / 3;
          const tilt = ring === 0 ? .32 : -.6;
          const p = project({ x: Math.cos(a), y: Math.sin(a) * tilt, z: Math.sin(a) * Math.sqrt(1 - tilt * tilt) }, 1.24);
          context.globalAlpha = p.z > 0 ? .9 : .25;
          context.fillStyle = ring === 0 ? "#a1e4ff" : "#c7b5ff";
          context.shadowColor = context.fillStyle; context.shadowBlur = 12;
          context.beginPath(); context.arc(p.x, p.y, 2.5, 0, Math.PI * 2); context.fill(); context.shadowBlur = 0;
        }
      }
      const placed: { x: number; y: number; width: number; height: number }[] = [];
      const projected = nodes.map((node) => ({ ...node, p: project(node.point, 1.06) })).sort((a, b) => a.p.z - b.p.z);
      for (const node of projected) {
        const { p } = node;
        const fontSize = (width < 761 ? 9 : 11) * p.scale;
        context.font = `600 ${fontSize}px "DM Sans", sans-serif`;
        const textWidth = context.measureText(node.name).width;
        const boxWidth = textWidth + 21, boxHeight = fontSize + 14;
        const box = { x: p.x - boxWidth / 2, y: p.y - boxHeight / 2, width: boxWidth, height: boxHeight };
        if (p.z > 0 && placed.some((other) => box.x < other.x + other.width + 4 && box.x + box.width + 4 > other.x && box.y < other.y + other.height + 3 && box.y + box.height + 3 > other.y)) continue;
        if (p.z > 0) placed.push(box);
        context.globalAlpha = p.z > 0 ? .65 + p.z * .35 : .15;
        context.fillStyle = p.z > 0 ? "#0c1c30ed" : "#0b172c99";
        context.strokeStyle = node.color + (p.z > 0 ? "88" : "33"); context.lineWidth = .8;
        context.beginPath(); context.roundRect(box.x, box.y, box.width, box.height, 7); context.fill(); context.stroke();
        context.fillStyle = node.color;
        context.beginPath(); context.arc(box.x + 8, p.y, 2, 0, Math.PI * 2); context.fill();
        context.textAlign = "left"; context.textBaseline = "middle";
        context.fillText(node.name, box.x + 14, p.y + .5);
      }
      context.globalAlpha = 1;
    };
    const tick = (now: number) => {
      if (document.hidden || motion.matches) return;
      frame = requestAnimationFrame(tick);
      if (now - lastDraw < 1000 / 30) return;
      const delta = previous ? Math.min((now - previous) / 1000, .1) : 0;
      previous = now; lastDraw = now;
      angle += delta * .18;
      centerX += (targetX - centerX) * .1;
      centerY += (targetY - centerY) * .1;
      radius += (targetRadius - radius) * .1;
      draw(now);
    };
    const restart = () => {
      cancelAnimationFrame(frame); previous = 0; lastDraw = 0;
      if (motion.matches) { centerX = targetX; centerY = targetY; radius = targetRadius; draw(0); }
      else if (!document.hidden) frame = requestAnimationFrame(tick);
    };
    const pointer = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && !motion.matches) {
        pointerX = event.clientX / width * 2 - 1;
        pointerY = event.clientY / height * 2 - 1;
      }
    };
    const scroll = () => { updateAnchor(); if (motion.matches) { centerX = targetX; centerY = targetY; radius = targetRadius; draw(0); } };
    const layout = new ResizeObserver(() => { updateAnchor(); if (motion.matches) scroll(); });
    layout.observe(document.body);
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("pointermove", pointer, { passive: true });
    document.addEventListener("visibilitychange", restart);
    motion.addEventListener("change", restart);
    resize(); restart();
    return () => {
      cancelAnimationFrame(frame); layout.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("pointermove", pointer);
      document.removeEventListener("visibilitychange", restart);
      motion.removeEventListener("change", restart);
    };
  }, []);
  return <canvas ref={canvas} className="technology-world" aria-hidden="true" data-technologies={technologies.length} />;
}
