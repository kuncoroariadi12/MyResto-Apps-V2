class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <!-- Desktop Navbar -->
        <nav class="navbar">
          <a class="nav-logo" href="#">MyResto</a>
          <ul class="nav-list">
            <li class="nav-item"><a href="#/">Home</a></li>
            <li class="nav-item"><a href="#/favorite">Favorite</a></li>
            <li class="nav-item"><a target="_blank" rel="noopener" href="https://linkedin.com/in/kuncoro-ariadi/">About Us</a></li>
          </ul>
        </nav>
        <!-- Mobile Navbar -->
        <nav class="mobile-menu">
          <div class="icon-menu" id="icon-mobile">
            <button aria-label="button menu dropdown on mobile device" type="button">
                <span class="fa fa-bars fa-lg"></span>
            </button>
          </div>
          <div aria-label="mobile-logo">MyResto</div>
        </nav>
        <nav id="drawer" class="nav-mobile">
          <ul class="nav-mob-list">
            <li class="nav-mob-item"><a href="#/">Home</a></li>
            <li class="nav-mob-item"><a href="#/favorite">Favorite</a></li>
            <li class="nav-mob-item"><a target="_blank" rel="noopener" href="https://linkedin.com/in/kuncoro-ariadi/">About Us</a></li>
          </ul>
        </nav>
        `;
    }
}

customElements.define('navbar-content', Navbar);
