import { useState } from "react";

const Form = () => {
const [inputValue, setInputValue] = useState({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
})

    const handleSubmit = () => {}

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValue.nick} type='text' name="nick" placeholder="nick" />
                <input onChange={handleChange} value={inputValue.subMonths}type='number' name="subMonths" placeholder="subMonths" />
                <input onChange={handleChange} value={inputValue.avatar}type='text' name="avatar" placeholder="avatar" />
                <input onChange={handleChange} value={inputValue.description}type='text' name="description" placeholder="description" />
                <button>Save and sub!</button>
            </form>
        </div>
    )
}

export default Form;