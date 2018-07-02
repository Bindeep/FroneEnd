<template>
    <div class="service-container">
        <div class="singleservice">
            <img class="serviceicon"
                 src="http://www.freeiconspng.com/uploads/book-stack-icon--icon-search-engine-16.png">
            <h2 class="servicetitle">
                Book Covers
            </h2>
            E-book or print, my goal is to make a captivating image that is true to your novel.
        </div>
        <div class="singleserviceb">
            <img class="serviceicon" src="http://free-icon-rainbow.com/i/icon_00079/icon_000790_256.png">
            <h2 class="servicetitle">
                VECTOR GRAPHICS
            </h2>
            From app icons to illustrations, look sharp with scalable, crisp, and lively graphics.
        </div>
        <div class="singleservice">
            <img class="serviceicon"
                 src="http://www.iconninja.com/files/642/213/85/idea-and-creativity-symbol-of-a-lightbulb-icon.svg">
            <h2 class="servicetitle">
                BRANDING
            </h2>
            Logos, business cards, signage, or social media, let's build an adventure.
        </div>
        <div class="singleserviceb">
            <img class="serviceicon" src="http://www.clipartbest.com/cliparts/Kin/L9M/KinL9MRzT.png">
            <h2 class="servicetitle">
                VOICEOVER
            </h2>
            E-book or print, my goal is to make a captivating image that is true to your novel.
        </div>
        <div class="singleservice">
            <img class="serviceicon" src="http://simpleicon.com/wp-content/uploads/computer-2.png">
            <h2 class="servicetitle">
                Web Design
            </h2>
            From app icons to illustrations, look sharp with scalable, crisp, and lively graphics.
        </div>
        <div class="singleserviceb">
            <img class="serviceicon" src="http://www.pngmart.com/files/1/Video-Icon-PNG-Clipart.png">
            <h2 class="servicetitle">
                MOTION DESIGN
            </h2>
            Logos, business cards, signage, or social media, let's build an adventure.
        </div>
    </div>
</template>

<script>
  export default {
    name: "BlogDetail"
  }
</script>

<style scoped>
    body {
        margin: 0px;
        padding-left: 50px;
        padding-right: 50px;
    }

    .services-wrapper {
        width: auto;
        min-height: 400px;
        padding: 25px;
    }

    .service-container {
        text-align: center;
        margin-top: 25px;
    }

    .singleservice {
        display: inline-block;
        width: 25%;
        height: 100%;
        background-color: #f3f3f3;
        padding: 25px;
        color: #b2b2b2;
        font-family: avenir;
        text-align: left;
        margin-bottom: 15px;
        padding: 40px;
        margin-left: 5px;
        margin-right: 5px;
        border-bottom: 5px solid skyblue;
        border-radius: 10px;
    }

    .singleserviceb {
        display: inline-block;
        width: 25%;
        height: 100%;
        background-color: #f3f3f3;
        padding: 25px;
        color: #b2b2b2;
        font-family: avenir;
        text-align: left;
        margin-bottom: 15px;
        padding: 40px;
        margin-left: 5px;
        margin-right: 5px;
        border-bottom: 5px solid orange;
        border-radius: 10px;
    }

    @media (max-width: 500px) {
        .singleservice, .singleserviceb {
            width: 100%;
        }
    }

    h2.servicetitle {
        font-family: century gothic;
        font-size: 16pt;
        font-weight: normal;
        letter-spacing: 1px;
        padding-bottom: 0px;
        text-align: center;
        text-transform: uppercase;
        color: #8c8c8c;
    }

    img.serviceicon {
        width: 20%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 15px;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        opacity: .5;
    }
</style>
