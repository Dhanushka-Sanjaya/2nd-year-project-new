<?php 

class select extends CI_Model{

	function __construct(){
		parent::__construct();
	}

	public function select_received(){
		$this->db->select("*");
		$this->db->where('status', 'completed');
		
		$query = $this -> db-> get('news');
		return $query;
	}

	public function select_asigned(){
		$this->db->select("*");
		$this->db->where('status', 'asigned');
		
		$query = $this -> db-> get('news');
		return $query;
	}


	public function select_pending(){
		$this->db->select("*");
		$this->db->where('status', 'pending');
		
		$query = $this -> db-> get('news');
		return $query;
	}
}

?>
