import React, { useState } from 'react'
import './Switch.css'

type props = {
    style?: React.CSSProperties
    className?: string
    id?: string
    isOn?: boolean
    onToggle?: (isOn: boolean) => void;
};


/**
 * Un interruptor.
 * @param props.isOn Valor encendido/apagado del interruptor.
 * @param props.onToggle Manejador del evento de conmutación del interruptor.
 */
export default function Switch({ style, className="", id="", isOn = false, onToggle }: props): React.JSX.Element {

    const [state, setState] = useState(isOn);

    function handleClick() {
        const newState = !state
        setState(newState)
        if (onToggle) onToggle(newState)
    }

    return (
        <div style={style} id={id}
        className={`${className} formtsx-default-switch ${state ? 'formtsx-default-switch-on' : 'formtsx-default-switch-off'}`}
        onClick={handleClick}
        >
            <div className="formtsx-default-switch-thumb" />
        </div>
    )
}
