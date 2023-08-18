<?php
   
   $fh = fopen($_GET["path"], 'r'); 
   echo fgets($fh);

?>