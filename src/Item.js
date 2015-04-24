
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
    	this.initWithFile( res.spUp_png );
        this.nameItem = 'SpeedUp';
    }
   
}); 

var speedDown = Item.extend({
	
    ctor: function(){
        this._super();
        this.initWithFile( res.spDown_png );
        this.nameItem = 'SpeedDown';
    }
    
});

var healUp = Item.extend({
	
    ctor: function(){
        this._super();
        this.initWithFile( res.hlUp_png );
        this.nameItem = 'HealUp';
    }

});

var keyXei = Item.extend({
     
    ctor: function(){
       this._super();
       this.initWithFile( res.keyX_png );
       this.nameItem = 'KeyXei';
    }

});

var keyYei = Item.extend({
    
    ctor: function(){
       this._super();
       this.initWithFile( res.keyY_png );
       this.nameItem = 'KeyYei';
    }

});

var keyZei = Item.extend({

    ctor: function(){
       this._super();
       this.initWithFile( res.keyZ_png );
       this.nameItem = 'KeyZei';
    }
});
