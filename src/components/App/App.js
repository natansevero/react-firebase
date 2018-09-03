import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';

import './App.css'

import { DataTable } from '../DataTable/DataTable'

import FirebaseService from '../../services/FirebaseService';

const styles = {
    root: {
        flexGrow: 1,
    },
}

class App extends Component {
    state = {
        data: [
            {
                key: 'tehjsakd',
                temperatura: 'asfsdf',
                umidade: 'sdfsdfsd',
                cliente: 'fsafdsf',
                data: 'fsfdsf'
            }
        ]
    }

    componentDidMount() {
        FirebaseService.getDataList('leituras', (dataReceived) => {
            this.setState({ data: dataReceived })
        })
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <React.Fragment>
                    <AppBar position='static'>
                        <Toolbar>
                            <Typography tyṕe='title' color='inherit'>
                                My Weather App
                                </Typography>
                        </Toolbar>
                    </AppBar>
                    <DataTable data={this.state.data} />
                </React.Fragment>
            </div>
        )
    }
}

export default withStyles(styles)(App)