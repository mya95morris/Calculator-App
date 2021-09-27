import styled from 'styled-components';

const ThemeSwitchStyles = styled.div`
  display: flex;
  input {
    left: 0;
    opacity: 0;
    position: absolute;
    top: -10000px;
  }
  .theme {
    align-self: flex-end;
    margin-right: 20px;
    font-size: 12px;
  }
  .toggle {
    p {
      font-size: 12px;
    }
    &--num {
      display: flex;
      justify-content: space-around;
      margin-bottom: 5px;
    }
    &--switch {
      background: var(--screenbg);
      border-radius: 10px;
      height: 20px;
      padding: 0 4px;
      position: relative;
      width: 58px;
      input:checked + label {
        opacity: 1;
      }
      label {
        background: var(--keyredbg);
        border-radius: 50%;
        cursor: pointer;
        height: 12px;
        opacity: 0;
        position: absolute;
        top: calc(50% - 6px);
        width: 12px;
      }
      .label-two {
        left: calc(50% - 6px);
      }
      .label-three {
        right: calc(0% + 3px);
      }
    }
  }
`;

export default ThemeSwitchStyles;
