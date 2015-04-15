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

        var conItem1 = new cc.MenuItemImage(
            res.Confirm0_png,
            res.Confirm1_png,
            function () {
            cc.log('Confirm');
            
            this.helloLabel = cc.LabelTTF.create( 'Hello   '+this.Name.getString(), 'Arial', 30 );
            this.helloLabel.setPosition( new cc.Point( 200, 325 ) );
            this.addChild( this.helloLabel );
            this.removeChild(this.nameLabel);
            this.removeChild(this.Name);
            this.removeChild(this.confirm1);
            this.selectLabel = cc.LabelTTF.create( 'Level' , 'Arial', 30);
        this.selectLabel.setPosition( new cc.Point( 200 , 250) );
        this.addChild(this.selectLabel)
            
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
            if(this.playName.length<12) this.playName+='L';
            this.Name.setString(this.playName);
            this.KeyL.change('down');
        }
        if(e==cc.KEY.p){
            if(this.playName.length<12) this.playName+='P';
            this.Name.setString(this.playName);
            this.KeyP.change('down');
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
        if(e==cc.KEY.s) this.KeyS.change('up');
        if(e==cc.KEY.x) this.KeyX.change('up');
        if(e==cc.KEY.e) this.KeyE.change('up');
        if(e==cc.KEY.d) this.KeyD.change('up');
        if(e==cc.KEY.c) this.KeyC.change('up');
        if(e==cc.KEY.r) this.KeyR.change('up');
        if(e==cc.KEY.f) this.KeyF.change('up');
        if(e==cc.KEY.v) this.KeyV.change('up');
        if(e==cc.KEY.t) this.KeyT.change('up');
        if(e==cc.KEY.g) this.KeyG.change('up');
        if(e==cc.KEY.b) this.KeyB.change('up');
        if(e==cc.KEY.y) this.KeyY.change('up');
        if(e==cc.KEY.h) this.KeyH.change('up');
        if(e==cc.KEY.n) this.KeyN.change('up');
        if(e==cc.KEY.u) this.KeyU.change('up');
        if(e==cc.KEY.j) this.KeyJ.change('up');
        if(e==cc.KEY.m) this.KeyM.change('up');
        if(e==cc.KEY.i) this.KeyI.change('up');
        if(e==cc.KEY.k) this.KeyK.change('up');
        if(e==cc.KEY.o) this.KeyO.change('up');
        if(e==cc.KEY.l) this.KeyL.change('up');
        if(e==cc.KEY.p) this.KeyP.change('up');
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



