import Head from 'next/head';
import {
  useState,
  useRef,
  useEffect
} from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import {
  themeOne,
  themeTwo,
  themeThree
} from '../lib/themes';
import ButtonStyles from '../components/styles/Button';
import CalcContainer from '../components/styles/CalcContainer';
import NumpadStyle from '../components/styles/Numpad';
import ScreenStyles from '../components/styles/Screen';
import ThemeSwitchStyles from '../components/styles/ThemeSwitch';
import {
  buttons
} from '../lib/calculator-buttons';
import MainContainer from '../components/styles/MainContainer';
import CalcHeader from '../components/styles/CalcHeader';
import FooterStyles from '../components/styles/Footer';
import {
  formatNum
} from '../lib/helpers';

export default function Home() {
  let currentNum = '';
  const regex = /\d/;
  const resettingRef = useRef(false);
  const [checked, setChecked] = useState('themeOne');
  const [theme, setTheme] = useState(themeOne);
  const [acc, setAcc] = useState('');
  const [secondDigit, setSecondDigit] = useState(false);
  const [screenValue, setScreenValue] = useState('0');
  const [operation, setOperation] = useState('none');

  const getResult = function() {
    resettingRef.current = true;
    setSecondDigit(false);
    if (operation === 'none') return;
    let result = eval(acc + operation + screenValue);
    if (result % 1 == 0) {
      setAcc(String(result));
    } else {
      setAcc(String(result.toFixed(3)));
    }
  };

  useEffect(() => {
    if (resettingRef.current) {
      resettingRef.current = false;
      displayNum();
    }
  }, [acc]);

  const displayNum = function() {
    resettingRef.current = true;
    setScreenValue(acc);
  };

  useEffect(() => {
    if (resettingRef.current) {
      resettingRef.current = false;
      if (setOperation === 'none') setAcc('');
    }
  }, [screenValue]);

  const keepNum = function(e) {
    currentNum += e.target.innerText;
    if (operation !== 'none') {
      console.log('SECOND NUMBER');
      if (!secondDigit) {
        setSecondDigit(true);
        setScreenValue(currentNum);
      } else {
        setScreenValue(screenValue + currentNum);
      }
    } else {
      if (screenValue === '0' || acc !== '') {
        setScreenValue(currentNum);
      } else {
        setScreenValue(screenValue + currentNum);
      }
    }
  };

  const resetCalc = function() {
    currentNum = '';
    setAcc('');
    setScreenValue('0');
    setOperation('none');
    setSecondDigit(false);
  };

  const delNum = function() {
    if (operation !== 'none') return;
    if (screenValue === '0') return;
    let newNum = screenValue.slice(0, -1);
    setScreenValue(newNum);
  };

  const handleClick = function(e) {
    let localOperation = e.target.innerText;
    if (localOperation === 'x') localOperation = '*';
    switch (localOperation) {
      case 'RESET':
        resetCalc();
        break;
      case 'DEL':
        delNum();
        break;
      case '=':
        setOperation('none');
        getResult();
        break;
      default:
        if (screenValue === '0') return;
        if (acc !== '' && operation !== 'none') {
          setOperation(localOperation);
          getResult();
          return;
        }
        setOperation(localOperation);
        setAcc(screenValue);
    }
  };

  const toggleSwitch = function(e) {
    setChecked(e.target.id);
    if (e.target.id == 'themeOne') setTheme(themeOne);
    if (e.target.id == 'themeTwo') setTheme(themeTwo);
    if (e.target.id == 'themeThree') setTheme(themeThree);
  };

  return ( <
    Page >
    <
    Head >
    <
    link rel = "preconnect"
    href = "https://fonts.googleapis.com" > < /link> <
    link rel = "preconnect"
    href = "https://fonts.gstatic.com"
    crossOrigin = "true" >
    < /link> <
    link href = "https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap"
    rel = "stylesheet" >
    < /link> <
    meta name = "description"
    content = "Mya's Calculator" / >
    <
    meta name = "twitter:title"
    content = "Mya's Calculator" / >
    <
    meta name = "twitter:description"
    content = "Calculator app challenge from Frontend Mentor" /
    >
    <
    meta name = "twitter:card"
    content = "summary" / >
    <
    meta property = "og:title"
    content = "Mya's Calculator " / >
    <
    meta property = "og:description"
    content = "Calculator App Challenge from Frontend Mentor" /
    >
    <
    meta property = "og:image"
    content = "thumbnail.jpg" /
    >
    <
    meta property = "og:url" / >
    <
    title > Calculator < /title> <
    /Head> <
    MainContainer theme = {
      theme
    } >
    <
    CalcContainer >
    <
    CalcHeader >
    <
    h1 aria - label = "calculator" > calc < /h1> <
    ThemeSwitchStyles >
    <
    p className = "theme" > theme < /p> <
    div className = "toggle" >
    <
    div className = "toggle--num" >
    <
    p > 1 < /p> <
    p > 2 < /p> <
    p > 3 < /p> <
    /div> <
    div className = "toggle--switch" >
    <
    input id = "themeOne"
    name = "theme"
    type = "radio"
    checked = {
      checked === 'themeOne'
    }
    onChange = {
      toggleSwitch
    }
    /> <
    label className = "label-one"
    htmlFor = "themeOne" / >
    <
    input id = "themeTwo"
    name = "theme"
    type = "radio"
    checked = {
      checked === 'themeTwo'
    }
    onChange = {
      toggleSwitch
    }
    /> <
    label className = "label-two"
    htmlFor = "themeTwo" / >
    <
    input id = "themeThree"
    name = "theme"
    type = "radio"
    checked = {
      checked === 'themeThree'
    }
    onChange = {
      toggleSwitch
    }
    /> <
    label className = "label-three"
    htmlFor = "themeThree" / >
    <
    /div> <
    /div> <
    /ThemeSwitchStyles> <
    /CalcHeader> <
    ScreenStyles >
    <
    p > {
      formatNum(screenValue)
    } < /p> <
    /ScreenStyles> <
    NumpadStyle > {
      buttons.map((button) => {
        if (!isNaN(button) || button == '.') {
          return ( <
            ButtonStyles key = {
              button
            }
            value = {
              button
            }
            onClick = {
              keepNum
            } > {
              button
            } <
            /ButtonStyles>
          );
        } else {
          return ( <
            ButtonStyles key = {
              button
            }
            value = {
              button === 'x' ? '*' : button
            }
            onClick = {
              handleClick
            } >
            {
              button
            } <
            /ButtonStyles>
          );
        }
      })
    } <
    /NumpadStyle> <
    /CalcContainer> <
    FooterStyles >
    <
    a href = ""
    target = "_blank"
    rel = "noopener noreferrer" >
    GitHub <
    /a> <
    /FooterStyles> <
    /MainContainer> <
    /Page>
  );
}
