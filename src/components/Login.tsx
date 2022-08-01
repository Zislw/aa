import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { UserModel } from '../models/User'
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import '../css/Login.css';
import { useNavigate } from 'react-router';
import Cookies from 'universal-cookie'
export const Login = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate()
  const cookies = new Cookies()
  // fetch('http://localhost:8000/api/products', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(p)
  //   }).then(res => res.json())
  //     .then(data => setProdArr(data))

  useEffect(() => {

  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    validate: (data) => {
      let errors = {};

      if (!data.email) {
        (errors as any).email = 'Email is required.';
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        (errors as any).email = 'Invalid email address. E.g. example@email.com';
      }

      if (!data.password) {
        (errors as any).password = 'Password is required.';
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      //setShowMessage(true);
      fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }

      ).then(res => res.json())
        .then(data => {
          if (data.err==null) {
            sessionStorage.setItem("token", data.token)
            navigate('../products')
          }
          else{
            navigate('/register')
          }
        })
        .catch(err => navigate('/register'))

      formik.resetForm();
    }

  });

  const isFormFieldValid = (name: string) => !!((formik.touched as any)[name] && (formik.errors as any)[name]);
  const getFormErrorMessage = (name: string) => {
    return isFormFieldValid(name) && <small className="p-error">{(formik.errors as any)[name]}</small>;
  };

  const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    <div className="form-demo">
      <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
        <div className="flex align-items-center flex-column pt-6 px-3">
          <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
          <h5>Registration Successful!</h5>
          <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
            Your account is registered under name <b>{(formData as any).name}</b> ; it'll be valid next 30 days without activation. Please check <b>{(formData as any).email}</b> for activation instructions.
          </p>
        </div>
      </Dialog>

      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">Login</h5>
          <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
              </span>
              {getFormErrorMessage('email')}
            </div>
            <div className="field">
              <span className="p-float-label">
                <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange} toggleMask
                  className={classNames({ 'p-invalid': isFormFieldValid('password') })} header={passwordHeader} footer={passwordFooter} />
                <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Password*</label>
              </span>
              {getFormErrorMessage('password')}
            </div>
            <Button type="submit" label="Submit" className="mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
}

