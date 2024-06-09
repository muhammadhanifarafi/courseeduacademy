import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Router>
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;