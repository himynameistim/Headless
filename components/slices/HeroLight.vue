<template>
  <section class="o-hero _light">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 m-col-content">
          <div class="hero-content">
            <!--@if (Model.Title != null)
            {-->
              <h1 class="a-h1 a-title">{{ $prismic.asText(slice.primary.title) }}</h1>
            <!--}-->

            <!--@if (Model.Body != null)
            {-->
              {{ $prismic.asText(slice.primary.Body) }}
            <!--}

            @foreach (var link in Model.Link)
            {-->
              <p>
              <prismic-link :field="slice.primary.button_link" class="a-btn btn-primary">{{ $prismic.asText(slice.primary.button_text) }}</prismic-link>
              </p>
            <!--}-->
          </div>
        </div>
        <div class="col-md-6"></div>
      </div>
    </div>
    <!--@if (Model.Image != null)
    {
        string imgUrl = Model.Image.Url + "?mode=crop&width=1300&height=750";-->
        
        <div class="hero-bg" v-bind:style="{ backgroundImage: 'url(\'' + slice.primary.Image.url + '\')' }"></div>
    <!--}-->
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'hero-light'
}
</script>

<style lang="scss">
// COMPONENT [ HERO ] #################################################################################################

// A. MOBILE STYLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A.1. HERO GLOBAL --------------------------------------

.o-hero { position: relative;
  p, .a-p { font-size: 18px; line-height: 28px; } 
}

// A.1. END -----------------------------------------------


// A.2. HERO LIGHT ----------------------------------------

.o-hero { 
  &._light {  
    .m-col-content { 
      .hero-content { padding: 50px 10px; } 
    }
    .hero-bg {
      width: 100%; height: 300px; background-position: top center; background-repeat: no-repeat; background-size: cover; 
    }
  }
}

// A.2. END -----------------------------------------------


// A.3. HERO DARK -----------------------------------------

.o-hero {
  &._dark { background: $grey-15; 
    .m-col-content { 
      .hero-content { padding: 50px 10px; 
        *:not(.a-btn) { color: $white; }
      }
    }
    .m-col-img {
      img { margin-bottom: 50px; } 
    }
  }
}

// A.3. END -----------------------------------------------


// A.4. HERO TEXT -----------------------------------------

.o-hero {
  &._text { padding: 60px 10px; text-align: left;
    .a-title, p { max-width: 790px; margin-left: auto; margin-right: auto; }
  } 
}

// A.4. END -----------------------------------------------


// A.5. HERO FORM -----------------------------------------

.o-hero {
  &._form { 
    .umbraco-forms-form { margin-top: 40px;                          
      .a-form-field {
        &._btn-wrap { margin-top: 10px; }
      }
    }
  } 
}

// A.5. END -----------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// B. MIN-WIDTH: 576px ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@media ($xs-up) {}

// B. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// C. MIN-WIDTH: 768px ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@media ($sm-up) {


  // A.2. HERO LIGHT --------------------------------------
  
  .o-hero {
    &._light {  
      .m-col-content { order: 2; min-height: 450px; display: flex; align-items: center;
        .hero-content { max-width: 600px; padding-right: 0px; } 
      }
      .hero-bg { 
        position: absolute; top: 0px; left: 0px; bottom: 0px; height: auto; 
        width: calc(50% - 15px); background-position: center center;
      } 
    }
  }

  // A.2. END ---------------------------------------------


  // A.3. HERO DARK ---------------------------------------

  .o-hero { 
    &._dark {      
      .m-col-content { order: 1; display: flex; align-items: center;
        .hero-content { padding: 50px 0px 50px 0px; max-width: 585px; } 
      }
      .m-col-img { order: 2; display: flex; align-items: center; 
        img { margin-bottom: 0px; }
      } 
    }
  }

  // A.3. END ---------------------------------------------


  // A.4. HERO TEXT ---------------------------------------

  .o-hero { 
    &._text {
      text-align: center; padding: 50px 0px; min-height: 300px; display: flex; align-content: center; align-items: center; 
    } 
  }

  // A.4. END ---------------------------------------------

}

// C. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// D. MIN-WIDTH: 992px ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@media ($md-up) {

  // A.1. HERO GLOBAL -------------------------------------

  .o-hero {
    p, .a-p { font-size: 21px; line-height: 35px; }
  }

  // A.1. END ---------------------------------------------


  // A.2. HERO LIGHT --------------------------------------
  
  .o-hero {
    &._light {  
      .m-col-content { min-height: 550px; 
        .hero-content { padding: 50px 0px 50px 20px; }
      }
    }
  }

  // A.2. END ---------------------------------------------


  // A.3. HERO DARK ---------------------------------------

  .o-hero {
    &._dark {      
      .m-col-content { min-height: 460px; 
        .hero-content {
          .a-btn { margin-top: 10px; }
        }
      }
    }
  }

  // A.3. END ---------------------------------------------


  // A.4. HERO TEXT ---------------------------------------
   
  .o-hero { 
    &._text { min-height: 350px; } 
  }

  // A.4. END ---------------------------------------------


  // A.5. HERO FORM -----------------------------------------

  .o-hero {
    &._form {
      .umbraco-forms-form {
        .umbraco-forms-field {
          &.firstname, &.lastname { max-width: calc(50% - 15px); clear: none; display: inline-block; }
          &.firstname { margin-right: 15px; float: left; }
          &.lastname { margin-left: 15px; float: right; }
        }
      }
    } 
  }

  // A.5. END -----------------------------------------------

}

// D. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// E. MIN-WIDTH: 1024px +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@media ($mdl-up) {}

// E. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// F. MIN-WIDTH: 1200px +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@media ($lg-up) {

  // A.2. HERO LIGHT --------------------------------------
  
  .o-hero {
    &._light {  
      .m-col-content { min-height: 650px; 
        .hero-content { padding: 50px 0px 50px 30px; }
      }
    }
  }

  // A.2. END ---------------------------------------------


  // A.3. HERO DARK ---------------------------------------

  .o-hero {
    &._dark {      
      .m-col-content { min-height: 560px; } 
    }
  }

  // A.3. END ---------------------------------------------


  // A.4. HERO TEXT ---------------------------------------

  .o-hero {
    &._text { min-height: 400px; }
  }

  // A.4. END ---------------------------------------------


  // A.5. HERO FORM ---------------------------------------

  .o-hero { 
    &._form {
      .m-col-content {
        .hero-content { padding: 80px 0 10px 50px; } 
      }
    } 
  }

  // A.5. END ---------------------------------------------

}

// F. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// G. MIN-WIDTH: 1400px +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@media ($xlg-up) {

  // A.2. HERO LIGHT --------------------------------------
  
  .o-hero {
    &._light {  
      .m-col-content { min-height: 750px; }
    }
  }

  // A.2. END ---------------------------------------------


  // A.3. HERO DARK ---------------------------------------

  .o-hero {
    &._dark {      
      .m-col-content { min-height: 660px; }
    }
  }

  // A.3. END ---------------------------------------------


  // A.4. HERO TEXT ---------------------------------------

  .o-hero { 
    &._text { min-height: 460px; } 
  }

  // A.4. END ---------------------------------------------


  // A.5. HERO FORM ---------------------------------------

  .o-hero { 
    &._form {
      .m-col-content { 
        .hero-content { padding: 80px 0 10px 100px; }
      }
    } 
  }

  // A.5. END ---------------------------------------------

}

// G. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE ########################################################################################################

</style>