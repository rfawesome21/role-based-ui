import React from 'react'

type Props = {
    style: string
    type: string
    placeholder : string
    id : string
    required : boolean
    onChange : React.ChangeEventHandler<HTMLInputElement>
    value : string
}

const Input = (props: Props) => {
  return (
    <input type={props.type} 
    className={props.style} 
    placeholder={props.placeholder} 
    required={props.required} 
    autoComplete={'email'} 
    onChange={props.onChange}
    value = {props.value}
    />
  )
}

export default Input