<?php

// Charizard still has methods like getWeight, etc., because it "inherits"
// them from the "parent" Pokemon class. This is what extends accomplishes.
class Charizard extends Pokemon
{
  public function breatheFire ()
  {
    echo "Charizard is breathing fire! It's super hot!\n";
  }
}
