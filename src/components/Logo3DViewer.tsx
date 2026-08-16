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
  modelPath = '/glb/logo.glb',
  className = 'w-full h-[380px] sm:h-[480px]'
}: Logo3DViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const updateProgress = (percent: number) => {
    setProgress(percent);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('3d-model-progress', { detail: percent }));
    }
  };

  const notifyLoaded = () => {
    setLoading(false);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('3d-model-loaded'));
    }
  };

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

    let fallbackGroup: THREE.Group | null = null;

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
    ].filter((url, index, self) => Boolean(url) && self.indexOf(url) === index) as string[];

    let currentCandidateIndex = 0;

    const tryLoadNextCandidate = () => {
      if (currentCandidateIndex >= candidateUrls.length) {
        console.warn('All GLB candidate paths failed. Rendering 3D logo fallback.');
        if (!fallbackGroup) {
          fallbackGroup = createProceduralFallbackLogo();
          scene.add(fallbackGroup);
          modelGroup = fallbackGroup;
        }
        setErrorMsg(null);
        notifyLoaded();
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
          updateProgress(100);
          notifyLoaded();
        },
        (xhr) => {
          if (xhr.lengthComputable && xhr.total > 0) {
            const percent = Math.round((xhr.loaded / xhr.total) * 100);
            updateProgress(percent);
          } else if (xhr.loaded > 0) {
            // Fallback progress calculation for chunked HTTP transfer (~5.58 MB file size)
            const estimatedTotalBytes = 5584560;
            const percent = Math.min(99, Math.round((xhr.loaded / estimatedTotalBytes) * 100));
            updateProgress(percent);
          }
        },
        (err: unknown) => {
          console.warn(`GLB load attempt failed for candidate [${targetUrl}]:`, err);
          tryLoadNextCandidate();
        }
      );
    };

    tryLoadNextCandidate();

    let is3dVisible = true;
    const handle3dVisibility = () => {
      is3dVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handle3dVisibility);

    // Animation Loop
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (!is3dVisible) return;

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
      document.removeEventListener('visibilitychange', handle3dVisibility);
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
      {/* Full-Application Loading Dotted Spinner Screen Overlay */}
      {isOverlayVisible && (
        <div
          className={`fixed inset-0 z-[9999] bg-[#09090b] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
            loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Ambient Glowing Background Effect */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-cyan-500/20 rounded-full blur-[140px] animate-pulse pointer-events-none" />

          <div className="relative flex flex-col items-center space-y-9 z-10 p-6 max-w-sm w-full text-center">
            
            {/* Central Dotted Spinner Container */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
              
              {/* 1. Outer Reverse Dotted Orbit Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dotted border-cyan-400/40 animate-spin [animation-duration:8s] [animation-direction:reverse]" />
              
              {/* 2. Middle Dotted Spinner Circle (12 Radial Glowing Dots) */}
              <div className="absolute inset-2 animate-spin [animation-duration:1.8s] [animation-timing-function:linear]">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.95)]"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 30}deg) translate(0, -70px) translate(-50%, -50%)`,
                      opacity: 0.25 + (i / 12) * 0.75,
                      scale: `${0.6 + (i / 12) * 0.5}`,
                    }}
                  />
                ))}
              </div>

              {/* 3. Inner Pulsing Dotted Accent Ring */}
              <div className="absolute inset-6 rounded-full border border-dashed border-purple-500/30 animate-spin [animation-duration:4s]" />

              {/* 4. Center Logo Icon with Glowing Pulse */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 p-3 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl">
                <img
                  src="/nexus-logo.png"
                  alt="Nexus Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_18px_rgba(59,130,246,0.85)] animate-pulse"
                />
              </div>

            </div>

            {/* Progress Percentage Counter & Dotted Status Display */}
            <div className="flex flex-col items-center space-y-4 w-full">
              
              {/* Animated Bouncing Dotted Spinner Dots */}
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(34,211,238,0.85)] animate-bounce"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  />
                ))}
              </div>

              {/* Percentage Display */}
              <div className="flex items-baseline space-x-1 font-mono">
                <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 tracking-tighter">
                  {progress}
                </span>
                <span className="text-2xl font-bold text-cyan-400">%</span>
              </div>

              {/* Progress Track Bar */}
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
                    ? 'Loading...'
                    : 'Loaded'}
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
