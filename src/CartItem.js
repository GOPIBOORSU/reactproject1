import React from 'react';


class CartItem extends React.Component{
    render(){
        return(
           <div className='cart-item'>
              <div className='left-block'>
                <img style={styles.img} />
              </div>

              <div className='right-block'>
                 <div style={{fontSize:25}}>  phone</div>
                 <div style={{color:"#777"}}>  Rs 999</div>
                 <div style={{color:"#ccc"}}> Qty: 1</div>
                 <div className='cart-item-actions'>

                 </div>
              </div>
           </div>
     )
        

    }
}
const styles={
    img:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;