document.addEventListener('DOMContentLoaded', () => {

    class Burger {

        constructor(settings) {
            this.nav = document.querySelector(settings.navSelector);
            this.ham = document.querySelector(settings.hamSelector);
            this.header = document.querySelector('.header');
            this.isChanging = false;

            this.headerH;
            
            this.init();
        }


        init() {
            
            this.headerH = this.header.offsetHeight;
            
            const checkClientWidth = () => {
                
                if (window.innerWidth <= 1100) {
                    this.nav.style.height = 0;
                    this.nav.style.margin = 0;

                    this.ham.style.display = 'block';
                    
                    this.nav.classList.remove("menu_show");
                    this.ham.classList.remove("burger_close");
                    
                    document.querySelector('.header').style.height = '160px'; //160 - default value from css
                    
                    
                } else {
                    
                    this.nav.style.margin = '0 auto';
                    this.ham.style.display = 'none';
                    
                    this.nav.classList.add("menu_show");
                    this.ham.classList.add("burger_close");
                    
                    document.querySelector('.header').style.height = '239px'; //239 - default value from css
                    
                    
                }
            };
            
            checkClientWidth();

            window.addEventListener('resize', () => {
                checkClientWidth();
            });

            this.ham.addEventListener("click", this.toggleHamburger.bind(this));
            this.ham.addEventListener("touchstart", this.toggleHamburger.bind(this));

            this.ham.addEventListener("transitionend", () => {
                this.isChanging = false;
            });

            this.headerHeight = this.header.style.height;

        }

        toggleHamburger() {
            console.log(this.headerH);
            if (!this.isChanging) {
                
                if (!this.ham.classList.contains("burger_close")) {

                    this.header.style.height = '70vh';
                } else {
                    console.log(this.headerH);
                    this.header.style.height = `${this.headerH}px`;
                }

                this.nav.classList.toggle("menu_show");
                this.ham.classList.toggle("burger_close");
                
                this.isChanging = true;
            }

        }
    }

    const burger1 = new Burger({
        navSelector: '.offers__wrapper',
        hamSelector: '.burger'
    })
});