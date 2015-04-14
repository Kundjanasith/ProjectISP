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


        this.nameLabel = cc.LabelTTF.create( 'Player Name: ', 'Arial', 30 );
        this.nameLabel.setPosition( new cc.Point( 200, 325 ) );
        this.addChild( this.nameLabel );

        this.KeyQ = new Key('Q');
        this.KeyQ.setPosition(new cc.Point(200,150));
        this.addChild(this.KeyQ);
        this.KeyA = new Key('A');
        this.KeyA.setPosition(new cc.Point(200,100));
        this.addChild(this.KeyA);
        this.KeyZ = new Key('Z');
        this.KeyZ.setPosition(new cc.Point(200,50));
        this.addChild(this.KeyZ);

        this.KeyW = new Key('W');
        this.KeyW.setPosition(new cc.Point(250,150));
        this.addChild(this.KeyW);
        this.KeyS = new Key('S');
        this.KeyS.setPosition(new cc.Point(250,100));
        this.addChild(this.KeyS);
        this.KeyX = new Key('X');
        this.KeyX.setPosition(new cc.Point(250,50));
        this.addChild(this.KeyX);

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



