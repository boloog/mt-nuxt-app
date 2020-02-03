<template>
  <Carousel autoplay loop :autoplay-speed="autoplaySpeed">
    <CarouselItem>
        <img src="//img13.360buyimg.com/babel/s1180x940_jfs/t1/104196/24/9419/96289/5e0f3e56E83e6c170/9e9f83ab5b5a76dd.jpg.webp" alt="">
    </CarouselItem>
    <CarouselItem>
        <img src="//img20.360buyimg.com/pop/s1180x940_jfs/t1/107383/33/3592/135687/5e12cd8fE066b3dfe/09f72f8d79586061.jpg.webp" alt="">
    </CarouselItem>
    <CarouselItem>
        <img src="//img13.360buyimg.com/pop/s1180x940_jfs/t1/88221/12/9248/84243/5e0d8c2bE3b1f9b21/40c063eeb2dc3876.jpg.webp" alt="">
    </CarouselItem>
    <CarouselItem>
        <img src="//img30.360buyimg.com/pop/s1180x940_jfs/t1/96462/35/9774/157605/5e12cd8fE2b6c12f4/bdea4482a5d68e84.jpg.webp" alt="">
    </CarouselItem>
</Carousel>

</template>

<script>
    export default {
      props: {
        autoplaySpeed: {
          default: 3000
        }
      },
        data () {
            return {

            }
        }
    }
</script>
