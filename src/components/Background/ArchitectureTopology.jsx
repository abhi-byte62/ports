import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * ArchitectureTopology
 * A high-performance, subtle 3D software architecture & systems topology
 * that sits behind the portfolio content as a living, computational background.
 */
const ArchitectureTopology = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    // Node & topology configuration based on device capabilities
    const NODE_COUNT = isMobile ? 55 : 120;
    const MAX_CONNECTIONS_PER_NODE = isMobile ? 2 : 4;
    const MAX_CONNECT_DISTANCE = isMobile ? 85 : 95;
    const BOUNDS = {
      x: isMobile ? 180 : 340,
      y: isMobile ? 220 : 260,
      z: 140,
    };

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    // Subtle fog to create natural depth falloff in Z-space
    scene.fog = new THREE.FogExp2(0x050914, 0.0028);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      10,
      1200
    );
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x050914, 0); // Transparent so background color shows through
    container.appendChild(renderer.domElement);

    // Node layers: Structured tiered hierarchy representing architectural layers
    // Tier 0: Ingress/Gateway, Tier 1: Service Mesh, Tier 2: Compute/State, Tier 3: Storage/Bus
    const nodes = [];
    const positions = new Float32Array(NODE_COUNT * 3);
    const colors = new Float32Array(NODE_COUNT * 3);
    const sizes = new Float32Array(NODE_COUNT);

    const colorPalette = [
      new THREE.Color("#4D7CFF"), // Brand blue (Gateway/Ingress)
      new THREE.Color("#6D96FF"), // Bright blue (Service compute)
      new THREE.Color("#38BDF8"), // Cyan (Cache/State)
      new THREE.Color("#8D99B5"), // Muted slate (Data store/Bus)
    ];

    for (let i = 0; i < NODE_COUNT; i++) {
      const tier = Math.floor(Math.random() * 4);
      // Structured layer distribution with organic drift offsets
      const layerZ = (tier - 1.5) * 55 + (Math.random() - 0.5) * 30;
      const x = (Math.random() - 0.5) * BOUNDS.x;
      const y = (Math.random() - 0.5) * BOUNDS.y;
      const z = layerZ;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const col = colorPalette[tier];
      // Subtle brightness variation
      const brightness = 0.65 + Math.random() * 0.35;
      colors[i * 3] = col.r * brightness;
      colors[i * 3 + 1] = col.g * brightness;
      colors[i * 3 + 2] = col.b * brightness;

      // Restrained node size variations
      sizes[i] = tier === 0 ? 3.2 : tier === 1 ? 2.4 : 2.0;

      nodes.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        vz: (Math.random() - 0.5) * 0.08,
        phase: Math.random() * Math.PI * 2,
        tier,
        connections: [],
      });
    }

    // Node Points Geometry & Material
    // Create custom point texture for soft circular glowing nodes without harsh pixelation
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.3, "rgba(109, 150, 255, 0.8)");
    gradient.addColorStop(0.7, "rgba(77, 124, 255, 0.2)");
    gradient.addColorStop(1, "rgba(77, 124, 255, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const pointTexture = new THREE.CanvasTexture(canvas);

    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    pointGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const pointMaterial = new THREE.PointsMaterial({
      size: 4.5,
      vertexColors: true,
      map: pointTexture,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const pointCloud = new THREE.Points(pointGeometry, pointMaterial);
    scene.add(pointCloud);

    // Compute network topology connections
    const connectionPairs = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      let connectionsForThis = 0;
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (connectionsForThis >= MAX_CONNECTIONS_PER_NODE) break;
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        // Connect if within distance and either same tier or adjacent tier
        if (dist < MAX_CONNECT_DISTANCE && Math.abs(nodes[i].tier - nodes[j].tier) <= 1) {
          connectionPairs.push({ i, j, dist });
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
          connectionsForThis++;
        }
      }
    }

    // Line segments geometry
    const linePositions = new Float32Array(connectionPairs.length * 6);
    const lineColors = new Float32Array(connectionPairs.length * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // Sparse data flow packets traversing network edges
    const PACKET_COUNT = isMobile ? 6 : 14;
    const packets = [];
    for (let p = 0; p < PACKET_COUNT; p++) {
      const pairIndex = Math.floor(Math.random() * connectionPairs.length);
      packets.push({
        pairIndex,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
      });
    }

    const packetPositions = new Float32Array(PACKET_COUNT * 3);
    const packetGeometry = new THREE.BufferGeometry();
    packetGeometry.setAttribute("position", new THREE.BufferAttribute(packetPositions, 3));

    const packetMaterial = new THREE.PointsMaterial({
      size: 3.2,
      color: new THREE.Color("#93C5FD"),
      map: pointTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const packetMesh = new THREE.Points(packetGeometry, packetMaterial);
    scene.add(packetMesh);

    // Mouse Interaction and Parallax tracking
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      worldX: 0,
      worldY: 0,
      isHovering: false,
    };

    const handleMouseMove = (e) => {
      // Normalized coordinates (-1 to 1)
      const ndcX = (e.clientX / window.innerWidth) * 2 - 1;
      const ndcY = -(e.clientY / window.innerHeight) * 2 + 1;

      mouse.targetX = ndcX * 20;
      mouse.targetY = ndcY * 15;
      mouse.worldX = ndcX * (BOUNDS.x * 0.55);
      mouse.worldY = ndcY * (BOUNDS.y * 0.55);
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
      mouse.isHovering = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Resize Handler
    const handleResize = () => {
      if (!renderer || !camera) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Visibility API optimization: pause rendering when tab is hidden
    let isTabVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Main Animation Loop
    let animationFrameId;
    let clock = 0;

    const renderTopology = () => {
      if (!isTabVisible) {
        animationFrameId = requestAnimationFrame(renderTopology);
        return;
      }

      clock += 0.008;

      // Smooth camera parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      camera.position.x = mouse.x;
      camera.position.y = mouse.y;
      camera.lookAt(0, 0, 0);

      const posAttr = pointGeometry.attributes.position;
      const colAttr = pointGeometry.attributes.color;
      const linePosAttr = lineGeometry.attributes.position;
      const lineColAttr = lineGeometry.attributes.color;
      const packetPosAttr = packetGeometry.attributes.position;

      // Update Node positions & localized cursor attraction/highlight
      const INTERACTION_RADIUS = 75;

      for (let i = 0; i < NODE_COUNT; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          // Subtle harmonic ambient drift
          node.x = node.baseX + Math.sin(clock + node.phase) * 3.5;
          node.y = node.baseY + Math.cos(clock * 0.8 + node.phase) * 3.5;
          node.z = node.baseZ + Math.sin(clock * 0.5 + node.phase) * 2.0;
        }

        // Check proximity to cursor
        const dx = node.x - mouse.worldX;
        const dy = node.y - mouse.worldY;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        const isNearCursor = mouse.isHovering && distToMouse < INTERACTION_RADIUS;
        const highlightFactor = isNearCursor ? 1 - distToMouse / INTERACTION_RADIUS : 0;

        posAttr.setXYZ(i, node.x, node.y, node.z);

        const baseCol = colorPalette[node.tier];
        const r = THREE.MathUtils.lerp(baseCol.r * 0.7, 1.0, highlightFactor * 0.6);
        const g = THREE.MathUtils.lerp(baseCol.g * 0.7, 1.0, highlightFactor * 0.6);
        const b = THREE.MathUtils.lerp(baseCol.b * 0.7, 1.0, highlightFactor * 0.6);
        colAttr.setXYZ(i, r, g, b);
      }
      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      // Update line connections
      let lineIdx = 0;
      for (let k = 0; k < connectionPairs.length; k++) {
        const pair = connectionPairs[k];
        const n1 = nodes[pair.i];
        const n2 = nodes[pair.j];

        // Line vertex positions
        linePosAttr.setXYZ(lineIdx, n1.x, n1.y, n1.z);
        linePosAttr.setXYZ(lineIdx + 1, n2.x, n2.y, n2.z);

        // Proximity highlight for line
        const midX = (n1.x + n2.x) * 0.5;
        const midY = (n1.y + n2.y) * 0.5;
        const dCursor = Math.sqrt(
          (midX - mouse.worldX) * (midX - mouse.worldX) +
          (midY - mouse.worldY) * (midY - mouse.worldY)
        );

        const lineHighlight = mouse.isHovering && dCursor < INTERACTION_RADIUS
          ? (1 - dCursor / INTERACTION_RADIUS) * 0.5
          : 0;

        const c1 = colorPalette[n1.tier];
        const c2 = colorPalette[n2.tier];

        lineColAttr.setXYZ(
          lineIdx,
          c1.r * (0.3 + lineHighlight),
          c1.g * (0.3 + lineHighlight),
          c1.b * (0.3 + lineHighlight)
        );
        lineColAttr.setXYZ(
          lineIdx + 1,
          c2.r * (0.3 + lineHighlight),
          c2.g * (0.3 + lineHighlight),
          c2.b * (0.3 + lineHighlight)
        );

        lineIdx += 2;
      }
      linePosAttr.needsUpdate = true;
      lineColAttr.needsUpdate = true;

      // Update data packet pulses
      if (!prefersReducedMotion && connectionPairs.length > 0) {
        for (let p = 0; p < PACKET_COUNT; p++) {
          const packet = packets[p];
          packet.progress += packet.speed;
          if (packet.progress >= 1.0) {
            packet.progress = 0;
            packet.pairIndex = Math.floor(Math.random() * connectionPairs.length);
          }

          const pair = connectionPairs[packet.pairIndex];
          if (pair) {
            const n1 = nodes[pair.i];
            const n2 = nodes[pair.j];
            const px = THREE.MathUtils.lerp(n1.x, n2.x, packet.progress);
            const py = THREE.MathUtils.lerp(n1.y, n2.y, packet.progress);
            const pz = THREE.MathUtils.lerp(n1.z, n2.z, packet.progress);
            packetPosAttr.setXYZ(p, px, py, pz);
          }
        }
        packetPosAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(renderTopology);
      }
    };

    // Initial render / Start loop
    if (prefersReducedMotion) {
      renderTopology();
    } else {
      renderTopology();
    }

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      pointGeometry.dispose();
      pointMaterial.dispose();
      pointTexture.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      packetGeometry.dispose();
      packetMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
      style={{ opacity: 0.95 }}
    >
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle depth vignette overlay: Keeps center and text readable while fading peripheral edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(5, 9, 20, 0.4) 0%, rgba(5, 9, 20, 0.88) 100%)",
        }}
      />
    </div>
  );
};

export default ArchitectureTopology;
