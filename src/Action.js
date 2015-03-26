 var Action = cc.Sprite.extend({
     ctor: function(act){
     	this._super();
        if(act=='perfect')this.initWithFile( 'res/action/perfect.png' );
        if(act=='miss')this.initWithFile( 'res/action/miss.png' );
     },
     destroy: function(){
     	this.removeFromParent();
     }
    
}); 