import { Outlet, useNavigate } from 'react-router-dom';

function Forms() {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate({ pathname: `/form1` });
  };

  return (
    <main>
      <header>
        <h1>FORMS</h1>
        <div className="header_content">
          <button onClick={handleClick}>form 1</button>
          <button>form 2</button>
          <Outlet />
        </div>
      </header>
      <section>
        <div className="left_section_search_result"> sdfsdfsdfsdf</div>
        <div className="right_section_search_result"> sdfs fghfgh fghfgh</div>
      </section>
    </main>
  );
}

export default Forms;
