$(function(){
    window.addEventListener('load', init);
    
    var soundArray = [
        '/tracks/130542777',
        '/tracks/111551647'
    ];
    function init(){
        SC.initialize({
            client_id: 'f3a426c57135b968be2dacd27418f725',
        });
        playNext();
//        SC.stream(soundArray['1'], {
//            autoPlay: true,
//            ontimedcomments: function(comments){
//                console.log(comments[0].body);
//            }
//        });
    }
    function playNext(){
        var nextSound = soundArray.shift();
        //playSound(nextSound);
        setTrackInfo(nextSound);
    }
    function setTrackInfo(trackurl){
        SC.get(trackurl, {limit: 1}, function(t){
            console.log(t);
        })
    }
});