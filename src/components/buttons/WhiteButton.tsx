import { Button } from "@nextui-org/react";

interface WhiteButtonProps {
    text: string;
}

export function WhiteButton({ text }: WhiteButtonProps) {
    return (
        <Button className="rounded-[3.625rem]" 
            variant="ghost"
            color="secondary"
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
