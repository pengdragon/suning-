const sign_in = (function(){

    return {
        init(){
            this.$form_box = this.$(".main .form-box")
            //this.$form_box = document.querySelector(".main .form-box");
            this.$left =  this.$('.left');
            this.$right =  this.$('.right');
            this.$left_span = this.$left.lastElementChild;
            this.$right_span = this.$right.lastElementChild;
            //console.log(this.$right_span);
            this.$middle =  this.$('.middle');
            this.$left_mask = this.$middle.firstElementChild;
            this.$right_mask = this.$middle.lastElementChild;
            //console.log(  this.$left_mask)
            this.$sign =  this.$('.sign');
            this.$form_input =  this.$('.form-input');
            //console.log(this.$form_input);
            this.$login_submit =  this.$('#login-submit');
            //console.log(this.login_submit);
            this.$username =  this.$('#username')
            this.$password = this.$('#password');
            this.login_error =  this.$('.login-error');
            this.$userreset =  this.$('.userreset');
            this.$passreset =  this.$('.passreset');
            this.$open_app = this.$(".open-app");
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
                this.$open_app.style.display= 'block';
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
                this.$open_app.style.display= 'none';
            }
            this.$middle.onmouseenter = _=>{
                if(this.$middle){
                    let newMove = new StartMove(this.$left_mask); 
                    newMove.animate({left:90},200,res=>{
                        this.$right_mask.style.display="block";
                        
                    });
                }
               
            }
            this.$middle.onmouseleave = _=>{
                if(this.$middle){
                    let newMove = new StartMove(this.$left_mask); 
                    this.$right_mask.style.display="none";
                    newMove.animate({left:170},200);
                }
               
            }
            //文本框的值改变时
            this.$username.oninput = function(){
                if(this.value==""){
                    _this.$userreset.style.display="none";
                }else{
                    _this.$userreset.style.display="block";
                }
            }
            this.$password.oninput = function(){
                if(this.value==""){
                    _this.$passreset.style.display = "none";
                }else{
                    _this.$passreset.style.display = "block";
                }
            }
            this.$userreset.onclick = function(){
                _this.$username.value='';
                this.style.display = "none";

            }
            this.$passreset.onclick = function(){
                _this.$password.value="";
                this.style.display="none";
            }
            //提交
           this.$login_submit.onclick =_=>{   
            let userVal = this.$username.value;
            let passVal = this.$password.value;
             this.login_error_span =  this.login_error.querySelector('span');
             console.log( this.login_error_span)
            if( userVal==""){
                this.login_error.style.display="block";
                this.login_error_span.innerHTML = '请输入用户名/邮箱/手机号！'
                this.$username.focus();
            }else{
                if(passVal==""||passVal.length<6){
                    this.login_error.style.display="block";
                    this.login_error_span.innerHTML = '请输入6-20位密码！'
                    this.$password.focus();
                }
            }
            if(userVal&&passVal.length>5){
                sendAjax("../../server/php/sign_in.php",{
                    data:{username:userVal,password:passVal},
                    method:'post'
                })
                .then(res=>{
                   
                    res = JSON.parse(res);
                    console.log(res);
                    if(res.code=="10000"){
                        console.log(userVal);
                       user = {username:userVal, password:passVal};
                       user = JSON.stringify(user);
                       localStorage.setItem("user",user);
                        this.login_error.style.display="none";
                        setTimeout(_=>{
                            location.href = '../index.html'
                        },2000);
                       
                    }else{
                        this.login_error.style.display="block";
                        this.login_error_span.innerHTML = "该账户名不存在，忘记账户名或注册新账号?"
                    }
                })
            }
            
        }
        document.onkeydown = e=>{
            e = e || window.event;
            var keyCode = e.keyCode || e.which;
            if(keyCode==13){
                this.$login_submit.click();
            }
        }
        },
        $(ele){
            return document.querySelector(ele);
        }
    }
}())