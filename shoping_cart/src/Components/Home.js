import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addToCart}  from './actions/cartActions';

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="Home" key={item.id}>
                            <img src={item.image} alt={item.name}/>
                            <span className="item-name">{item.name}</span>

                            {item.quantity === 0 ? 
                            (<button className="add-to-cart" onClick={()=>{this.handleClick(item.id)}} disabled>Add To Cart</button>)
                            :
                            (<button className="add-to-cart" onClick={()=>{this.handleClick(item.id)}}>Add To Cart</button>)
                            }
                     
                            <p className="stock">Price: ₹ {item.price}</p>
                            {item.quantity === 0 ? (<p className="stock">Out of stock</p>)
                               :
                            (<p className="stock">In Stock: {item.quantity}</p>) 
                            }
                 </div>
            )
        })

        return(
            <div className="Home-return">
                <h2>Products</h2>
                    {itemList}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)