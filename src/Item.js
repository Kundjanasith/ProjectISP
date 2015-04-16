

var speedUp = cc.Sprite.extend({
    ctor: function(y){
    	this._super();
    	this.initWithFile( 'res/item/speed-up.png' );
    	var x  = Math.round(Math.random()*5);
        var pos = [125,225,325,425,525,625];
        this.setPosition(new cc.Point(parseInt(pos[x]),y)); 
        this.startPos = y;
    },
    getName: function(){
        return 'SpeedUp-------------------------------....';
    },
    getStartPos: function(){
    	return this.startPos;
    },
    update: function(){
    	this.setPosition(new cc.Point(this.getPosition().x,this.getPosition().y+5));
    }
}); 

var speedDown = cc.Sprite.extend({
	ctor: function(y){
		this._super();
		this.initWithFile( 'res/item/speed-down.png' );
		var x  = Math.round(Math.random()*5);
        var pos = [125,225,325,425,525,625];
        this.setPosition(new cc.Point(parseInt(pos[x]),y)); 
        this.startPos = y;
	},
	getName: function(){
		return 'SpeedDown------------->';
	},
    getStartPos: function(){
    	return this.startPos;
    },
    update: function(){
    	this.setPosition(new cc.Point(this.getPosition().x,this.getPosition().y+5));
    }
});

var healUp = cc.Sprite.extend({
	ctor: function(y){
		this._super();
		this.initWithFile( 'res/item/health.png' );
		var x  = Math.round(Math.random()*5);
        var pos = [125,225,325,425,525,625];
        this.setPosition(new cc.Point(parseInt(pos[x]),y)); 
        this.startPos = y;
	},
	getName: function(){
		return 'HealUp============';
	},
    getStartPos: function(){
    	return this.startPos;
    },
    update: function(){
    	this.setPosition(new cc.Point(this.getPosition().x,this.getPosition().y+5));
    }
});