import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/formField';
import Button from '../../../components/button';
import useForm from '../../../hooks/useForm';

function NewCategory() {
  const initialValues = {
    title: '',
    description: '',
    color: '#ffffff',
  };

  const { values, handleChange, clearForm } = useForm(initialValues);
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://bem-flix.herokuapp.com/categories';
    fetch(URL).then(
      async (serverResponse) => {
        const response = await serverResponse.json();
        setCategory([
          ...response,
        ]);
      },
    );
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.title}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategory([
          ...categories,
          values,
        ]);

        clearForm({ initialValues });
      }}
      >
        <FormField
          label="Categoria"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      {
        categories.length === 0 && (
          <div>
            Loading...
          </div>
        )
      }

      <ul>

        {categories.map(
          (cat) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${cat.title}`}>
              {cat.title}
            </li>
          ),
        )}

      </ul>
      <Link to="/">
        Home
      </Link>
    </PageDefault>
  );
}

export default NewCategory;
