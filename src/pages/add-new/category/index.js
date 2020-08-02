import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/formField';
import Button from '../../../components/button';

function NewCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000',
  };

  const [categories, setCategory] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

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
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategory([
          ...categories,
          values,
        ]);

        setValues({ initialValues });
      }}
      >
        <FormField
          label="Categoria"
          type="text"
          name="name"
          value={values.name}
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

        <Button className="ButtonLink">
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
          (cat, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${cat}${index}`}>
              {cat.name}
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
