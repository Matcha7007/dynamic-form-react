import React from "react"

const Select = ({
    id, label, options, mandatory, value
}) => {
    return (
        <div className="mb-3">
            <label htmlFor={ id } className="form-label">{ label }</label>
            <select className="form-select" id={ id } required={ mandatory } defaultValue={value ? value : ''}>
                <option>Open this select menu</option>
                {options.length > 0 && options.map((option, index) => {
                    return <option key={[index, option.value].join(':')} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    )
}

export default Select