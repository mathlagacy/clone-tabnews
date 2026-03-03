function Home() {
  return <html>
    <head>
      <meta charset="UTF-8">
      <title>Mini App Bitrix</title>
      <script src="//api.bitrix24.com/api/v1/"></script>
      <style>
        body {
          font-family: Arial;
          padding: 20px;
          transition: 0.3s;
        }

        .dark {
          background-color: #1e1e1e;
          color: white;
        }

        button {
          padding: 10px 20px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>

      <h2>Mini App Teste</h2>
      <button onclick="toggleDark()">Ativar modo escuro</button>

      <script>
        BX24.init(function() {
          console.log("App iniciado dentro do Bitrix");
        });

        function toggleDark() {
          document.body.classList.toggle("dark");
        }
      </script>

    </body>
    </html>;
}

export default Home;