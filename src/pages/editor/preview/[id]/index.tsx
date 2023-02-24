import React, {useEffect} from "react";
import {ProjectServices} from "../../../../api/project.api";
import {useSupabaseClient} from "@supabase/auth-helpers-react";
import {useRouter} from "next/router";

export default function PreViewSite(){
    const [site, setSite] = React.useState(null);
    const supabase = useSupabaseClient()
    const router = useRouter()

    useEffect(() => {
        getSite()
    }, [])

    async function getSite(){
        const res = new ProjectServices(supabase)
        const site = await res.getProjectsSource(router.query.id as string )
        console.log(site)
    }
    return (
        <div>
            Hello
        </div>
    )
}




