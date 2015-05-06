 var KeyBoard = cc.Sprite.extend({
    
    ctor: function(){
        this._super();

        this.Q = cc.Sprite.create( res.keyQ0_png );
        this.Q.setPosition(new cc.Point(200,150));
        this.addChild(this.Q);
        this.A = cc.Sprite.create( res.keyA0_png );
        this.A.setPosition(new cc.Point(200,100));
        this.addChild(this.A);
        this.Z = cc.Sprite.create( res.keyZ0_png );
        this.Z.setPosition(new cc.Point(200,50));
        this.addChild(this.Z);

        this.W = cc.Sprite.create( res.keyW0_png );
        this.W.setPosition(new cc.Point(250,150));
        this.addChild(this.W);
        this.S = cc.Sprite.create( res.keyS0_png );
        this.S.setPosition(new cc.Point(250,100));
        this.addChild(this.S);
        this.X = cc.Sprite.create( res.keyX0_png );
        this.X.setPosition(new cc.Point(250,50));
        this.addChild(this.X);     

        this.E = cc.Sprite.create( res.keyE0_png );
        this.E.setPosition(new cc.Point(300,150));
        this.addChild(this.E);
        this.D = cc.Sprite.create( res.keyD0_png );
        this.D.setPosition(new cc.Point(300,100));
        this.addChild(this.D);
        this.C = cc.Sprite.create( res.keyC0_png );
        this.C.setPosition(new cc.Point(300,50));
        this.addChild(this.C);   

        this.R = cc.Sprite.create( res.keyR0_png );
        this.R.setPosition(new cc.Point(350,150));
        this.addChild(this.R);
        this.F = cc.Sprite.create( res.keyF0_png );
        this.F.setPosition(new cc.Point(350,100));
        this.addChild(this.F);
        this.V = cc.Sprite.create( res.keyV0_png );
        this.V.setPosition(new cc.Point(350,50));
        this.addChild(this.V);   

        this.T = cc.Sprite.create( res.keyT0_png );
        this.T.setPosition(new cc.Point(400,150));
        this.addChild(this.T);
        this.G = cc.Sprite.create( res.keyG0_png );
        this.G.setPosition(new cc.Point(400,100));
        this.addChild(this.G);
        this.B = cc.Sprite.create( res.keyB0_png );
        this.B.setPosition(new cc.Point(400,50));
        this.addChild(this.B);   

        this.Y = cc.Sprite.create( res.keyY0_png );
        this.Y.setPosition(new cc.Point(450,150));
        this.addChild(this.Y);
        this.H = cc.Sprite.create( res.keyH0_png );
        this.H.setPosition(new cc.Point(450,100));
        this.addChild(this.H);
        this.N = cc.Sprite.create( res.keyN0_png );
        this.N.setPosition(new cc.Point(450,50));
        this.addChild(this.N); 

        this.U = cc.Sprite.create( res.keyU0_png );
        this.U.setPosition(new cc.Point(500,150));
        this.addChild(this.U);
        this.J = cc.Sprite.create( res.keyJ0_png );
        this.J.setPosition(new cc.Point(500,100));
        this.addChild(this.J);
        this.M = cc.Sprite.create( res.keyM0_png );
        this.M.setPosition(new cc.Point(500,50));
        this.addChild(this.M); 

        this.EN = cc.Sprite.create( res.keyEN0_png );
        this.EN.setPosition(new cc.Point(600,75));
        this.addChild(this.EN);   

        this.I = cc.Sprite.create( res.keyI0_png );
        this.I.setPosition(new cc.Point(550,150));
        this.addChild(this.I);
        this.K = cc.Sprite.create( res.keyK0_png );
        this.K.setPosition(new cc.Point(550,100));
        this.addChild(this.K);

        this.O = cc.Sprite.create( res.keyO0_png );
        this.O.setPosition(new cc.Point(600,150));
        this.addChild(this.O);   
        this.L = cc.Sprite.create( res.keyL0_png );
        this.L.setPosition(new cc.Point(600,100));
        this.addChild(this.L); 

        this.P = cc.Sprite.create( res.keyP0_png );
        this.P.setPosition(new cc.Point(650,150));
        this.addChild(this.P); 

        this.Up = cc.Sprite.create( res.keyUP0_png );
        this.Up.setPosition(new cc.Point(750,100));
        this.addChild(this.Up);
        this.Down = cc.Sprite.create( res.keyDOWN0_png );
        this.Down.setPosition(new cc.Point(750,50));
        this.addChild(this.Down);

        this.DE = cc.Sprite.create( res.keyDE0_png );
        this.DE.setPosition(new cc.Point(750,150));
        this.addChild(this.DE);

        
    },
    
    pressDownName: function(e,label){
       if(e==cc.KEY.q){
          if((label.getString()).length<12)label.setString(label.getString()+'Q');
          this.Q.initWithFile( res.keyQ1_png );
       } 
       if(e==cc.KEY.a){
          if((label.getString()).length<12)label.setString(label.getString()+'A');
          this.A.initWithFile( res.keyA1_png );
       } 
       if(e==cc.KEY.z){
          if((label.getString()).length<12)label.setString(label.getString()+'Z');
          this.Z.initWithFile( res.keyZ1_png );
       } 
       if(e==cc.KEY.w){
          if((label.getString()).length<12)label.setString(label.getString()+'W');
          this.W.initWithFile( res.keyW1_png );
       } 
       if(e==cc.KEY.s){
          if((label.getString()).length<12)label.setString(label.getString()+'S');
          this.S.initWithFile( res.keyS1_png );
       } 
       if(e==cc.KEY.x){
          if((label.getString()).length<12)label.setString(label.getString()+'X');
          this.X.initWithFile( res.keyX1_png );
       } 
       if(e==cc.KEY.e){
          if((label.getString()).length<12)label.setString(label.getString()+'E');
          this.E.initWithFile( res.keyE1_png );
       } 
       if(e==cc.KEY.d){
          if((label.getString()).length<12)label.setString(label.getString()+'D');
          this.D.initWithFile( res.keyD1_png );
       } 
       if(e==cc.KEY.c){
          if((label.getString()).length<12)label.setString(label.getString()+'C');
          this.C.initWithFile( res.keyC1_png );
       } 
       if(e==cc.KEY.r){
          if((label.getString()).length<12)label.setString(label.getString()+'R');
          this.R.initWithFile( res.keyR1_png );
       } 
       if(e==cc.KEY.f){
          if((label.getString()).length<12)label.setString(label.getString()+'F');
          this.F.initWithFile( res.keyF1_png );
       } 
       if(e==cc.KEY.v){
          if((label.getString()).length<12)label.setString(label.getString()+'V');
          this.V.initWithFile( res.keyV1_png );
       } 
       if(e==cc.KEY.t){
          if((label.getString()).length<12)label.setString(label.getString()+'T');
          this.T.initWithFile( res.keyT1_png );
       } 
       if(e==cc.KEY.g){
          if((label.getString()).length<12)label.setString(label.getString()+'G');
          this.G.initWithFile( res.keyG1_png );
       } 
       if(e==cc.KEY.b){
          if((label.getString()).length<12)label.setString(label.getString()+'B');
          this.B.initWithFile( res.keyB1_png );
       } 
       if(e==cc.KEY.y){
          if((label.getString()).length<12)label.setString(label.getString()+'Y');
          this.Y.initWithFile( res.keyY1_png );
       } 
       if(e==cc.KEY.h){
          if((label.getString()).length<12)label.setString(label.getString()+'H');
          this.H.initWithFile( res.keyH1_png );
       }
       if(e==cc.KEY.n){
          if((label.getString()).length<12)label.setString(label.getString()+'N');
          this.N.initWithFile( res.keyN1_png );
       }
       if(e==cc.KEY.u){
          if((label.getString()).length<12)label.setString(label.getString()+'U');
          this.U.initWithFile( res.keyU1_png );
       }
       if(e==cc.KEY.j){
          if((label.getString()).length<12)label.setString(label.getString()+'J');
          this.J.initWithFile( res.keyJ1_png );
       }
       if(e==cc.KEY.m){
          if((label.getString()).length<12)label.setString(label.getString()+'M');
          this.M.initWithFile( res.keyM1_png );
       }
       if(e==cc.KEY.i){
          if((label.getString()).length<12)label.setString(label.getString()+'I');
          this.I.initWithFile( res.keyI1_png );
       }
       if(e==cc.KEY.k){
          if((label.getString()).length<12)label.setString(label.getString()+'K');
          this.K.initWithFile( res.keyK1_png );
       }
       if(e==cc.KEY.o){
          if((label.getString()).length<12)label.setString(label.getString()+'O');
          this.O.initWithFile( res.keyO1_png );
       }
       if(e==cc.KEY.l){
          if((label.getString()).length<12)label.setString(label.getString()+'L');
          this.L.initWithFile( res.keyL1_png );
       }
       if(e==cc.KEY.p){
          if((label.getString()).length<12)label.setString(label.getString()+'P');
          this.P.initWithFile( res.keyP1_png );
       }
       if(e==cc.KEY.backspace){
             var l = label.getString().length;
             if(l>0) label.setString(label.getString().substring(0,l-1));
             label.setString(label.getString());
             this.DE.initWithFile( res.keyDE1_png );
        }
    },

    pressDownLevel: function(e,label){
        if(e==cc.KEY.up){
            var lev = parseInt(label.getString());
            if(lev>=1&&lev<10)lev++;
            label.setString(lev+'');
            this.Up.initWithFile( res.keyUP1_png );
        }
        if(e==cc.KEY.down){
            var lev = parseInt(label.getString());
            if(lev>1&&lev<=10)lev--;
            label.setString(lev+'');
            this.Down.initWithFile( res.keyDOWN1_png );
        }
        if(e==cc.KEY.enter) this.EN.initWithFile( res.keyEN1_png );
    },

    pressUp: function(e){
       if(e==cc.KEY.q){
          this.Q.initWithFile( res.keyQ0_png );
       } 
       if(e==cc.KEY.a){
          this.A.initWithFile( res.keyA0_png );
       } 
       if(e==cc.KEY.z){
          this.Z.initWithFile( res.keyZ0_png );
       } 
       if(e==cc.KEY.w){
          this.W.initWithFile( res.keyW0_png );
       } 
       if(e==cc.KEY.s){
          this.S.initWithFile( res.keyS0_png );
       } 
       if(e==cc.KEY.x){
          this.X.initWithFile( res.keyX0_png );
       } 
       if(e==cc.KEY.e){
          this.E.initWithFile( res.keyE0_png );
       } 
       if(e==cc.KEY.d){
          this.D.initWithFile( res.keyD0_png );
       } 
       if(e==cc.KEY.c){
          this.C.initWithFile( res.keyC0_png );
       } 
       if(e==cc.KEY.r){
          this.R.initWithFile( res.keyR0_png );
       } 
       if(e==cc.KEY.f){
          this.F.initWithFile( res.keyF0_png );
       }
       if(e==cc.KEY.v){
          this.V.initWithFile( res.keyV0_png );
       } 
       if(e==cc.KEY.t){
          this.T.initWithFile( res.keyT0_png );
       } 
       if(e==cc.KEY.g){
          this.G.initWithFile( res.keyG0_png );
       } 
       if(e==cc.KEY.b){
          this.B.initWithFile( res.keyB0_png );
       } 
       if(e==cc.KEY.y){
          this.Y.initWithFile( res.keyY0_png );
       } 
       if(e==cc.KEY.h){
          this.H.initWithFile( res.keyH0_png );
       }
       if(e==cc.KEY.n){
          this.N.initWithFile( res.keyN0_png );
       }
       if(e==cc.KEY.u){
          this.U.initWithFile( res.keyU0_png );
       }
       if(e==cc.KEY.j){
          this.J.initWithFile( res.keyJ0_png );
       }
       if(e==cc.KEY.m){
          this.M.initWithFile( res.keyM0_png );
       }
       if(e==cc.KEY.i){
          this.I.initWithFile( res.keyI0_png );
       }
       if(e==cc.KEY.k){
          this.K.initWithFile( res.keyK0_png );
       }
       if(e==cc.KEY.o){
          this.O.initWithFile( res.keyO0_png );
       }
       if(e==cc.KEY.l){
          this.L.initWithFile( res.keyL0_png );
       }
       if(e==cc.KEY.p){
          this.P.initWithFile( res.keyP0_png );
       }
       if(e==cc.KEY.enter) {
        this.EN.initWithFile( res.keyEN0_png );
       }
       if(e==cc.KEY.backspace){
        this.DE.initWithFile( res.keyDE0_png );
       }
       if(e==cc.KEY.up){
          this.Up.initWithFile( res.keyUP0_png );
       }
       if(e==cc.KEY.down){
         this.Down.initWithFile( res.keyDOWN0_png );
       }
    }

    
 });