 var Action = cc.Sprite.extend({
     ctor: function(){
     	this._super();
        this.initWithFile( 'res/action/perfect.png' );
     },
     destroy: function(){
     	this.removeFromParent();
     }
    
}); 