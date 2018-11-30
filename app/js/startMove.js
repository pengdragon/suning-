class StartMove {
    constructor(ele) {
        if (typeof ele == 'string') {
            ele = document.querySelector(ele);
        }
        this.$ele = ele;
    }
    // 获取初始值
    getinitVal(attr) {
        var attrVal = getStyle(this.$ele, attr);
        if (attr == 'opacity') {
            attrVal *= 100;
        }
        attrVal = parseFloat(attrVal);
        return attrVal;
    }
    // 单属性改变值
    oneAttrMove(attr, speed, target) {
        var flag = true;
        var attrVal = this.getinitVal(attr);
        attrVal += speed;
        if ((speed >= 0 && attrVal >= target) || (speed <= 0 && attrVal <= target)) {
            attrVal = target;
        } else {
            flag = false
        }
        if (attr == 'opacity') {
            this.$ele.style[attr] = attrVal / 100;
        } else {
            this.$ele.style[attr] = attrVal + 'px';
        }
        return flag;
    }
    stop() {
        clearInterval(this.$ele.timer);
    }
    // 多属性运动
    animate(targetObj, time = 200, callback) {
        // 确保是dom对象以后, 在清除定时器
        clearInterval(this.$ele.timer);
        // 获取每个属性的速度
        var speedObj = {};
        for (var attr in targetObj) {
            // 获取初始值
            var attrVal = this.getinitVal(attr);
            var speed = (targetObj[attr] - attrVal) / (time / 10);
            speedObj[attr] = speed.toFixed(2) - 0;
        }
        console.log(speedObj);

        this.$ele.timer = setInterval(_ => {
            var flag = true;
            for (var attr in targetObj) {
               var _flag = this.oneAttrMove(attr, speedObj[attr], targetObj[attr]);
               if (!_flag)
                    flag = false;
            }
            if (flag) {
                clearInterval(this.$ele.timer);
                // 目标已到达指定位置, 请指示
                console.log('目标已到达指定位置, 请指示');
                if (typeof callback == 'function') {
                    callback(this);
                }
            }

        }, 10)
    }
    // 运动距离
    animateTo(distanceObj, time, callback){
        // 对象中是运动的距离, 加上初始值,就会变成目标值
        for(var attr in distanceObj) {
            distanceObj[attr] +=  this.getinitVal(attr); 
        }
        this.animate(distanceObj, time, callback)
    }
}