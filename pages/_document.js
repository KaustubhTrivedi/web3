const sheets = new ServerStyleSheets();
const originalRenderPage = ctx.renderPage;

ctx.renderPage = () =>
  originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  });
