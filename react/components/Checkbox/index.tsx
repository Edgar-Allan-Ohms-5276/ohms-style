import React from "react"

export default function Checkbox(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return (
        <div className="checkbox-effect">
            <label className="checkbox-label">
                {props.placeholder}
                <input {...props} type="checkbox" />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}