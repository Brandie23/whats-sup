// CHILD OF ADMIN

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveService } from '../../actions'


class ManageService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: {
        id: 0,
        name: "",
        qty_default: 0,
        qty_remaining: 0,
        unit: "",
        status: "",
        provider_id: "",
        service_type_id: 1
      },
      otherStuff: 'not set'
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


  }

  componentDidMount() {
    if (this.props.provider_id && !this.props.service) { // is an empty service form, with only provider_id known 
      console.log("CDM blank service")
      this.setState({
        service: { provider_id: this.props.provider_id }
      })
    } // else
    if (!this.props.provider_id && this.props.service) {
      console.log("CDM else state.service", this.state.service)
      console.log("CDM else props.service", this.props.service)

      this.setState({
        service: this.props.service
      })
    }
  }

  onChange(e) {
    // console.log("ManageService onchange e.target.value = ", e.target.value)
    console.log("ManageService onchange this.state ", this.state)
    this.setState({
      service: {
        ...this.state.service,
        [e.target.name]: e.target.value
      }
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log("ManageService onsubmit state.service ", this.state.service)

    this.props.saveService(this.state.service);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Service Details:</legend>
            <p>Service ID: {this.state.service.id}</p>
            <p>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="text" onChange={this.onChange} value={this.state.service.name} /></p>

            <p>
              <label htmlFor="qty_default">Quantity Default:</label>
              <input type="text" name="qty_default" onChange={this.onChange} value={this.state.service.qty_default} /></p>

            <p>
              <label htmlFor="qty_remaining">Quantity Remaining:</label>
              <input type="text" name="qty_remaining" id="text" onChange={this.onChange} value={this.state.service.qty_remaining} /> </p>
            <p>
              <label htmlFor="unit">Unit:</label>
              <input type="text" name="unit" id="text" onChange={this.onChange} value={this.state.service.unit} /></p>
            <p>
              <label htmlFor="text">Status:</label>
              <input type="text" name="status" id="text" onChange={this.onChange} value={this.state.service.status} /></p>
            <p>
              <label htmlFor="provider_id">Provider ID:</label>
              <input type="text" name="provider_id" id="text" onChange={this.onChange} value={this.state.service.provider_id} /></p>
            <p>
              <label htmlFor="service_type_id">Service Type ID:</label>
              <input type="text" name="service_type_id" id="text" onChange={this.onChange} value={this.state.service.service_type_id} /></p>


            <button type="submit">Submit</button>
          </fieldset>


        </form>

      </div>


    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveService: serviceInfo => {
      return dispatch(saveService(serviceInfo));
    }
  }
}

export default connect(null, mapDispatchToProps)(ManageService)