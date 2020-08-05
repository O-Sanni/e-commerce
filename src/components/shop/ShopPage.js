import React from "react";
import SHOP_DATA from "./shop.data"
import CollectionPreview from "../preview-collection/CollectionPreview";


class ShopPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            collections: SHOP_DATA
        }
    }

    render(){
        // distructure this.state
        const {collections}=this.state; 
        return (
            <div className="shop-page"> 
            {
            collections.map(({id, ...otherCollections})=>(
                <CollectionPreview key={id} {...otherCollections} />
            ))}
            </div>
        )
    }
}

export default ShopPage;