'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

interface Logo3DViewerProps {
  modelPath?: string;
  className?: string;
}

export default function Logo3DViewer({
  modelPath = '/glb/logo_compressed.glb',
  className = 'w-full h-[380px] sm:h-[480px]'
}: Logo3DViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.2, 5.0);
    camera.lookAt(0, 0, 0);

    // Clock for GLTF AnimationMixer Delta
    const clock = new THREE.Clock();

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x333344, 2.0);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 3.2);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xa855f7, 2.8);
    dirLight2.position.set(-5, -4, -5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x06b6d4, 4.5, 25);
    pointLight.position.set(0, 2, 5);
    scene.add(pointLight);

    let modelGroup: THREE.Group | null = null;
    let ringMesh: THREE.Mesh | null = null;
    let ringTexture: THREE.CanvasTexture | null = null;
    let mixer: THREE.AnimationMixer | null = null;
    let reqId: number;

    // Create 3D Ribbon Text Mesh "NEXUS TALENT LABS"
    const createTextRibbonMesh = () => {
      const textCanvas = document.createElement('canvas');
      textCanvas.width = 2048;
      textCanvas.height = 128;
      const ctx = textCanvas.getContext('2d');
      if (!ctx) return null;

      ctx.clearRect(0, 0, textCanvas.width, textCanvas.height);

      ctx.font = '900 44px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const phrase = 'NEXUS TALENT LABS   ★   NEXUS TALENT LABS   ★   ';
      const fullText = phrase.repeat(2);

      // Multi-Color Gradient matching "Build the Skills That Shape Your Future."
      const textGradient = ctx.createLinearGradient(0, 0, textCanvas.width, 0);
      textGradient.addColorStop(0, '#60a5fa');   // blue-400
      textGradient.addColorStop(0.5, '#fb923c'); // orange-400
      textGradient.addColorStop(1, '#67e8f9');   // cyan-300

      ctx.shadowColor = '#fb923c';
      ctx.shadowBlur = 18;
      ctx.fillStyle = textGradient;
      ctx.fillText(fullText, textCanvas.width / 2, textCanvas.height / 2);

      ringTexture = new THREE.CanvasTexture(textCanvas);
      ringTexture.wrapS = THREE.RepeatWrapping;
      ringTexture.wrapT = THREE.ClampToEdgeWrapping;

      const radius = 1.75;
      const ringGeo = new THREE.CylinderGeometry(radius, radius, 0.32, 64, 1, true);
      const ringMat = new THREE.MeshBasicMaterial({
        map: ringTexture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.95
      });

      const mesh = new THREE.Mesh(ringGeo, ringMat);
      mesh.position.y = -0.9; // Positioned right under the base of the 3D logo animation
      return mesh;
    };

    ringMesh = createTextRibbonMesh();
    if (ringMesh) {
      scene.add(ringMesh);
    }

    // Create procedural 3D Nexus logo as immediate high-performance render / fallback
    const createProceduralFallbackLogo = () => {
      const group = new THREE.Group();

      // Outer Wireframe Crystal/Icosahedron
      const outerGeo = new THREE.IcosahedronGeometry(1.2, 1);
      const outerMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        wireframe: true,
        emissive: 0x0284c7,
        emissiveIntensity: 0.4,
        roughness: 0.2,
        metalness: 0.8
      });
      const outerMesh = new THREE.Mesh(outerGeo, outerMat);
      group.add(outerMesh);

      // Inner Glowing Core Sphere
      const innerGeo = new THREE.IcosahedronGeometry(0.75, 2);
      const innerMat = new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        emissive: 0x7c3aed,
        emissiveIntensity: 0.8,
        roughness: 0.1,
        metalness: 0.9
      });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      group.add(innerMesh);

      // Orbiting Particle Ring
      const torusGeo = new THREE.TorusGeometry(1.55, 0.02, 16, 100);
      const torusMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
      const torusMesh = new THREE.Mesh(torusGeo, torusMat);
      torusMesh.rotation.x = Math.PI / 3;
      group.add(torusMesh);

      group.position.set(0, 0.1, 0);
      return group;
    };

    let fallbackGroup: THREE.Group | null = createProceduralFallbackLogo();
    scene.add(fallbackGroup);
    modelGroup = fallbackGroup;

    // Load GLB Model Asset with candidate path resolution
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    loader.setDRACOLoader(dracoLoader);

    const candidateUrls = [
      modelPath,
      '/glb/logo.glb',
      './glb/logo.glb',
      'glb/logo.glb'
    ].filter((url, index, self) => url && self.indexOf(url) === index);

    let currentCandidateIndex = 0;

    const tryLoadNextCandidate = () => {
      if (currentCandidateIndex >= candidateUrls.length) {
        console.warn('All GLB candidate paths failed. Maintaining procedural 3D logo fallback.');
        setLoading(false);
        setErrorMsg(null);
        return;
      }

      const targetUrl = candidateUrls[currentCandidateIndex];
      currentCandidateIndex++;

      loader.load(
        targetUrl,
        (gltf) => {
          const loadedScene = gltf.scene;

          // Traverse sub-meshes to ensure materials render double-sided & vibrant
          loadedScene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              if (mesh.material) {
                const mat = mesh.material as THREE.MeshStandardMaterial;
                mat.side = THREE.DoubleSide;
                mat.needsUpdate = true;
              }
            }
          });

          // Play internal GLTF keyframe/skeletal animations if present in the file
          if (gltf.animations && gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(loadedScene);
            gltf.animations.forEach((clip) => {
              const action = mixer?.clipAction(clip);
              action?.play();
            });
          }

          // Calculate bounding box and center model at (0,0,0)
          const box = new THREE.Box3().setFromObject(loadedScene);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          loadedScene.position.sub(center);

          const pivotGroup = new THREE.Group();
          pivotGroup.add(loadedScene);

          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 0) {
            const scale = 2.6 / maxDim;
            pivotGroup.scale.set(scale, scale, scale);
          }

          pivotGroup.position.set(0, 0.1, 0);

          // Remove fallback model if present and replace with loaded GLB
          if (fallbackGroup) {
            scene.remove(fallbackGroup);
            fallbackGroup = null;
          }
          modelGroup = pivotGroup;
          scene.add(pivotGroup);

          setErrorMsg(null);
          setLoading(false);
        },
        (xhr) => {
          if (xhr.lengthComputable) {
            const percent = Math.round((xhr.loaded / xhr.total) * 100);
            setProgress(percent);
          }
        },
        (err: unknown) => {
          console.warn(`GLB load attempt failed for candidate [${targetUrl}]:`, err);
          tryLoadNextCandidate();
        }
      );
    };

    tryLoadNextCandidate();

    // Animation Loop
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      const delta = clock.getDelta();

      // Update internal GLTF keyframe animations
      if (mixer) {
        mixer.update(delta);
      }

      // Continuous 3D rotation & floating physics
      if (modelGroup) {
        modelGroup.rotation.y += 0.012; // Continuous Y-axis 3D rotation
        modelGroup.rotation.x = Math.sin(Date.now() * 0.001) * 0.06; // Floating motion
      }

      if (ringMesh) {
        ringMesh.rotation.y += 0.006; // 3D Y-axis rotation
        ringMesh.rotation.z = Math.sin(Date.now() * 0.0015) * 0.04; // Gentle fluid ribbon wave tilt

        if (ringTexture) {
          ringTexture.offset.x -= 0.004; // Continuous smooth ribbon ticker scroll!
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Responsive Resize Handler & Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    window.addEventListener('resize', handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      dracoLoader.dispose();
    };
  }, [modelPath]);

  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setIsOverlayVisible(false);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {/* Full-Application Liquid Loading Screen Overlay */}
      {isOverlayVisible && (
        <div
          className={`fixed inset-0 z-[9999] bg-[#09090b] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
            loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Ambient Glowing Background Effect */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-cyan-500/20 rounded-full blur-[140px] animate-pulse pointer-events-none" />

          <div className="relative flex flex-col items-center space-y-8 z-10 p-6 max-w-sm w-full text-center">
            
            {/* Liquid Fill Logo Container */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
              
              {/* Outer Glowing Rotating Tech Ring */}
              <div className="absolute -inset-5 rounded-full border border-cyan-500/20 border-t-cyan-400 border-r-purple-500 animate-spin [animation-duration:3.5s]" />
              <div className="absolute -inset-9 rounded-full border border-dashed border-blue-500/10 animate-spin [animation-duration:8s] [animation-direction:reverse]" />

              {/* 1. Base Outline Logo (Dark Background) */}
              <img
                src="/nexus-logo.png"
                alt="Nexus Logo Base"
                className="w-full h-full object-contain opacity-20 filter grayscale brightness-50"
              />

              {/* 2. Rising Liquid Container (Bottom-to-Top Clip) */}
              <div
                className="absolute bottom-0 left-0 right-0 overflow-hidden transition-all duration-300 ease-out flex items-end justify-center"
                style={{ height: `${Math.max(4, Math.min(100, progress))}%` }}
              >
                {/* SVG Animated Wave Boundary at Top of Liquid Level */}
                <div className="absolute top-0 left-0 right-0 -translate-y-1/2 overflow-hidden h-4 pointer-events-none">
                  <svg
                    className="w-[200%] h-full animate-[marquee_2s_linear_infinite]"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,0 C150,90 350,-40 500,40 C650,110 900,-20 1200,40 L1200,120 L0,120 Z"
                      fill="#22d3ee"
                      opacity="0.85"
                    />
                  </svg>
                </div>

                {/* Full Color Glowing Filled Logo Image */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0">
                  <img
                    src="/nexus-logo.png"
                    alt="Nexus Liquid Filled Logo"
                    className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(34,211,238,0.95)]"
                  />
                </div>
              </div>

            </div>

            {/* Progress Percentage Counter & Status Labels */}
            <div className="flex flex-col items-center space-y-3 w-full">
              
              {/* Digital Percentage Display */}
              <div className="flex items-baseline space-x-1 font-mono">
                <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 tracking-tighter">
                  {progress}
                </span>
                <span className="text-2xl font-bold text-cyan-400">%</span>
              </div>

              {/* Liquid Progress Bar Track */}
              <div className="w-full max-w-[260px] h-2.5 rounded-full bg-white/10 overflow-hidden p-[1px] border border-white/15 shadow-inner">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(34,211,238,0.9)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Status Subtitle Text */}
              <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-zinc-400 pt-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>
                  {progress < 100
                    ? 'Loading 3D Phoenix Engine...'
                    : 'System Ready • Launching Nexus'}
                </span>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Main 3D Canvas Mount Point */}
      <div className={`relative flex items-center justify-center ${className}`}>
        {errorMsg && (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-[#09090b]/80 backdrop-blur-md rounded-3xl z-10 text-red-400 text-xs font-mono p-4 text-center">
            <span>⚠️ 3D Model Load Error</span>
            <span className="text-[10px] text-zinc-400">{errorMsg}</span>
          </div>
        )}

        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      </div>
    </>
  );
}
