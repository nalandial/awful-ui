import React, {FunctionComponent, useState} from 'react'

export interface PhoneSliderProps {
    label?: string,
    testId: string
}

export const PhoneSlider: FunctionComponent<PhoneSliderProps> = ({testId, label = 'Enter phone number'}) => {
    const [value, setValue] = useState<string | null>(null)

    const formatPhoneNumber = (phoneNumberString: string): string => {
        const cleaned = phoneNumberString.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        return !match?.length ? phoneNumberString : '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }

    const incrementPhoneNumber = (): void => {
        if (!value) {
            setValue('1000000001')
        } else if (value === '9999999999') {
            return
        } else {
            setValue((Number(value) + 1).toString())
        }
    }

    const decrementPhoneNumber = (): void => {
        if (!value || value === '1000000000') {
            setValue('1000000000')
        } else {
            setValue((Number(value) - 1).toString())
        }
    }

    return (
        <div className="phoneSliderContainer" data-testid={`${testId}-phoneSlider`}>
            <label data-testid={`${testId}-phoneSlider-label`}>{label}</label>
            <input data-testid={`${testId}-phoneSlider-slider`} type="range" min="1000000000" max="9999999999"
                   value={value ? value : '1000000000'}
                   onInput={(e) => setValue(e.currentTarget.value)}
            />
            <button data-testid={`${testId}-phoneSlider-increment`} onClick={incrementPhoneNumber}>+</button>
            <button data-testid={`${testId}-phoneSlider-decrement`} onClick={decrementPhoneNumber}>-</button>
            <span
                data-testid={`${testId}-phoneSlider-formattedValue`}>{value !== null ? formatPhoneNumber(value) : ''}</span>
        </div>
    )
}
