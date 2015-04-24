var Note = cc.Sprite.extend({

    ctor: function(color) {
        this.speed = 5;
        this._super();
        this.colors = color;
        if(this.colors=='Red')this.initWithFile( res.NoteRed_png );
        if(this.colors=='Orange')this.initWithFile( res.NoteOrange_png );
        if(this.colors=='Yellow')this.initWithFile( res.NoteYellow_png );
        if(this.colors=='Green')this.initWithFile( res.NoteGreen_png );
        if(this.colors=='Blue')this.initWithFile( res.NoteBlue_png );
        if(this.colors=='Violet')this.initWithFile( res.NoteViolet_png );
    },

    update: function(){
        this.setPosition( new cc.Point( this.getPosition().x, this.getPosition().y + this.speed ) );
    },

    destroy: function(){
        this.removeFromParent();
    }

}); 
