import React, { useState } from 'react'

function Form() {
    let [values, setValues] = useState()

    console.log(values)

    let handleChangeValues = (value) => {
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    let handleClickButton = ()=> {
        console.log(values)
    }
    return (
        <div className="bg-white 
        h-64 w-96 mx-auto 
        border-2 border-gray-600 rounded-md 
        grid grid-rows-1 gap-4 p-2">
            <h1 className='text-center text-3xl'>Store</h1>
            <input
                type="text"
                name="nome"
                placeholder="Nome"
                className=""
                onChange={handleChangeValues}
            />
            <input
                type="text"
                name="preco"
                placeholder="Preço"
                className=""
                onChange={handleChangeValues}
            />
            <input
                type="text"
                name="categoria"
                placeholder="Categoria"
                className=""
                onChange={handleChangeValues}
            />
            <button
                onClick={() => handleClickButton()}
                className='
            border-2 border-gray-600 rounded-md bg-gray-300 hover:bg-white
            '> Cadastrar </button>
        </div>
    )
}
export default Form