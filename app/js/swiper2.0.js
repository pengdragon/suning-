// 淡入淡出的轮播图
/*
    {
        el: '目标元素',
        autoplay： false，
        index: 0 // 展示图片的索引
    }

*/

function Swiper(obj) {
    if(typeof obj.el === 'string') {
        obj.el = document.querySelector(obj.el);
    }
    this.$el =  obj.el;
    // 找到小圆点的盒子
    this.$tipsBox = this.$el.querySelector('.banner-tip');
    // 获取所有的小圆点
    this.$allTips = this.$tipsBox.querySelectorAll('li');
    // 找到所有的图片
    this.$allImage = this.$el.querySelectorAll('.banner-inner>div');
    // 当前展示图片的索引
    this.index = obj.index || 0;
    this.timer = null;

}
// 初始化函数
Swiper.prototype.init = function(index) {
    this.showImage(index);
   // this.autoPlay();
    this.btn();
}
// 展示图片
Swiper.prototype.showImage = function(index) {
    // 如果用户传入index, 直接替换当前值
    if(index) {
        this.index = index;
    }
    // 判断index和法值
    if(this.index >= this.$allImage.length) {
        this.index = 0;
    }
    for(let i = 0; i < this.$allTips.length; i++) {
        this.$allTips[i].classList.remove('active');//移出按钮点击的效果
        move(this.$allImage[i], {opacity: 0}, 500, function(obj) {//所用图片透明度都变成0;
            obj.classList.remove('active');//所用的图片都none
        })
    }
    this.$allTips[this.index].classList.add('active');//点击后按钮变色
    this.$allImage[this.index].classList.add('active');//所点击的图片block
    move(this.$allImage[this.index], {opacity: 100}, 500)//所点击的图片的透明度为1

}
// 自动播放
Swiper.prototype.autoPlay = function(index) {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
        this.index++;
        this.showImage();
    }, 2000) 
}
Swiper.prototype.btn = function(){

    for(let i =0;i< this.$allTips.length;i++){
        this.$allTips[i].index = i;
        this.$tipsBox.onclick = e=>{
            e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.nodeName=="LI"){
                this.index=target.index;     
                //console.log(this.index);
                this.showImage();
            }
        }
    }
   
}