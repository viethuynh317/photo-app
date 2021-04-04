import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('First is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup.string().required('Password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must match'),
  age: yup.number().typeError('Age must be a number').required('Age is required').positive().integer().nullable()
});

const Form = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <div>
        sign up
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} > 
          <input 
            type="text" 
            name="firstName" 
            placeholder="First name...." 
            ref={register}
          
          />
          <br />
          {errors.firstName?.message && <span>{errors.firstName?.message}</span> }
          <br />
          
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last name...." 
            ref={register}  
          />
          <br />
          {errors.lastName?.message && <span>{errors.lastName?.message}</span>}
          <br />

          <input 
            type="text" 
            name="email" 
            placeholder="Email...." 
            ref={register}
          />
          <br />
          {errors.email?.message ? <span>{errors.email?.message}</span> : ''}

          <br />

          <input 
            type="age" 
            name="age" 
            placeholder="Age...."
            ref={register}
          />
          <br />
          {errors.age?.message ? <span>{errors.age?.message}</span> : ''}
          
          <br />

          <input 
            type="password" 
            name="password" 
            placeholder="Password...." 
            ref={register}  
          />
          <br />
          {errors.password?.message ? <span>{errors.password?.message}</span> : ''}

          <br />

          <input 
            type="password" 
            name="confirmPassword" placeholder="Confirm password...." 
            ref={register}
          />
          <br />
          {errors.confirmPassword?.message ? <span>{errors.confirmPassword?.message}</span> : ''}
          
          <br />

          <button>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Form
