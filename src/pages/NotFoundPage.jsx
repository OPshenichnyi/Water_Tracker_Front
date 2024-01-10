import { Link } from "react-router-dom";
const NotFoundPage = () => {
  const linkStyle = {
    color: "#0077ff",
    textDecoration: "none",
    fontSize: "18px",
    marginTop: "20px",
    display: "inline-block",
    padding: "10px 20px",
    border: "1px solid #0077ff",
    borderRadius: "5px",
    backgroundColor: "#fff",
    cursor: "pointer",
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <br />
      <h2>Page Not Found</h2>
      <br />
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <br />
      <Link style={linkStyle} to="/HomePage">
        Return to Home Page
      </Link>
    </div>
  );
};
export default NotFoundPage;
