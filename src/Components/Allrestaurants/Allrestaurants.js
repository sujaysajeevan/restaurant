import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import RestaurantCard from '../RestaurantCard';
import { base_url } from '../base_url';

function Allrestaurants() {

  //state for holding all restaurant arrays
  const [allitems,setAllItems]=useState([])
  
  //code for api calls
  const fetchData=async()=>{
    const response=await axios.get(`${base_url}/restaurants`)
    // console.log(response.data);
    setAllItems(response.data)
  }
  console.log(allitems);//array(10)

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <Row>
      {
        allitems.map(item=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            {/* destructuring */}
          <RestaurantCard restaurants={item}/>
          </Col>
        ))
      }
    </Row>
  )
}

export default Allrestaurants