import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setControlledDataItem } from './store';
import { validationSchema } from './validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { IFormValues } from '../types/types';
import PasswordStrength from './PasswordStrength';

const ControlledForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state: RootState) => state.form.countries);

  const { register, handleSubmit, formState, watch } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema, { abortEarly: false }),
    defaultValues: {
      name: '',
      age: 0,
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      termsAccepted: false,
      country: '',
    },
  });

  const { errors, isValid } = formState;

  const onSubmit = (data: IFormValues) => {
    const { image, ...values } = data;
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        dispatch(setControlledDataItem({ ...values, image: base64String }));
        navigate('/');
      };
      reader.readAsDataURL(image[0]);
    } else {
      dispatch(setControlledDataItem(values));
      navigate('/');
    }
  };

  return (
    <div className="modal_window">
      <div className="wrapper_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form_header">
            <div>
              <h1>ControlledForm</h1>
            </div>
            <Link className="close_modal" to="/" />
          </div>
          <div className="field">
            <label htmlFor="name">Name:</label>
            <input id="name" {...register('name')} />
            {errors.name && <div className="fieldError">{errors.name.message}</div>}
          </div>

          <div className="field">
            <label htmlFor="age">Age:</label>
            <input id="age" type="number" {...register('age')} />
            {errors.age && <div className="fieldError">{errors.age.message}</div>}
          </div>

          <div className="field">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" {...register('email')} />
            {errors.email && <div className="fieldError">{errors.email.message}</div>}
          </div>

          <div className="field">
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" {...register('password')} />
            {errors.password && <div className="fieldError">{errors.password.message}</div>}
          </div>
          <PasswordStrength value={watch('password')} />

          <div className="field">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input id="confirmPassword" type="password" {...register('confirmPassword')} />
            {errors.confirmPassword && (
              <div className="fieldError">{errors.confirmPassword.message}</div>
            )}
          </div>

          <div className="field">
            <label>Gender:</label>
            <div>
              <label>
                <input type="radio" value="male" {...register('gender')} />
                Male
              </label>
              <label>
                <input type="radio" value="female" {...register('gender')} />
                Female
              </label>
            </div>
            {errors.gender && <div className="fieldError">{errors.gender.message}</div>}
          </div>

          <div className="field">
            <label htmlFor="country">Country:</label>
            <select id="country" {...register('country')}>
              <option value="">Select a country</option>
              {countries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && <div className="fieldError">{errors.country.message}</div>}
          </div>

          <div className="field">
            <label htmlFor="image">Upload picture:</label>
            <input
              id="image"
              type="file"
              accept=".png, .jpeg, .jpg"
              multiple={false}
              {...register('image')}
            />
            {errors.image && <div className="fieldError">{errors.image.message}</div>}
          </div>

          <div className="field">
            <label htmlFor="termsAccepted">Accept Terms and Conditions</label>
            <input id="termsAccepted" type="checkbox" {...register('termsAccepted')} />
            {errors.termsAccepted && (
              <div className="fieldError">{errors.termsAccepted.message}</div>
            )}
          </div>

          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ControlledForm;
