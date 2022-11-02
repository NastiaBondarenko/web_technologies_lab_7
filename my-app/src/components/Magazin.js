import React from "react"
import GoodsCard from "./GoodsCard"

class Products{
    constructor(name, image, price){
        this.image = image;
        this.name = name;
        this.price = price;
    }
}

class Magazin extends React.Component  {
    constructor(props) {
        super(props);
        this.countProduct = 4;
        this.products = [];
        this.prices = [15, 20, 32, 17];
        this.images = ["apple.png", "grape.png", "peach.png", "pear.png" ];
        this.name = ["Apple", "Grade", "Peach", "Pear"]
      }

      generateProduct(){
        for(let i = 0 ; i < this.countProduct; i++){
            this.products.push(new Products(this.name[i], this.images[i], this.prices[i]))
        }
      }

      render(){
        this.generateProduct();
        return (
            <div id = "magazin">
                
                {this.products.map((product) => 
                <GoodsCard product = {product} /> )}
            </div>
        )}

}
 
export default Magazin