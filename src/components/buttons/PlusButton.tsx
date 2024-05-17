import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";



export function PlusButton() {
    return (
        <Button
        radius="full"
            className=""
            style={{
                background: 'var(--Sun-500, #ffffff)',
                boxShadow: '-30px -30px 30px 0px rgba(255, 214, 0, 0.74) inset, 30px 30px 30px 0px rgba(255, 123, 0, 0.67) inset'
            }}>
            <span className="font-outfit" style={{
                color: 'var(--Sun-50, #ffffff)',
            }}>
                <Plus />
            </span>

        </Button>
    );
}
