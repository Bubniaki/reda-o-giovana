<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site de Redações</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <h1 class="header-title">Site de Redações</h1>
            <p class="header-subtitle">Explore nossa coleção de redações sobre temas relevantes</p>
        </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
        <div class="container">
            <div class="essays-grid" id="essaysGrid">
                <!-- Cards serão inseridos aqui via JavaScript -->
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <p class="footer-title">Site de Redações</p>
                <p class="footer-text">© <span id="currentYear"></span> Todos os direitos reservados</p>
                <p class="footer-text">Desenvolvido com dedicação para auxiliar estudantes</p>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>