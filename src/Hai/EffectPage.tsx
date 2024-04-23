import { useEffect, useState } from "react";

export default function EffectPage() {
    // States:
    const [ num, setNum ] = useState<number>(0);
    const [ changes, setChanges ] = useState<number>(0);

    // Effect
    useEffect(
        function () {
            alert("Trang đã được tải lên thành công!");
        },
        []
    );

    useEffect(
        function () {
            setChanges(changes+1);
        },
        [ num ]
    );

    // Event handlers:
    async function onButtonClick(event: any) {
        const target: HTMLButtonElement = event.target;

        if (target.name === "remove") {
            setNum(num-1);
        }
        else {
            setNum(num+1);
        }
    }

    // Designs:
    return (
        <div>
            <div>
                <button
                    name="remove"
                    onClick={onButtonClick}
                >
                    Giảm
                </button>

                <label className="m-3">
                    { num }
                </label>

                <button
                    name="add"
                    onClick={onButtonClick}
                >
                    Tăng
                </button>
            </div>

            <div>
                Số lần thay đổi: { changes }
            </div>
        </div>
    );
}