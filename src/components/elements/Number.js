import React from "react"

const Number = ({
    id, label, placeholder, value, mandatory
}) => {
    return (
        <div className="mb-3">
            <label htmlFor={ id } className="form-label">{ label }</label>
            <input 
                type='number' 
                className="form-control" 
                id={ id } 
                placeholder={ placeholder ? placeholder : ''} 
                defaultValue={ value ? value : ''}
                required={ mandatory }
            />
        </div>
    )
}

export default Number