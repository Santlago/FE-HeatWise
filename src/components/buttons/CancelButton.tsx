import { Button } from "@nextui-org/react";

interface CancelButtonProps {
    text: string;
}

export function CancelButton({ text }: CancelButtonProps) {
    return (
        <Button className="rounded-[3.625rem]" 
            variant="ghost"
            color="danger"
            
        >
            <span className="font-outfit text-red-500 hover:text-white" style={{
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
