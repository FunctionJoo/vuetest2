<template>
    <header>
        <a href="#"><i class="fab fa-grav logoimg"></i><span>TODO It!</span></a>
    </header>
</template>

<script>

export default {

};
</script>

<style scoped>
    header {
        text-align: center;
        padding: 20px 0;
        background: #ff893f;
    }
    header a {
        display:inline-block;
        text-decoration: none;
    }
    header .logoimg {
        font-size: 40px;
        color: #fff;
    }
    header span {
        padding-left: 10px;
        font-size: 34px;
        color: #fff;
        font-weight: 700;
        letter-spacing:-0.05em;
        line-height: 40px;
    }

@media (min-width: 600px) {
    header {
        text-align: left;
    }
    header a {
        margin: 0 0 0 20px;
    }
    header span {
        font-size: 34px;
    }
}
</style>
