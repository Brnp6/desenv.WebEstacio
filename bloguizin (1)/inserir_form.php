 <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servidor = "localhost";
    $usuario = "root";
    $senha = "";
    $banco = "contatos";

    $conexao = new mysqli($servidor, $usuario, $senha, $banco);
// Primeira condição: Atualização do formulário.
    if ($conexao->connect_error) {
        die("Erro na conexão com o banco de dados: " . $conexao->connect_error);
    }

    $nome = $_POST["nome"];
    $telefone = $_POST["telefone"];
    $email = $_POST["email"];
    $municipio = $_POST["municipio"];
    $mensagem = $_POST["mensagem"];

    $sql = "INSERT INTO formulario (nome, telefone, email, municipio, mensagem) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("sssss", $nome, $telefone, $email, $municipio, $mensagem);
// Segunda Condição: Verificação do formulário.
    if ($stmt->execute()) {
        echo "Formulário inserido com sucesso." . PHP_EOL .'<a href="contatos.html"><button>Voltar para a Página</button></a>' ;
        // echo '<a href="contatos.html"><button>Voltar para a Página</button></a>';
    } else {
        echo "Erro ao inserir o formulário: " . $stmt->error;
        
    }
    
    $stmt->close();
    $conexao->close();
}
?>



































