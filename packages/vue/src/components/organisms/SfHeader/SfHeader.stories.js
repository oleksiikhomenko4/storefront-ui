/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  select,
  boolean,
  object
} from "@storybook/addon-knobs";

import SfHeader from "./SfHeader.vue";

storiesOf("Organisms|Header", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            mobile: { url: "/assets/logo.svg" },
            desktop: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        )
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props")
      }
    },
    data() {
      return {
        isMobile: false,
        navigation: ["women", "man", "kids"]
      };
    },
    computed: {
      spacer() {
        return this.isMobile
          ? { maxWidth: "1024px", margin: "auto", padding: "0 1.25rem" }
          : { maxWidth: "1024px", margin: "auto", padding: "0 2.5rem" };
      }
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <
        1024;
      window.matchMedia("(max-width: 1024px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1024px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      alert(label) {
        alert(label);
      },
      mobileHandler(event) {
        this.isMobile = event.matches;
      }
    },
    template: `<SfHeader
        :title="title"
        :logo="logo"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :cart-icon="cartIcon"
        :wishlist-icon="wishlistIcon"
        :account-icon="accountIcon"
        :style="spacer"
        @click:cart="alert('@click:cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:account="alert('@click:account')"
        >
        <template #navigation>
          <SfHeaderNavigationItem 
            v-for="item in navigation" 
            :key="item">
            <a href="#">{{item}}</a>
          </SfHeaderNavigationItem>
        </template>
      </SfHeader>`
  }))
  .add("[slot] navigation", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            mobile: { url: "/assets/logo.svg" },
            desktop: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        )
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props")
      }
    },
    data() {
      return {
        isMobile: false,
        navigation: ["women", "man", "kids"]
      };
    },
    computed: {
      spacer() {
        return this.isMobile
          ? { maxWidth: "1024px", margin: "auto", padding: "0 1.25rem" }
          : { maxWidth: "1024px", margin: "auto", padding: "0 2.5rem" };
      }
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <
        1024;
      window.matchMedia("(max-width: 1024px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1024px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      alert(label) {
        alert(label);
      },
      mobileHandler(event) {
        this.isMobile = event.matches;
      }
    },
    template: `<SfHeader
        :title="title"
        :logo="logo"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :cart-icon="cartIcon"
        :wishlist-icon="wishlistIcon"
        :account-icon="accountIcon"
        :style="spacer"
        @click:cart="alert('@click:cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:account="alert('@click:account')"
    >
      <template #navigation>
        <div :style="{margin: '0 0 0 1.25rem'}">CUSTOM NAVIGATION</div>
      </template>
    </SfHeader>`
  }))
  .add("[slot] logo", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            mobile: { url: "/assets/logo.svg" },
            desktop: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        )
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props")
      }
    },
    data() {
      return {
        isMobile: false,
        navigation: ["women", "man", "kids"]
      };
    },
    computed: {
      spacer() {
        return this.isMobile
          ? { maxWidth: "1024px", margin: "auto", padding: "0 1.25rem" }
          : { maxWidth: "1024px", margin: "auto", padding: "0 2.5rem" };
      }
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <
        1024;
      window.matchMedia("(max-width: 1024px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1024px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      alert(label) {
        alert(label);
      },
      mobileHandler(event) {
        this.isMobile = event.matches;
      }
    },
    template: `<SfHeader
        :title="title"
        :logo="logo"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :cart-icon="cartIcon"
        :wishlist-icon="wishlistIcon"
        :account-icon="accountIcon"
        :style="spacer"
        @click:cart="alert('@click:cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:account="alert('@click:account')"
    >
      <template #logo="{logo,title}">
        CUSTOM LOGO
      </template>
    </SfHeader>`
  }))
  .add("[slot] search", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            mobile: { url: "/assets/logo.svg" },
            desktop: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        )
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props")
      }
    },
    data() {
      return {
        isMobile: false,
        navigation: ["women", "man", "kids"]
      };
    },
    computed: {
      spacer() {
        return this.isMobile
          ? { maxWidth: "1024px", margin: "auto", padding: "0 1.25rem" }
          : { maxWidth: "1024px", margin: "auto", padding: "0 2.5rem" };
      }
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <
        1024;
      window.matchMedia("(max-width: 1024px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1024px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      alert(label) {
        alert(label);
      },
      mobileHandler(event) {
        this.isMobile = event.matches;
      }
    },
    template: `<SfHeader
        :title="title"
        :logo="logo"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :cart-icon="cartIcon"
        :wishlist-icon="wishlistIcon"
        :account-icon="accountIcon"
        :style="spacer"
        @click:cart="alert('@click:cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:account="alert('@click:account')"
    >
      <template #search>
        <div :style="{margin: '0 0 0 auto'}">CUSTOM SEARCH</div>
      </template>
    </SfHeader>`
  }))
  .add("[slot] header-icons", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            mobile: { url: "/assets/logo.svg" },
            desktop: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        )
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props")
      }
    },
    data() {
      return {
        isMobile: false,
        navigation: ["women", "man", "kids"]
      };
    },
    computed: {
      spacer() {
        return this.isMobile
          ? { maxWidth: "1024px", margin: "auto", padding: "0 1.25rem" }
          : { maxWidth: "1024px", margin: "auto", padding: "0 2.5rem" };
      }
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <
        1024;
      window.matchMedia("(max-width: 1024px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1024px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      alert(label) {
        alert(label);
      },
      mobileHandler(event) {
        this.isMobile = event.matches;
      }
    },
    template: `<SfHeader
        :title="title"
        :logo="logo"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :cart-icon="cartIcon"
        :wishlist-icon="wishlistIcon"
        :account-icon="accountIcon"
        :style="spacer"
        @click:cart="alert('@click:cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:account="alert('@click:account')"
    >
      <template #header-icons="{ accountIcon, wishlistIcon, cartIcon }">
        <div :style="{margin: '0 0 0 1.25rem'}">CUSTOM HEADER ICONS</div>
      </template>
    </SfHeader>`
  }))
  .add("[slot] language-selector", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            mobile: { url: "/assets/logo.svg" },
            desktop: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        )
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props")
      }
    },
    data() {
      return {
        isMobile: false,
        navigation: ["women", "man", "kids"]
      };
    },
    computed: {
      spacer() {
        return this.isMobile
          ? { maxWidth: "1024px", margin: "auto", padding: "0 1.25rem" }
          : { maxWidth: "1024px", margin: "auto", padding: "0 2.5rem" };
      }
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <
        1024;
      window.matchMedia("(max-width: 1024px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1024px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      alert(label) {
        alert(label);
      },
      mobileHandler(event) {
        this.isMobile = event.matches;
      }
    },
    template: `<SfHeader
        :title="title"
        :logo="logo"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :style="spacer"
    >
      <template #language-selector>
        <div :style="{margin: '0 0 0 1rem'}">LANGUAGE SELECTOR</div>
      </template>
    </SfHeader>`
  }));
