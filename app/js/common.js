// 生成随机色
function getColor() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    var str = '#';
    // 生成随机色, 从arr中随机挑选6个元素
    for(var i = 0; i < 6; i++) {
        var index = getRandom(arr.length - 1, 0);
        str += arr[index];
    }
    return str;

}
function getRandom(max, min) {
    min = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 数组去重

function noRepate(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


//数组打乱
function sortArr(arr) {
    var newArr = [];
    for(var i = 0, length = arr.length; i < length; i++) {
        var _random = getRandom(arr.length - 1);
        newArr.push(arr[_random]);
        // 把加入的元素,从原数组中删除
        arr.splice(_random, 1);
        
    }
    console.log(newArr);

}

// 获取非行内样式
function getStyle(ele, attr) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(ele, false)[attr];
    }
    return ele.currentStyle[attr];
}
//ele为运动小球 ele2为固定盒子 运动小球是否和固定盒子相碰
function boom(ele,ele2){
    var eleLeft = ele.offsetLeft,
        ele2Left= ele2.offsetLeft,

        eleTop = ele.offsetTop,
        ele2Top= ele2.offsetTop,
        
        eleRight = ele.offsetLeft + ele.offsetWidth,
        ele2Right = ele2.offsetLeft + ele2.offsetWidth,

        eleBottom = ele.offsetTop + ele.offsetHeight,
        ele2Bottom = ele2.offsetTop + ele2.offsetHeight;

        if(eleRight<ele2Left || eleBottom<ele2Top || eleTop>ele2Bottom || eleLeft>ele2Right)
            return true;
        else
            return false;
}

