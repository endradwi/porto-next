export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: React.DetailedHTMLProps<React.HTMLAttributes<THREE.Mesh>, THREE.Mesh>;
      group: React.DetailedHTMLProps<React.HTMLAttributes<THREE.Group>, THREE.Group>;
      meshPhysicalMaterial: React.DetailedHTMLProps<React.HTMLAttributes<THREE.MeshPhysicalMaterial>, THREE.MeshPhysicalMaterial>;
      meshLineGeometry: React.DetailedHTMLProps<React.HTMLAttributes<any>, any>;
      meshLineMaterial: React.DetailedHTMLProps<React.HTMLAttributes<any>, any>;
    }
  }
}

- src/vite-env.d.ts
/// <reference types="vite/client" />
declare module '*.glb';
declare module '*.png';