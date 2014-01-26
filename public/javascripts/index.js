$(function(){
    window.addEventListener('load', init);
    function init(){
        SC.initialize({
            client_id: '3a426c57135b968be2dacd27418f725',
        });
        SC.stream('/tracks/293', function(sound){
            sound.play();
        });
    }
});