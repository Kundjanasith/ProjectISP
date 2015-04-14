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
     
        this.playName = ' - - - - - ' ;  
        this.Name = cc.LabelTTF.create( this.playName , 'Arial', 30);
        this.Name.setPosition( new cc.Point( 450, 325 ) );
        this.addChild( this.Name );

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

        this.KeyE = new Key('E');
        this.KeyE.setPosition(new cc.Point(300,150));
        this.addChild(this.KeyE);
        this.KeyD = new Key('D');
        this.KeyD.setPosition(new cc.Point(300,100));
        this.addChild(this.KeyD);
        this.KeyC = new Key('C');
        this.KeyC.setPosition(new cc.Point(300,50));
        this.addChild(this.KeyC);  

        this.KeyR = new Key('R');
        this.KeyR.setPosition(new cc.Point(350,150));
        this.addChild(this.KeyR);
        this.KeyF = new Key('F');
        this.KeyF.setPosition(new cc.Point(350,100));
        this.addChild(this.KeyF);
        this.KeyV = new Key('V');
        this.KeyV.setPosition(new cc.Point(350,50));
        this.addChild(this.KeyV); 

        this.KeyT = new Key('T');
        this.KeyT.setPosition(new cc.Point(400,150));
        this.addChild(this.KeyT);
        this.KeyG = new Key('G');
        this.KeyG.setPosition(new cc.Point(400,100));
        this.addChild(this.KeyG);
        this.KeyB = new Key('B');
        this.KeyB.setPosition(new cc.Point(400,50));
        this.addChild(this.KeyB); 

        this.KeyY = new Key('Y');
        this.KeyY.setPosition(new cc.Point(450,150));
        this.addChild(this.KeyY);
        this.KeyH = new Key('H');
        this.KeyH.setPosition(new cc.Point(450,100));
        this.addChild(this.KeyH);
        this.KeyN = new Key('N');
        this.KeyN.setPosition(new cc.Point(450,50));
        this.addChild(this.KeyN);   

        this.KeyU = new Key('U');
        this.KeyU.setPosition(new cc.Point(500,150));
        this.addChild(this.KeyU);
        this.KeyJ = new Key('J');
        this.KeyJ.setPosition(new cc.Point(500,100));
        this.addChild(this.KeyJ);
        this.KeyM = new Key('M');
        this.KeyM.setPosition(new cc.Point(500,50));
        this.addChild(this.KeyM); 

        this.KeyEN = new Key('Enter');
        this.KeyEN.setPosition(new cc.Point(600,75));
        this.addChild(this.KeyEN);

        this.KeyI = new Key('I');
        this.KeyI.setPosition(new cc.Point(550,150));
        this.addChild(this.KeyI);
        this.KeyK = new Key('K');
        this.KeyK.setPosition(new cc.Point(550,100));
        this.addChild(this.KeyK);

        this.KeyO = new Key('O');
        this.KeyO.setPosition(new cc.Point(600,150));
        this.addChild(this.KeyO);
        this.KeyL = new Key('L');
        this.KeyL.setPosition(new cc.Point(600,100));
        this.addChild(this.KeyL);

        this.KeyP = new Key('P');
        this.KeyP.setPosition(new cc.Point(650,150));
        this.addChild(this.KeyP);

       
     
      
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



