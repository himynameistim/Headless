<template>
<div class="container-fluid no-gutters">
        <div class="row clearfix">
                <div class="col-md-12 column component-wrap">
        <!-- Slice section template -->
        <section v-for="(slice, index) in slices" :key="'slice-' + index">
            <!-- Hero Light slice component -->
            <template v-if="slice.slice_type === 'hero_light'">
                <hero-light :slice="slice"/>
            </template>
            <!-- Text and Body slice component -->
            <template v-if="slice.slice_type === 'title_and_body'">
                <title-body :slice="slice"/>
            </template>
            <!-- Left Image and Content slice component -->
            <template v-if="slice.slice_type === 'left_image_and_content'">
                <left-image-and-content :slice="slice"/>
            </template>
            <!-- Right Image and Content slice component -->
            <template v-if="slice.slice_type === 'right_image_and_content'">
                <right-image-and-content :slice="slice"/>
            </template>
            <!-- Text slice component -->
            <template v-if="slice.slice_type === 'text_section'">
                <text-slice :slice="slice"/>
            </template>
            <!-- Quote slice component -->
            <template v-else-if="slice.slice_type === 'quote'">
                <quote-slice :slice="slice"/>
            </template>
            <!-- Full Width Image slice component -->
            <template v-else-if="slice.slice_type === 'full_width_image'">
                <full-width-image :slice="slice"/>
            </template>
            <!-- Image Gallery slice component -->
            <template v-else-if="slice.slice_type === 'image_gallery'">
                <image-gallery :slice="slice"/>
            </template>
            <!-- Image Highlight slice component -->
            <template v-else-if="slice.slice_type === 'image_highlight'">
                <image-highlight :slice="slice"/>
            </template>
        </section>
    </div></div></div>
</template>

<script>
// Imports for all slices
const HeroLight = () => import("./slices/HeroLight.vue");
const TitleBody = () => import("./slices/TitleAndBody.vue")
const LeftImageAndContent = () => import("./slices/LeftImageAndContent.vue")
const RightImageAndContent = () => import("./slices/RightImageAndContent.vue")
const TextSlice = () => import("./slices/TextSlice.vue");
const QuoteSlice = () => import("./slices/QuoteSlice.vue");
const FullWidthImage = () => import("./slices/FullWidthImage.vue");
const ImageGallery = () => import("./slices/ImageGallery.vue");
const ImageHighlight = () => import("./slices/ImageHighlight.vue");

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    HeroLight,
    TitleBody,
    LeftImageAndContent,
    RightImageAndContent,
    TextSlice,
    QuoteSlice,
    FullWidthImage,
    ImageGallery,
    ImageHighlight
  },
}
</script>