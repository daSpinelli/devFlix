import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/formField';
import Button from '../../../components/button';
import useForm from '../../../hooks/useForm';
import videoRepository from '../../../repositories/videos';
import categoryRepository from '../../../repositories/categories';

function NewVideo() {
  const history = useHistory();
  const [categories, setCategory] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleChange, values } = useForm({
    title: 'Video',
    url: 'https://www.youtube.com/watch?v=Vh3pXNUuWws&t=982s',
    category: 'Data Science e Inteligência Artificial',
  });

  useEffect(() => {
    categoryRepository.getAll().then((serverResponse) => {
      setCategory(serverResponse);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Vídeo
      </h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        const chosenCategory = categories.find((category) => category.title === values.category);

        videoRepository.addVideos({
          title: values.title,
          url: values.url,
          categoryId: chosenCategory.id,
        }).then(() => {
          history.push('/');
        });
      }}
      >
        <FormField
          label="Título"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      <Link to="/add-new/category">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default NewVideo;
