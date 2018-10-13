import React, { Component } from 'react';
import {Tabs, Tab, Thumbnail} from "react-bootstrap";
import {Modal, Button} from "react-bootstrap";
import Card from "../../components/Card";
import Column from "../../components/Column";
import Container from "../../components/Container";
import Row from "../../components/Row";
import cards from "../../cards.js";
import API from "../../utils/API";

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      key: 1,
      cards,
      show: false,
      saved: []
    };
  }

  handleSelect(key) {
    this.setState({ key });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleHide = () => {
    this.setState({ show: false });
  }

  getAllSaved = () =>{
    API.getdbProjects()
    .then(res => this.setState({
      saved: [...res.data]
    }))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <Container>
      <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab-example"
      >
        <Tab eventKey={1} title="My Projects">
        <Container>
          <Row>
            {this.state.cards.map(card => (
              <Column key={card.id}>
                <Card
                  id={card.id}
                  image={card.image}
                  handleShow={this.handleShow}
                />
              </Column>
            ))}
          </Row>
        </Container>
        </Tab>
        <Tab eventKey={2} title="My Collaborations">
        <Container>
          <Row>
            {this.state.cards.map(card => (
              <Column key={card.id}>
                <Card
                  id={card.id}
                  image={card.image}
                  handleShow={this.handleShow}
                />
              </Column>
            ))}
          </Row>
        </Container>
        </Tab>
        <Tab eventKey={3} title="Other Projects">
        <Container>
          <Row>
              {this.state.saved.length ? (
                <Column>
                  {this.state.saved.map((saved) => (
                    <Thumbnail
                    key={saved._id}
                    src={saved.imageUrl}
                    >
                    <h3>{saved.title}</h3>
                    <p>{saved.location}</p>
                    </Thumbnail>
                  ))}
              
              </Column>
              ) : (
                <h3>No projects </h3>
              )}
          </Row>
        </Container>
        </Tab>
      </Tabs>
      <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum
              dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis
              laudantium quibusdam quidem corporis architecto veritatis. Ex
              facilis minima beatae sunt perspiciatis placeat. Quasi corporis
            </p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
            </Container>
      </div>
    );
  }
}

export default Dashboard;