class StickyHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.revealThreshold =
            window.innerWidth > 1024
                ? this.attributes["hide-threshold"].value || 300
                : 100;
        this.headerWrapper = document.getElementById(
            `shopify-section-${this.dataset.id}`
        );
        this.announcementBar = document.querySelector(
            "#shopify-section-announcement-bar-layout-1"
        );
        this.topbar = document.querySelector("[announcement-bar]");
        this.header = document.querySelector("[header]");
        this.deskLogo = document.querySelector("[desk-logo]");
        this.toggleBtn = document.querySelectorAll('[data-role="nav-toggle"]');
        // filter sticky
        this.desktopStickyFilter = document.querySelector(
            '[data-role="filter-sticky-desktop"]'
        );
        this.nestedToggleBtns = document.querySelectorAll(
            '[data-role="nested-toggle"]'
        );
        this.grandNestedToggleBtns = document.querySelectorAll(
            '[data-role="l3-toggle"]'
        );
        // conditionally adding sticky properties to header
        this.headerWrapper.style.position = "sticky";
        this.topbar.style.position = "sticky";
        this.headerWrapper.style.top = 0 + "px";
        this.headerWrapper.style.zIndex = "100";
        this.headerWrapper.style.transition = "all 0.3s ease-in-out";
        this.announcementBar.style.zIndex = "101";

        this.headerBounds = {};
        this.currentScrollTop = 0;
        this.preventReveal = false;
        this.predictiveSearch = document.querySelector("predictive-search");

        this.onScrollHanlder = this.onScroll.bind(this);
        this.hideHanlderOnScrollUp = () => (this.preventReveal = true);

        window.addEventListener("scroll", this.onScrollHanlder, false);
        // binding event to navigation btns
        Array.from(this.toggleBtn).forEach((el) =>
            el.addEventListener("click", this.toggleNav.bind(this, el))
        );
        Array.from(this.nestedToggleBtns).forEach((el) => {
            el.addEventListener("click", this.toggleNestedNav.bind(this, el));
        });
        Array.from(this.grandNestedToggleBtns).forEach((el) => {
            el.addEventListener("click", this.grandToggleNestedNav.bind(this, el));
        });
        this.createObserver();
        this.resizeObserver();
        this.announcementBarVisibility();

        document.querySelectorAll('[data-role="mega-drop"]').forEach((el) => {
            el.addEventListener(
                "mouseover",
                () => (document.body.style.overflow = "hidden")
            );
            el.addEventListener(
                "mouseleave",
                () => (document.body.style.overflow = "auto")
            );
        });
        // setting mega drop position for desktop
        let megaDrop = document.querySelectorAll('[data-role="mega-drop"]');
        let megaDropBg = document.querySelectorAll('.mega-bg');
        let megaDropOverlay = document.querySelectorAll('.drop-overlay');
        if (window.innerWidth > 1024) {
            let topDist =
                this.getBoundingClientRect().height +
                this.announcementBar.getBoundingClientRect().height;
            megaDrop.forEach((el) => (el.style.top = `${topDist}px`));
            megaDropBg.forEach((el) => (el.style.top = `${topDist}px`));
            megaDropOverlay.forEach((el) => (el.style.top = `${topDist}px`));
        }
    }

    disconnectedCallback() { }

    onScroll() {
        const scrollTop = window.pageYOffset;
        if (scrollTop > this.currentScrollTop && scrollTop > this.revealThreshold) {
            requestAnimationFrame(this.hide.bind(this));
            this.desktopStickyFilter
                ? (this.desktopStickyFilter.style.transition = "none")
                : "";
            this.header.classList.add("is-sticky");
            let navAnnoucementHeight =
                document.querySelector('[data-role="navigation"]').clientHeight +
                document.querySelector('[data-role="announcement"]').clientHeight -
                2 +
                "px";

            // sticky filter collection page
            this.desktopStickyFilter
                ? (this.desktopStickyFilter.style.top = navAnnoucementHeight)
                : "";
        } else if (scrollTop < this.currentScrollTop) {
            requestAnimationFrame(this.show.bind(this));
            this.desktopStickyFilter
                ? (this.desktopStickyFilter.style.transition = "all 0.5s ease")
                : "";
            let navAnnoucementHeight =
                document.querySelector("header").clientHeight +
                document.querySelector('[data-role="announcement"]').clientHeight -
                2 +
                "px";
            // sticky filter collection page
            this.desktopStickyFilter
                ? (this.desktopStickyFilter.style.top = navAnnoucementHeight)
                : "";
        }

        this.currentScrollTop = scrollTop;
    }

    // translate header for desktop only to hide header logo
    hide() {
        document.body.classList.add("logoDisplay");
        let translateVal = this.getBoundingClientRect().height + 1;
        translateVal == 0
            ? this.headerWrapper.style.removeProperty("transform")
            : (this.headerWrapper.style.transform = `translateY(-${translateVal}px)`);
        this.headerWrapper.style.transition = "all 500ms";
        let stickyFilter = document.querySelector("facet-filters-form");
        if (stickyFilter) {
            stickyFilter.style.position = "sticky";
            stickyFilter.style.top = 0 + "px";
        }
    }

    // remove translate property to display header logo
    show() {
        document.body.classList.remove("logoDisplay");
        this.headerWrapper.style.removeProperty("transform");
        this.headerWrapper.style.transition = "all 500ms";
        let stickyFilter = document.querySelector("facet-filters-form");
        if (stickyFilter) {
            stickyFilter.style.position = "sticky";
            stickyFilter.style.top = this.getBoundingClientRect().height - 1 + "px";
            stickyFilter.style.zIndex = "103";
            stickyFilter.style.transition = "all 500ms ease 0s";
        }
    }
    // navigation toggle
    toggleNav(el) {
        Array.from(document.querySelectorAll("nav li")).forEach((el) =>
            el.classList.remove("is-active")
        );
        this.classList.toggle("nav-toggle");
        this.announcementBar.classList.toggle("toggle");
        this.classList.contains("nav-toggle")
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
        this.classList.contains("nav-toggle") && window.innerWidth < 768
            ? (this.headerWrapper.style.top = "0px")
            : setTimeout(() => {
                this.headerWrapper.style.top = 0 + "px";
            }, 150);
        this.classList.contains("nav-toggle") && window.innerWidth < 768
            ? (this.headerWrapper.style.zIndex = "105")
            : (this.headerWrapper.style.zIndex = "100");
        !this.classList.contains("nav-toggle")
            ? this.header.classList.remove("nested-toggle")
            : "";
        //position header from top in mobile and tablet
        let navAnnoucementHeight =
            document.querySelector('[data-role="navigation"]').clientHeight +
            document.querySelector('[data-role="announcement"]').clientHeight +
            "px";
        window.innerWidth >= 768 && window.innerWidth <= 1024
            ? (document.querySelector("nav").style.top = `${navAnnoucementHeight}`)
            : document.querySelector("nav").removeAttribute("style");
        window.innerWidth < 768
            ? (document.querySelector("nav").style.top = `${document.querySelector('[data-role="navigation"]').clientHeight
                }px`)
            : "";
        this.classList.contains("nav-toggle") && window.innerWidth < 1024
            ? (this.headerWrapper.style.zIndex = "105")
            : (this.headerWrapper.style.zIndex = "100");
        !this.classList.contains("nav-toggle")
            ? this.header.classList.remove("nested-toggle")
            : "";
    }
    // toggle L2 navigation
    toggleNestedNav(el) {
        let nav = el.closest("li");
        Array.from(this.nestedToggleBtns).forEach((btn) => {
            btn.closest("li") != nav
                ? btn.closest("li").classList.remove("is-active")
                : "";
        });
        nav.classList.toggle("is-active");
        nav.classList.contains("is-active")
            ? el.closest("header").classList.add("nested-toggle")
            : el.closest("header").classList.remove("nested-toggle");
        nav.classList.contains("is-active") &&
            window.innerWidth >= 768 &&
            window.innerWidth < 1024
            ? (nav.closest("nav").style.overflow = "inherit")
            : window.innerWidth >= 768 && window.innerWidth < 1024
                ? (nav.closest("nav").style.overflow = "auto")
                : "";
        nav.classList.contains("is-active") && window.innerWidth < 768
            ? (nav.closest("nav").style.overflow = "hidden")
            : window.innerWidth < 768
                ? (nav.closest("nav").style.overflow = "auto")
                : "";
        nav.classList.contains("is-active") && window.innerWidth < 768
            ? (document.body.style.overflow = "hidden")
            : window.innerWidth < 768
                ? (document.body.style.overflow = "hidden")
                : "";
        nav.classList.contains("is-active")
            ? nav.closest("nav").scrollTo({ top: 0 })
            : "";
    }
    // toggle L3 navigation
    grandToggleNestedNav(el) {
        let nav = el.closest("li");
        nav.classList.toggle("active");
    }
    createObserver() {
        let ob = new IntersectionObserver((entries, ob) => {
            this.headerBounds = entries[0].intersectionRect;
            ob.disconnect();
        });
        ob.observe(this.headerWrapper);
    }

    // window resize observer
    resizeObserver() {
        let resizeObserve = new ResizeObserver((entries) => {
            //position header from top in mobile and tablet
            let navAnnoucementHeight =
                document.querySelector('[data-role="navigation"]').clientHeight +
                document.querySelector('[data-role="announcement"]').clientHeight +
                "px";
            window.innerWidth >= 768 && window.innerWidth < 1024
                ? (document.querySelector("nav").style.top = `${navAnnoucementHeight}`)
                : document.querySelector("nav").removeAttribute("style");
            window.innerWidth < 768
                ? (document.querySelector("nav").style.top = `${document.querySelector('[data-role="navigation"]').clientHeight
                    }px`)
                : "";
            window.innerWidth >= 1024
                ? document.querySelector("nav").removeAttribute("style")
                : "";
            this.revealThreshold =
                window.innerWidth > 1024
                    ? this.attributes["hide-threshold"].value || 300
                    : 100;
        });
        resizeObserve.observe(document.body);
    }
    announcementBarVisibility() {
        let announcementBar = document.querySelector('[data-role="announcement"]');
        let megaDrops = document.querySelectorAll('[data-role="mega-drop"]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const intersecting = entry.isIntersecting;
                window.addEventListener("scroll", () => {
                    if (window.scrollY == 0) {
                        this.classList.add("announcement-active");
                    }
                });
                if (entry.intersectionRatio > 0.2 || window.scrollY == 0) {
                    this.classList.add("announcement-active");
                } else {
                    this.classList.remove("announcement-active");
                }
                if (!intersecting && window.innerWidth > 768) {
                    megaDrops.forEach((el) => {
                        el.style.marginTop = `-${announcementBar.clientHeight}px`;
                    });
                } else {
                    megaDrops.forEach((el) => {
                        el.style.marginTop = 0 + "px";
                    });
                }
            });
        });
        observer.observe(announcementBar);
    }
}

