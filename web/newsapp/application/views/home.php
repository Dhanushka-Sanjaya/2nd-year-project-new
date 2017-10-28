<?php
if (!($this->session->userdata('loggedin'))) {
	redirect('Login/LoginUser');
}

?>



<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>News Together Admin Panel</title>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
   <link href="style.css" rel="stylesheet">

  <style>
      li.active a {

          background-color: white !important;
          color: black !important;

      }

  </style>
</head>
<body>


   <!-- header -->

<div class="header" style="background-color:#f2f2f2;height: 70px;margin: 15px;">
   <img src="<?php echo base_url(); ?>images/adaderana-logo-2017-v2.png" style="height: 60px; margin-top:5px ;margin-left: 15px">
   <a href="<?php echo base_url('index.php/Login/LogoutUser'); ?>">Logout</a>
</div >

<div class="container-fluid">
   <div class="col-lg-2" style="background-color:  #f2f2f2;height:800px ;margin-right: 20px;width: 250px">sidebar goes here
   </div>


   <div class="col-lg-9" style="background-color: #f2f2f2;height:800px; margin-left:8px;width: 918px;margin-bottom: 30px">

      <ul class="nav nav-tabs" style="padding:5px">
           <li class="active"><a data-toggle="tab" href="#received" style="margin-left: 30px;margin-right:20px;background-color: #d71921;color: white;width: 150px">Recieved</a></li>
           <li><a data-toggle="tab" href="#pending" style="margin-right:20px;background-color: #d71921;color: white;width: 150px">Pending</a></li>
           <li><a data-toggle="tab" href="#notasigned" style="margin-right:20px;background-color: #d71921;color: white;width: 150px">Not Asigned</a></li>
      </ul>

      <div class="tab-content">

        <div id="received" class="tab-pane fade in active">


               <div class="panel panel-default">
                  <div class="panel-body">

                     <table class="table table-striped">
                        <thead>
                           <tr>
                              <th>Title</th>
                              <th>Venue</th>
                              <th>Date</th>
                              <th>Time</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                         <tbody>

                        

                        <?php


                          foreach ($rec_newsinfo->result() as $row) {
                        	?>
                           <tr>
                              <div class="form-group">
                                    <td><?php echo $row->title; ?></td>
                                    <td><?php echo $row->venue; ?></td>
                                    <td><?php echo $row->date; ?></td>
                                    <td><?php echo $row->time; ?></td>
                                    <td><a href="#/menu1" class="btn btn-success"> Accept</a>
                                    <a href="#/menu1" class="btn btn-info"> View</a>
                                    <a href="#/menu1" class="btn btn-danger"> cancel</a></td>
                              </div>
                           </tr>

                           
                            <?php }?>
                     </table>
                  </div>

               </div>

        </div>


                 <div id="pending" class="tab-pane fade">
                  
                  <div class="panel panel-default">
                  <div class="panel-body">

                     <table class="table table-striped">
                        <thead>
                           <tr>
                              <th>Title</th>
                              <th>Venue</th>
                              <th>Date</th>
                              <th>Time</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                         <tbody>

                        

                        <?php


                          foreach ($as_newsinfo->result() as $row) {
                          ?>
                           <tr>
                              <div class="form-group">
                                    <td><?php echo $row->title; ?></td>
                                    <td><?php echo $row->venue; ?></td>
                                    <td><?php echo $row->date; ?></td>
                                    <td><?php echo $row->time; ?></td>
                                    <td><a href="#/menu1" class="btn btn-info"> View</a> </td>
                                    <td><a href="#/menu1" class="btn btn-cancel"> Cancel</a></td>

                              </div>
                           </tr>

                           
                            <?php }?>
                     </table>
                  </div>

               </div>

                 
                                                                  
                 </div>




                 <div id="notasigned" class="tab-pane fade">
                    <div class="panel panel-default">
                  <div class="panel-body">

                     <table class="table table-striped">
                        <thead>
                           <tr>
                              <th>Title</th>
                              <th>Venue</th>
                              <th>Date</th>
                              <th>Time</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                         <tbody>

                        

                        <?php


                          foreach ($p_newsinfo->result() as $row) {
                          ?>
                           <tr>
                              <div class="form-group">
                                    <td><?php echo $row->title; ?></td>
                                    <td><?php echo $row->venue; ?></td>
                                    <td><?php echo $row->date; ?></td>
                                    <td><?php echo $row->time; ?></td>
                                    <td><a href="#/menu1" class="btn btn-success"> Accept</a> </td>
                                    <td><a href="#/menu1" class="btn btn-danger"> Cancel</a></td>
                              </div>
                           </tr>

                           
                            <?php }?>
                     </table>
                  </div>

               </div>

                 </div>
     </div>
     </div>
</div>


</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


</body>
</html>








