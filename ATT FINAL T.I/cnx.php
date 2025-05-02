<?php
 
$servername = "localhost";
$dbname = "bd_loja";
$username = "root";
 
$conn = new mysqli($servername, $dbname, $username, $password);
 
 
if ($conn->connect_errno) {
    echo "Conexão falhou:(" . $conn->connect_errno . ")" . $conn->connect_errno;
}
else
    echo "conectado no banco";
 
$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];
 
 
$sql = "INSERT INTO formulario_contato (nome, email, mensagem)
        VALUES ('$nome', '$email', '$mensagem')";
 
if ($conn->query($sql) === TRUE) {
    echo "Mensagem enviada com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}
 
 
$conn->close();
?>