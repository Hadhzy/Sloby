import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import DashboardHome from "../../../components/dashboard/DashboardHome";
import { getRandomNumber } from "../../../components/dashboard/getRandomNumber";
import Loading from "../../../components/loading";

export async function getServerSideProps() {
  console.log("EXECUTE");
  const totalVisits = Array.from({ length: 14 }, () => getRandomNumber(0, 100));
  const totalUsage = Array.from({ length: 7 }, () => getRandomNumber(0, 100));
  console.log("totalVisits", totalVisits);
  return {
    props: {
      totalVisits,
      totalUsage,
    },
  };
}

export default function Dashboard({
  totalVisits,
  totalUsage,
}: {
  totalVisits: number[];
  totalUsage: number[];
}) {
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  async function getSupabaseData() {
    const {
      data: { session },
    } = await supabase?.auth?.getSession();

    let { data: profile, error } = await supabase
      .from("profiles")
      .select("username")
      .eq("id", session?.user?.id);

    console.log(session?.user);

    //@ts-ignore
    return setUsername(profile[0].username);
  }

  useEffect(() => {
    setLoading(true);
    getSupabaseData().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex ">
      {loading ? (
        <Loading />
      ) : (
        <DashboardHome totalVisits={totalVisits} totalUsage={totalUsage} />
      )}
    </div>
  );
}
