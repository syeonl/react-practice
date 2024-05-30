// import React from 'react';
// import styled, { css } from 'styled-components';

// const ThemeModeButton = ({ toggleTheme, themeMode }) => {
//   const theme = themeMode === 'lightTheme' ? lightTheme : darkTheme;

//   const toggleTheme = () => {
//     if (themeMode === 'lightTheme') {
//       setThemeMode('darkTheme');
//       window.localStorage.setItem('theme', 'darkTheme');
//     } else {
//       setThemeMode('lightTheme');
//       window.localStorage.setItem('theme', 'lightTheme');
//     }
//   };
//   return (
//     <ThemeModeWrapper onClick={toggleTheme}>
//       {themeMode === 'lightTheme' ? 'light' : 'dark'}
//     </ThemeModeWrapper>
//   );
// };

// export const ThemeModeWrapper = styled.button`
//   position: absolute;
//   top: 0;
//   right: 0;

//   width: 80px;
//   margin: 10px;
//   border: none;
//   border-radius: 10px;

//   ${({ theme }) => {
//     return css`
//       background-color: ${(props) => props.theme.colors.colorMain};
//       box-shadow: ${(props) => props.theme.colors.colorShadow};
//     `;
//   }}
// `;

// export default ThemeModeButton;
