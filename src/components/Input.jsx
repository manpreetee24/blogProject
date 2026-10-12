import React, {useId} from 'react'

const Input = React.forwardRef (function Input({
    label,
    type="text",
    className="",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className='block mb-1 font-semibold'>{label}</label>}
            <input
            type={type}
            className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            ref={ref}
            id={id}
            {...props}
            />
        </div>
    )
})
export default Input