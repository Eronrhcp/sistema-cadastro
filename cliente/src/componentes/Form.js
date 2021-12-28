import React from 'react'

function Form() {
    return (
        <div className="bg-white h-96 w-96 rounded-md grid grid-rows-1 gap-4">
            <h1 className='text-center'>Store</h1>
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