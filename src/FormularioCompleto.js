import React from 'react';
import { useForm } from 'react-hook-form';

import InputText from './InputText';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import InputTel from './InputTel';
import InputURL from './InputURL';
import InputSearch from './InputSearch';
import Boton from './Boton';


const FormularioCompleto = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (datos) => {
    alert('Datos enviados:\n' + JSON.stringify(datos, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded" noValidate>
      <label>Nombre</label>
      <InputText
        placeholder="Tu nombre"
        {...register('nombre', { required: 'Nombre obligatorio', minLength: { value: 3, message: 'Al menos 3 letras' } })}
        className={errors.nombre ? 'form-control is-invalid' : 'form-control'}
      />
      {errors.nombre && <small className="text-danger">{errors.nombre.message}</small>}

      <label>Email</label>
      <InputEmail
        placeholder="correo@personal.com"
        {...register('email', {
          required: 'Email obligatorio',
          pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' }
        })}
        className={errors.email ? 'form-control is-invalid' : 'form-control'}
      />
      {errors.email && <small className="text-danger">{errors.email.message}</small>}

      <label>Contraseña</label>
      <InputPassword
        placeholder="Contraseña"
        {...register('password', { required: 'Contraseña obligatoria', minLength: { value: 6, message: '6 caracteres mínimo' } })}
        className={errors.password ? 'form-control is-invalid' : 'form-control'}
      />
      {errors.password && <small className="text-danger">{errors.password.message}</small>}

      <label>Teléfono</label>
      <InputTel
        placeholder="Opcional"
        {...register('telefono', {
          pattern: { value: /^[0-9]{7,14}$/, message: 'Número inválido' }
        })}
        className={errors.telefono ? 'form-control is-invalid' : 'form-control'}
      />
      {errors.telefono && <small className="text-danger">{errors.telefono.message}</small>}

      <label>Sitio web</label>
      <InputURL
        placeholder="https://tulugar.com"
        {...register('web', {
          pattern: { value: /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/([\w/_.]*)?)?$/, message: 'URL inválida' }
        })}
        className={errors.web ? 'form-control is-invalid' : 'form-control'}
      />
      {errors.web && <small className="text-danger">{errors.web.message}</small>}

      <label>Buscar</label>
      <InputSearch
        placeholder="Buscar..."
        {...register('busqueda')}
        className="form-control"
      />

      <Boton texto="Enviar" type="submit" />
    </form>
  );
};

export default FormularioCompleto;