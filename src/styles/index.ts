import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --color-white: #fff;
  --color-titanium: #888686;
  --color-tamarind: #999999;
  --color-light-tamarind: #F7F7F7;
  --color-green: #09B183;
  --color-kiwi: #0CE21C;
  --color-gray: ##00000029;
  --color-black: ##000000;
  --color-light-black: #222222;

  // size
  --size-min: 0.625rem;
  --size-half-med: 0.875rem;
  --size-med: 1rem;
  --size-max: 1.25rem;
  --size-med-max: 3rem;

  --size-header: 4rem;

//gaps
  --gap-half-min: 0.313rem;
  --gap-min: 0.625rem;
  --gap-med: 1rem;
  --gap-max: 1.25rem;
  --gap-double-max: 4rem;
  --gap-container: 2rem;
  --gap-container-top: 2rem;
  --gap-container-button: 2rem;
  --gap-container-left: 2rem;
  --gap-container-right: 2rem;

  //media
  --small-only: 37.4375em; // 599px
  --small-up:  37.5em; // 600px
  --medium-only: 56.1875em // 899px
  --medium-up: 56.25em; // 900px
  --large-only: 74.9375em; // 1199px
  --large-up: 75em; // 1200px


@media (max-width: 940px) {
  :root {
    --gap-container: 1.25rem;;
  }
}

@media (max-width: 540px) {
  :root {
    --gap-container: 0.625rem;;
  }
}

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100vh;
  min-width: 290px;

  @media (max-width: 1080px) {
     font-size: 93.75%;
  }

  @media (max-width: 720px) {
     font-size: 85.75%;
  }

  @media (max-width: 480) {
     font-size: 73.75%;
  }
  
}  

body {
  font-family: 'Lato', sans-serif;
  background-color: var(--background);
 
  --webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-weight: 400;
  font-size: inherit;
  
  font-family: 'Lato', sans-serif;
  color: inherit;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  border: none;
  height: auto;
  vertical-align: middle;
}

a img {
  border: 0;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: n-resize;
}

ul,
ol,
li {
  list-style: none;
}


textarea {
  overflow: auto;
  resize: vertical;
}

::-ms-clear,
::-ms-reveal {
  display: none;
}

::-webkit-search-cancel-button,
::-webkit-search-results-button,
::-webkit-inner-spin-button,
::-webkit-outer-spin-button,
::-webkit-search-cancel-button,
[type=search] {
  appearance: none;
}

::-moz-focus-inner {
  border: 0;
  padding: 0;
}

`;
