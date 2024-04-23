import { useState } from "react";
import './HelloWorldCSS.css';

export default function HelloWorldPage() {
    // States:
    const [ form, setForm ] = useState<any>({ id: "", name: "", birth: "05/06/2003" });

    // Event handlers:
    async function onFieldChange(event: any) {
        const target: HTMLInputElement = event.target;

        setForm({ ...form, [ target.name ]: target.value });
    }

    const onFormSubmit: React.FormEventHandler = async function (event) {
        event.preventDefault();

        alert(`Mã: ${form.id}, Tên: ${form.name}, Ngày sinh: ${form.birth}`);
    }

    // Design:
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                {/* ID */}
                <div>
                    <input
                        type="text"
                        placeholder="Mã nhân viên"
                        name="id"
                        value={form.id}
                        onChange={onFieldChange}
                        required={true}
                    />
                </div>

                {/* Name */}
                <div>
                    <input
                        type="text"
                        placeholder="Tên nhân viên"
                        name="name"
                        value={form.name}
                        onChange={onFieldChange}
                        required={true}
                    />
                </div>

                {/* Ngày sinh */}
                <div>
                    <input
                        type="date"
                        placeholder="Ngày sinh"
                        name="birth"
                        value={form.birth}
                        onChange={onFieldChange}
                        required={true}
                    />
                </div>

                {/* Submit button */}
                <input
                    className="border border-black border-solid p-2"
                    type="submit"
                    value="In thông tin"
                />
            </form>
        </div>
    )
}