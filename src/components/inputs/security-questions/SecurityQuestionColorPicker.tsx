import React, {FunctionComponent, useState} from 'react'
import {SecurityQuestionOptionProps} from "./SecurityQuestions";
import {ColorResult, HuePicker} from 'react-color';

export const SecurityQuestionColorPicker: FunctionComponent<SecurityQuestionOptionProps> = () => {
    const [showPicker, setShowPicker] = useState<boolean>(false)
    const [color, setColor] = useState<string>('')

    const handleChange = (newColor: ColorResult) => {
        setColor(newColor.hex)
    }

    const handleChangeComplete = (newColor: ColorResult) => {
        setColor(newColor.hex)
        setShowPicker(false)
    }

    return (
        <div>
            {!showPicker && <input type="text" defaultValue={color ?? ''} onClick={() => setShowPicker(true)}/>}
            {showPicker &&
            <>
                <div style={{width: '300px'}}>
                    <HuePicker onChange={handleChange} color={color} onChangeComplete={handleChangeComplete}/>
                    <span>{color}</span>
                </div>
            </>
            }
        </div>
    )
}
