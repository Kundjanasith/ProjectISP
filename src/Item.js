
var Item = cc.Sprite.extend({
    
    getName: function(){
        return this.nameItem;
    },

    setStartPos: function(pos){
        this.startPos = pos;
        var x  = Math.round(Math.random()*5);
        var pos = [125,225,325,425,525,625];
        this.setPosition(new cc.Point(parseInt(pos[x]),this.startPos)); 
    },

    getStartPos: function(){
        return this.startPos;
    },
    
    update: function(){
        this.setPosition(new cc.Point(this.getPosition().x,this.getPosition().y+5));
    }

});

var speedUp = Item.extend({

    ctor: function(){
    	this._super();
    	this.initWithFile( 'res/item/speed-up.png' );
        this.nameItem = 'SpeedUp';
    }
   
}); 

var speedDown = Item.extend({
	
    ctor: function(){
        this._super();
        this.initWithFile( 'res/item/speed-down.png' );
        this.nameItem = 'SpeedDown';
    }
    
});

var healUp = Item.extend({
	
    ctor: function(){
        this._super();
        this.initWithFile( 'res/item/health.png' );
        this.nameItem = 'HealUp';
    }

});

var keyXei = Item.extend({
     
    ctor: function(){
       this._super();
       this.initWithFile( 'res/item/key0.png');
       this.nameItem = 'KeyXei';
    }

});

var keyYei = Item.extend({
    
    ctor: function(){
       this._super();
       this.initWithFile( 'res/item/key1.png');
       this.nameItem = 'KeyYei';
    }

});

var keyZei = Item.extend({

    ctor: function(){
       this._super();
       this.initWithFile( 'res/item/key2.png');
       this.nameItem = 'KeyZei';
    }
});
