
import "@/common/ui/input/style.scss";
import { InputHTMLAttributes } from "react";

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input {...props} className={`input ${props.className ? props.className : ""}`}/>
    )
};

export default Input;