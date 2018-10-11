import React, { Component } from "react";
import { TextArea, Input, FormBtn} from "../../components/Form";
import Column from "../../components/Column";
import Container from "../../components/Container";
import Row from "../../components/Row";
import DatePicker from "react-datepicker";
import moment from "moment";
import 'react-datepicker/dist/react-datepicker.css';
import API from "../../utils/API";
import axios from "axios";

class AddProject extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        show: false,
        title: "",
        description: "",
        location: "",
        startDate: null,
        endDate: null,
        imageUrl: "",
        message: "",
        loading: false
      }
    }

    handleChange = ({startDate, endDate}) => {
      startDate = startDate || this.state.startDate
      endDate = endDate || this.state.endDate
      if (startDate.isAfter(endDate))
      {
          endDate = startDate
      }

      this.setState({ startDate, endDate})
  }

    handleStart = (startDate) => {
      this.handleChange({ startDate })
  }

  handleEnd = (endDate) => {
      this.handleChange({ endDate })
  }
  
    dataChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  createProject = (e) => {

      e.preventDefault();

      const title = this.state.title
      const description = this.state.description
      const location = this.state.location
      const startDate = this.state.startDate
      const endDate = this.state.endDate
      const imageUrl = this.state.imageUrl
   
      const userInput = {
        title,
        description,
        location,
        startDate,
        endDate,
        imageUrl
      }

      API.createProject({
        userInput
      })
      .then(res => {
        this.setState({
          loading:false,
          message: response.userInput
        })
      })
      .catch(err => {
        this.setState({
          loading: false
        })
      })
  }

    // postData = (e) => {
    //   e.preventDefault();

    //   const title = this.state.title
    //   const description = this.state.description
    //   const location = this.state.location
    //   const startDate = this.state.startDate
    //   const endDate = this.state.endDate
    //   const imageUrl = this.state.imageUrl

    //   this.setState({
    //     loading:true
    //   })

    //   const userInput = {
    //     title,
    //     description,
    //     location,
    //     startDate,
    //     endDate,
    //     imageUrl
    //   }

    //   axios.post(" /t/tt0mq-1539193578/post", userInput)
    //   .then(response => {
    //     this.setState({
    //       loading:false,
    //       message: response.userInput
    //     })
    //   })
    //   .catch(err => {
    //     this.setState({
    //       loading: false
    //     })
    //   })
    // }

    loadOrShowMsg = () => {
      if(this.state.loading)
      {
        return <p> Loading... </p>
      }
      else
      {
        return <p>{this.state.message}</p>
      }
    }
  
    render() {
      return (
        <div>
          <Container>
            <Row>
              <Column>
                <form onSubmit={this.createProject.bind(this)}>
                  <label>
                    Title:
                    <Input
                    value={this.state.title} 
                    name="title" 
                    placeholder="Title (Required)"
                    onChange={this.dataChange.bind(this)} />
                  </label>
                  <label>
                    Description:
                    <TextArea 
                    value={this.state.description}
                    onChange={this.dataChange.bind(this)}
                    name="description" placeholder="Description (Required 1000 Characters)" />
                  </label>
                  <label>
                    Location:
                    <Input 
                    value={this.state.location}
                    onChange={this.dataChange.bind(this)}
                    name="location" placeholder="Address or Postal Code (Required)" />
                  </label>
                  <label>
                    Start Date:
                  <DatePicker
                            className="rounded p-1" 
                            selected={this.state.startDate}
                            selectsStart
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleStart}
                            placeholderText="Start Date"
                          />
                  </label>
                  <label>
                    End Date:
                  <DatePicker
                            className="rounded p-1" 
                            selected={this.state.endDate}
                            selectsEnd
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleEnd}
                            placeholderText="End Date"
                          />
                  </label>
                  <label>
                    Image:
                    <Input 
                    name="imageUrl"
                    onChange={this.dataChange.bind(this)}
                    value={this.state.imageUrl}
                    type="text" placeholder="Enter Image URL" required />
                  </label>
                  
                  {/* <label >
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
                  </label> */}
                  <FormBtn>
                    Post
                  </FormBtn>
                </form>

                {this.loadOrShowMsg()}
              </Column>
            </Row>
          </Container>
        </div>
      )
    }
  }
  
  export default AddProject;