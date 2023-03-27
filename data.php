<?php
header("Content-Type:application/json");
$data = [
    "name" => "hugo",
    "note" => 6
];
echo json_encode($data);