customElements.define("sticky-header", StickyHeader);

////// wishlist functionality
class WishlistBtn extends HTMLElement {
    constructor() {
        super();
        this.productId = this.dataset.productid;
        this.link = this.dataset.productlink;
        this.variantid = this.dataset.variantid;
        this.price = this.dataset.price;
        this.title = this.dataset.title;
        this.image = this.dataset.image;
        this.mode = "default";
        this.classElement = "wishlist-button";
        this.wishlistHash = "#hero-wishlist";

        this.addEventListener("click", () => {
            if (window.WishListHero_SDK.GetCustomerId()) {
                if (this.classList.contains("active")) {
                    this.removeProductFromWishlist.call(this);
                } else {
                    this.addProductToWishlist.call(this);
                }
            } else {
                window.WishListHero_SDK.OpenWishList();
            }
        });

        document.addEventListener("custom:wishlistUpdated", () => {
            let matchingElement = window.wishlisProductList.find(
                (el) => el.ProductVariantId == this.variantid
            );
            matchingElement
                ? this.classList.add("active")
                : this.classList.remove("active");
        });
    }
    addProductToWishlist() {
        let data = {
            ProductId: this.productId,
            ProductLink: this.link,
            ProductVariantId: this.variantid,
            ProductPrice: this.price,
            ProductTitle: this.title,
            ProductImage: this.image,
            ButtonMode: this.mode,
            ButtonClassElement: this.classElement,
            WishlistHash: window.WishListHero_SDK.GetWishListHash(),
        };
        window.WishListHero_SDK.AddWishListItem(data);
        this.classList.add("active");
    }
    removeProductFromWishlist() {
        let data = {
            ProductId: this.productId,
            ProductLink: this.link,
            ProductVariantId: this.variantid,
            ProductPrice: this.price,
            ProductTitle: this.title,
            ProductImage: this.image,
            ButtonMode: this.mode,
            ButtonClassElement: this.classElement,
            WishlistHash: window.WishListHero_SDK.GetWishListHash(),
        };
        window.WishListHero_SDK.DeleteWishListItem(data);
        this.classList.remove("active");
    }
}
customElements.define("wishlist-btn", WishlistBtn);
document.addEventListener("wishlist-hero-wishlist-sdk-ready", () => {
    window.wishlisProductList = window.WishListHero_SDK.GetWishListItems();
    document.dispatchEvent(new Event("custom:wishlistUpdated"));
});
document.addEventListener("wishlist-hero-wishlist-updated", () => {
    window.wishlisProductList = window.WishListHero_SDK.GetWishListItems();
    document.dispatchEvent(new Event("custom:wishlistUpdated"));
});
