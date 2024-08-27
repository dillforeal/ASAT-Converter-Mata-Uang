<!DOCTYPE html>
<html lang="en">
        <head>
                <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
                <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
<body>
        <nav class="navbar navbar-default">
                <div class="container-fluid">
                        <a class="navbar-brand" href="https://sourcecodester.com">Sourcecodster</a>
                </div>
        </nav>
        <div class="col-md-3"></div>
        <div class="col-md-6 well">
                <h3 class="text-primary">PHP - Simple Currency Converter</h3>
                <hr style="border-top:1px dotted #000;"/>
                <form method="GET" action="">
                        <div class="form-inline">
                                <label>Php: </label>
                                <input class="form-control text-right" type="number" value="<?php echo isset($_GET['txt_digit']) ? $_GET['txt_digit'] : ''  ?>" name="txt_digit"/>
                                <label>Select Currency: </label>
                                <select name="currency" class="form-control">
                                        <option value="">Select an option</option>
                                        <option value="Dollar" <?php echo isset($_GET['currency']) && $_GET['currency'] == "Dollar" ? 'selected' : ''; ?>>Dollar</option>
                                        <option value="Euro" <?php echo isset($_GET['currency']) && $_GET['currency'] == "Euro" ? 'selected' : ''; ?>>Euro</option>
                                        <option value="Pound" <?php echo isset($_GET['currency']) && $_GET['currency'] == "Pound" ? 'selected' : ''; ?>>Pound</option>
                                        <option value="Chinese Yuan" <?php echo isset($_GET['currency']) && $_GET['currency'] == "Chinese Yuan" ? 'selected' : ''; ?>>Chinese Yuan</option>
                                        <option value="Japanese Yen" <?php echo isset($_GET['currency']) && $_GET['currency'] == "Japanese Yen" ? 'selected' : ''; ?>>Japanese Yen</option>
                                </select>
                                <br /><br />
                                <center><button type="submit" name="btn_submit" class="btn btn-primary form-control" style="width:30%;">Convert</button></center>
                                <br />
                                <?php require 'convert.php'?>
                        </div>
                </form>
        </div>
</body>
</html>
