import React, {useState} from 'react'
import ProjectModal from './ProjectModal'
import Image from "next/image";
import {useSession} from "@supabase/auth-helpers-react";
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {useRouter} from "next/router";

function ProjectsManager() {
    const [clickedClass, setClickedClass] = useState({projects: true, shared: false})
    const [profileDropdown, setProfileDropdown] = useState(false)
    const [projectModal, setProjectModal] = useState(false)
    const session = useSession()
    const [supabase] = useState(() => createBrowserSupabaseClient())
    const router = useRouter()

    async function signOut() {
        const { error } = await supabase.auth.signOut()
        await router.push('/auth/login')
    }

    return (
        <div
            className='w-full p-8 h-14 border-b border-dark-border flex justify-between items-center ease-in-out duration-200'>
            <div className='flex gap-14 font-semibold text-dark-font-color ease-in-out duration-200'>
                <div onClick={() => setClickedClass({projects: true, shared: false})}
                     className={`p-2 ease-in-out duration-200 hover:scale-105  bg-dark-dark rounded-xl hover:bg-dark-border hover:text-white cursor-pointer ${clickedClass.projects ? 'bg-dark-border text-white scale-105' : ""}`}>
                    <p>All Projects</p>
                </div>
                <div
                    className={`p-2 ease-in-out duration-200  bg-dark-dark rounded-xl hover:bg-dark-border hover:scale-105 hover:text-white cursor-pointer ${clickedClass.shared ? 'bg-dark-border text-white scale-105' : ""}`}
                    onClick={() => setClickedClass({projects: false, shared: true})}>
                    <p>Shared Projects</p>
                </div>
            </div>
            <div className={"flex-center gap-12 text-white"}>
                <div
                    className='ease-in-out duration-200 btn bg-blue-dark origin-top hover:translate-y-[-2px] hover:scale-105 hover:bg-blue-600'>
                    <button onClick={() => setProjectModal(true)}>New Project</button>
                </div>
                <div className={"relative"} onClick={() => setProfileDropdown(!profileDropdown)}>
                    <Image src={session?.user.user_metadata.avatar_url} alt="Your profile picture"
                           className='rounded-full cursor-pointer'
                           width={40} height={40}/>
                    {profileDropdown &&
                        <div
                            className={"gap-2 border-dark-border border bg-dark-darker py-4 rounded-lg absolute translate-y-3 right-0 flex flex-col"}>
                            <p className={"px-4"}>Signed in as {session?.user.email}</p>
                            <div className={"bg-dark-border h-0.5 w-full my-1"}/>
                            <p className={"cursor-pointer hover:bg-dark-border px-4 py-1"}>Profile</p>
                            <p className={"cursor-pointer hover:bg-dark-border px-4 py-1"}>Projects</p>
                            <div className={"bg-dark-border h-0.5 w-full my-1"}/>
                            <p className={"cursor-pointer hover:bg-dark-border px-4 py-1"}>Upgrade</p>
                            <p className={"cursor-pointer hover:bg-dark-border px-4 py-1"}>Settings</p>
                            <div className={"bg-dark-border h-0.5 w-full my-1"}/>
                            <p className={"cursor-pointer hover:bg-dark-border px-4 py-1"} onClick={(e) => signOut()}>Sign out</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectsManager
