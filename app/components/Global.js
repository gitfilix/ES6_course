import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends Component {
    search(){
        console.log('searching');
    }


    // render FormGroup
    render(){
        return (
            <div className="global">
                <h3>Book Explorer</h3>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Seach for a Book"
                        />

                        <InputGroup.Addon onClick={()=> this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>

                    </InputGroup>
                </FormGroup>
            </div>
        )
    }
}

export default Global;
