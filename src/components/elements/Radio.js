import React from "react"

const Radio = ({
    id, label, options, mandatory
}) => {
    return (
        <>
            <label>{label}</label>
            {options.length > 0 && options.map((option, index) => (
                <div className="form-check" key={[index, option.value].join(':')}>
                    <input className="form-check-input" type='radio' id={id} name={'radio_group_'+id} required={mandatory}/>
                    <label className="form-check-label" htmlFor={id}>{option.label}</label>
                </div>
            ))}
        </>
        
    )
}

export default Radio