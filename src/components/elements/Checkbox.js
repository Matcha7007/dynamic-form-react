import React from "react"

const Checkbox = ({
    id, label, value, mandatory
}) => {
    return (
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id={id} required={mandatory} defaultValue={value ? value : ''} />
            <label className="form-check-label" htmlFor={id}>{label}</label>
        </div>
    )
}

export default Checkbox