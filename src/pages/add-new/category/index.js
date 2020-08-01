import React, { useState } from 'react';
import PageDefault from '../../../components/pageDefault';
import { Link } from 'react-router-dom';

function NewCategory() {
    
    const initial_values = {
        name: '',
        description: '',
        color: '#000'
    }
    
    const [categories, setCategory] = useState(['Teste']);
    const [values, setValues] = useState(initial_values);
    
    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function handleChange(e) {
        setValue(
            e.target.getAttribute('name'),
            e.target.value
        );
    }

    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria: {values.name}
            </h1>

            <form onSubmit = {function handleSubmit(e) {
                e.preventDefault();
                setCategory([
                    ...categories,
                    values
                ]);
            }}>
                <div>
                    <label>
                        Nome da Categoria
                        <input  
                            type = "text"
                            name = "name"
                            value = {values.name}
                            onChange = {handleChange}
                            />
                    </label>
                </div>

                <div>
                    <label>
                        Descrição
                        <textarea  
                            type = "text"
                            name = "description"
                            value = {values.description}
                            onChange = {handleChange}
                            />
                    </label>
                </div>

                <div>
                    <label>
                        Cor
                        <input  
                            type = "color"
                            name = "color"
                            value = {values.color}
                            onChange = {handleChange}
                            />
                    </label>
                </div>

                <button>
                    Cadastrar
                </button>

            </form>

            <ul>
                
                {categories.map(
                    (cat, index) => {
                        return (
                            <li key = {`${cat}${index}`} >
                                {cat.name}
                            </li>
                        )
                    }
                )}

            </ul>

            <Link to = "/">
                Home
            </Link>
        </PageDefault>
    )
}

export default NewCategory;