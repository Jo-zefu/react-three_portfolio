import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Suspense} from "react";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";

const Hero = () => {
    const isSmall= useMediaQuery({maxWidth: 480})
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth:1024});
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full flex flex-col gap-3 mx-auto sm:mt-36 mt-20 c-space">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Jiao
                    Zeng <span className="waving-hand">✋</span></p>
                <p className="hero_tag text-gray_gradient">Building product & Brands</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                        <HeroCamera ismobile={isMobile}>
                            <HackerRoom position={sizes.deskPosition}  rotation={[0, Math.PI, 0]} scale={sizes.deskScale} />
                        </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight intensity={0.5} position={[10, 10, 10]}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
