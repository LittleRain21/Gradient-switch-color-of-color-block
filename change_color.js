// 获取两个切换按钮
var change1 = document.getElementById("change1");
var change2 = document.getElementById("change2");
// 获取两个色块
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
// 初始定义两个色块的透明度，红色全透明，黄色不透明
var op_num1 = 0;
var op_num2 = 1;
// 定时器标志，用来停止
// 变红按钮的标志
var timer_box1;
var timer_box2;
// 变黄按钮的标志
var timer_box3;
var timer_box4;

// 变红按钮的点击事件
change1.onclick = function () {
    // 每次初始化定时器之前清除操作，防止出现多次初始化定时器导致速度变快
    clearInterval(timer_box1);
    clearInterval(timer_box2);
    // 初始化定时器
    timer_box1 = setInterval(op_box1_onchange1, 50);
    timer_box2 = setInterval(op_box2_onchange1, 50);

}

// 控制变色函数，红色
function op_box1_onchange1() {
    // 判断，使色块逐渐不透明
    if (op_num1 <= 1) {
        op_num1 += 0.01;
        // 改变透明度
        box1.style.opacity = op_num1;
    }
}
// 控制变色函数，黄色
function op_box2_onchange1() {
    // // 判断，使色块逐渐透明
    if (op_num2 > 0) {
        op_num2 -= 0.01;
        // 改变透明度
        box2.style.opacity = op_num2;
    }
    else if (op_num2 <= 0) {
        // 透明度归零，防止出现负数
        op_num2 = 0;
        // 改变透明度
        box2.style.opacity = op_num2;
    }
}


// 变红按钮的点击事件
change2.onclick = function () {
    // 每次初始化定时器之前清除操作，防止出现多次初始化定时器导致速度变快
    clearInterval(timer_box1);
    clearInterval(timer_box2);
    // 初始化定时器
    timer_box1 = setInterval(op_box1_onchange2, 50);
    timer_box2 = setInterval(op_box2_onchange2, 50);
}

// 控制变色函数，红色
function op_box1_onchange2() {
    // 判断，使色块逐渐透明
    if (op_num1 > 0) {
        op_num1 -= 0.01;
        // 改变透明度
        box1.style.opacity = op_num1;
    }
    else if (op_num1 <= 0) {
        // 透明度归零，防止出现负数
        op_num1 = 0;
        // 改变透明度
        box1.style.opacity = op_num1;
    }
}

// 控制变色函数，黄色
function op_box2_onchange2() {
    // 判断，使色块逐渐不透明
    if (op_num2 <= 1) {
        op_num2 += 0.01;
        // 改变透明度
        box2.style.opacity = op_num2;
    }
}