 var Heart = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/heart.png' );
    },
    destroy: function(){
    	this.removeFromParent();
    }
}); 