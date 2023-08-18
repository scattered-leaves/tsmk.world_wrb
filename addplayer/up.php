<?php
   error_reporting (0);
   function nnd($sb) 
   {
      return (!strpos($sb,'--') && !strpos($sb,'\'') && !strpos($sb,' ') && $sb !== "") ;
   }
   
   //echo hash("sha512" , "hhbg", false);
   $name = $_POST["name"];
   $mcname = $_POST["mcname"];
   $mcuuid = $_POST["mcuuid"];
   $qq = $_POST["qq"];
   $email = $_POST["email"];
   if(nnd($name) && nnd($mcname) && nnd($mcuuid) && nnd($qq))
   {
      try{
         $fh = fopen('https://playerdb.co/api/player/minecraft/' . $mcname, 'r'); 
         $apir = fgets($fh);

      }catch(Throwable $e)
      {
         echo "无法找到这个玩家";
         return;
      }
      $apirj = json_decode($apir);
      if($apirj -> {"success"})
      {
         $apidataj = $apirj -> {"data"};
         $apiplayj = $apidataj -> {"player"};
         if ($apiplayj -> {"id"} == $mcuuid || $apiplayj -> {"raw_id"} == $mcuuid)
         {
            if ($apiplayj -> {"raw_id"} === $mcuuid)
            {
               $mcuuid = $apiplayj -> {"id"};
            }

            $db = new SQLite3('player.db');
            if (nnd($email)) {
               $sql = "INSERT INTO addf VALUES ('" . $name . "','". $mcname ."','" . $mcuuid . "','" . $_SERVER['REMOTE_ADDR'] . "','".$qq."','".$email."');";
            }else{
               $sql = "INSERT INTO addf (name,mcname,mcuuid,cip,qq)
               VALUES ('" . $name . "','". $mcname ."','" . $mcuuid . "','" . $_SERVER['REMOTE_ADDR'] . "','".$qq."');";

            }
      
 
            $ret = $db->exec($sql);
   
            $db->close();
         }else{
            echo "uuid不正确";
            return;
         }
      }else{
         echo "没有找到这个玩家";
         return;
      }
   }else{
      echo "非法数据";
      return;
   }
   echo "成功提交";
   //echo $_POST["name"];

?>