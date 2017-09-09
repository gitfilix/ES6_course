import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        let alternate = "https://cdn3.iconfinder.com/data/icons/faticons/32/picture-01-128.png";
        return (
            <div className="gallery"><h4>Gallery Component</h4>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <div key={index} className="book">
                                <img
                                    src={imageLinks !== undefined ? imageLinks.thumbnail : alternate}
                                    alt="book image preview"
                                    className="book-img"
                                />
                                <div className="book-text ">
                                    {title}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;
