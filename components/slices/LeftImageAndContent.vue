<template>
    <section class="o-block o-content-image _image-left">
        <div class="container">
          <div class="row">
              <div class="col-12 col-lg-6 m-col-image">
                  <picture>
                      <!--<source srcset="@Url.GetCropUrl((IPublishedContent)Model.Image, "Content Desktop")" media="(min-width: 992px)">
                      <source srcset="@Url.GetCropUrl((IPublishedContent)Model.Image, "Content Large Tablet")" media="(min-width: 768px)">
                      <source srcset="@Url.GetCropUrl((IPublishedContent)Model.Image, "Content Small Tablet")" media="(min-width: 576px)">
                      <source srcset="@Url.GetCropUrl((IPublishedContent)Model.Image, "Content Mobile")" media="(min-width: 400px)">
                      <source srcset="@Url.GetCropUrl((IPublishedContent)Model.Image, "Content Small Mobile")" media="(min-width: 0px)">-->
                      <source :srcset="slice.primary.image.ContentDesktop" media="(min-width: 992px)">
                      <img class="a-img" :src="slice.primary.image.url" />
                  </picture>
              </div>
              <div class="col-12 col-lg-6 m-col-content">
                  <div class="content-wrap">
                          <h3 class="a-h3 a-title">{{ $prismic.asText(slice.primary.title) }}</h3>

                          {{ $prismic.asText(slice.primary.body1) }}


                        <p v-if="$prismic.asLink(slice.primary.link)"><prismic-link :field="slice.primary.link" class="a-btn btn-primary">{{ $prismic.asText(slice.primary.link_text) }}</prismic-link></p>
                  </div>
              </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'left-image-and-content',
  created () {
  },
  methods: {
    log(obj) {
      console.log(obj);
    },
    getImageUrl(obj, size) {
      if (size = "ContentDesktop") {
        return obj.ContentDesktop.url;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// COMPONENT [ IMAGE-CONTENT ] ########################################################################################

// A. MOBILE STYLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A.1. GLOBAL STYLING ------------------------------------

.o-content-image {
  .m-col-image { order: 1;
    img { 
      margin-bottom: 40px; box-shadow: 0px 1px 2px rgba($black, 0.06), 0px 1px 3px rgba($black, 0.1); border-radius: 4px;
    }
  }
  .m-col-content { order: 2; }
}

// A.1. END -----------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// B. MIN-WIDTH: 576px ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@media ($xs-up) {}

// B. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// C. MIN-WIDTH: 768px ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@media ($sm-up) {}

// C. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// D. MIN-WIDTH: 992px ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@media ($md-up) {
  .o-content-image {
    .m-col-image { order: 1;
      img { margin-bottom: 0px; }
    }
    .m-col-content { order: 2; display: flex; align-content: center; flex-wrap: wrap; align-items: center;
      .content-wrap { max-width: 485px; text-align: left; margin-left: auto; }      
    }

    &._image-right {
      .m-col-image { order: 2; }
      .m-col-content { order: 1; 
        .content-wrap { margin-right: auto; }
      }
    }
  }
}

// D. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// E. MIN-WIDTH: 1024px +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@media ($mdl-up) {}

// E. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// F. MIN-WIDTH: 1200px +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@media ($lg-up) {}

// F. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// G. MIN-WIDTH: 1400px +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@media ($xlg-up) {}

// G. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE ########################################################################################################

</style>