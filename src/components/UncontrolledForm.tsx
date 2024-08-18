import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setUncontrolledDataItem } from './store';
import { validationSchema } from './validationSchema';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { IErrors, IFormValues } from '../types/types';
import PasswordStrength from './PasswordStrength';

const UncontrolledForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
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
      image: imageRef.current?.files || null,
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
      const { image, ...values } = validatedValues;
      if (image) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          dispatch(setUncontrolledDataItem({ ...values, image: base64String }));
          navigate('/');
        };
        reader.readAsDataURL(image[0]);
      } else {
        dispatch(setUncontrolledDataItem(values));
        navigate('/');
      }
    }
  };

  return (
    <div className="modal_window ">
      <div className="wrapper_form">
        <form onSubmit={handleSubmit}>
          <div className="form_header">
            <div>
              <h1>UncontrolledForm</h1>
            </div>

            <Link className="close_modal" to="/" />
          </div>

          <div className="field">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" ref={nameRef} />
            {errors.name && <div className="fieldError">{errors.name}</div>}
          </div>

          <div className="field">
            <label htmlFor="age">Age:</label>
            <input id="age" type="number" ref={ageRef} />
            {errors.age && <div className="fieldError">{errors.age}</div>}
          </div>

          <div className="field">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" ref={emailRef} />
            {errors.email && <div className="fieldError">{errors.email}</div>}
          </div>

          <div className="field">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              ref={passwordRef}
              onChange={e => setPassword(e.target.value)}
            />
            {errors.password && <div className="fieldError">{errors.password}</div>}
          </div>
          <PasswordStrength value={password} />

          <div className="field">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input id="confirmPassword" type="password" ref={confirmPasswordRef} />
            {errors.confirmPassword && <div className="fieldError">{errors.confirmPassword}</div>}
          </div>

          <div className="field">
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
            {errors.gender && <div className="fieldError">{errors.gender}</div>}
          </div>

          <div className="field">
            <label htmlFor="country">Country:</label>
            <select id="country" ref={countryRef}>
              <option value="">Select a country</option>
              {countries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && <div className="fieldError">{errors.country}</div>}
          </div>

          <div className="field">
            <label htmlFor="image">Upload picture:</label>
            <input
              id="image"
              type="file"
              accept=".png, .jpeg, .jpg"
              multiple={false}
              ref={imageRef}
            />
            {errors.image && <div className="fieldError">{errors.image}</div>}
          </div>

          <div className="field">
            <label htmlFor="termsAccepted">Accept Terms and Conditions</label>
            <input id="termsAccepted" type="checkbox" ref={termsAcceptedRef} />
            {errors.termsAccepted && <div className="fieldError">{errors.termsAccepted}</div>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UncontrolledForm;
