const sign_in = (function(){

    return {
        init(){
            this.$form_box = document.querySelector(".main .form-box");
            this.$left = this.$form_box.querySelector('.left');
            this.$right = this.$form_box.querySelector('.right');
            //console.log( this.$left)
            this.$middle = this.$form_box.querySelector('.middle');
            this.$left_mask = this.$middle.firstElementChild;
            this.$right_mask = this.$middle.lastElementChild;
            //console.log(  this.$left_mask)
            this.event();
        },
        event(){
            var _this = this;
            this.$left.onclick = function(){  
               
            }
            this.$middle.onmouseenter = function(){
                console.log(4)
                console.log(_this.$left)
                if(_this.$left){
                    let newMove = new StartMove(_this.$left_mask); 
                    newMove.animateTo({left:-80},100,res=>{
                    });
                }
               
            }
            this.$middle.onmouseleave = function(){
                console.log(4)
                console.log(_this.$left)
                if(_this.$left){
                    let newMove = new StartMove(_this.$left_mask); 
                    newMove.animateTo({left:80},100,res=>{
                    });
                }
               
            }
            this.$right.onclick = function(){

            }
            //this.
        }
    }
}())