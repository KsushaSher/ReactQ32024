import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setFormDataItem } from './store';
import { validationSchema } from './validationSchema';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { IErrors, IFormValues } from '../types/types';

const FormComponent: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.form.countries);

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);
  const termsAcceptedRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<IErrors>({});

  const validate = async () => {
    const formValues: IFormValues = {
      name: nameRef.current?.value || '',
      age: Number(ageRef.current?.value) || 0,
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      confirmPassword: confirmPasswordRef.current?.value || '',
      gender: genderRef.current?.value || '',
      termsAccepted: termsAcceptedRef.current?.checked || false,
      country: countryRef.current?.value || '',
      image: imageRef.current?.files?.[0] || null,
    };

    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      setErrors({});
      return formValues;
    } catch (err) {
      const validationErrors: IErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          if (error.path) {
            validationErrors[error.path as keyof IErrors] = error.message;
          }
        });
      }
      setErrors(validationErrors);
      return null;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validatedValues = await validate();
    if (validatedValues) {
      if (validatedValues.image) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          dispatch(setFormDataItem({ ...validatedValues, image: base64String }));
          alert('Форма успешно отправлена!');
        };
        reader.readAsDataURL(validatedValues.image);
      }
    }
  };

  return (
    <div className="modal_window ">
      <div className="wrapper_form">
        <form onSubmit={handleSubmit}>
          <div className="form_header">
            <div>
              <h1>FORM 1</h1>
              <p>Create a form:</p>
            </div>

            <Link className="close_modal" to="/" />
          </div>

          <div>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" ref={nameRef} />
            {errors.name && <div>{errors.name}</div>}
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <input id="age" type="number" ref={ageRef} />
            {errors.age && <div>{errors.age}</div>}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" ref={emailRef} />
            {errors.email && <div>{errors.email}</div>}
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" ref={passwordRef} />
            {errors.password && <div>{errors.password}</div>}
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input id="confirmPassword" type="password" ref={confirmPasswordRef} />
            {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
          </div>

          <div>
            <label>Gender:</label>
            <div>
              <label>
                <input type="radio" name="gender" value="male" ref={genderRef} />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" ref={genderRef} />
                Female
              </label>
            </div>
            {errors.gender && <div>{errors.gender}</div>}
          </div>

          <div>
            <label>
              <input type="checkbox" ref={termsAcceptedRef} />
              Accept Terms and Conditions
            </label>
            {errors.termsAccepted && <div>{errors.termsAccepted}</div>}
          </div>

          <div>
            <label htmlFor="country">Country:</label>
            <select id="country" ref={countryRef}>
              <option value="">Select a country</option>
              {countries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && <div>{errors.country}</div>}
          </div>

          <div>
            <label htmlFor="image">Upload picture:</label>
            <input id="image" type="file" accept=".png, .jpeg" ref={imageRef} />
            {errors.image && <div>{errors.image}</div>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
