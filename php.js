function promotion(){

    if($this->get_data_here_value("SELECT PERIOD_NAME FROM accyear_tb WHERE SCHOOL_ID = ".$_SESSION["school_id"]."","PERIOD_NAME")=="3rd Term"){

        $getStudents = $this->getAllData("SELECT * FROM student_tb WHERE SCHOOL_ID = ".$_SESSION["school_id"]."");

        foreach($getStudents as $row){

            $code = $row["CLASS"];

            $classname = $this->get_data_here_value("SELECT CLASSNAME FROM class_tb WHERE CODE = '$code' AND SCHOOL_ID = ".$_SESSION["school_id"]."","CLASSNAME");

            $getLevel = $this->get_data_here_value("SELECT LEVEL FROM classlist_tb WHERE CLASS = '$classname'","LEVEL");

            $newlevel = $getLevel+1;

            $get_new_class = $this->get_data_here_value("SELECT CLASS FROM classlist_tb WHERE LEVEL= $newlevel

            ","CLASS");

            $get_new_class_code = $this->get_data_here_value("SELECT CODE FROM class_tb WHERE CLASSNAME = '$get_new_class' AND SCHOOL_ID = ".$_SESSION["school_id"]."","CODE");

            $update_stud = $this->updateFunction("UPDATE student_tb SET CLASS = '$get_new_class_code' WHERE ID = ".$row["ID"]." AND SCHOOL_ID = ".$_SESSION["school_id"]."");

        }