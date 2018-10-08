import React, { Component } from "react";
import { TextArea, Input,FormBtn } from "../../components/Form";
import Column from "../../components/Column";
import Container from "../../components/Container";
import Row from "../../components/Row";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

class AddProject extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        // startDate: null,
        // endDate: null,
        show: false,
        userInput: {}
      }
    }
  
    handleShowRadioChange = () => {
      this.setState({ show: true });
    }
  
    handleHideRadioChange = () => {
      this.setState({ show: false });
    }
  
    handleFormValidation = () => {
        alert("form submitted");
    }
  
    render() {
      return (
        <div>
          <Container>
            <Row>
              <Column>
                <form style={{ display: "block" }}>
                  <label>
                    Title:
                    <Input
                    value={this.state.userInput.title} 
                    name="title" 
                    placeholder="Title (Required)" />
                  </label>
                  <label>
                    Description:
                    <TextArea 
                    value={this.state.userInput.description}
                    name="description" placeholder="Description (Required 1000 Characters)" />
                  </label>
                  <label>
                    Location:
                    <Input 
                    value={this.state.userInput.location}
                    name="location" placeholder="Address or Postal Code (Required)" />
                  </label>
                  <label>
                    <DateRangePicker
                      startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                      value={this.state.userInput.startDate}
                      startDateId="start_id" // PropTypes.string.isRequired,
                      endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                      value={this.state.userInput.endDate}
                      endDateId="end_id" // PropTypes.string.isRequired,
                      onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                      focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                      onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    />
                  </label>
                  <label>
                    Image:
                    <Input 
                    value={this.state.userInput.imageUrl}
                    type="text" name="imageUrl" placeholder="Enter Image URL" required />
                  </label>
                  <label >
                    Compensation: {' '}
                    <form style={{ display: "inlineBlock" }}>
                      <label style={{ marginRight: "80px" }}>
                        Paid
                      <Input 
                      type="radio" name="radioGroup" onClick={() => this.handleShowRadioChange()} />
                      </label>
                      <label>
                        Not Paid
                        <Input type="radio" name="radioGroup" onClick={() => this.handleHideRadioChange()} />
                      </label>
                    </form>
                  </label>
                  <label show={this.state.show}>
                    Amount:
                      <Input type="number" name="amount" />
                  </label>
                  <FormBtn 
                  handleFormValidation={this.handleFormValidation}
                  >
                    Post
                  </FormBtn>
                </form>
              </Column>
            </Row>
          </Container>
        </div>
      )
    }
  }
  
  export default AddProject;