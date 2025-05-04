import Styles from "./styles";

function NotFoundScreen() {
  return (
    <Styles>
      <section className="content">
        <h1 className="title">Page 404: Not Found</h1>
        <a
          href="/"
          className="return_link">
          Back To Home {"->"}
        </a>
      </section>
    </Styles>
  );
}

export default NotFoundScreen;
