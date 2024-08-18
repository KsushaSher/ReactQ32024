import { Link, Outlet } from 'react-router-dom';
import { useAppSelector } from './store';

function Forms() {
  const items = useAppSelector(state => state.form.uncontrolledData);
  const items2 = useAppSelector(state => state.form.controlledData);
  return (
    <main>
      <header>
        <h1>FORMS</h1>
        <div className="header_content">
          <Link to="uncontrolled">Uncontrolled form</Link>
          <Link to="controlled">Controlled form</Link>
        </div>
      </header>
      <section>
        <Outlet />

        <div className="left_section_search_result">
          {items?.map(({ image, ...item }) => (
            <div>
              <img src={image} alt="" style={{ width: '100%' }} />
              <pre>{JSON.stringify(item, null, 2)}</pre>
            </div>
          ))}
        </div>
        <div className="right_section_search_result">
          {items2?.map(({ image, ...item }) => (
            <div>
              <img src={image} alt="" style={{ width: '100%' }} />
              <pre>{JSON.stringify(item, null, 2)}</pre>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Forms;
