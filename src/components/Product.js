import React,{Component} from 'react';
class Product extends Component{
    // constructor(props){
    //     super(props);
    //     console.log(props);
    //     this.onAddToCart=this.onAddToCart.bind(this);
    // }
    // onAddToCart(){
    //     alert( this.props.name+' and '+this.props.price)
    // }
    onAddToCart=()=>{
        alert( this.props.name+' and '+this.props.price)
    }
    render(){
        return(
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="thumbnail">
                            
                            <div className="caption">
                                <h3>{this.props.name}</h3>
                                <p>
                                    {this.props.price}
                                </p>
                            
                               <button type="button" className="btn btn-lg btn-default" onClick={this.onAddToCart}>Buynow</button>
                               
                            </div>
                        </div>
                    </div>
        );
    }
}
export default Product;
