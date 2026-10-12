import React from 'react'

function Button({
    children,
    type="button",
    bgColor="bg-blue-500",
    textColor="text-white",
    className="",
    ...props
}){
    return (
        <button className={`px-6 py-2 rounded-full duration-200 hover:bg-blue-100 ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
}
export default Button