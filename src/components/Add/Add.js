import React, { Component } from 'react'
import { Button, TextField, Typography } from '@material-ui/core'
import FirebaseService from "../../services/FirebaseService";
import { urls } from "../../utils/urlUtils";
import { withRouter } from "react-router-dom";

class Add extends Component {
    state = {id: null, temperatura: '', umidade: '', data: '', cliente: ''};

    componentWillMount = () => {
        const { id } = this.props.match.params;

        if (!(id === undefined || !id)) {
            this.setState({ id });
            FirebaseService.getUniqueDataBy('leituras', id, 
                (data) => this.setState({ ...data })
            );
        }
    }

    submit = (event) => {
        event.preventDefault();

        const { temperatura, umidade, data, cliente } = this.state;

        const objToSubmit = {
            temperatura, umidade, data, cliente
        }

        if (this.props.match.params.id === undefined) {
            FirebaseService.pushData('leituras', objToSubmit);
        } else {
            FirebaseService.updateData(this.props.match.params.id, 'leituras', objToSubmit)
        }

        this.props.history.push(urls.data.path);
    }

    render = () => (
        <React.Fragment>
            <Typography variant="headline" component="h2">Add New</Typography>

            <form onSubmit={this.submit}>
                <TextField className="input-field"
                    type="text"
                    value={this.state.temperatura}
                    label="Temperature"
                    required
                    onChange={e => this.setState({ temperatura: e.target.value }) } />


                <TextField className="input-field"
                    type="text"
                    label="Humidity"
                    value={this.state.umidade}
                    required
                    onChange={e => this.setState({ umidade: e.target.value })} />


                <TextField className="input-field"
                    type="text"
                    label="Date"
                    value={this.state.data}
                    required
                    onChange={e => this.setState({ data: e.target.value })} />


                <TextField className="input-field"
                    type="email"
                    label="Client"
                    value={this.state.cliente}
                    required
                    onChange={e => this.setState({ cliente: e.target.value })} />

                <Button type="submit"
                    style={{ marginTop: '20px', display: 'inline-block' }}>
                    Add
                </Button>
            </form>
        </React.Fragment>
    )
}

export default withRouter(Add)