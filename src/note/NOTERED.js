 var NOTERED = cc.Sprite.extend({

    ctor: function() {
    	this.speed = 5;
        this._super();
        this.initWithFile( 'res/note/NoteRed.png' );
    },

    update: function(){
        this.setPosition( new cc.Point( this.getPosition().x, this.getPosition().y + this.speed ) );
    }
    
}); 