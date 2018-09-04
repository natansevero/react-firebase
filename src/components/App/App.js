import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom'
import { urls, privateUrls } from '../../utils/urlUtils'

import './App.css'

import { DataTable } from '../DataTable/DataTable'
import { Welcome } from '../Welcome/Welcome'
import Add from '../Add/Add'

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
                    <Card style={{ margin: '50px' }}>
                        <CardContent>
                            <Route exact
                                path={urls.home.path}
                                render={(props) => <Welcome {...props} />}
                            />

                            <Route exact
                                path={urls.data.path}
                                render={(props) => <DataTable {...props} data={this.state.data} />}
                            />

                            <Route exact
                                path={urls.add.path}
                                render={(props) => <Add {...props} />}
                            />

                            <Route exact
                                path={privateUrls.edit.path}
                                render={(props) => <Add {...props} />}
                            />
                        </CardContent>
                    </Card>
                </React.Fragment>
            </div>
        )
    }
}

export default withStyles(styles)(App)