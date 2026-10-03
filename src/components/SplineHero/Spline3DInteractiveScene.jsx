import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Spline3DInteractiveScene
 * 
 * An interactive 3D centerpiece designed with Spline.design aesthetics:
 * - Ultra-smooth glassmorphic & metallic materials with reflections
 * - Physical floating computational core with smooth inertia and cursor physics
 * - Integrated 3D volumetric market depth order book slabs
 * - Luminous orbital data rings and glowing energy conduits
 * - Subsurface illumination and volumetric depth
 */
const Spline3DInteractiveScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    // Scene & Deep Atmospheric Haze
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050508, 0.0035);

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 10, 75);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Root interactive group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // -------------------------------------------------------------
    // LIGHTING (Spline Soft Studio Lighting)
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0x1a1a2e, 1.8);
    scene.add(ambientLight);

    // Top Key Cyan/Ice Light
    const topKey = new THREE.DirectionalLight(0x60a5fa, 3.5);
    topKey.position.set(20, 40, 30);
    scene.add(topKey);

    // Warm Magenta/Orange Backlight for Spline Rim Effect
    const rimLight = new THREE.DirectionalLight(0xf43f5e, 2.8);
    rimLight.position.set(-30, -10, -20);
    scene.add(rimLight);

    // Purple/Violet Fill
    const fillLight = new THREE.PointLight(0x818cf8, 3.0, 120);
    fillLight.position.set(0, -20, 20);
    scene.add(fillLight);

    // -------------------------------------------------------------
    // 1. CENTRAL FLOATING COMPUTATIONAL CORE (Spline Glass Mesh)
    // -------------------------------------------------------------
    // Outer glass rounded geometry
    const coreGeom = new THREE.IcosahedronGeometry(14, 1);
    const coreEdges = new THREE.EdgesGeometry(coreGeom);

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e1b4b,
      metalness: 0.1,
      roughness: 0.15,
      transmission: 0.7,
      thickness: 3.5,
      transparent: true,
      opacity: 0.85,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    const coreMesh = new THREE.Mesh(coreGeom, glassMat);
    rootGroup.add(coreMesh);

    const wireMat = new THREE.LineBasicMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.LineSegments(coreEdges, wireMat);
    rootGroup.add(wireMesh);

    // Inner Glowing Crystalline Engine
    const innerGeom = new THREE.OctahedronGeometry(8, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
    });
    const innerCore = new THREE.Mesh(innerGeom, innerMat);
    rootGroup.add(innerCore);

    // -------------------------------------------------------------
    // 2. ORBITAL TELEMETRY RINGS (Spline Sleek Rings)
    // -------------------------------------------------------------
    const ring1Geom = new THREE.TorusGeometry(22, 0.35, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.9,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    rootGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(26, 0.25, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xf43f5e,
      emissive: 0xbe123c,
      emissiveIntensity: 0.4,
      roughness: 0.3,
      metalness: 0.9,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    rootGroup.add(ring2);

    // -------------------------------------------------------------
    // 3. INTEGRATED 3D MARKET DEPTH SLABS (VOLUMETRIC ORDER BOOK)
    // -------------------------------------------------------------
    const bookGroup = new THREE.Group();
    bookGroup.position.set(22, 2, 8);
    rootGroup.add(bookGroup);

    const DEPTH_COUNT = 5;
    const askSlabs = [];
    const bidSlabs = [];

    // ASKS (Red/Rose Translucent Slabs)
    for (let i = 0; i < DEPTH_COUNT; i++) {
      const w = 7 + (DEPTH_COUNT - i) * 1.5;
      const geom = new THREE.BoxGeometry(w, 0.9, 3.2);
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0xf43f5e,
        emissive: 0x9f1239,
        emissiveIntensity: 0.4,
        roughness: 0.2,
        metalness: 0.3,
        transparent: true,
        opacity: 0.75 - i * 0.08,
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(w / 2, 1.6 + i * 1.6, 0);
      bookGroup.add(mesh);
      askSlabs.push({ mesh, baseW: w });
    }

    // BIDS (Emerald/Cyan Translucent Slabs)
    for (let i = 0; i < DEPTH_COUNT; i++) {
      const w = 7 + (DEPTH_COUNT - i) * 1.5;
      const geom = new THREE.BoxGeometry(w, 0.9, 3.2);
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0x10b981,
        emissive: 0x047857,
        emissiveIntensity: 0.4,
        roughness: 0.2,
        metalness: 0.3,
        transparent: true,
        opacity: 0.75 - i * 0.08,
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(-w / 2, -1.6 - i * 1.6, 0);
      bookGroup.add(mesh);
      bidSlabs.push({ mesh, baseW: w });
    }

    // -------------------------------------------------------------
    // 4. FLOATING DATA PACKETS (High-Speed Pulses)
    // -------------------------------------------------------------
    const PACKET_COUNT = isMobile ? 16 : 32;
    const packetGeom = new THREE.BufferGeometry();
    const packetPositions = new Float32Array(PACKET_COUNT * 3);
    const packetData = [];

    for (let p = 0; p < PACKET_COUNT; p++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      const r = 20 + Math.random() * 16;
      packetData.push({
        theta,
        phi,
        r,
        speedTheta: (Math.random() - 0.5) * 0.02,
        speedPhi: (Math.random() - 0.5) * 0.01,
      });
    }

    // Circular particle texture
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext("2d");
    const pGrad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    pGrad.addColorStop(0, "rgba(255, 255, 255, 1)");
    pGrad.addColorStop(0.35, "rgba(56, 189, 248, 0.9)");
    pGrad.addColorStop(0.8, "rgba(129, 140, 248, 0.3)");
    pGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 32, 32);

    const packetTex = new THREE.CanvasTexture(pCanvas);
    const packetMat = new THREE.PointsMaterial({
      size: 4.2,
      map: packetTex,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const packetMesh = new THREE.Points(packetGeom, packetMat);
    rootGroup.add(packetMesh);

    // -------------------------------------------------------------
    // 5. SMOOTH CURSOR PARALLAX & PHYSICS
    // -------------------------------------------------------------
    const mouse = {
      targetX: 0,
      targetY: 0,
      currentX: 0,
      currentY: 0,
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouse.targetX = nx * 0.45;
      mouse.targetY = ny * 0.35;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId;
    let clock = 0;

    const animate = () => {
      clock += 0.01;

      // Inertia mouse smoothing
      mouse.currentX += (mouse.targetX - mouse.currentX) * 0.05;
      mouse.currentY += (mouse.targetY - mouse.currentY) * 0.05;

      rootGroup.rotation.y = mouse.currentX + Math.sin(clock * 0.3) * 0.12;
      rootGroup.rotation.x = -mouse.currentY + Math.cos(clock * 0.25) * 0.08;

      if (!prefersReducedMotion) {
        // Spin internal core
        innerCore.rotation.y -= 0.015;
        innerCore.rotation.z += 0.01;

        // Counter-rotate rings
        ring1.rotation.z += 0.006;
        ring2.rotation.z -= 0.008;

        // Fluctuating order book depth
        if (Math.random() < 0.05) {
          const slabs = [...askSlabs, ...bidSlabs];
          const target = slabs[Math.floor(Math.random() * slabs.length)];
          const delta = (Math.random() - 0.5) * 2;
          const newW = Math.max(5, Math.min(16, target.baseW + delta));
          target.mesh.scale.x = newW / target.baseW;
        }

        // Update floating orbital data packets
        const posAttr = packetGeom.attributes.position;
        for (let p = 0; p < PACKET_COUNT; p++) {
          const pkt = packetData[p];
          pkt.theta += pkt.speedTheta;
          pkt.phi += pkt.speedPhi;

          const px = pkt.r * Math.cos(pkt.phi) * Math.sin(pkt.theta);
          const py = pkt.r * Math.sin(pkt.phi);
          const pz = pkt.r * Math.cos(pkt.phi) * Math.cos(pkt.theta);

          packetPositions[p * 3] = px;
          packetPositions[p * 3 + 1] = py;
          packetPositions[p * 3 + 2] = pz;
        }
        packetGeom.setAttribute("position", new THREE.Float32BufferAttribute(packetPositions, 3));
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      coreGeom.dispose();
      glassMat.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      packetGeom.dispose();
      packetMat.dispose();
      packetTex.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[580px] flex items-center justify-center select-none">
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />
      {/* Subtle bottom fade to blend with hero backdrop */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none" />
    </div>
  );
};

export default Spline3DInteractiveScene;
