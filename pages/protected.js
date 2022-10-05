import React, { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';



const Protected = () => {
    const { status } = useSession()
    const router = useRouter()


    useEffect(() => {
        if (status !== "authenticated") {
            router.push('/auth/login')
        }
    }, [status]);


    return (
        <div>Protected

            {status === "authenticated" ? (
                <button onClick={() => signOut({ callbackUrl: "/" })}>
                    Logout
                </button>) : (
                <button>Login</button>
            )}

        </div>
    )
}

export default Protected