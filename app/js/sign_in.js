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
            this.$form_input = document.querySelector('.form-input');
            //console.log(this.$form_input);
            this.$login_submit = document.querySelector('#login-submit');
            //console.log(this.login_submit);
            this.$username = document.querySelector('#username')
            this.$password =document.querySelector('#password');
            this.login_error = document.querySelector('.login-error');
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
           this.$login_submit.onclick =_=>{   
            let userVal = this.$username.value;
            let passVal = this.$password.value;
            let login_error =  this.login_error.querySelector('span');
            console.log(login_error);
            if( userVal==""){
                
            }
            //console.log(userVal);
            if(userVal&&passVal){
                sendAjax("../../server/php/sign_in.php",{
                    data:{username:userVal,password:passVal},
                    method:'post'
                })
                .then(res=>{
                   
                    res = JSON.parse(res);
                    console.log(res);
                    if(res.code=="10000"){
                        console.log('成功')
                        location.href = '../index.html'
                    }
                })
            }else{
                console.log('密码或用户名不能为空')
            }
            
        }
        document.onkeydown = e=>{
            e = e || window.event;
            var keyCode = e.keyCode || e.which;
            if(keyCode==13){
                this.$login_submit.click();
            }
        }
        }
    }
}())