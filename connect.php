<?php
class DbConnect
{
    private $HOSTNAME = 'localhost';
    private $USERNAME = 'root';
    private $PASSWORD = '';
    private $dbname = 'bloggingway';


    public function connect()
    {
        try {
            $conn = new PDO('mysql:host=' . $this->HOSTNAME . ';dbname=' . $this->dbname, $this->USERNAME, $this->PASSWORD);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (\Exception $e) {
            echo "Database Error:", $e->getMessage();
        }
    }

}
?>