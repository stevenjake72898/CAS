<?php
  // $_SESSION['userid'];
?>
<html>

<head>
  <title>Kath's Drama List</title>
  <link rel="icon" type="image/png" href="images/kdllogo.png" sizes="32x32">
  <link href="css/style.css" rel="stylesheet">
  <link href="css/all.css" rel="stylesheet">
  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/script.js"></script>
</head>

<body>
  <header class="headercontainer">
    <div class="headerleft">
      <!-- Logo with Navigation Menu -->
      <img src="images/kdllogo.png" alt="KDL Logo" class="kdllogo" />
      <div class="homelinks">
        <a class="home-nav">HOME</a>
        <a class="about-nav">ABOUT</a>        
      </div>

      <div class="headerright">
        <div class="signout">
          <input type="button" class="signoutButton" value="SIGNOUT" />
          <i class="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </div>
  </header>

  <div class="homecontainer">
    <?php      
        include("home.php");    
    ?>
  </div>
  <div class="kdramacontainer">
  </div>
  <div class="aboutcontainer">
  </div>

</body>

</html>