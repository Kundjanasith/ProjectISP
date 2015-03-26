 var Action = cc.Sprite.extend({
     ctor: function(act,color){
     	this._super();
        if(act=='perfect')this.initWithFile( 'res/action/perfect.png' );
        if(act=='miss')this.initWithFile( 'res/action/miss.png' );
        if(color=='Red')this.setPosition(new cc.Point(125,380));
     },
     destroy: function(){
     	this.removeFromParent();
     }
    
}); 