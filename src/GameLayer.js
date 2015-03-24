var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 195, 195, 195, 0) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.red = new RED();
        this.red.setPosition(new cc.Point(125,400));
        this.addChild(this.red);
        
        this.addKeyboardHandlers( true );
        return true;
    },
    onKeyDown: function( e ) {
        if(e===cc.KEY.s){
            this.red.change('down');
        }
   
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
    }

});


