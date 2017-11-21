import React from 'react';
import 'whatwg-fetch'
import { Row, Jumbotron, Button } from 'react-bootstrap';

import { SERVER_URL} from './config';

import Vehicles from './Vehicles';
import AddVehicleForm from './AddVehicleForm';
import headers from './security/headers';

require('./css/garage.css');

class Garage extends React.Component {

  constructor() {
    super();

    this.state = {
      vehicles: [],
      makes: [],
      models: [],
      drivers: [],
    }
  }

  componentDidMount() {
    fetch(SERVER_URL + '/api/vehicle', {
      headers : headers()
    })
    .then(r => r.json())
    .then(json => this.setState({vehicles: json}))
    .catch(error => console.error('Error retrieving vehicles: ' + error));

    fetch(SERVER_URL + '/api/make', {
      headers : headers()
    })
    .then(r => r.json())
    .then(json => this.setState({makes: json}))
    .catch(error => console.error('Error retrieving vehicles: ' + error));

    fetch(SERVER_URL + '/api/model', {
      headers : headers()
    })
    .then(r => r.json())
    .then(json => this.setState({models: json}))
    .catch(error => console.error('Error retrieving vehicles: ' + error));


    fetch(SERVER_URL + '/api/driver', {
      headers : headers()
    })
    .then(r => r.json())
    .then(json => this.setState({drivers: json}))
    .catch(error => console.error('Error retrieving vehicles: ' + error));
  }

  submitNewVehicle = (vehicle) => {
    fetch(SERVER_URL + '/vehicle', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(vehicle)
    }).then(r => r.json())
    .then(json => {
      let vehicles = this.state.vehicles;
      vehicles.push({id: json.id, name: json.name, make: json.make, model: json.model, driver: json.driver});
      this.setState({vehicles});
    })
    .catch(ex => console.error('Unable to save vehicle', ex));
  };

  render() {
    const {vehicles, makes, models, drivers} = this.state;

    const logoutButton = <Button bsStyle="warning" className="pull-right" onClick={this.props.logoutHandler} >Log Out</Button>;

    return <Row>
      <Jumbotron>
        <h1>Welcome to the Garage</h1>
        {logoutButton}
      </Jumbotron>
      <Row>
        <AddVehicleForm onSubmit={this.submitNewVehicle} makes={makes} models={models} drivers={drivers}/>
      </Row>
      <Row>
        <Vehicles vehicles={vehicles} />
      </Row>
    </Row>;
  }
}

export default Garage;