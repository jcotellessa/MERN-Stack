import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'
import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 40px   40px 40px;
`

const Update = styled.div`
        color: #ef9b0f;
        cursor: pointer;
`

const Delete = styled.div`
        color: #ef9b0f;
        cursor: pointer;
`

class UpdateScore extends Component {
    UpdateUser = event => {
        event.preventDefault()
        window.location.href = `scores/update/${this.props.id}`
    }
    render() {
        return <Update onclick={this.UpdateUser}> UpDate </Update>
    }
}


class DeleteScore extends Component {
    DeleteUser = event => {
        event.preventDefault()
        if (window.confirm(
            `Do you want to delete this Score ${this.props.id} permenantly?`,
        )
        ) {
            api.deleteScoreById(this.props.id)
            window.location.reload()
        }
    }
    render() {
        return <Delete onlclick={this.DeleteScore}>Delete</Delete>
    }
}


class ScoresList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scores: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllScores().then(scores => {
            this.setState({
                scores: scores.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { scores, isLoading } = this.state
        console.log('TCL: ScoresList -> render -> scores:', scores)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Hole',
                accessor: 'hole',
                filterable: true,
            },
            {
                Header: 'Strokes',
                accessor: 'strokes',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <DeleteScore id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <UpdateScore id={props.original._id} />
                        </span>
                    )
                }
            }
        ]

        let showTable = true
        if (!scores.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={scores}
                        columns={columns}
                        loading={isLoading}
                        deafultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ScoresList
