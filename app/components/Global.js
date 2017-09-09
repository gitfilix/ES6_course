import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './Gallery';

class Global extends Component {
    constructor(props) {
        super(props);
        //state: search-string
        this.state = {
            query: '',
            items: []
        }
    }



    // get books from googleapis
    // template string `
    search() {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'} )
            .then(response => response.json())
            .then(json => {
                let { items } = json;
                this.setState({items})
                console.log('items: ', items);
            });

        // console.log(items);
        console.log('searching: ', this.state.query);
    }


    // render FormGroup: input text field and searchButton
    render(){
        return (
            <div className="global">
                <h3>Book Explorer</h3>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Seach for a Book"
                            onChange={event => this.setState({
                                query: event.target.value
                            })}
                            onKeyPress={event => {
                                if (event.key === "Enter") {
                                    console.log('Return pressed');
                                    this.search();
                                }
                            }}
                        />

                        <InputGroup.Addon onClick={()=> this.search()}>
                            <Glyphicon className="searchButton" glyph="search"></Glyphicon>
                        </InputGroup.Addon>

                    </InputGroup>
                </FormGroup>
                <Gallery items={this.state.items} />
            </div>
        )
    }
}

export default Global;
