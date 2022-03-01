import React, { Component } from "react";
import ReactTable from "react-table-6";
import api from "../api";

import styled from "styled-components";
import "react-table-6/react-table.css";
/* ******** /import apis from "../api";

const Wrapper = styled.div`
  padding: 40px 40px 40px;
`;

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

const Delete = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

class UpdateScore extends Component {
  updateUser = event => {
    console.log("calling istself from within the  update score class");
    event.preventDefault();
    window.location.href = `/score/update/${this.props.id}`;
  };
  render() {
    console.log("...calling the update score class");

    return <Update onClick={this.updateUser}> UpDate </Update>;
  }
}

class DeleteScore extends Component {
  updateUser = event => {
    console.log(this.props._id, "... in delete scrore class");
    event.preventDefault();
    if (
      window.confirm(
        `Do you want to delete this Score ${this.props._id} permenantly?`
      )
    ) {
      api.deleteScoreById(this.props.id);
      window.location.reload();
    }
  };
  render() {
    return <Delete onClick={this.updateUser}> Delete.. </Delete>;
  }
}

class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [],
      columns: [],
      isLoading: false
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    await api.getAllPlayers().then(scores => {
      this.setState({
        scores: scores.data.data,
        isLoading: false
      });
    });
  };

  render() {
    const { scores, isLoading } = this.state;
    const columns = [
      {
        Header: "ID",
        accessor: "_id",
        filterable: true
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: true
      },
      {
        Header: "eMail",
        accessor: "email",
        filterable: true
      },
      {
        Header: "Strokes",
        accessor: "strokes",
        filterable: true
      },

      //vvvv
      {
        Header: "",
        accessor: "",
        Cell: function(props) {
          return (
            <span>
              <DeleteScore id={props.original._id} />
            </span>
          );
        }
      },

      {
        Header: "",
        accessor: "",
        Cell: function(props) {
          return (
            <span>
              <UpdateScore id={props.original._id} />
            </span>
          );
        }
      }
    ];

    let showTable = true;
    if (!scores.length) {
      showTable = false;
      console.log(" Scores not returned...");
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
    );
  }
}
****** */


class PlayersList extends Component {
    render() {
        return (
            <div>
                <p>
                    This page display all the league players...
                </p>
            </div>
        )
    }
}

export default PlayersList;
