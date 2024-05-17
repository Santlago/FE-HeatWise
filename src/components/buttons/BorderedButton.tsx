import { Button } from "@nextui-org/react";

interface BorderedButtonProps {
    text: string;
}

export function BorderedButton({ text }: BorderedButtonProps) {
    return (
        <Button className="rounded-[3.625rem]" 
            variant="ghost"
            color="primary"
        >
            <span className="font-outfit text-sun-400 hover:text-sun-50" style={{
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
