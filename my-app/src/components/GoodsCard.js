import React from "react"
 


class GoodsCard extends React.Component  {

    constructor(props) {
        super(props);
        this.price = props.product.price;
        this.name = props.product.name;
        this.image = props.product.image;
      }
      render(){
        return (
            <div className = "product">
                <img className = "productImg" src={this.image}/>
            <h2>{this.name}</h2> <span>{this.price} грн</span>

            </div>
            )}

}
 
export default GoodsCard