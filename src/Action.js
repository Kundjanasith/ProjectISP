 var Action = cc.Sprite.extend({

     ctor: function(act,color){
     	this._super();
        if(act=='perfect')this.initWithFile( 'res/action/perfect.png' );
        if(act=='miss')this.initWithFile( 'res/action/miss.png' );
        if(color=='Red')this.setPosition(new cc.Point(125,380));
        if(color=='Orange')this.setPosition(new cc.Point(225,380));
        if(color=='Yellow')this.setPosition(new cc.Point(325,380));
        if(color=='Green')this.setPosition(new cc.Point(425,380));
        if(color=='Blue')this.setPosition(new cc.Point(525,380));
        if(color=='Violet')this.setPosition(new cc.Point(625,380));
     },
     
     destroy: function(){
     	this.removeFromParent();
     }
    
}); 