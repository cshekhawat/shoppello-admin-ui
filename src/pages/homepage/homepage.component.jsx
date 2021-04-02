import React from "react";
import Layout from "../../component/layout/layout.component";
import { Jumbotron } from "react-bootstrap";
function HomePage() {
  return (
    <Layout>
      <Jumbotron
        style={{ margin: "5rem", marginLeft: "38%" }}
        className="text-center"
      >
        <h1>Welcome to Admin Dashboard</h1>
      </Jumbotron>
    </Layout>
  );
}

export default HomePage;
