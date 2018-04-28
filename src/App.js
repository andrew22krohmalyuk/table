import React, { Component } from 'react';
import './App.scss';


const users = [
    {
      name: "John",
      last: "Doe",
      userName: "jonh@doe",
      street: "Baker str"
    } ,
    {
      name: "John",
      last: "Doe",
      userName: "jonh@doe"
    },
    {
        name: "John",
        last: "Doe",
        userName: "jonh@doe"
    },
    {
        name: "John",
        last: "Doe",
        userName: "jonh@doe"
    },
    {
        name: "John",
        last: "Doe",
        userName: "jonh@doe"
    },
    {
        name: "John",
        last: "Doe",
        userName: "jonh@doe"
    },
    {
        name: "John",
        last: "Doe",
        userName: "jonh@doe"
    },
    {
        name: "John",
        last: "Doe",
        userName: "jonh@doe"
    },
    {
        name: "John",
        last: "Doe",
        userName: "jonh@doe"
    },
    {
        name: "John",
        last: "Doe",
        userName: "jonh@doe"
    },
    {
        name: "John",
        last: "Doe",
        userName: "jonh@doe"
    },
    {
        name: "John",
        last: "Doe",
        userName: "jonh@doe"
    },
    {
        name: "John",
        last: "Doe",
        userName: "jonh@doe"
    },
    {
        name: "John",
        last: "Doe",
        userName: "jonh@doe"
    },
    {
      name: "John",
      last: "Doe",
      userName: "jonh@doe"
    },
    {
      name: "John",
      last: "Doe",
      userName: "jonh@doe"
    }
];

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className={"Table"}>
            <div className={"Table__vertical-scroll"}>
              {users.map((item, i) => (
                  <div className={"Table__row"} key={i}>
                      <div className={"Table__item"} scope="row">{(i + 1)}</div>
                      <div className={"Table__item"}>{item.name}</div>
                  </div>
              ))}
          </div>
            <div className={"Table__horizontal-scroll"}>
                {users.map((item, i) => (
                    <div className={"Table__row"} key={i}>
                        <div className={"Table__item"}>{item.last}</div>
                        <div className={"Table__item"}>{item.userName}</div>
                        <div className={"Table__item"}>{item.last}</div>
                        <div className={"Table__item"}>{item.userName}</div>
                    </div>
                ))}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
