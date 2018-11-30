const sign_in = (function(){

    return {
        init(){
            this.$form_box = document.querySelector(".main .form-box");
            this.$left = this.$form_box.querySelector('.left');
            this.$right = this.$form_box.querySelector('.right');
            console.log( this.$left)
            this.$middle = this.$form_box.querySelector('.middle');
            this.$left_mask = this.$middle.firstElementChild;
            this.$right_mask = this.$middle.lastElementChild;
            console.log(  this.$left_mask)
            this.event();
        },
        event(){
            var _this = this;
            this.$left.onclick = function(){

            }
            this.$right.onclick = function(){

            }
            //this.
        }
    }
}())