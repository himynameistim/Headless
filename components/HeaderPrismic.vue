<template>
  <header class="o-header">
    <p v-if="$store.state.menu === 'Please create a menu document'" class="logo">{{ $store.state.menu }}</p>
    <nav class="o-nav" role="navigation">
            <div class="container">
                <div class="nav-wrap">
                  <nuxt-link to="/">My Site</nuxt-link>
                    <!--<a class="a-nav-logo" href="/"><img class="a-img" src="~assets/img/logo-dark.svg" /></a>-->
                    <ul class="m-nav-list">
                      <li v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id">
                        <nuxt-link :to="`/${menuLink.link.uid}/`" class="a-nav-link"><span>{{ $prismic.asText(menuLink.label) }}</span></nuxt-link>
                        <prismic-link :field="menuLink.link" class="a-nav-link"><span>{{ $prismic.asText(menuLink.label) }}</span></prismic-link>
                      </li>
                      <li>
                          <a class="a-btn btn-primary a-nav-cta" href="@rightSideLink.Url" target="@rightSideLink.Target"><span>@rightSideLink.Name</span></a>
                      </li>
                    </ul>

                    <div class="a-nav-toggle">
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  </header>
</template>

<script>
export default {
  name: 'header-prismic',
  methods: {
    log(obj) {
      console.log(obj);
    }
  }
}
</script>


