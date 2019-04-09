import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItem,addQuantity,subtractQuantity } from './actions/cartActions';

class Cart extends Component
{ 
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }

    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems =  this.props.items.map(item=>{
            return(
                    <div className="Cart" key={item.id}>
                        <img src={item.image} alt={item.image} />
                       
                        <p>{item.name}</p>
                        <p>Price: ₹ {item.price}</p> 
                    
                        {item.quantity === 0 ? (
                        <button className="plus-minus" onClick={()=>{this.handleSubtractQuantity(item.id)}} disabled>-</button>
                        ) : 
                        <button className="plus-minus" onClick={()=>{this.handleSubtractQuantity(item.id)}}>-</button>
                        }

                        {" "}

                        {item.quantity}

                        {" "}

                        <button className="plus-minus" onClick={()=>{this.handleAddQuantity(item.id)}}>+</button>

                        <button className="remove-all" onClick={()=>{this.handleRemove(item.id);}}>Remove From Cart</button>
                    
                    </div>
            );
                });
            
            let totalItems = this.props.total;
            return(
                <div className="Cart-return">
                    <h2>Cart Details:</h2>
                        {addedItems}
                        <p className="total-cart-price">Grand Total:</p>
                        <p className="total-cart-price">{totalItems}</p>
                </div>
            );
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total:state.total,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)