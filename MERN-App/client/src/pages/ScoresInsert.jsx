import React, { Component } from "react";
import api from "../api";
import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1"
})``;

const Wrapper = styled.div.attrs({
  className: "form-group"
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control"
})`
  margin: 5px;
`;
const Button = styled.button.attrs({
  className: `btn btn-primary`
})`
       margin 15px 15px 15px 5px;`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`
})`
       margin 15px 15px 15px 5px;`;

class ScoresInsert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hole: "",
      strokes: "",
      par: ""
    };
  }

  //  getHolePar = (
  handleChangeInputName = async event => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleChangeInputHole = async event => {
    const hole = event.target.validity.valid
      ? event.target.value
      : this.state.hole;

    this.setState({ hole });
  };

  handleChangeInputStrokes = async event => {
    const strokes = event.target.value;
    this.setState({ strokes });
  };

  handleIncludeScore = async () => {
    const { name, hole, strokes, par } = this.state;
    const payload = { name, hole, strokes, par };

    await api.insertScore(payload).then(res => {
      window.alert("Score Added ");
      this.setState({
        name: "open",
        hole: "0",
        strokes: "0",
        par: "0"
      });
    });
  };

  render() {
    // let par = 4;
    const { name, hole, strokes } = this.state;
    return (
      <Wrapper>
        <Title> Create Score </Title>
        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>Hole: </Label>
        <InputText
          type="number"
          step="0.1"
          lang="en-US"
          min="1"
          max="18"
          value={hole}
          onChange={this.handleChangeInputHole}
        />

        <Label>Strokes: </Label>
        <InputText
          type="number"
          step="0.1"
          lang="en-US"
          min="1"
          max="18"
          value={strokes}
          onChange={this.handleChangeInputStrokes}
        />

        <Button onClick={this.handleIncludeScore}> Add Score</Button>
        <CancelButton href={"/score/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default ScoresInsert;
