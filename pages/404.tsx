const NotFoundPage = () => {
  return (
    <div id="error_page" className="error_page">
      <h1>Oops!</h1>
      <div className="error404">404</div>
      <div className="error_text">Такой страницы нет</div>
      <div className="error_text_home">
        {/* <Link to="/">Вернуться на главную</Link> */}
      </div>
    </div>
  );
};

export default NotFoundPage;
