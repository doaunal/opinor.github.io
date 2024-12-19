<?php

include("baglanti.php");

$username_err="";
$email_err="";
$parola_err="";
$parolatkr_err="";


if(isset($_POST["kaydet"]))
{
 // kullanıcı adı doğrulama
  if(empty($_POST["kullaniciadi"])) 
  {
    $username_err = "Lütfen kullanıcı adı giriniz";
  }
  else if(strlen($_POST["kullaniciadi"])<5)
  {
    $username_err="Kullanıcı adı en az 5 karakterden olusturulmaktadır";
  }
  else if (!preg_match('/^[a-z\d_]{5,20}$/i', $_POST["kullaniciadi"]))
  {
    $username_err="Kullanıcı adı sadece harflerden oluşturulmaktadır";
  }
  else
  {
    $username=$_POST["kullaniciadi"];
  }


  // e mail doğrulama
  if(empty($_POST["email"]))
  {
    $email_err = "E-mail boş olamaz";
  }
  else if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) 
  {
    $email_err = "Geçersiz e-mail formatı";
  }
  else
  {
    $email=$_POST["email"];
  }


  // parola doğrulama
  if(empty($_POST["parola"]))
  {
    $parola_err="Parola boş geçilemez.";
  }
  else
  {
    $parola=password_hash($_POST["parola"], PASSWORD_DEFAULT);
  }


  // parola tekrar

 
  if(empty($_POST["parolatkr"]))
  {
    $parolatkr_err="Parola tekrar kısmı boş geçilemez.";
  }
  else if($_POST["parola"]!=$_POST["parolatkr"])
  {
    $parolatkr_err="parolalar eşleşmiyor.";
  }
  else
  {
    $parolatkr=$_POST["parolatkr"];
  }


  

 

  if(isset($username) && isset($email) && isset($parola))
  {
    
    $ekle="INSERT INTO kullanicilar (kullanici_adi, email, parola) VALUES ('$username','$email','$parola')";
    $calistirekle = mysqli_query($baglanti, $ekle);
    if ($calistirekle)
    {
        echo '<div class="alert alert-success" role="alert">
        Kayıt başarılı bir şekilde eklendi.
        </div>';
    }
    else
    {
        echo '<div class="alert alert-danger" role="alert">
        Kayıt eklenirken bir problem oluştu.
        </div>';
    }

    mysqli_close($baglanti);

  }
}


?>


<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css" integrity="sha384-dpuaG1suU0eT09tx5plTaGMLBsfDLzUCCUXOY2j/LSvXYuG6Bqs43ALlhIqAJVRb" crossorigin="anonymous">

    <title>Üye Kayıt İşlemi</title>
  </head>
  <body>
   <div class="container p-5">
       <div class="card p-5">
                <form action="kayit.php" method="POST">

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Kullanıcı Adı</label>
                <input type="text" class="form-control 
                
                <?php

                    if(!empty($username_err))
                    {
                        echo "is-invalid";
                    }

                ?>
                
                " id="exampleInputEmail1" name = "kullaniciadi" >
                <div id="validationServer03Feedback" class="invalid-feedback">
                  <?php
                   echo $username_err;
                  ?>
                </div>

            </div>



            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email Adres</label>
                <input type="text" class="form-control 
                
                   <?php

                    if(!empty($email_err))
                    {
                        echo "is-invalid";
                    }

                   ?>
                
                
                " id="exampleInputEmail1" name = "email" >
                <div id="validationServer03Feedback" class="invalid-feedback">
                   <?php
                    echo $email_err;
                   ?>
                </div>

            </div>





            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Şifre</label>
                <input type="password" class="form-control 
                
                
                <?php

                    if(!empty($parola_err))
                    {
                        echo "is-invalid";
                    }

                ?>
                
                
                
                " id="exampleInputPassword1" name="parola">
                <div id="validationServer03Feedback" class="invalid-feedback">
                  
                    <?php
                        echo $parola_err;
                    ?>
                
                </div>

            </div>




            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Şifre</label>
                <input type="password" class="form-control 
                
                <?php

                    if(!empty($parolatkr_err))
                    {
                        echo "is-invalid";
                    }

                ?>
                
                " id="exampleInputPassword1" name="parolatkr">
                <div id="validationServer03Feedback" class="invalid-feedback">
                    <?php
                        echo $parolatkr_err;
                    ?>
                </div>

            </div>



            <button type="submit" name="kaydet" class="btn btn-primary">Kaydet</button>
            </form>
       </div>
   </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    
  </body>
</html>
