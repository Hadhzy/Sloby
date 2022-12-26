import {useSupabaseClient} from "@supabase/auth-helpers-react";
import {useEffect, useState} from "react";
import DashboardMenu from "../../../components/dashboard/DashboardMenu"
import DashboardHome from "../../../components/dashboard/DashboardHome";

export default function Dashboard() {
    const supabase = useSupabaseClient();
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState('');

    async function getSupabaseData() {
        const {
            data: {session}
        } = await supabase?.auth?.getSession()

        let { data: profile, error } = await supabase
            .from('profiles')
            .select('username')
            .eq('id', session?.user?.id)

        console.log(session?.user)

        //@ts-ignore    
        return setUsername(profile[0].username)
    }

    useEffect(() => {
        setLoading(true);
        getSupabaseData().then(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div className="flex ">
            <DashboardMenu />
            <DashboardHome />
        </div>
    )
}
