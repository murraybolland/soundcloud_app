//sound class========================================================
var Sound = function(trackURL){
    this.trackURL = trackURL;
}
Sound.prototype.startPlay = function(){
    //soundプロパティがある場合togglepauseを実行する
    if(!this.sound){
        var _this = this;
        SC.stream(this.trackURL, function(sound){
            _this.sound = sound;
            _this.sound.play();
        })
    }else{
        this.togglePause();
    }
}
Sound.prototype.togglePause = function(){
    console.log('toggle');
    this.sound.togglePause();
}

//sound ctrl class===================================================
var SoundCtrl = function(tracksList){
    this.tracksList = tracksList;
    //soundclassの参照データ
    this.soundArrayRefer = [];
    this.nowPlaying = 0;
}
SoundCtrl.prototype.createSoundClass = function(){
    for(var i = 0; i < this.tracksList.length; i++){
        this.soundArrayRefer.push(new Sound(this.tracksList[i]));
    }
    this.soundArrayRefer[this.nowPlaying].startPlay();
    this.event();
}
SoundCtrl.prototype.nextSound = function(){
    this.soundArrayRefer[this.nowPlaying].togglePause();
    this.nowPlaying++;
    this.soundArrayRefer[this.nowPlaying].startPlay();
}
SoundCtrl.prototype.prevSound = function(){
    this.soundArrayRefer[this.nowPlaying].togglePause();
    this.nowPlaying--;
    this.soundArrayRefer[this.nowPlaying].startPlay();
}
SoundCtrl.prototype.event = function(){
    var _this = this;
    $(window).on({
        'keypress': function(e){
            console.log(e);
            if(e.charCode == 112){//p
                _this.prevSound();
            }else if(e.charCode == 115){//s
                _this.soundArrayRefer[_this.nowPlaying].togglePause();
            }else if(e.charCode == 110){//n
                _this.nextSound();
            }
        }
    });
}
$(function(){
    window.addEventListener('load', init);
    function init(){
        SC.initialize({
            client_id: 'f3a426c57135b968be2dacd27418f725',
        });
        
        var tracksList = [
            '/tracks/111551647',
            '/tracks/52081316',
            '/tracks/105997504'
        ];
        var player = new SoundCtrl(tracksList);
        player.createSoundClass();
        
        //test=================================
//        playNext();
//        function playNext(){
//            var nextSound = tracksList[0];
//            playSound(nextSound);
//        }
//        
//        function playSound(trackURL){
//            SC.stream(trackURL, function(sound){
//                var id = sound.id;
//                sound.play({
//                    onsuspend: function(){
//                        console.log('onsuspend');
//                    },
//                    whileloading: function(){
//                        loadingProgress(this);
//                    }
//                });
//                
//                $(window).on({ 
//                    'keypress': function(e){
//                        console.log(e);
//                        console.log(sound);
//                        if(e.charCode == 13){
//                            sound.setPosition('0');
//                        } else if (e.charCode == 116){
//                            playNext();
//                        }
//                    }  
//                });   
//            });
//        }
//        
//        function loadingProgress(e){
//            console.log(e.bytesLoaded);
//        }
        
//        SC.get('/tracks/126841935', function(tracks){
//            console.log(tracks);
//        })
        
//        //widget test
//        var player = document.createElement('iframe');
//        var defaultTrackURL = 'https://w.soundcloud.com/player/?url=https://soundcloud.com/djtatsu_sendai_jp/jazztronik-samurai-dj';
//        player.src = defaultTrackURL;
//        var widget = SC.Widget(player);
//        
//        var put = document.getElementById('putWidget');
//        put.appendChild(player);
        
        
        
//        SC.stream('/tracks/126841935', function(sound){
//            console.log(sound);
//            sound.play();
//        });
        
        
        
//        SC.oEmbed('http://soundcloud.com/forss/sets/soulhack', {
//            color: '3e3a39',
//            auto_play: true
//        }, document.getElementById("putWidget"));
        
        
        
//        SC.oEmbed("http://soundcloud.com/forss/sets/soulhack", {
//            auto_play: true,
//            ontimedcomments: function(comments){
//                console.log(comments);
//            }
//        }, function(oembed){
//            $('#putWidget').append(oembed.html);
//        });
        
        
        
    }
});