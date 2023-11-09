import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './registration_style.css';
import { Link, useNavigate } from 'react-router-dom';
import { CLIENT_API_URL } from '../../constants/constants';

const LoginForm = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Format email invalide').required('L\'email est requis'),
      password: Yup.string().required('Le mot de passe est requis'),
    }),
    onSubmit: values => {
      axios.post(`${CLIENT_API_URL}/signin`, values)
        .then(response => {
          console.log('Réponse du serveur:', response.data);
          const userInfo= {
            token :response.data.token,
            name : response.data.user.name,
            email : response.data.user.email,
            password : response.data.user.password
          }
          localStorage.setItem('user',JSON.stringify(userInfo))
          alert(`Welcome ${response.data.user.name}`)
          navigate('/')
        })
        .catch(error => {
          console.error('Erreur lors de la requête POST:', error);
        });
    },
  });

  return (
    <div className="login-form-container" style={{width:'400px',marginLeft:'auto',marginRight:'auto' }}>
      <h2>Se connecter</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
        </div>
        <button type="submit">Se connecter</button>
      </form>
      <p>
        Vous n'avez pas de compte ? <Link to={'/signup'}>Créez un compte ici</Link>.
      </p>
    </div>
  );
};

export default LoginForm;
