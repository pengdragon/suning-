function ChangeImage(obj) {
    Swiper.call(this, obj);

    this.$imageBox = this.$el.querySelector('.banner-inner');
    // 获取一张图片的宽
    this.$width = this.$el.clientWidth;
    // 把第一张图片加到最后一张， 最后一张添加到第一张
    const firstElement = this.$allImage[0];
    const lastElement = this.$allImage[this.$allImage.length - 1];
    this.$imageBox.appendChild(firstElement.cloneNode(true));
    this.$imageBox.insertBefore(lastElement.cloneNode(true), firstElement);
    this.$imageBox.style.left = -this.$width + 'px';
    // 给上一页下一页添加点击事件
    this.$nextBtn = this.$el.querySelector('.right-btn');
    this.$preBtn = this.$el.querySelector('.left-btn');
    
    // this.$el =  obj.el;
    // // 找到小圆点的盒子
    // this.$tipsBox = this.$el.querySelector('.banner-tip');
    // // 获取所有的小圆点
    // this.$allTips = this.$tipsBox.querySelectorAll('li');
    // // 找到所有的图片
    // this.$allImage = this.$el.querySelectorAll('.banner-inner>div');
    // // 当前展示图片的索引
    // this.index = obj.index || 0;
    // this.timer = null;
}
//寄生组合模式
var fn = function() {}
fn.prototype = Swiper.prototype;
ChangeImage.prototype = new fn();
ChangeImage.prototype.constructor = ChangeImage;

ChangeImage.prototype.init = function() {
    this.showImage();
    this.autoPlay();
    this.$nextBtn.onclick = () => {
        this.next();
    }
    this.$preBtn.onclick = () => {
        this.prev()
    }
    this.btn();
}
ChangeImage.prototype.showImage = function(index) {
    if(index >= 0) {
        this.index = index;
    }
    if(this.index >= this.$allImage.length) {
        this.index = 0;
        this.$imageBox.style.left = 0 + 'px';
    } else if(this.index < 0) {
        this.index = this.$allImage.length - 1;
        this.$imageBox.style.left = -this.$width * (this.$allImage.length + 1)+ 'px';
    }
    for(let i = 0; i < this.$allTips.length; i++) {
        this.$allTips[i].classList.remove('active');
    }
    this.$allTips[this.index].classList.add('active');
    move(this.$imageBox, {left: -this.$width * (this.index + 1)}, 500)
}
ChangeImage.prototype.next = function() {
    this.index++;
    this.showImage();
    // 点击以后重置自动播放
    this.autoPlay();
}
ChangeImage.prototype.prev = function() {
    this.index--;
    this.showImage();
    this.autoPlay();
}
