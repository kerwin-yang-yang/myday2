<template>
    <div id="top">
        <div id="top-left">
            <div><img src="../../public/QQ截图20190523151547.png" alt="" width="180px"></div>

        </div>
        <div id="top-right">
            <ul>
                <li class="active" style="color: #eb95ae;">Home</li>
                <!-- <li>Who is Red Bilby ?</li> -->
                <li>Services</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
                <li>Blog</li>
                <li>Quote</li>
                <li>Contact</li>
            </ul>
        </div>

    </div>
</template>
<script></script>
<style>
ul li {

    list-style: none;
    display: inline-block;
    width: 100px;
    /* display: flex; */
    justify-content: center;
    text-align: center;
    margin: 20px 0px;
    color: #9e9e9e;

}

#top {
    height: 50px
}

#top-right {
    float: right;
    width: 80%;
    height: 100%;

}

#top-right ul {
    height: 100%;
    margin: 0;
}

#top-left img {
    height: 100%;

}

#top-left {
    height: 100%;
    float: left;
}
</style>