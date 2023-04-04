import React from "react"

const Textarea = ({
    id, label, placeholder, value, mandatory
}) => {
    return (
        <div className="mb-3 form-floating">
            <textarea className="form-control" 
                placeholder={placeholder} 
                id={id} 
                style={{ height: 100 }} 
                defaultValue={value ? value : ''}
                required={mandatory}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Textarea