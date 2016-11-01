$(function(){
    var bofang=$('.bo');//点击播放暂停
    var audio=$('audio').get(0);
    //列举歌曲
    var  lists=[
        {name:"EXO - 十二月的奇迹(Miracles In December) - 中文版.mp3",singer:"EXO",time:"04:33"},
        {name:"Ina Wroldsen - I Wanted You.mp3"},
        {name:"OneRepublic - Apologize.mp3"},
        {name:"黑天鹅、流浪者 - 为你而活.mp3",singer:"黑天鹅、流浪者"},
        {name:"韦礼安 - 江南.mp3"},
        {name:"薛之谦&张婉清-演员.mp3",},
        {name:"薛之谦-绅士.mp3"},
        {name:"薛之谦-意外.mp3"},
    ];
    //点击播放暂停
    bofang.on('click',function(){
        // alert(1)
        if(audio.paused){
            audio.play();
            $('.bofang').css({"display":"none"})
            $('.zhanting').css({"display":"block"})
        }else{
            audio.pause();
            $('.zhanting').css({"display":"none"})
             $('.bofang').css({"display":"block"})
        }
    });
    //遍历歌曲
    $(lists).each(function(i,v){
        $('<li>').appendTo('.gequliebia')
            .text(v.name)
            .on('click',function(){
                audio.src="MP3/"+lists[i].name;
                audio.play();
            })
    });
    // 点击进度条事件
    $('.jindutiao').on('click',function(e){
        var lefts=e.offsetX;
        var widths=$('.jindutiao').width();//获取进度条的总时长
        audio.currentTime=audio.duration*(lefts/widths)//当前音乐播放时间等于总时长乘left除以宽；
        console.log(audio)
    })
    var index=0;//表示当前播放的歌曲的下标为零
    $('.youjiang').on('click',function () {//点击右键下一曲播放
        index++;
        audio.src="MP3/"+lists[index].name;
        audio.play();
    });
    $('.zuojiang').on('click',function(){//点击左键上一曲播放
        index--;
        audio.src="MP3/"+lists[index].name;
        audio.play();
    });
    audio.ontimeupdate=function(){
        $('.jindutiao .xiaoyuan').css('left',$('.jindutiao').width()*(audio.currentTime/audio.duration)-$('.jindutiao xiaoyuan').width()/2)
    }
});
