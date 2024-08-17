import { Link } from 'react-router-dom';

function Form2() {
  return (
    <div className="modal_window ">
      <div className="wrapper_form">
        <div className="form_header">
          <div>
            <h1>FORM 2</h1>
            <p>Create a form:</p>
          </div>

          <Link to="/" className="close_modal" />
        </div>

        <div className="form_body">
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="enter your name"
                // value={value}
                // onChange={update}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form2;
