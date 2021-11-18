import React, {FunctionComponent, useState} from "react";
import {SecurityQuestionColorPicker} from "./SecurityQuestionColorPicker";

/**
 * Expected props for a security question that will be displayed in the dropdown
 */
export interface SecurityQuestionOptionProps {
    testId: string
}

export const SecurityQuestions: FunctionComponent = () => {
    const [selectedOption, setSelectedOption] = useState<string>('__default')
    const onChangeCallback = (e: React.SyntheticEvent<HTMLSelectElement>) => {
        e.preventDefault()
        const newValue = e.currentTarget.value
        setSelectedOption(newValue)
    }

    return (
        <>
            <select value={selectedOption} onChange={onChangeCallback}>
                {selectedOption === '__default' && <option value="colorPicker">Select a security question</option>}
                <option value="colorPicker">What is your favorite color?</option>
            </select>

            {selectedOption === 'colorPicker' && <SecurityQuestionColorPicker testId="colorPicker"/>}
        </>
    )
}
