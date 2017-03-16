cc.Class({
    extends: cc.Component,

    properties: {
        // nodes
        point: cc.Label,
        suit: cc.Sprite,
        mainPic: cc.Sprite,
        cardBG: cc.Sprite,
        // resources
        redTextColor: cc.Color.WHITE,
        blackTextColor: cc.Color.WHITE,
        texFrontBG: cc.SpriteFrame,
        texBackBG: cc.SpriteFrame,
        texFaces: {
            default: [],
            type: cc.SpriteFrame
        },
        texSuitBig: {
            default: [],
            type: cc.SpriteFrame
        },
        texSuitSmall: {
            default: [],
            type: cc.SpriteFrame
        }
    },
    // use this for initialization
    init: function (cardNumber) {
        let card ={};
        if(cardNumber%13==12)
        {
            card.pointName= "A";
            card.point = 1;
        }

        else
        if(cardNumber%13==11)
        {
            card.pointName= "K";
            card.point = 13;
        }
        else
        if(cardNumber%13==10)
        {
            card.pointName= "Q";
            card.point = 12;
        }
        else
        if(cardNumber%13==9)
        {
            card.pointName= "J";
            card.point = 11;
        }
        else
        {
            card.point= cardNumber%13 +2;
            card.pointName= card.point.toString();
        }
        if(cardNumber<13)
            card.suit =1;
        else
        if(cardNumber<26)
            card.suit =2;
        else
        if(cardNumber<39)
            card.suit =3;
        else
            card.suit =4;


        if ( card.point > 10) {
            this.mainPic.spriteFrame = this.texFaces[card.point - 10 - 1];
        }
        else {
            this.mainPic.spriteFrame = this.texSuitBig[card.suit - 1];
        }

        // for jsb
        this.point.string = card.pointName;

        if (card.suit>2) {
            this.point.node.color = this.redTextColor;
        }
        else {
            this.point.node.color = this.blackTextColor;
        }

        this.suit.spriteFrame = this.texSuitSmall[card.suit - 1];
    },

    reveal: function (pIsFaceUp) {
        let self = this;
        let timeFlip =0.5;
        let callFunc = cc.callFunc(function () {
            self.cardBG.spriteFrame = pIsFaceUp ? self.texFrontBG : self.texBackBG;
            self.point.node.active = pIsFaceUp;
            self.suit.node.active = pIsFaceUp;
            self.mainPic.node.active = pIsFaceUp;
            if(!pIsFaceUp)
                self.node.skewY=135;
            else
                self.node.skewY=45;
        });
        if(!pIsFaceUp)
        {
            self.node.skewY=0;
            let action = cc.skewBy(timeFlip/2,0,45);
            let action2 = cc.skewTo(timeFlip/2,0,180);
            self.node.runAction(cc.sequence(action,callFunc,action2));
        }else
        {
            self.node.skewY=180;
            let action = cc.skewBy(timeFlip/2,0,-45);
            let action2 = cc.skewTo(timeFlip/2,0,0);
            self.node.runAction(cc.sequence(action,callFunc,action2));
        }

    },
});
