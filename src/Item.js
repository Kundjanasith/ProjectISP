var Item = cc.Sprite.extend({
	setPos: function(y){
       var x  = Math.floor(Math.random()*5);
       var pos = [125,225,325,425,525,625];
       this.setPosition(new cc.Point(pos[x],y));
	},
	isInScreen: function(){
		return this.getPosition().x>=0&&this.getPosition().x<=1000&&this.getPosition().y>=0&&this.getPosition().y<=450;
	}
});

var speedUp = Item.extend({
    ctor: function(){
    	this._super();
    	this.initWithFile( 'res/item/speed-up.png' );
    }
}); 

var speedDown = Item.extend({
	ctor: function(){
		this._super();
		this.initWithFile( 'res/item/speed-down.png' );
	}
});

var healUp = Item.extend({
	ctor: function(){
		this._super();
		this.initWithFile( 'res/item/health.png' );
	}
});