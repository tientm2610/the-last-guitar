import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchParamsPage() {
    // Search parameters:
    const [ queries ] = useSearchParams();

    // States:
    const [ key, setKey ] = useState<string>("");

    // Event handlers:
    async function onKeyChange(event: any) {
        const target: HTMLInputElement = event.target;
        setKey(target.value);
    }

    async function onPrintButtonClick() {
        alert(`Query with key "${key}" is: ${queries.get(key)}`);
    }

    // Designs:
    return (
        <div>
            <div>
                <input
                    type="text"
                    name="key"
                    placeholder="Query key"
                    onChange={onKeyChange}
                    value={key}
                    className="font-bold text-xl"
                />
            </div>

            <div>
                <button
                    className="border border-black border-solid px-2 py-1"
                    onClick={onPrintButtonClick}
                >
                    In
                </button>
            </div>
        </div>
    );
}