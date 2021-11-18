import React, {FunctionComponent, MouseEvent, useState} from 'react'

export interface ZipCodeDropdownProps {
    label?: string,
    testId: string
}


export const ZipCodeDropdown: FunctionComponent<ZipCodeDropdownProps> = ({testId, label = 'Select zip code:'}) => {
    const [zipCode, setZipCode] = useState<string | null>(null)
    const ref = React.createRef()
    const move = (e: MouseEvent) => {
        console.log('foo')

        const element = ref.current
        const randX = Math.floor(Math.random() * (window.innerWidth - 100));
        const randY = Math.floor(Math.random() * (window.innerHeight - 100));
        // console.log([randX, randY]);

        element.animate({"left": randX + "px", "top": randY + "px"});
    }

    return (
            <select onMouseEnter={move} style={{position: 'relative'}} ref={ref} >
                <option>foo</option>
                <option>bar</option>
            </select>
    )
}
