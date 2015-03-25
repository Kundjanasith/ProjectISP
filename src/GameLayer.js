var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 195, 195, 195, 0) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.red = new RED();
        this.red.setPosition(new cc.Point(125,400));
        this.addChild(this.red);

        this.orange = new ORANGE();
        this.orange.setPosition(new cc.Point(225,400));
        this.addChild(this.orange);

        this.yellow = new YELLOW();
        this.yellow.setPosition(new cc.Point(325,400));
        this.addChild(this.yellow);

        this.green = new GREEN();
        this.green.setPosition(new cc.Point(425,400));
        this.addChild(this.green);
        
        this.addKeyboardHandlers( true );
        return true;
    },
    onKeyDown: function( e ) {
        if(e===cc.KEY.s){
            this.red.change('down');
        }
        if(e===cc.KEY.d){
            this.orange.change('down');
        }
        if(e===cc.KEY.f){
            this.yellow.change('down');
        }
   
    },
    onKeyUp: function( e ) {
        if(e===cc.KEY.s){
            this.red.change('up');
        }
        if(e===cc.KEY.d){
            this.orange.change('up');
        }
        if(e===cc.KEY.f){
            this.yellow.change('up');
        }

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


