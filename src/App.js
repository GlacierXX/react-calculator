import React, { Component } from 'react';
import NumberContainer from './container/NumberContainer';
import OperatorContainer from './container/OperatorContainer';
import ComputeContainer from './container/ComputeContainer';
import Print from './component/Print';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: '0',
      compute: null,
      temp: null,
      reset: false
    };
  }
  parseOperator(operator) {
    let result = this.state.result;
    if (operator === 'C') {
      return {
        result: '0',
        compute: null,
        temp: null
      };
    }
    if (operator === '+/-') {
      return {
        result: `${-Number(result)}`
      };
    }
    if (operator === '%') {
      return {
        result: `${Number(result)/100}`
      };
    }
  }
  parseNumber(number) {
    let { result, reset } = this.state;
    if (!reset && result.length === 9) {
      return result;
    }
    if (number !== '.' && result === '0') {
      return `${number}`;
    }
    if (number === '.' && result.indexOf('.') !== -1) {
      return result;
    }
    if (reset) {
      return `${number}`;
    }
    return `${result}${number}`;
  }
  parseCompute(compute) {
    let { result, temp } = this.state;
    const newResult = this.computeResult();
    if (compute === '=') {
      return {
        temp: null,
        compute: compute,
        result: temp === null? result: newResult,
        reset: true
      }
    } else {
      if (temp === null) {
        return {
          temp: result,
          compute: compute,
          reset: true
        };
      } else {
        return {
          temp: newResult,
          compute: compute,
          result: newResult,
          reset: true
        };
      }
    }
  }
  computeResult() {
    let { result, temp, compute } = this.state;
    let computeResult;
    if (temp === null) {
      return;
    }
    if (compute === '+') {
      computeResult = `${Number(temp) + Number(result)}`;
    }
    if (compute === '-') {
      computeResult = `${Number(temp) - Number(result)}`;
    }
    if (compute === '×') {
      computeResult = `${Number(temp) * Number(result)}`;
    }
    if (compute === '÷') {
      computeResult = `${Number(temp) / Number(result)}`;
    }
    if (computeResult.length > 9) {
      return Number(computeResult).toExponential(3);
    } else {
      return computeResult;
    }
  }
  handleOperatorClick(operator) {
    this.setState(this.parseOperator(operator));
  }
  handleNumberClick(number) {
    this.setState({
      result: this.parseNumber(number),
      reset: false
    });
  }
  handleComputeClick(compute) {
    this.setState(this.parseCompute(compute));
  }
  render() {
    return (
      <div className="App">
        <Print result={ this.state.result }/>
        <div className="edit">
          <OperatorContainer handleOperatorClick={ this.handleOperatorClick.bind(this) }/>
          <NumberContainer handleNumberClick={ this.handleNumberClick.bind(this) }/>
        </div>
        <ComputeContainer handleComputeClick={ this.handleComputeClick.bind(this) }/>
      </div>
    );
  }
}

export default App;
