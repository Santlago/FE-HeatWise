import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";


export function LoginButton() {
    const { pending } = useFormStatus()

    return (
        <Button className="h-[3.9375rem] w-[24.1875rem] bg-sun-50"
            isLoading={pending}
            type="submit"
        >
            <span className="font-outfit text-sun-500" style={{
                fontSize: '1.26281rem',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal'
            }}>
                Entrar
            </span>
        </Button>

    );
}
