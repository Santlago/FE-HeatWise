"use server"

import { Button } from "@nextui-org/react";
import { logout } from "@/app/actions/auth";
import { deleteSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

interface LogoutButtonProps {
    text: string;
}

export async function LogoutButton({ text }: LogoutButtonProps) {
    // const handleLogout = async () => {
    //     await logout(); 
    // };

    async function logout() {
        try {
            await deleteSession(); 
            redirect('/'); 
        } catch (error) {
            console.error('Error logging out:', error);
    
        }
    }

    return (
        <Button 
            className="rounded-[3.625rem]" 
            variant="ghost"
            color="secondary"
            onClick={logout} 
        >
            <span 
                className="font-outfit text-sun-50 hover:text-sun-500" 
                style={{
                    fontSize: '1.26281rem',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal'
                }}
            >
                {text}
            </span>
        </Button>
    );
}
