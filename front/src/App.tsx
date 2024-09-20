import React from 'react';
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import List from './modules/list';
import Add from './modules/add';

function PageNotFound() {
  return (
    <Row className="App-main-row">
        <Col xxl={2} xl={2} lg={2} className="d-none d-sm-none d-md-none d-lg-block d-xl-block"></Col>
        <Col lg={8} xl={8} className="d-flex justify-content-center align-items-center w-100 h-100 p-3" style={{minHeight: '200px'}}>
          <Icon.FileBreak size={70} /><div style={{marginLeft: '15px'}}>Страница не найдена!</div>
        </Col>
        <Col xxl={2} xl={2} lg={2} className="d-none d-sm-none d-md-none d-lg-block d-xl-block"></Col>
    </Row>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Row className='App-navbar App-main-row'>
        <Col lg={2} xl={2}></Col>
        <Col lg={8} xl={8}>
        <Navbar expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item><NavLink to="/" className="nav-link"><Icon.List /> Список</NavLink></Nav.Item>
            <Nav.Item><NavLink to="/add" className="nav-link"><Icon.PlusSquare /> Добавить</NavLink></Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        </Col>
        <Col lg={2} xl={2}></Col>
      </Row>
      <Routes>
        <Route index element={<List open={true} />} />
        <Route path="/add" element={<Add open={true} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Row className="App-navbar App-main-row p-4 text-center">
        <Col lg={2} xl={2}></Col>
        <Col xl={8}><span className="badge bg-light text-dark">Тестовый сайт</span> <span className="badge bg-info">React</span> <span className="badge bg-danger">Laravel</span></Col>
        <Col lg={2} xl={2}></Col>
      </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
