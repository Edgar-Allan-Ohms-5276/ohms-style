import React from "react"

export default function Button(props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    large?: boolean,
    variant?: "primary" | "secondary"
}) {
    const variant = props.disabled ? "disabled" : props.variant ?? "primary"
    const large = props.large ?? false

    let className = `button-${variant}`
    if (large) { className += " button-large" }

    const compProps = {...props}
    delete compProps.large
    delete compProps.variant

    return (
        <button {...props} className={className} />
    )
}