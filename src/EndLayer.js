var EndLayer = cc.LayerColor.extend({

    init: function() {
        this._super( new cc.Color( 195, 195, 195, 0) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.addKeyboardHandlers( true );

        this.timeLabel = cc.LabelTTF.create( '- - : - - : - -', 'Arial', 20 );
        this.timeLabel.setPosition( new cc.Point( 800, 20 ) );
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


