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

    // Load GLB Model Asset with Draco Decoder & LFS Pointer Interception
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    loader.setDRACOLoader(dracoLoader);

    let targetUrl = modelPath || '/glb/logo_compressed.glb';
    if (targetUrl.startsWith('public/')) {
      targetUrl = targetUrl.replace(/^public\//, '/');
    }

    const gdriveStreamUrl = 'https://drive.usercontent.google.com/download?id=1WXA468KXhivdZq01BMOuwtp2AqgD3zXF&export=download&confirm=t';

    const loadGlbModel = async (urlToLoad: string, isFallback = false) => {
      try {
        const response = await fetch(urlToLoad);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const arrayBuffer = await response.arrayBuffer();

        // Detect if Vercel served a Git LFS text pointer file ("version https://git-lfs...")
        const textHead = new TextDecoder().decode(arrayBuffer.slice(0, 30));
        if (textHead.startsWith('version https://') || textHead.startsWith('version http')) {
          console.warn('Git LFS text pointer detected on Vercel. Switching to raw binary stream fallback...');
          if (!isFallback) {
            return loadGlbModel(gdriveStreamUrl, true);
          }
        }

        loader.parse(
          arrayBuffer,
          '',
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

            // Play internal GLTF keyframe/skeletal animations
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
            modelGroup = pivotGroup;

            scene.add(pivotGroup);
            setErrorMsg(null);
            setLoading(false);
          },
          (err: unknown) => {
            console.warn('GLTFLoader parse error:', err);
            if (!isFallback) {
              loadGlbModel(gdriveStreamUrl, true);
            } else {
              const message = err instanceof Error ? err.message : String(err);
              setErrorMsg(message || 'Failed to render 3D asset');
              setLoading(false);
            }
          }
        );
      } catch (err: unknown) {
        console.warn('Fetch error:', err);
        if (!isFallback) {
          loadGlbModel(gdriveStreamUrl, true);
        } else {
          const message = err instanceof Error ? err.message : String(err);
          setErrorMsg(message || 'Failed to fetch 3D model asset');
          setLoading(false);
        }
      }
    };

    loadGlbModel(targetUrl);

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

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 bg-[#09090b]/40 backdrop-blur-sm rounded-3xl z-10">
          <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono font-bold text-cyan-300">
            Loading 3D Model ({progress}%)
          </span>
        </div>
      )}

      {errorMsg && (
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-[#09090b]/80 backdrop-blur-md rounded-3xl z-10 text-red-400 text-xs font-mono p-4 text-center">
          <span>⚠️ 3D Model Load Error</span>
          <span className="text-[10px] text-zinc-400">{errorMsg}</span>
        </div>
      )}

      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
