var EndLayer = cc.LayerColor.extend({

    init: function(name,score,time) {
        this._super( new cc.Color( 195, 195, 195, 0) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.addKeyboardHandlers( true );

        this.OverLabel = cc.LabelTTF.create( 'GameOver', 'Arial', 100 );
        this.OverLabel.setPosition( new cc.Point( 500, 400 ) );
        this.addChild( this.OverLabel );

        this.nameLabel = cc.LabelTTF.create( 'Player Name :'+name , 'Arial', 75 );
        this.nameLabel.setPosition( new cc.Point( 500, 300 ) );
        this.addChild( this.nameLabel );

        this.scoreLabel = cc.LabelTTF.create( score , 'Arial', 75 );
        this.scoreLabel.setPosition( new cc.Point( 500, 200 ) );
        this.addChild( this.scoreLabel );

        this.timeLabel = cc.LabelTTF.create( 'Time : '+time , 'Arial', 75 );
        this.timeLabel.setPosition( new cc.Point( 500, 100 ) );
        this.addChild( this.timeLabel );

        return true;
    },

    onKeyDown: function( e ) {


    },

    onKeyUp: function( e ) {


    },

    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( e ) {
                self.onKeyDown( e );
            },
            onKeyReleased: function( e ) {
                self.onKeyUp( e );
            }
        }, this);
    },


});


