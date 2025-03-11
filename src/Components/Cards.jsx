import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
 const Cards = ( props) => {
  console.log("props:", props)
  return (
    <div className="flex justify-center   h-7">
    <Card 
      className="text-center"
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  </div>
  
   
  )
}
export default Cards;
