
import React, { Component, Fragment } from "react";
import fetch from 'node-fetch';

class   AddressComponent extends Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: ""
        };
      }


      onChange = async (e: { currentTarget: { value: any; }; }) => {
        const userInput ="monthyon";
        // const response = await fetch("https://api-adresse.data.gouv.fr/search/?q="+userInput.toLowerCase()+"&type=housenumber&autocomplete=1");
        // const body = await response.json()
        // console.log(body);
        const { suggestions} = this.props;
       
    
        const filteredSuggestions = suggestions.filter(
            (          suggestion: string) =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions,
          showSuggestions: true,
          userInput: e.currentTarget.value
        });
      };

      onClick = (e: { currentTarget: { innerText: any; }; }) => {
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: e.currentTarget.innerText
        });
      };

      onKeyDown = (e: { keyCode: number; }) => {
        const { activeSuggestion, filteredSuggestions } = this.state;
    
        if (e.keyCode === 13) {
          this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion]
          });
        } else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }
          this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
          if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
          }
          this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
      };


      render(){
        const {
          onChange,
          onClick,
          onKeyDown,
          state: {
            activeSuggestion,
            filteredSuggestions,
            showSuggestions,
            userInput
          }
        } = this;
    ////class="suggestions"
        let suggestionsListComponent;
        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
              suggestionsListComponent = (
                <ul className="suggestions"> 
                  {filteredSuggestions.map((suggestion: any, index: any) => {
                    let className;
      
                    // Flag the active suggestion with a class
                    if (index === activeSuggestion) {
                      className = "suggestion-active";
                    }
                    return (
                      <li className={className} key={suggestion} onClick={onClick}>
                        {suggestion}
                      </li>
                    );
                  })}
                </ul>
              );
            } else {
              suggestionsListComponent = (
                <div className="no-suggestions">
                  <em>No suggestions available.</em>
                </div>
              );
            }
          }
          return (
            <Fragment>
              <input
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={userInput}
              />
              {suggestionsListComponent}
            </Fragment>
          );
        }
     
}

export default AddressComponent;