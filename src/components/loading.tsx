import Image from "next/image";
import React from "react";
export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen w-screen bg-dark-border">
            <div className="animate-spin rounded-full h-64 w-64 border-b-4 border-white">
                <Image alt="Sloby Logo" className={"rotate-45"} src={"/images/Sloby Logo Dark.svg"} width={150}
                       height={150}/>
            </div>
        </div>
    )
}
