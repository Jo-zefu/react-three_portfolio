<div align="center">
  <img width="1512" alt="image" src="https://github.com/user-attachments/assets/f52232ca-9b0b-479d-ac52-0be811f63157" />
  <div>
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/-Three-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-EmailJS-black?style=for-the-badge&color=ff8434" alt="emailjs" />
  </div>
</div>

This is a [React + Vite.js](https://vite.dev/guide/) project bootstrapped with [`npm create vite@latest`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Tech Stack

- [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) - No Limitations, Everything that works on three.js will work here without exceptions.
- [React Three Drei](https://drei.docs.pmnd.rs/getting-started/introduction) - Ready-made abstractions for @react-three/fiber
- [Gasp](https://gsap.com/) - Animate anything
- [CSS framework](https://tailwindcss.com/) - tailwindcss

## Deploy on gh-pages

[Production url](https://www.kiddielovestore.com), you could set you own domain on github pages

## More
[Detail tutorial](https://www.youtube.com/watch?v=kt0FrkQgw8w&t=10665s)

## Question & Solution
- Three Fiber Rules to Eslint

  Eslint error:

  ![eslinterror](https://github.com/user-attachments/assets/47e0053c-3385-4515-88fd-f9c870ab32f1)

  Problem Solved:
  
  1. npm install @react-three/eslint-plugin --save-dev or yarn add @react-three/eslint-plugin --save-dev

  2. Update the plugins section of the eslint.config.js.
  
<img width="1010" alt="image" src="https://github.com/user-attachments/assets/857b0b4d-dd26-4992-b531-806830207ee7" />

<img width="1008" alt="image" src="https://github.com/user-attachments/assets/5a7ce6c8-31a7-4536-a1ca-fdf9511c0778" />

- FBX animation to GLB not working

  1. At first, I [convert gltf/glb to fbx](https://products.aspose.app/3d/conversion/glb-to-fbx) online, but the animation not working and the conslole shows lots of warnings. so I convert gltf/glb to fbx with [blender](https://www.blender.org/), the animation worked, but the position not good, so I changed the settings when saving the fbx file.

<img width="238" alt="image" src="https://github.com/user-attachments/assets/df1930e7-456a-4dcd-a1c9-ec4d4a51b9ad" />

Final display effect

<video src="https://github.com/user-attachments/assets/d29e40df-b6db-4a9e-8aee-2c6378afdd4e" preload="auto" muted playsinline style="cusor:auto;width:100%;height:100%;display:block;object-fit:contain;object-position: 50% 50%" />





