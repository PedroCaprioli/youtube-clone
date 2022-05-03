import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Roboto:wght@500&family=Sarala&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #202020;
    font-family: 'Roboto', sans-serif;
  }
`;



export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}
