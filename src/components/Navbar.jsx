import React from 'react';

const Navbar = () => {
    const logoutHandler = () => {
        localStorage.removeItem('user'); // Remove user data from localStorage
        window.location.href = '/login'; // Redirect to login page
    };
    return (
        <div>
            <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a class="navbar-brand ps-3" href="index.html">Store Admin</a>
                <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
                <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div class="input-group">
                       
                    </div>
                </form>
                <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><button onClick={logoutHandler} class="dropdown-item" href="#!">Logout</button></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;