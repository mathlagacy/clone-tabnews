function Home() {
  return <html>
    <head>
      <title>Mini App Bitrix</title>
      <link rel="stylesheet" href="style.css"> </link>
      <script src="//api.bitrix24.com/api/v1/"></script>
    </head>
    <body>

      <h2>Mini App Teste</h2>
      <button onclick="toggleDark()">Ativar modo escuro</button>

      <script>
        BX24.init(function() {
          console.log("App iniciado dentro do Bitrix")
        });

        function toggleDark() {
          document.body.classList.toggle("dark")
        }
      </script>

    </body>
    </html>;
}

export default Home;