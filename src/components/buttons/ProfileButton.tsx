import { Button, Image } from "@nextui-org/react";

interface ProfileButtonProps {
    text: string;
}

export function ProfileButton({ text }: ProfileButtonProps) {
    return (
        <Button className="" style={{
            borderRadius: '3.625rem',
            background: 'var(--Sun-500, #FFAC00)',
            boxShadow: '-30px -30px 30px 0px rgba(255, 214, 0, 0.74) inset, 30px 30px 30px 0px rgba(255, 123, 0, 0.67) inset'
        }}
        endContent={<Image src="https://i.pravatar.cc/300" className="w-8"/>}
        >
            <span className="font-outfit" style={{
                color: 'var(--Sun-50, #FFFDEA)',
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
