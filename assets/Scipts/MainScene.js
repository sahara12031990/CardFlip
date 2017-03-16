const Helper = require('Helper');
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        card :  require('Card')
    },

    // use this for initialization
    onLoad: function () {

    },
    clickFront:function(){
        this.card.reveal(true);
    },
    clickBack:function(){
           this.card.reveal(false);  
    },
    clickRandom:function(){
         let iCrad =Helper.getRandomInt(0, 51);
         this.card.init(iCrad);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
