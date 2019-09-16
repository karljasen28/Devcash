<?php
	

	//DATABASE CONNECTION
	function db()
	{
		return new PDO("mysql:host=localhost;dbname=devcash", "root", "");
	}


	//REGESTRATION CODE AND FORM
	function registerOwner($fname,$lname,$mobileno,$email,$password)
	{
		$db  = db();
		$sql = "INSERT INTO owner (owner_lname,owner_fname,owner_ctcnum,owner_email,owner_password) VALUES (?,?,?,?,?)";
		$cmd = $db->prepare($sql);
		$cmd->execute(array($fname,$lname,$mobileno,$email,$password));
		$db  = null;

		return "Registration Complete";
	}


	//LOGIN CODE AND FORM
	function login($email,$password)
	{
		$db = db();
		$sql = "SELECT * FROM owner WHERE owner_email = ? AND owner_password = ?";
		$cmd = $db->prepare($sql);
		$cmd->execute(array($email,$password));
		$row = $cmd->rowCount();
		$fetch = $cmd->fetchAll();
		$db = null;

		if($row > 0 and $row == 2)
		{
			session_start();

			$_SESSION['email'] = $email;
			$_SESSION['password'] = $password;
			header("location:landing_dashboard.php");
		}
		else
		{
			return "Invalid Account";
		}
	}


	//CREATE AND ADD EMPLOYEE TO THE DATABASE
	function addEmployee($emp_img,$emp_name,$emp_email,$emp_mobileno,$emp_task,$emp_status,$emp_code)
	{
		$db = db();
		$sql = "INSERT INTO employee (emp_img,emp_name,emp_email,emp_mobileno,emp_task,emp_status,emp_code) VALUES (?,?,?,?,?,?,?)";
		$cmd = $db->prepare($sql);
		$cmd->execute(array($emp_img,$emp_name,$emp_email,$emp_mobileno,$emp_task,$emp_status,$emp_code));
		$db = null;

		return "Employee Registered!!";
	}



	//DISPLAY EMPLOYEE DATA TO THE TABLE
	function retrieveEmployeeData()
	{
		$db = db();
		$sql = "SELECT * FROM employee";
		$cmd = $db->prepare($sql);
		$cmd->execute();
		$row = $cmd->fetchAll();
		$db = null;

		return $row;
	}



	//GET THE DATA ID OF EMPLOYEE
	function getDataByIdEmployee($emp_id)
	{
		$db = db();
		$sql = "SELECT * FROM employee WHERE emp_id = ?";
		$cmd = $db->prepare($sql);
		$cmd->execute(array($emp_id));
		$row = $cmd->fetchAll();
		$db = null;

		return $row;
	}



	//UPDATE EMPLOYEE INFORMATION
	function updateEmployee($emp_img,$emp_name,$emp_email,$emp_mobileno,$emp_task,$emp_status,$emp_code,$emp_id)
	{
		$db = db();
		$sql = "UPDATE employee SET emp_img = ?, emp_name = ?, emp_email = ?,emp_mobileno = ?, emp_task = ?, emp_status = ?, emp_code = ? WHERE emp_id = ?";
		$cmd = $db->prepare($sql);
		$cmd->execute(array($emp_img,$emp_name,$emp_email,$emp_mobileno,$emp_task,$emp_status,$emp_code,$emp_id));
		$db = null;

		return "Employee Updated";
	}



	//DELETE DATA FROM EMPLOYEE TABLE
	function removeEmployee($emp_id)
	{
		$db = db();
		$sql = "DELETE FrOM employee WHERE emp_id = ?";
		$cmd = $db->prepare($sql);
		$cmd->execute(array($emp_id));
		$db = null;

		return "Employee Removed";
	}

?>