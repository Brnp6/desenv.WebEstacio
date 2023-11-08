<?php
// Dados de acesso ao servidor
$servidor = "localhost";
$usuario = "root";
$senha = "";
// criar conexão
$conexao = new mysqli($servidor, $usuario, $senha);
// Primeira condição: Se a condição falhar.
if ($conexao->connect_error){
    die("conexao falhou". $conexao->connect_error);
}

echo "conectado com sucesso";

$sql = "CREATE DATABASE IF NOT EXISTS contatos";
// Segunda condição: ligação com a QUERY.
if($conexao->query($sql) === TRUE){
    echo "<br>banco de dados 'contatos' criado com sucesso. ";
}
else{
    echo "erro ao criar o banco de dados" . $conexao->error;
}

// Enviando as respostas ao Formulário
$sql = "
    CREATE TABLE IF NOT EXISTS contatos.formulario( 
      id INT(6) AUTO_INCREMENT PRIMARY KEY,  
      nome VARCHAR(255) NOT NULL, 
      telefone VARCHAR(11),
      email VARCHAR(255),
      municipio  VARCHAR(255),
      mensagem  VARCHAR(255)
    )
";

// Terceira condição: 
if($conexao->query($sql) === TRUE){
    echo "<br>tabela 'formulario' criado com sucesso. ";
}
else{
    echo "erro ao criar a tabela" . $conexao->error;
}



?>