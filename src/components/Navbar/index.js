import React from 'react'

function Navbar
() {
  return (
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Demo-Proj</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav col-md-10">
        <a class="nav-link" aria-current="/" href="/home">Home</a>
        <a class="nav-link" href="/userdata">User's Data</a>
        <a class="nav-link" href="/incdec">Appreciation</a>
      </div>

      <div class="navbar-nav col-md-2">
          <a class="nav-link" href="/login">Login</a>
          <a class="nav-link" href="/register">Register</a>
      </div>

    </div>
  </div>
</nav>
  )
}

export default Navbar;
