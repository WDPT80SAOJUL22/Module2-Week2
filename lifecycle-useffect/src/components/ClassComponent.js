import React, { Component } from 'react'

class ClassComponent extends Component {

    state = []

    componentDidMount() {
        console.log('Estou montando')
    }

    componentDidUpdate() {
        console.log ('Estou atualizando')
    }

    componentWillUnmount() {
        console.log('Estou sendo desmontado')
    }

    render() {
        return (
            <div>ClassComponent</div>
        )
    }
}

export default ClassComponent
