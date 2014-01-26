$(function(){
    window.addEventListener('load', init);
    function init(){
        SC.initialize({
            client_id: 'f3a426c57135b968be2dacd27418f725',
        });
        SC.stream('/tracks/126841935', function(sound){
            console.log(sound);
            sound.play();
        });
    }
});