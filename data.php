<?php
header("Content-Type:application/json");
$data = [
    "name" => "Leo",
    "note" => 8
];

echo json_encode($data);
