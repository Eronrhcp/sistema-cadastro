import React, { useState } from 'react'

function Form() {
    let [values, setValues] = useState()

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
            />
            <input
                type="text"
                name="preco"
                placeholder="Preço"
                className=""
            />
            <input
                type="text"
                name="categoria"
                placeholder="Categoria"
                className=""
            />
            <button className=''> Cadastrar </button>
        </div>
    )
}
export default Form