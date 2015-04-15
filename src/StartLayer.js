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
            var line1 = 'Press "S" for collect score in red lane '
            this.line1Label = cc.LabelTTF.create(line1, 'Arial', 20 );
            this.line1Label.setPosition( new cc.Point( 635, 375 ) );
            this.addChild(this.line1Label);
            this.addChild(this.Red);
            var line2 = 'Press "D" for collect score in orange lane '
            this.line2Label = cc.LabelTTF.create(line2, 'Arial', 20 );
            this.line2Label.setPosition( new cc.Point( 650, 350 ) );
            this.addChild(this.line2Label);
            this.addChild(this.Orange);
            var line3 = 'Press "F" for collect score in yellow lane '
            this.line3Label = cc.LabelTTF.create(line3, 'Arial', 20 );
            this.line3Label.setPosition( new cc.Point( 647, 325 ) );
            this.addChild(this.line3Label);
            this.addChild(this.Yellow);
            var line4 = 'Press "J" for collect score in green lane '
            this.line4Label = cc.LabelTTF.create(line4, 'Arial', 20 );
            this.line4Label.setPosition( new cc.Point( 645, 300 ) );
            this.addChild(this.line4Label);
            this.addChild(this.Green);
            var line5 = 'Press "K" for collect score in blue lane '
            this.line5Label = cc.LabelTTF.create(line5, 'Arial', 20 );
            this.line5Label.setPosition( new cc.Point( 640, 275 ) );
            this.addChild(this.line5Label);
            this.addChild(this.Blue);
            var line6 = 'Press "L" for collect score in violet lane '
            this.line6Label = cc.LabelTTF.create(line6, 'Arial', 20 );
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
        this.KeyDE = new Key('Delete');
        this.KeyDE.setPosition(new cc.Point(750,150));
        this.addChild(this.KeyDE);

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


        this.KeyUP = new Key('up');
        this.KeyUP.setPosition(new cc.Point(750,100));
        this.addChild(this.KeyUP);
        this.KeyDOWN = new Key('down');
        this.KeyDOWN.setPosition(new cc.Point(750,50));
        this.addChild(this.KeyDOWN);

      
        this.addKeyboardHandlers( true );
        return true;
    },

    onKeyDown: function( e ) {
        if(e==cc.KEY.q){
           if(this.playName.length<12) this.playName+='Q';
           this.Name.setString(this.playName);
           this.KeyQ.change('down');
        }
        if(e==cc.KEY.a){
            if(this.playName.length<12) this.playName+='A';
            this.Name.setString(this.playName);
            this.KeyA.change('down');
        }
        if(e==cc.KEY.z){
            if(this.playName.length<12) this.playName+='Z';
            this.Name.setString(this.playName);
            this.KeyZ.change('down');
        }
        if(e==cc.KEY.w){
            if(this.playName.length<12) this.playName+='W';
            this.Name.setString(this.playName);
            this.KeyW.change('down');
        }
        if(e==cc.KEY.s){
            this.Red.change('down');
            if(this.playName.length<12) this.playName+='S';
            this.Name.setString(this.playName);
            this.KeyS.change('down');
        }
        if(e==cc.KEY.x){
            if(this.playName.length<12) this.playName+='X';
            this.Name.setString(this.playName);
            this.KeyX.change('down');
        } 
        if(e==cc.KEY.e){
            if(this.playName.length<12) this.playName+='E';
            this.Name.setString(this.playName);
            this.KeyE.change('down');
        }
        if(e==cc.KEY.d){
            this.Orange.change('down');
            if(this.playName.length<12) this.playName+='D';
            this.Name.setString(this.playName);
            this.KeyD.change('down');
        }
        if(e==cc.KEY.c){
            if(this.playName.length<12) this.playName+='C';
            this.Name.setString(this.playName);
            this.KeyC.change('down');
        }
        if(e==cc.KEY.r){
            if(this.playName.length<12) this.playName+='R';
            this.Name.setString(this.playName);
            this.KeyR.change('down');
        }
        if(e==cc.KEY.f){
            this.Yellow.change('down');
            if(this.playName.length<12) this.playName+='F';
            this.Name.setString(this.playName);
            this.KeyF.change('down');
        }
        if(e==cc.KEY.v){
            if(this.playName.length<12) this.playName+='V';
            this.Name.setString(this.playName);
            this.KeyV.change('down');
        }
        if(e==cc.KEY.t){
            if(this.playName.length<12) this.playName+='T';
            this.Name.setString(this.playName);
            this.KeyT.change('down');
        }
        if(e==cc.KEY.g){
            if(this.playName.length<12) this.playName+='G';
            this.Name.setString(this.playName);
            this.KeyG.change('down');
        }
        if(e==cc.KEY.b){
            if(this.playName.length<12) this.playName+='B';
            this.Name.setString(this.playName);
            this.KeyB.change('down');
        }
        if(e==cc.KEY.y){
            if(this.playName.length<12) this.playName+='Y';
            this.Name.setString(this.playName);
            this.KeyY.change('down');
        }
        if(e==cc.KEY.h){
            if(this.playName.length<12) this.playName+='H';
            this.Name.setString(this.playName);
            this.KeyH.change('down');
        }
        if(e==cc.KEY.n){
            if(this.playName.length<12) this.playName+='N';
            this.Name.setString(this.playName);
            this.KeyN.change('down');
        }
        if(e==cc.KEY.u){
            if(this.playName.length<12) this.playName+='U';
            this.Name.setString(this.playName);
            this.KeyU.change('down');
        }
        if(e==cc.KEY.j){
            this.Green.change('down');
            if(this.playName.length<12) this.playName+='J';
            this.Name.setString(this.playName);
            this.KeyJ.change('down');
        }
        if(e==cc.KEY.m){
            if(this.playName.length<12) this.playName+='M';
            this.Name.setString(this.playName);
            this.KeyM.change('down');
        }
        if(e==cc.KEY.i){
            if(this.playName.length<12) this.playName+='I';
            this.Name.setString(this.playName);
            this.KeyI.change('down');
        }
        if(e==cc.KEY.k){
            this.Blue.change('down');
            if(this.playName.length<12) this.playName+='K';
            this.Name.setString(this.playName);
            this.KeyK.change('down');
        }
        if(e==cc.KEY.o){
            if(this.playName.length<12) this.playName+='O';
            this.Name.setString(this.playName);
            this.KeyO.change('down');
        }
        if(e==cc.KEY.l){
            this.Violet.change('down');
            if(this.playName.length<12) this.playName+='L';
            this.Name.setString(this.playName);
            this.KeyL.change('down');
        }
        if(e==cc.KEY.p){
            if(this.playName.length<12) this.playName+='P';
            this.Name.setString(this.playName);
            this.KeyP.change('down');
        }
        if(e==cc.KEY.up){
            var lev = parseInt(this.levelLabel.getString());
            if(lev>=1&&lev<10)lev++;
            this.levelLabel.setString(lev+'');
            this.KeyUP.change('down');
        }
        if(e==cc.KEY.down){
            var lev = parseInt(this.levelLabel.getString());
            if(lev>1&&lev<=10)lev--;
            this.levelLabel.setString(lev+'');
            this.KeyDOWN.change('down');
        }
        if(e==cc.KEY.enter) this.KeyEN.change('down');
        if(e==cc.KEY.backspace){
             var l = this.playName.length;
             if(l>0) this.playName=this.playName.substring(0,l-1);
             this.Name.setString(this.playName);
             this.KeyDE.change('down');
        }
    },

    onKeyUp: function( e ) {
        if(e==cc.KEY.q) this.KeyQ.change('up');
        if(e==cc.KEY.a) this.KeyA.change('up');
        if(e==cc.KEY.z) this.KeyZ.change('up');
        if(e==cc.KEY.w) this.KeyW.change('up');
        if(e==cc.KEY.s) {
            this.Red.change('up');
            this.KeyS.change('up');
        }
        if(e==cc.KEY.x) this.KeyX.change('up');
        if(e==cc.KEY.e) this.KeyE.change('up');
        if(e==cc.KEY.d) {
            this.Orange.change('up');
            this.KeyD.change('up');
        }
        if(e==cc.KEY.c) this.KeyC.change('up');
        if(e==cc.KEY.r) this.KeyR.change('up');
        if(e==cc.KEY.f) {
            this.Yellow.change('up');
            this.KeyF.change('up');
        }
        if(e==cc.KEY.v) this.KeyV.change('up');
        if(e==cc.KEY.t) this.KeyT.change('up');
        if(e==cc.KEY.g) this.KeyG.change('up');
        if(e==cc.KEY.b) this.KeyB.change('up');
        if(e==cc.KEY.y) this.KeyY.change('up');
        if(e==cc.KEY.h) this.KeyH.change('up');
        if(e==cc.KEY.n) this.KeyN.change('up');
        if(e==cc.KEY.u) this.KeyU.change('up');
        if(e==cc.KEY.j) {
            this.Green.change('up');
            this.KeyJ.change('up');
        }
        if(e==cc.KEY.m) this.KeyM.change('up');
        if(e==cc.KEY.i) this.KeyI.change('up');
        if(e==cc.KEY.k) {
            this.Blue.change('up');
            this.KeyK.change('up');
        }
        if(e==cc.KEY.o) this.KeyO.change('up');
        if(e==cc.KEY.l) {
            this.Violet.change('up');
            this.KeyL.change('up');
        }
        if(e==cc.KEY.p) this.KeyP.change('up');
        if(e==cc.KEY.up) this.KeyUP.change('up');
        if(e==cc.KEY.down) this.KeyDOWN.change('up');
        if(e==cc.KEY.enter) this.KeyEN.change('up');
        if(e==cc.KEY.backspace) this.KeyDE.change('up');
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



