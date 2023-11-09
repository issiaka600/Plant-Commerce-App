import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './registration_style.css';
import { Link } from 'react-router-dom';
import { CLIENT_API_URL } from '../../constants/constants';

const RegistrationForm2 = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Le nom doit contenir au moins 3 caractères').required('Le nom est requis'),
      email: Yup.string().email('Format email invalide').required('L\'email est requis'),
      password: Yup.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères').required('Le mot de passe est requis'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre').required('La confirmation du mot de passe est requise'),
    }),
    onSubmit: values => {
      axios.post(`${CLIENT_API_URL}/signup`, values)
        .then(response => {
          console.log('Réponse du serveur:', response.data);
          alert('Registation successfuly')
        })
        .catch(error => {
          console.error('Erreur lors de la requête POST:', error);
          if(error.response && error.response.status && error.response.status===400){
            if(error.response.data && error.response.data.error){
                alert(`${error.response.data.error}`)
            }

          }
          
        });
    },
  });

  return (
    <div className="registration-form-container">
      <h2>Créer un compte</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? <div className="error"><span style={{color:'red'}}>{formik.errors.name}</span></div> : null}
        </div>
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
          {formik.touched.email && formik.errors.email ? <div className="error" style={{color:'red'}}>{formik.errors.email}</div> : null}
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
          {formik.touched.password && formik.errors.password ? <div className="error" style={{color:'red'}}>{formik.errors.password}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="error" style={{color:'red'}}>{formik.errors.confirmPassword}</div> : null}
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      <p>
        Vous avez déjà un compte ? <Link to={'/signin'}>Connectez-vous ici</Link>.
      </p>
    </div>
  );
};

export default RegistrationForm2;
