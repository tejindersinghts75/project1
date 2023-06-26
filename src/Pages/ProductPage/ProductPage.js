import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addToCart } from '../../Store/Counter'
import {ItemDecrease} from '../../Store/Counter'


function ProductPage() {
  const [set, setState]=  useState([])
  console.log(set)
  const counter = useSelector(state => state.counter)
  const  {id} = useParams();
const dispatch = useDispatch()
  const compare = () =>{
    let compareData = counter.filter((item)=>{
      return item.id == id
    })
    setState(compareData)
  }

  useEffect(()=>{
    compare();
  },[id])
  console.log(id);

  const clickToAdd=(item)=>{
    dispatch(addToCart(item))
  }

  const decreaseQuantity=(item)=>{
    dispatch(ItemDecrease(item))
  }
  return (
    <>
      <div className="container mt-2">

        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
          {
            set.map((item)=>{
              return (
                <>
                <div className="items_img">
              <img src={item.thumbnail} alt="" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>  : </p>
                    <p> <strong>Price</strong>  {item.price} </p>
                    <p> <strong>Dishes</strong>  : </p>
                    <p> <strong>Total</strong>  :</p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={()=>decreaseQuantity(item)}>-</span>
                    <span style={{fontSize:22}}>{item.quantity}</span>
                    <span style={{fontSize:24}} onClick={()=>clickToAdd(item)}>+</span>

                    </div>

                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{item.rating} ★	</span></p>
                    <p><strong>Order Review :</strong> <span >{item.somedata}	</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' ></i>	</span></p>
                    <p><strong>Quanity :</strong> <span >{item.quantity}	</span></p>
                  </td>
                </tr>
              </Table>
            </div>
          
                </>
              )
            })
          }
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductPage