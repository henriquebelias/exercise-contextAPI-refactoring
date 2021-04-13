import React, { createContext } from 'react';

export const CarContext = createContext();

export class CarProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    };
  }

  moveCar = (car) => {
    this.setState((prevState) => ({
      cars: {
        ...prevState.cars,
        [car]: !prevState.cars[car],
      }
    }))
  }

  render() {
    const { children } = this.props;
    return (
      <CarContext.Provider value={{ ...this.state, moveCar: this.moveCar }}>
        {children}
      </CarContext.Provider>
    );
  }
}
