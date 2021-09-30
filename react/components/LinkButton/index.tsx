import React from "react"

const LinkButton = React.forwardRef<HTMLAnchorElement, React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    large?: boolean,
    variant?: "primary" | "secondary"
}>((props, ref) => {
    const variant = props.variant ?? "primary"
    const large = props.large ?? false

    let className = `button-${variant}`
    if (large) { className += " button-large" }

    const compProps = {...props}
    delete compProps.large
    delete compProps.variant

    return (
        <a ref={ref} {...compProps} className={className} />
    )
})

export default LinkButton