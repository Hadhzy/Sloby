import Image from "next/image";
import React from "react";
export default function Loading({ msg }:{ msg: string }) {
    return (
        <div className="flex items-center justify-center h-screen w-screen bg-dark-project-bg">
            <div className="animate-spin rounded-full h-64 w-64 border-b-4 border-white">
                <Image alt="Sloby Logo" className={"rotate-45"} src={"/images/Sloby Logo Dark.svg"} width={50}
                       height={50}/>
                <p className="text-sm text-dark-font-light">{msg}</p>
            </div>
        </div>
    )
}
