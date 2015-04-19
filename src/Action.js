 var Action = cc.Sprite.extend({

     ctor: function(act,color){
     	this._super();
        if(act=='perfect')this.initWithFile( 'res/action/perfect.png' );
        if(act=='miss')this.initWithFile( 'res/action/miss.png' );
        if(color=='Red')this.setPosition(new cc.Point(125,380));
        if(color=='Orange')this.setPosition(new cc.Point(225,380));
        if(color=='Yellow')this.setPosition(new cc.Point(325,380));
        if(color=='Green')this.setPosition(new cc.Point(425,380));
        if(color=='Blue')this.setPosition(new cc.Point(525,380));
        if(color=='Violet')this.setPosition(new cc.Point(625,380));
     },
     
     destroy: function(){
     	this.removeFromParent();
     }
    
}); 

 var KeyBoard = cc.Sprite.extend({
    
    ctor: function(){
        this._super();

        this.Q = cc.Sprite.create( 'res/key/Q0.png' );
        this.Q.setPosition(new cc.Point(200,150));
        this.addChild(this.Q);
        this.A = cc.Sprite.create( 'res/key/A0.png' );
        this.A.setPosition(new cc.Point(200,100));
        this.addChild(this.A);
        this.Z = cc.Sprite.create( 'res/key/Z0.png' );
        this.Z.setPosition(new cc.Point(200,50));
        this.addChild(this.Z);

        this.W = cc.Sprite.create( 'res/key/W0.png' );
        this.W.setPosition(new cc.Point(250,150));
        this.addChild(this.W);
        this.S = cc.Sprite.create( 'res/key/S0.png' );
        this.S.setPosition(new cc.Point(250,100));
        this.addChild(this.S);
        this.X = cc.Sprite.create( 'res/key/X0.png' );
        this.X.setPosition(new cc.Point(250,50));
        this.addChild(this.X);     

        this.E = cc.Sprite.create( 'res/key/E0.png' );
        this.E.setPosition(new cc.Point(300,150));
        this.addChild(this.E);
        this.D = cc.Sprite.create( 'res/key/D0.png' );
        this.D.setPosition(new cc.Point(300,100));
        this.addChild(this.D);
        this.C = cc.Sprite.create( 'res/key/C0.png' );
        this.C.setPosition(new cc.Point(300,50));
        this.addChild(this.C);   

        this.R = cc.Sprite.create( 'res/key/R0.png' );
        this.R.setPosition(new cc.Point(350,150));
        this.addChild(this.R);
        this.F = cc.Sprite.create( 'res/key/F0.png' );
        this.F.setPosition(new cc.Point(350,100));
        this.addChild(this.F);
        this.V = cc.Sprite.create( 'res/key/V0.png' );
        this.V.setPosition(new cc.Point(350,50));
        this.addChild(this.V);   

        this.T = cc.Sprite.create( 'res/key/T0.png' );
        this.T.setPosition(new cc.Point(400,150));
        this.addChild(this.T);
        this.G = cc.Sprite.create( 'res/key/G0.png' );
        this.G.setPosition(new cc.Point(400,100));
        this.addChild(this.G);
        this.B = cc.Sprite.create( 'res/key/B0.png' );
        this.B.setPosition(new cc.Point(400,50));
        this.addChild(this.B);   

        this.Y = cc.Sprite.create( 'res/key/Y0.png' );
        this.Y.setPosition(new cc.Point(450,150));
        this.addChild(this.Y);
        this.H = cc.Sprite.create( 'res/key/H0.png' );
        this.H.setPosition(new cc.Point(450,100));
        this.addChild(this.H);
        this.N = cc.Sprite.create( 'res/key/N0.png' );
        this.N.setPosition(new cc.Point(450,50));
        this.addChild(this.N); 

        this.U = cc.Sprite.create( 'res/key/U0.png' );
        this.U.setPosition(new cc.Point(500,150));
        this.addChild(this.U);
        this.J = cc.Sprite.create( 'res/key/J0.png' );
        this.J.setPosition(new cc.Point(500,100));
        this.addChild(this.J);
        this.M = cc.Sprite.create( 'res/key/M0.png' );
        this.M.setPosition(new cc.Point(500,50));
        this.addChild(this.M); 

        this.EN = cc.Sprite.create( 'res/key/Enter0.png' );
        this.EN.setPosition(new cc.Point(600,75));
        this.addChild(this.EN);   

        this.I = cc.Sprite.create( 'res/key/I0.png' );
        this.I.setPosition(new cc.Point(550,150));
        this.addChild(this.I);
        this.K = cc.Sprite.create( 'res/key/K0.png' );
        this.K.setPosition(new cc.Point(550,100));
        this.addChild(this.K);

        this.O = cc.Sprite.create( 'res/key/O0.png' );
        this.O.setPosition(new cc.Point(600,150));
        this.addChild(this.O);   
        this.L = cc.Sprite.create( 'res/key/L0.png' );
        this.L.setPosition(new cc.Point(600,100));
        this.addChild(this.L); 

        this.P = cc.Sprite.create( 'res/key/P0.png' );
        this.P.setPosition(new cc.Point(650,150));
        this.addChild(this.P); 

        this.Up = cc.Sprite.create( 'res/key/up0.png' );
        this.Up.setPosition(new cc.Point(750,100));
        this.addChild(this.Up);
        this.Down = cc.Sprite.create( 'res/key/down0.png' );
        this.Down.setPosition(new cc.Point(750,50));
        this.addChild(this.Down);

        this.DE = cc.Sprite.create( 'res/key/Delete0.png' );
        this.DE.setPosition(new cc.Point(750,150));
        this.addChild(this.DE);

        
    },
    
    pressDownName: function(e,label){
       if(e==cc.KEY.q){
          if((label.getString()).length<12)label.setString(label.getString()+'Q');
          this.Q.initWithFile( 'res/key/Q1.png' );
       } 
       if(e==cc.KEY.a){
          if((label.getString()).length<12)label.setString(label.getString()+'A');
          this.A.initWithFile( 'res/key/A1.png' );
       } 
       if(e==cc.KEY.z){
          if((label.getString()).length<12)label.setString(label.getString()+'Z');
          this.Z.initWithFile( 'res/key/Z1.png' );
       } 
       if(e==cc.KEY.w){
          if((label.getString()).length<12)label.setString(label.getString()+'W');
          this.W.initWithFile( 'res/key/W1.png' );
       } 
       if(e==cc.KEY.s){
          if((label.getString()).length<12)label.setString(label.getString()+'S');
          this.S.initWithFile( 'res/key/S1.png' );
       } 
       if(e==cc.KEY.x){
          if((label.getString()).length<12)label.setString(label.getString()+'X');
          this.X.initWithFile( 'res/key/X1.png' );
       } 
       if(e==cc.KEY.e){
          if((label.getString()).length<12)label.setString(label.getString()+'E');
          this.E.initWithFile( 'res/key/E1.png' );
       } 
       if(e==cc.KEY.d){
          if((label.getString()).length<12)label.setString(label.getString()+'D');
          this.D.initWithFile( 'res/key/D1.png' );
       } 
       if(e==cc.KEY.c){
          if((label.getString()).length<12)label.setString(label.getString()+'C');
          this.C.initWithFile( 'res/key/C1.png' );
       } 
       if(e==cc.KEY.r){
          if((label.getString()).length<12)label.setString(label.getString()+'R');
          this.R.initWithFile( 'res/key/R1.png' );
       } 
       if(e==cc.KEY.f){
          if((label.getString()).length<12)label.setString(label.getString()+'F');
          this.F.initWithFile( 'res/key/F1.png' );
       } 
       if(e==cc.KEY.v){
          if((label.getString()).length<12)label.setString(label.getString()+'V');
          this.V.initWithFile( 'res/key/V1.png' );
       } 
       if(e==cc.KEY.t){
          if((label.getString()).length<12)label.setString(label.getString()+'T');
          this.T.initWithFile( 'res/key/T1.png' );
       } 
       if(e==cc.KEY.g){
          if((label.getString()).length<12)label.setString(label.getString()+'G');
          this.G.initWithFile( 'res/key/G1.png' );
       } 
       if(e==cc.KEY.b){
          if((label.getString()).length<12)label.setString(label.getString()+'B');
          this.B.initWithFile( 'res/key/B1.png' );
       } 
       if(e==cc.KEY.y){
          if((label.getString()).length<12)label.setString(label.getString()+'Y');
          this.Y.initWithFile( 'res/key/Y1.png' );
       } 
       if(e==cc.KEY.h){
          if((label.getString()).length<12)label.setString(label.getString()+'H');
          this.H.initWithFile( 'res/key/H1.png' );
       }
       if(e==cc.KEY.n){
          if((label.getString()).length<12)label.setString(label.getString()+'N');
          this.N.initWithFile( 'res/key/N1.png' );
       }
       if(e==cc.KEY.u){
          if((label.getString()).length<12)label.setString(label.getString()+'U');
          this.U.initWithFile( 'res/key/U1.png' );
       }
       if(e==cc.KEY.j){
          if((label.getString()).length<12)label.setString(label.getString()+'J');
          this.J.initWithFile( 'res/key/J1.png' );
       }
       if(e==cc.KEY.m){
          if((label.getString()).length<12)label.setString(label.getString()+'M');
          this.M.initWithFile( 'res/key/M1.png' );
       }
       if(e==cc.KEY.i){
          if((label.getString()).length<12)label.setString(label.getString()+'I');
          this.I.initWithFile( 'res/key/I1.png' );
       }
       if(e==cc.KEY.k){
          if((label.getString()).length<12)label.setString(label.getString()+'K');
          this.K.initWithFile( 'res/key/K1.png' );
       }
       if(e==cc.KEY.o){
          if((label.getString()).length<12)label.setString(label.getString()+'O');
          this.O.initWithFile( 'res/key/O1.png' );
       }
       if(e==cc.KEY.l){
          if((label.getString()).length<12)label.setString(label.getString()+'L');
          this.L.initWithFile( 'res/key/L1.png' );
       }
       if(e==cc.KEY.p){
          if((label.getString()).length<12)label.setString(label.getString()+'P');
          this.P.initWithFile( 'res/key/P1.png' );
       }
       if(e==cc.KEY.backspace){
             var l = label.getString().length;
             if(l>0) label.setString(label.getString().substring(0,l-1));
             label.setString(label.getString());
             this.DE.initWithFile( 'res/key/Delete1.png' );
        }
    },

    pressDownLevel: function(e,label){
        if(e==cc.KEY.up){
            var lev = parseInt(label.getString());
            if(lev>=1&&lev<10)lev++;
            label.setString(lev+'');
            this.Up.initWithFile( 'res/key/up1.png' );
        }
        if(e==cc.KEY.down){
            var lev = parseInt(label.getString());
            if(lev>1&&lev<=10)lev--;
            label.setString(lev+'');
            this.Down.initWithFile( 'res/key/down1.png' );
        }
        if(e==cc.KEY.enter) this.EN.initWithFile( 'res/key/Enter1.png' );
    },

    pressUp: function(e){
       if(e==cc.KEY.q){
          this.Q.initWithFile( 'res/key/Q0.png' );
       } 
       if(e==cc.KEY.a){
          this.A.initWithFile( 'res/key/A0.png' );
       } 
       if(e==cc.KEY.z){
          this.Z.initWithFile( 'res/key/Z0.png' );
       } 
       if(e==cc.KEY.w){
          this.W.initWithFile( 'res/key/W0.png' );
       } 
       if(e==cc.KEY.s){
          this.S.initWithFile( 'res/key/S0.png' );
       } 
       if(e==cc.KEY.x){
          this.X.initWithFile( 'res/key/X0.png' );
       } 
       if(e==cc.KEY.e){
          this.E.initWithFile( 'res/key/E0.png' );
       } 
       if(e==cc.KEY.d){
          this.D.initWithFile( 'res/key/D0.png' );
       } 
       if(e==cc.KEY.c){
          this.C.initWithFile( 'res/key/C0.png' );
       } 
       if(e==cc.KEY.r){
          this.R.initWithFile( 'res/key/R0.png' );
       } 
       if(e==cc.KEY.f){
          this.F.initWithFile( 'res/key/F0.png' );
       }
       if(e==cc.KEY.v){
          this.V.initWithFile( 'res/key/V0.png' );
       } 
       if(e==cc.KEY.t){
          this.T.initWithFile( 'res/key/T0.png' );
       } 
       if(e==cc.KEY.g){
          this.G.initWithFile( 'res/key/G0.png' );
       } 
       if(e==cc.KEY.b){
          this.B.initWithFile( 'res/key/B0.png' );
       } 
       if(e==cc.KEY.y){
          this.Y.initWithFile( 'res/key/Y0.png' );
       } 
       if(e==cc.KEY.h){
          this.H.initWithFile( 'res/key/H0.png' );
       }
       if(e==cc.KEY.n){
          this.N.initWithFile( 'res/key/N0.png' );
       }
       if(e==cc.KEY.u){
          this.U.initWithFile( 'res/key/U0.png' );
       }
       if(e==cc.KEY.j){
          this.J.initWithFile( 'res/key/J0.png' );
       }
       if(e==cc.KEY.m){
          this.M.initWithFile( 'res/key/M0.png' );
       }
       if(e==cc.KEY.i){
          this.I.initWithFile( 'res/key/I0.png' );
       }
       if(e==cc.KEY.k){
          this.K.initWithFile( 'res/key/K0.png' );
       }
       if(e==cc.KEY.o){
          this.O.initWithFile( 'res/key/O0.png' );
       }
       if(e==cc.KEY.l){
          this.L.initWithFile( 'res/key/L0.png' );
       }
       if(e==cc.KEY.p){
          this.P.initWithFile( 'res/key/P0.png' );
       }
       if(e==cc.KEY.enter) {
        this.EN.initWithFile( 'res/key/Enter0.png' );
       }
       if(e==cc.KEY.backspace){
        this.DE.initWithFile( 'res/key/Delete0.png' );
       }
       if(e==cc.KEY.up){
            this.Up.initWithFile( 'res/key/up0.png' );
        }
        if(e==cc.KEY.down){
            this.Down.initWithFile( 'res/key/down0.png' );
        }
    }

    
 });