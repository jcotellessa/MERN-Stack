import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://boston.com">
                <img src={logo} width="50" height="50" alt="samboros.com" />
            </Wrapper>
        )
    }
}

export default Logo