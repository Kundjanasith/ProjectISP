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

 var Key = cc.Sprite.extend({
    
    ctor: function(cha){
        this._super();
        if(cha=='Q')this.initWithFile( 'res/key/Q0.png' );
        if(cha=='A')this.initWithFile( 'res/key/A0.png' );
        if(cha=='Z')this.initWithFile( 'res/key/Z0.png' );
        if(cha=='W')this.initWithFile( 'res/key/W0.png' );
        if(cha=='S')this.initWithFile( 'res/key/S0.png' );
        if(cha=='X')this.initWithFile( 'res/key/X0.png' );
        if(cha=='E')this.initWithFile( 'res/key/E0.png' );
        if(cha=='D')this.initWithFile( 'res/key/D0.png' );
        if(cha=='C')this.initWithFile( 'res/key/C0.png' );
        if(cha=='R')this.initWithFile( 'res/key/R0.png' );
        if(cha=='F')this.initWithFile( 'res/key/F0.png' );
        if(cha=='V')this.initWithFile( 'res/key/V0.png' );
        if(cha=='T')this.initWithFile( 'res/key/T0.png' );
        if(cha=='G')this.initWithFile( 'res/key/G0.png' );
        if(cha=='B')this.initWithFile( 'res/key/B0.png' );
        if(cha=='Y')this.initWithFile( 'res/key/Y0.png' );
        if(cha=='H')this.initWithFile( 'res/key/H0.png' );
        if(cha=='N')this.initWithFile( 'res/key/N0.png' );
        if(cha=='U')this.initWithFile( 'res/key/U0.png' );
        if(cha=='J')this.initWithFile( 'res/key/J0.png' );
        if(cha=='M')this.initWithFile( 'res/key/M0.png' );
        if(cha=='I')this.initWithFile( 'res/key/I0.png' );
        if(cha=='K')this.initWithFile( 'res/key/K0.png' );
        if(cha=='O')this.initWithFile( 'res/key/O0.png' );
        if(cha=='L')this.initWithFile( 'res/key/L0.png' );
        if(cha=='P')this.initWithFile( 'res/key/P0.png' );
    }

    
 });