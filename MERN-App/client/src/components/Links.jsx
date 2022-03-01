import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'Collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    e-League @ Lakeville 
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/score/list" className="nav-link">
                                Scores
                           </Link>
                        </Item>
                        <Item>
                            <Link to="/score/create" className="nav-link">
                                Create Scores
                           </Link>
                        </Item>
                        <Item>
                            <Link to="/score/players" className="nav-link">
                                Players
                           </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}
export default Links