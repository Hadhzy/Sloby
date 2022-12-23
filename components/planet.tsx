import Image from 'next/image'
import {useEffect, useMemo, useState} from "react";

export function Planet({src, className}: { src: string, className: string }) {
    const [transform, setTransform] = useState("translate(0)");
    const multiplier = 10;

    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            const x = event.clientX / window.innerWidth
            const y = event.clientY / window.innerHeight
            setTransform('translate(-' + x * multiplier + 'px, -' + y * multiplier + 'px)');
        });
    }, []);

    return (
        <Image alt="Planet" src={src} className={`${className} hidden lg:block absolute z-10`}
               style={{transform: transform}} width={200} height={200}/>
    )
}
