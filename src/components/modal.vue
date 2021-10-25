<template>
<transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">

                <div class="modal-header">
                    <slot name="header">
                    <i class="fas fa-exclamation"></i> 경고
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                    아무튼 무슨 잘못을 해서 경고창을 띄웠읍니다!
                    </slot>
                </div>

                <div class="modal-footer clear">
                    <slot name="footer">
                    <button class="modal-default-button" @click="$emit('close')">
                        OK
                    </button>
                    </slot>
                </div>
            </div>
        </div>
        </div>
    </transition>
</template>

<script>
export default {

}
</script>

<style>

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 90%;
    margin: 0px auto;
    padding: 0 0 20px 0;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    box-sizing: border-box;
}

.modal-header {
    display: block;
    padding: 12px 20px;
    background: #ff893f;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
}

.modal-body {
    margin: 20px 20px 0;
    line-height: 130%;
    font-size: 16px;
}

.modal-footer {
    padding: 0 20px 0;
}

.modal-default-button {
    border: 0 none;
    background: #ff893f;
    color: #fff;
    border-radius: 4px;
    float: right;
    font-size: 18px;
    padding: 5px 15px;
    line-height: 100%;
    margin-top: 12px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>