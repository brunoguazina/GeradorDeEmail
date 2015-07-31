<?php
 // extrai os dados do post
 extract($_POST);
 // imprime os dados do post

$obj = array('titulo' => $titulo, 'descricao' => $descricao, 'link' => $link);

 sleep(2);
 echo json_encode($obj);
?>