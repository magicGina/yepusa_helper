

    window.onload=function() {
    /*音乐播放一个另一个自动暂停*/
    var audios = document.getElementsByTagName("audio");
    // 暂停函数
    function pauseAll() {
        var self = this;
        [].forEach.call(audios, function (i) {
            // 将audios中其他的audio全部暂停
            i !== self && i.pause();
        })
    }
    // 给play事件绑定暂停函数
    [].forEach.call(audios, function (i) {
        i.addEventListener("play", pauseAll.bind(i));
    })


    /*音效按钮和音效组件绑定*/
        document.getElementById('huala').onclick = function(){
            var audio1 = document.getElementById('audio_huala');
            audio1.currentTime = 0;
            audio1.play();
        };
        document.getElementById('shouyaoling1').onclick = function(){
            var audio1 = document.getElementById('audio_shouyaoling1');
            audio1.currentTime = 0;
            audio1.play();
        };
        document.getElementById('shouyaoling2').onclick = function(){
            var audio1 = document.getElementById('audio_shouyaoling2');
            audio1.currentTime = 0;
            audio1.play();
        };
        document.getElementById('dingdingdang').onclick = function(){
            var audio1 = document.getElementById('audio_dingdingdang');
            audio1.currentTime = 0;
            audio1.play();
        };
        document.getElementById('dingling').onclick = function(){
            var audio1 = document.getElementById('audio_dingling');
            audio1.currentTime = 0;
            audio1.play();
        };
        document.getElementById('bo1').onclick = function(){
            var audio1 = document.getElementById('audio_bo1');
            audio1.currentTime = 0;
            audio1.play();
        };
            document.getElementById('bo2').onclick = function(){
            var audio1 = document.getElementById('audio_bo2');
            audio1.currentTime = 0;
            audio1.play();
        };
        document.getElementById('bo3').onclick = function(){
            var audio1 = document.getElementById('audio_bo3');
            audio1.currentTime = 0;
            audio1.play();
        };
            document.getElementById('bo4').onclick = function(){
            var audio1 = document.getElementById('audio_bo4');
            audio1.currentTime = 0;
            audio1.play();
        };
    }