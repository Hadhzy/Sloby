import Image from 'next/image'
import {useEffect, useMemo, useState} from "react";

export function Star() {
    const [transform, setTransform] = useState("translate(0)");
    const multiplier = 50;

    const top = useMemo(() => Math.floor(Math.random() * 100) + 'vh', []);
    const left = useMemo(() => Math.floor(Math.random() * 100) + 'vw', []);

    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            const x = event.clientX / window.innerWidth
            const y = event.clientY / window.innerHeight
            setTransform('translate(-' + x * multiplier + 'px, -' + y * multiplier + 'px)');
        });
    }, []);

    return (
        <Image src="/images/Star.svg" className="w-2 absolute top-0 left-0 z-5"
               style={{top: top, left: left, transform: transform}} alt="Star" width={20}
               height={20}/>
    )
}
