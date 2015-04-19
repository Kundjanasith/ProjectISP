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
             layer1.init(this.helloLabel.getString(),this.YlevLabel.getString());
             this.addChild(layer1);
             startItem.removeFromParent();
             this.removeChild(this.ruleLabel);
             this.removeChild(this.line1Label);
             this.removeChild(this.line2Label);
             this.removeChild(this.line3Label);
             this.removeChild(this.line4Label);
             this.removeChild(this.line5Label);
             this.removeChild(this.line6Label);  
             this.removeChild(this.Red);
             this.removeChild(this.Orange);
             this.removeChild(this.Yellow);
             this.removeChild(this.Green);
             this.removeChild(this.Blue);
             this.removeChild(this.Violet);
             this.removeChild(this.KeyDE);      
             this.removeChild(this.KeyUP);      
             this.removeChild(this.KeyDOWN);  
             this.removeChild(this.YlevLabel); 
             this.removeChild(this.helloLabel);   
             this.removeChild(this.KB);
         }, this);
        startItem.attr({
            x: 250,
            y: 400,
            anchorX: 0.5,
            anchorY: 0.5
        });
        this.menu = new cc.Menu(startItem);
        this.menu.x = 0;
        this.menu.y = 0;

        this.level = 1;
        this.levelLabel = cc.LabelTTF.create(this.level+'','Arial',30);
        this.levelLabel.setPosition( new cc.Point( 400 , 250) );

        
        

        var conItem1 = new cc.MenuItemImage(
            res.Confirm0_png,
            res.Confirm1_png,
            function () {
            this.helloLabel = cc.LabelTTF.create( 'Hello:  '+this.Name.getString(), 'Arial', 30 );
            this.helloLabel.setPosition( new cc.Point( 300, 325 ) );
            this.helloLabel.setColor(new cc.Color(125,125,125,0));
            this.addChild( this.helloLabel );
            this.removeChild(this.nameLabel);
            this.removeChild(this.Name);
            this.removeChild(this.confirm1);
            this.selectLabel = cc.LabelTTF.create( 'Speed Level' , 'Arial', 30);
            this.selectLabel.setPosition( new cc.Point( 200 , 250) );
            this.addChild(this.selectLabel);
            this.addChild(this.levelLabel);
            this.addChild(this.confirm2);
            
         }, this);
        conItem1.attr({
            x: 700,
            y: 325,
            anchorX: 0.5,
            anchorY: 0.5
        });
        
        this.confirm1 = new cc.Menu(conItem1);
        this.confirm1.x = 0;
        this.confirm1.y = 0;
        this.addChild(this.confirm1);

        this.Red = new Press('Red');
        this.Red.setPosition(new cc.Point( 850, 380));
        this.Orange = new Press('Orange');
        this.Orange.setPosition(new cc.Point( 910, 355));
        this.Yellow = new Press('Yellow');
        this.Yellow.setPosition(new cc.Point( 855, 325));
        this.Green = new Press('Green');
        this.Green.setPosition(new cc.Point( 910, 300));
        this.Blue = new Press('Blue');
        this.Blue.setPosition(new cc.Point( 857, 270));
        this.Violet = new Press('Violet');
        this.Violet.setPosition(new cc.Point( 910, 245));

        var conItem2 = new cc.MenuItemImage(
            res.Confirm0_png,
            res.Confirm1_png,
            function () {
            this.YlevLabel = cc.LabelTTF.create( 'Your level is:      '+this.levelLabel.getString(), 'Arial', 30 );
            this.YlevLabel.setPosition( new cc.Point( 300, 250 ) );
            this.YlevLabel.setColor(new cc.Color(125,125,125,0));
            this.addChild( this.YlevLabel );
            this.removeChild(this.levelLabel);
            this.removeChild(this.selectLabel);  
            this.removeChild(this.confirm2); 
            this.ruleLabel = cc.LabelTTF.create('Rule:', 'Arial', 30 );
            this.ruleLabel.setPosition( new cc.Point( 475, 400 ) );
            this.addChild(this.ruleLabel);
            this.line1Label = cc.LabelTTF.create('Press "S" for collect score in red lane ', 'Arial', 20 );
            this.line1Label.setPosition( new cc.Point( 635, 375 ) );
            this.addChild(this.line1Label);
            this.addChild(this.Red);
            this.line2Label = cc.LabelTTF.create('Press "D" for collect score in orange lane ', 'Arial', 20 );
            this.line2Label.setPosition( new cc.Point( 650, 350 ) );
            this.addChild(this.line2Label);
            this.addChild(this.Orange);
            this.line3Label = cc.LabelTTF.create('Press "F" for collect score in yellow lane ', 'Arial', 20 );
            this.line3Label.setPosition( new cc.Point( 647, 325 ) );
            this.addChild(this.line3Label);
            this.addChild(this.Yellow);
            this.line4Label = cc.LabelTTF.create('Press "J" for collect score in green lane ', 'Arial', 20 );
            this.line4Label.setPosition( new cc.Point( 645, 300 ) );
            this.addChild(this.line4Label);
            this.addChild(this.Green);
            this.line5Label = cc.LabelTTF.create('Press "K" for collect score in blue lane ', 'Arial', 20 );
            this.line5Label.setPosition( new cc.Point( 640, 275 ) );
            this.addChild(this.line5Label);
            this.addChild(this.Blue);
            this.line6Label = cc.LabelTTF.create('Press "L" for collect score in violet lane ', 'Arial', 20 );
            this.line6Label.setPosition( new cc.Point( 642, 250 ) );
            this.addChild(this.line6Label);
            this.addChild(this.Violet);
            this.addChild(this.menu);
         }, this);
        conItem2.attr({
            x: 700,
            y: 250,
            anchorX: 0.5,
            anchorY: 0.5
        });
        this.confirm2 = new cc.Menu(conItem2);
        this.confirm2.x = 0;
        this.confirm2.y = 0;


 
        
        this.nameLabel = cc.LabelTTF.create( 'Player Name: ', 'Arial', 30 );
        this.nameLabel.setPosition( new cc.Point( 200, 325 ) );
        this.addChild( this.nameLabel );
     
        this.playName = ' ' ;  
        this.Name = cc.LabelTTF.create( this.playName , 'Arial', 30);
        this.Name.setPosition( new cc.Point( 500, 325 ) );
        this.addChild( this.Name );

        this.KB  = new KeyBoard();
        this.setPosition(new cc.Point(0,0));
        this.addChild(this.KB);

      
        this.addKeyboardHandlers( true );
        return true;
    },

    onKeyDown: function( e ) {
        this.KB.pressDownName(e,this.Name);
        this.KB.pressDownLevel(e,this.levelLabel);
    },

    onKeyUp: function( e ) {
       this.KB.pressUp(e);
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



