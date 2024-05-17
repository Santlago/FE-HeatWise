import { Button, Image } from "@nextui-org/react";

interface BorderedProfileButtonProps {
    text: string;
}

export function BorderedProfileButton({ text }: BorderedProfileButtonProps) {
    return (
        <Button className="rounded-[3.625rem]" 
            variant="ghost"
            color="primary"
            endContent={<Image src="https://i.pravatar.cc/300" className="w-8"/>}
        >
            <span className="font-outfit text-sun-500 hover:text-sun-50" style={{
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
