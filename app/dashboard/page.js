"use client"
import React, {useEffect} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Dashboard from '@/components/Dashboard'


const DashboardPage = () => {
    const {data: session} = useSession()

    // if(!session){
    //     const router = useRouter()
    //     router.push("/login")
        
    // }

  return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default DashboardPage





// "use client";
// import React, { useEffect } from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";

// const Dashboard = () => {
//     const { data: session, status } = useSession();
//     const router = useRouter();
//     useEffect(() => {
//         if (status === "unauthenticated") {
//             router.push("/login");
//         }
//     }, [status,router]);

//     return (
//         <div>
//             dashboard
//         </div>
//     );
// };

// export default Dashboard;
