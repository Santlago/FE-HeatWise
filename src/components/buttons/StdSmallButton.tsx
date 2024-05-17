import { Button } from "@nextui-org/react";

interface StdSmallButtonProps {
    text: string;
}

export function StdSmallButton({ text }: StdSmallButtonProps) {
    return (
        <Button className="h-[2rem]" style={{
            borderRadius: '3.625rem',
            background: 'var(--Sun-500, #FFAC00)',
            boxShadow: '-30px -30px 30px 0px rgba(255, 214, 0, 0.74) inset, 30px 30px 30px 0px rgba(255, 123, 0, 0.67) inset'
        }}>
            <span className="font-outfit" style={{
                color: 'var(--Sun-50, #FFFDEA)',
                fontSize: '.7rem',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal'
            }}>
                {text}
            </span>

        </Button>
    );
}
