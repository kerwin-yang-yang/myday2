<template>
    <div class="slideshow-container">

        <div class="slide">
            <img src="../image-红色/banner.png" alt="Image 1" class="active">

        </div>


        <div class="slide">
            <img src="../image-红色/book1.png" alt="Image 1">

        </div>


        <div class="slide">
            <img src="../image-红色/book2.png" alt="Image 1">
        </div>

        <div class="slideshow-controls">
            <input type="radio" name="controls" id="control1" checked>


            <input type="radio" name="controls" id="control2">


            <input type="radio" name="controls" id="control3">

        </div>
    </div>
    <div id="people">
        <div class="item">
            <div>
                <img src="../image-红色/con1.png" alt="">
            </div>


            <div>
                <h3>WEBSITES </h3>
                <p>We make handcrafted websites for
                    your business. We handleeverything from registering your
                    Domain name to hosting.</p>
            </div>
        </div>
        <div class="item">
            <div>
                <img src="../image-红色/con2.png" alt="">
            </div>


            <div>
                <h3>WEBSITES </h3>
                <p>We make handcrafted websites for
                    your business. We handleeverything from registering your
                    Domain name to hosting.</p>
            </div>
        </div>
        <div class="item">
            <div>
                <img src="../image-红色/con3.png" alt="">
            </div>


            <div>
                <h3>WEBSITES </h3>
                <p>We make handcrafted websites for
                    your business. We handleeverything from registering your
                    Domain name to hosting.</p>
            </div>
        </div>
        <div class="item">
            <div>
                <img src="../image-红色/con4.png" alt="">
            </div>


            <div>
                <h3>WEBSITES </h3>
                <p>We make handcrafted websites for
                    your business. We handleeverything from registering your
                    Domain name to hosting.</p>
            </div>
        </div>


    </div>
    <div id="thing">
        <div style="margin-left: 100px;margin-bottom: 50px;color: #888;"> RECENT WORK</div>
        <div id="thing-one">
            <div class="thing-item"><img src="../image-红色/book1.png" alt="">
                <h3>Book Cover Design</h3>
            </div>
            <div class="thing-item"><img src="../image-红色/book2.png" alt="">
                <h3>lan Moss Promo Video</h3>
            </div>
            <div class="thing-item"><img src="../image-红色/book3.png" alt="">
                <h3>lan Moss Website</h3>
            </div>
            <div class="thing-item"><img src="../image-红色/book4.png" alt="">
                <h3>Driven Indulgence</h3>
            </div>
        </div>
        <div id="thing-two">
            <button
                style="border: 3px solid pink;border-radius: 10px;background:none;color: pink;font-size: 18px; width: 250px;height: 40px;margin-top: 20px;">View
                more of our work</button>
        </div>


    </div>
    <div id="final" style="display: flex;
flex-direction: column;
justify-content: center;
align-items: center;color: white;">
        <h3>
            Let's create something together!
        </h3>
        <div><button
                style="border: 1px solid white;border-radius: 10px;background:none;color: white; width: 150px;height: 40px;margin-top: 20px;">Get
                a
                quote</button>
        </div>
    </div>
</template>
<script></script>
<style scoped>
.slideshow-container {
    position: relative;
    width: 100%;
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
}

.slideshow-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slideshow-container .slide {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;

    transition: opacity 0.5s ease-in-out;

}

.slideshow-container .slide.active {
    opacity: 1;

}

.slideshow-controls {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}

.slideshow-controls label {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #bbb;
    margin: 0 5px;
    cursor: pointer;
}

.slideshow-controls label:hover {
    background: #888;
}

.slideshow-controls input:checked+label {
    background: #555;
}

#people {
    /* float: left; */
    display: flex;
    padding: 20px 80px;
    width: 100%;
    height: 30%;
}

#people .item {
    width: 20%;
    float: left;
    margin: 0 20px;
    text-align: center;
}

#people .item h3 {
    color: pink;
}

#people .item p {
    font-size: small;
}

#people img {
    width: 50%;
    margin-bottom: 20px;
}

#thing {
    height: 400px;
    background-color: #eceaea;

    padding: 20px 100px;
}

#thing-one {
    display: flex;
}

#thing-one .thing-item {
    width: 25%;
    text-align: center;
    font-size: 200;
    color: pink;
}

#thing-two {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: pink;

}

.thing-item img {
    width: 50%;
}

#final {
    background-color: #d91c5c;
    height: 200px;
}
</style>