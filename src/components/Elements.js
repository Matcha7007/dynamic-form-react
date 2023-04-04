import React from "react"
import Input from './elements/Input'
import Select from './elements/Select'
import Radio from './elements/Radio'
import Checkbox from './elements/Checkbox'
import Textarea from './elements/Textarea'
import Number from './elements/Number'

const Element = ({field: {
    id,
    label,
    placeholder,
    type,
    value,
    isMandatory,
    options
}}) => {
    switch (type) {
        case 'text':
            return <Input 
                id={id}
                label={label}
                placeholder={placeholder}
                value={value}
                isMandatory={isMandatory}
            />
        case 'number':
            return <Number
                id={id}
                label={label}
                placeholder={placeholder}
                value={value}
                isMandatory={isMandatory}
            />
        case 'textarea':
            return <Textarea
                id={id}
                label={label}
                placeholder={placeholder}
                value={value}
                isMandatory={isMandatory}
            />
        case 'checkbox':
            return <Checkbox
                id={id}
                label={label}
                value={value}
                isMandatory={isMandatory}
            />
        case 'select':
            return <Select 
                id={id}
                label={label}
                options={options}
                isMandatory={isMandatory}
            />
        case 'radio':
            return <Radio 
                id={id}
                label={label}
                options={options}
                isMandatory={isMandatory}
            />
        default:
            return null
    }
}

export default Element