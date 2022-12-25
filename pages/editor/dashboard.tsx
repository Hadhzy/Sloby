import {useSupabaseClient} from "@supabase/auth-helpers-react";
import {useEffect, useState} from "react";

export default function Dashboard() {
    const supabase = useSupabaseClient();
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState('');

    async function getSupabaseData() {
        const {
            data: {session},
        } = await supabase.auth.getSession()

        setUsername(session?.user?.user_metadata.username);
    }

    useEffect(() => {
        setLoading(true);
        getSupabaseData().then(() => {
            setLoading(false);
        });
    }, []);

    return (
        <p>hello there {loading ? 'Loading ...' : username}</p>
    )
}
