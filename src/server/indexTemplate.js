export const indexTemplate = (content, token) => `
<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>HelloReact</title>
  <script>
  	window.__token__ = '${token}';
	</script>
  <script defer type="application/javascript" src="/static/client.js"></script>
</head>
<body>
  <div id="app">${content}</div>
  <div id="modal_root"></div>
  <div id="menu_root"></div>
</body>
</html>`;