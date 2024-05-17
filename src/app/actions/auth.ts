import { deleteSession } from '@/app/lib/session'
import { redirect } from 'next/navigation'

export async function logout() {
    try {
        await deleteSession(); 
        redirect('/login'); 
    } catch (error) {
        console.error('Error logging out:', error);

    }
}
