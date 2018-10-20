// Don't use this yet....

import React, { Component } from 'react';

import './DropDown.css';

class DropDown extends Component {
    constructor() {
        super();
    }

    function renderDropdownButton(title, i) {
        return (
          <DropdownButton
            bsStyle={title.toLowerCase()}
            title={title}
            key={i}
            id={`dropdown-basic-${i}`}
          >
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>
              Active Item
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        );
      }
      
      const buttonsInstance = (
        <ButtonToolbar>{renderDropdownButton}</ButtonToolbar>
      );
      
    render(buttonsInstance);
    
}

export default DropDown;