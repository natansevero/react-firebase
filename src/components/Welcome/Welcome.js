import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { urls } from '../../utils/urlUtils'

export const Welcome = () => {
    return (
        <React.Fragment>
            <Typography variant="headline" component="h2">
                Welcome
            </Typography>
            {
                Object.values(urls).map((url, index) => {
                    return (
                        <Button key={index}
                            component={props =>
                                <Link to={url.path} {...props} />
                            }
                        >
                            {url.name}
                        </Button>
                    )
                })
            }
        </React.Fragment>
    )
}