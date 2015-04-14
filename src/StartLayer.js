var StartLayer = cc.LayerColor.extend({

    init: function() {
        this._super( new cc.Color( 195, 195, 195, 0 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.showGame = false;

        var startItem = new cc.MenuItemImage(
            res.StartNormal_png,
            res.StartSelected_png,
            function () {
             this.showGame = true;
             var layer1 = new GameLayer();
             layer1.init();
             this.addChild(layer1);
             startItem.removeFromParent();
         }, this);
        startItem.attr({
            x: 500,
            y: 400,
            anchorX: 0.5,
            anchorY: 0.5
        });
        this.menu = new cc.Menu(startItem);
        this.menu.x = 0;
        this.menu.y = 0;
        this.addChild(this.menu);


        this.addKeyboardHandlers( true );
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
    }

});



