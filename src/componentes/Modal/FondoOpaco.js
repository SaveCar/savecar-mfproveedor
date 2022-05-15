import React, {Component} from "react";
import styled, {keyframes} from "styled-components";

const keyFrameExampleOne = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;
const BackdropBox = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(22, 31, 39, 0.6);
  z-index: 50;
  animation: ${keyFrameExampleOne} 0.3s ease-in-out 0s;
  cursor:pointer;
`;

class FondoOpaco extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isVisible } = this.props;
        
        return (
            isVisible && (
                <BackdropBox key="fondoOpaco"/>
            )
        );
    }
}

export default FondoOpaco;