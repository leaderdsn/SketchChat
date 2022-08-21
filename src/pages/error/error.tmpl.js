const errorTemplate = `
  <div class='y-error-page-500'>
    <h1>{{numberError}}</h1>
    <h2>{{textMessage}}</h2>
    {{content}}
  </div>
`;

export default errorTemplate;