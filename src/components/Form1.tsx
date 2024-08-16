import { useRef, FormEvent } from 'react';

function Form1() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (inputRef.current) {
      alert(`Name: ${inputRef.current.value}`);
    }
  }

  return (
    <div className="modal_window ">
      <div className="wrapper_form">
        <div className="form_header">
          <div>
            <h1>FORM 1</h1>
            <p>Create a form:</p>
          </div>

          <div className="close_modal"></div>
        </div>

        <div className="form_body">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" ref={inputRef}></input>
            </label>

            <label>
              Age:
              <input type="number"></input>
            </label>

            <label>
              Email:
              <input type="email" />
            </label>

            <label>
              Password:
              <input type="password" />
            </label>

            <label>
              Confirm password:
              <input type="password" />
            </label>

            <label>
              Gender:
              <div>
                <label className="radio_button">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    // checked={gender === 'male'}
                    // onChange={e => setGender(e.target.value)}
                  />
                  Male
                </label>

                <label className="radio_button">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    // checked={gender === 'female'}
                    // onChange={e => setGender(e.target.value)}
                  />
                  Female
                </label>
              </div>
            </label>

            <label>
              Message:
              <textarea />
            </label>

            <button className="button_submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form1;
