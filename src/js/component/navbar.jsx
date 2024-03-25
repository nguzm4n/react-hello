import React from "react";

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid ">
    <a class="navbar-brand text-light" href="#">Start BootStrap</a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text.body-secondary "></span>
    </button>
    <div class="collapse navbar-collapse  " id="navbarNav">
      <ul class="navbar-nav  ms-auto">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link text-light" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    )
}

export default NavBar