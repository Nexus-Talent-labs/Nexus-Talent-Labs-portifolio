'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 3.0);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xa855f7, 2.5);
    dirLight2.position.set(-5, -4, -5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x06b6d4, 4.0, 20);
    pointLight.position.set(0, 2, 4);
    scene.add(pointLight);

    let modelGroup: THREE.Group | null = null;
    let ringMesh: THREE.Mesh | null = null;
    let ringTexture: THREE.CanvasTexture | null = null;
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

    // Load GLB Model Asset
    const loader = new GLTFLoader();
    const targetUrl = modelPath && modelPath.startsWith('/') ? modelPath : '/glb/logo.glb';

    loader.load(
      targetUrl,
      (gltf) => {
        const loadedScene = gltf.scene;

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
        setLoading(false);
      },
      (xhr) => {
        if (xhr.lengthComputable) {
          const percent = Math.round((xhr.loaded / xhr.total) * 100);
          setProgress(percent);
        }
      },
      (error) => {
        console.error('Error loading 3D GLB model:', error);
        setLoading(false);
      }
    );

    // Animation Loop
    const animate = () => {
      reqId = requestAnimationFrame(animate);

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

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
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
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
