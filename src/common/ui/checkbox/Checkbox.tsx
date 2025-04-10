import "@/common/ui/checkbox/style.scss";
import { ChangeEvent } from "react";

interface ICheckboxProps {
    onChecked?: (_: boolean) => void;
    isChecked?: boolean;
};

const Checkbox = ({ onChecked, isChecked = false }: ICheckboxProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChecked?.(!e.target.checked);
    };

    return (
        <div className="checkbox__wrapper">
            <label>
                <input
                    type="checkbox"
                    className="checkbox"
                    onChange={handleChange}
                    checked={isChecked}
                />
                <span className="checkbox__icon">
                    <svg width="9px" height="9px" viewBox="0 0 12 12" >
                        <polyline points="1 6.29411765 4.5 10 11 1" ></polyline>
                    </svg>
                </span>
            </label>
        </div>
    )
};

export default Checkbox;

