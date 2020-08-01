import React from 'react';
import PageDefault from '../../../components/pageDefault';
import { Link } from 'react-router-dom';

function NewVideo() {
    return (
        <PageDefault>
            <h1>
                Cadastro de Vídeo
            </h1>

            <Link to = "/add-new/category">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default NewVideo;