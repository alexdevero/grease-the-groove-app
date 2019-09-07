import * as React from 'react'
import styled from 'styled-components'

interface CheckboxInterface {
  id?: string;
  label?: string;
}

const LabelEl = styled.label`
  margin-bottom: 0;
  user-select: none;
  cursor: pointer;

  & .invisible {
    position: absolute;
    z-index: -1;
    width: 0;
    height: 0;
    opacity: 0;
  }

  & input:checked {
    & + .checkbox {
      border-color: #00a8ff;

      svg {
        path {
          fill: #00a8ff;
        }

        polyline {
          stroke-dashoffset: 0;
        }
      }
    }
  }

  &:hover {
    .checkbox {
      svg {
        path {
          stroke-dashoffset: 0
        }
      }
    }
  }

  .checkbox {
    position: relative;
    top: 2px;
    float: left;
    margin-right: 8px;
    width: 16px;
    height: 16px;
    border: 2px solid #c8ccd4;
    border-radius: 4px;

    svg {
      position: absolute;
      top: -2px;
      left: -2px;

      path {
        fill: none;
        stroke: #00a8ff;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 71px;
        stroke-dashoffset: 71px;
        transition: all .6s ease;
      }

      polyline {
        fill: none;
        stroke: #fff;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 18px;
        stroke-dashoffset: 18px;
        transition: all .3s ease;
      }
    }
  }

  & > span {
    color: hsl(0, 0%, 50%);
    pointer-events: none;
    vertical-align: middle;
  }
`

const Checkbox = ({ id, label }: CheckboxInterface) => {
  return (
    <LabelEl htmlFor={id} className="label-cbx">
      <input id={id} type="checkbox" className="invisible" />

      <div className="checkbox">
        <svg width="20px" height="20px" viewBox="0 0 20 20">
          <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z" />

          <polyline points="4 11 8 15 16 6" />
        </svg>
      </div>

      <span>{label}</span>
    </LabelEl>
  )
}

export default Checkbox
