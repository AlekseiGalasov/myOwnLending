<?php
session_start();


if (isset($_GET['lang'])) {
		$_SESSION['lang'] = $_GET['lang'];
		include './lang/' . $_SESSION["lang"] . '.php';
} elseif (isset($_SESSION['lang'])) {
		include './lang/' . $_SESSION["lang"] . '.php';
} else {
include './lang/rus.php';
}


?>