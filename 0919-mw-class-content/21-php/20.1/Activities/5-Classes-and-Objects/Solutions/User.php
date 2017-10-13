<?php

class User {

  public $firstName;

  private $lastName;

  private $emailAddress;

  private static $created = 0;

  // Why does $last have to come . . . Well, last?
  public function __construct ($email, $first, $last = "") {
    $this->firstName = $first;
    $this->lastName = $last;
    $this->emailAddress = $email;

    User::created += 1;
  }

  public function fullName() {
    return $this->firstName . " " . $this->lastName;
  }

  public function setImageUrl($url) {
    $this->imageUrl = $url;
  }

  public function getCreated() {
    return User::created;
  }

}
