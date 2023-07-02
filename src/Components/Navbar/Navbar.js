import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import logo from '../../Assets/logo-2.svg'
import '../../App.css'
import { useSelector, useDispatch } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter, Routes, Route,Link, useNavigate } from 'react-router-dom';
import { delCounter } from "../../Store/Counter";





const Header = () => {
  const[price, setPrice] =  useState(0)
  console.log(price);
  const counter = useSelector(state => state.counter.cart)
  const dispatch = useDispatch();

  let history = useNavigate()
  const historyDelet = () =>{
    history("/")
  }

  
  const removeItem = (item) => {
    dispatch(delCounter(item));
  };


    const total = () =>{
      let price = 0;
      counter.map((item,k)=>{
        price = item.price + price
      })
      setPrice(price)
    }

    useEffect(()=>{
      total()
    },[total])
  
  return (
    <Navbar bg="light" variant="dark" expand="lg" className="sticky-top">
      <Container className="my-3">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="d-flex justify-content-end">

          <Form className="d-flex mx-3">
            <Form.Control type="text" placeholder="Search" className="me-2" />
            <Button variant="outline-dark" className="srchbtn">Search</Button>
          </Form>
          <div>
      <FaShoppingCart size={20}/>
      <span class="badge-count">{counter.length}</span>
      <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:"300px"}}>
       
       {
        counter.map((item,id)=>{
          return(
              <>
              <tr>
                <td>
                 <Link to={`/ProductPage/${item.id}`}> <img src={item.thumbnail} style={{width:"5rem"}}/></Link>
                </td>
                <td>
                 <p>{item.title}</p> 
                 <p>Rs{item.price}</p>
                 <p>Quanity{item.quantity}</p>
                 
                </td>
                <i onClick={()=> removeItem(item.id)}><FaShoppingCart size={20}/>{historyDelet}</i>
              </tr>
              
              </>
          )
        })
       }
        <h3>{price}</h3>
      </Dropdown.Menu>
    </Dropdown>
    </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
