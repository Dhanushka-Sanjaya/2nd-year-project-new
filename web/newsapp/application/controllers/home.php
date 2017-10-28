<?php

class home extends CI_Controller{
	public function index(){

		
			$this->load->database();
			$this->load->model('select');

			
			$data1['rec_newsinfo']=$this->select->select_received();

			$data2['as_newsinfo']=$this->select->select_asigned();

			$data3['p_newsinfo']=$this->select->select_pending();
		
		   	$new_array = array_merge($data1,$data2,$data3);
		   	$this->load->view('home',$new_array);

}}

?>