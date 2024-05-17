import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
    text: string;
}

export function SubmitButton({ text }: SubmitButtonProps) {
    const { pending } = useFormStatus()
    
    return (
        <Button className="rounded-[3.625rem]" 
            variant="ghost"
            color="secondary"
            isLoading={pending}
            type="submit"
        >
            <span className="font-outfit text-sun-50 hover:text-sun-500" style={{
                fontSize: '1.26281rem',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal'
            }}>
                {text}
            </span>

        </Button>
    );
}
