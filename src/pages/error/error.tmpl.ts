const errorTemplate: string = `
  <div class='y-error-page'>
    <h1 class='y-error-page__error'>{{numberError}}</h1>
    <h2 class='y-error-page__message'>{{textMessage}}</h2>
    {{content}}
  </div>
`;

export default errorTemplate;