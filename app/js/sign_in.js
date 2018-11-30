const sign_in = (function(){

    return {
        init(){
            this.$form_box = document.querySelector(".main .form-box");
            this.$left = this.$form_box.querySelector('.left');
            this.$right = this.$form_box.querySelector('.right');
            this.$left_span =  this.$left.lastElementChild;
            this.$right_span =  this.$right.lastElementChild;
            console.log(this.$right_span);
            this.$middle = this.$form_box.querySelector('.middle');
            this.$left_mask = this.$middle.firstElementChild;
            this.$right_mask = this.$middle.lastElementChild;
            //console.log(  this.$left_mask)
            this.$sign = document.querySelector('.sign');
            this.$form_input = this.$sign.firstElementChild;
            console.log(this.$form_input);
            this.event();
        },
        event(){
            var _this = this;
            this.$left.onclick = e=>{  
                e.returnValue= false;
                //点击左边，登录隐藏，扫码手机显示
                this.$middle.style.display="block"; 
                this.$sign.style.display = 'none';      
                //点击左边，右边的span要隐藏；
                this.$right_span.style.display="none";
                //左边的显示
                this.$left_span.style.display="block";
            }
            this.$right.onclick =e=>{
                e.returnValue= false;
                //点击右边，登录显示，扫码手机隐藏
                this.$middle.style.display="none";
                this.$sign.style.display = "block";
                //点击右边，左边的span要隐藏；
                this.$left_span.style.display="none";
                //右边的显示
                this.$right_span.style.display="block";
            }
            this.$middle.onmouseenter = _=>{
                if(this.$middle){
                    let newMove = new StartMove(this.$left_mask); 
                    newMove.animateTo({left:-80},200,res=>{
                        this.$right_mask.style.display="block";
                    });
                }
               
            }
            this.$middle.onmouseleave = _=>{
                if(this.$middle){
                    let newMove = new StartMove(this.$left_mask); 
                    this.$right_mask.style.display="none";
                    newMove.animateTo({left:80},200);
                }
               
            }
           
            //this.
        }
    }
}())