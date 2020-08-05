import React from "react";
import MenuItem from "../menu/MenuItem"
import "./directory.style.scss"

class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections:[{
                title:"gifts",
                imageUrl:"http://www.ruskniga.com/media/catalog/category/figurki_farfor.jpg",
                id:1,
                linkUrl:"gifts"
            },
               { title:"books",
                imageUrl:"http://www.ruskniga.com/media/catalog/category/homepage/categoryID-472.jpg",
                id:2,
                linkUrl:"books"
            },
            {
                title:"kitchen",
                imageUrl:"http://www.ruskniga.com/media/catalog/category/homepage/categoryID-531.jpg",
                size:"large",
                id:3,
                linkUrl:"kitchen"
            }]
        };
    }

render(){
    return(
        <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
}
}

export default Directory;