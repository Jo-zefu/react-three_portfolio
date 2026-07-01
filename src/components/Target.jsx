import {useRef} from "react";
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const Target = (props) => {
    const targetRef = useRef(null)

    useGSAP(() => {
        if (!targetRef.current) return;

        const tl = gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        })

        return () => {
            tl.kill();
        };
    })

    return (
        <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
            {/* Target circles */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1, 1, 0.1, 32]} />
                <meshStandardMaterial color="#ff0000" />
            </mesh>
            <mesh position={[0, 0, 0.06]}>
                <cylinderGeometry args={[0.7, 0.7, 0.1, 32]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>
            <mesh position={[0, 0, 0.12]}>
                <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
                <meshStandardMaterial color="#ff0000" />
            </mesh>
            <mesh position={[0, 0, 0.18]}>
                <cylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>

            {/* Stand pole */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
                <meshStandardMaterial color="#333333" />
            </mesh>

            {/* Base */}
            <mesh position={[0, -2.1, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
                <meshStandardMaterial color="#444444" />
            </mesh>
        </group>
    )
}
export default Target
