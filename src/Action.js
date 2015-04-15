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
        this.cha = cha;
        if(this.cha=='Q')this.initWithFile( 'res/key/Q0.png' );
        if(this.cha=='A')this.initWithFile( 'res/key/A0.png' );
        if(this.cha=='Z')this.initWithFile( 'res/key/Z0.png' );
        if(this.cha=='W')this.initWithFile( 'res/key/W0.png' );
        if(this.cha=='S')this.initWithFile( 'res/key/S0.png' );
        if(this.cha=='X')this.initWithFile( 'res/key/X0.png' );
        if(this.cha=='E')this.initWithFile( 'res/key/E0.png' );
        if(this.cha=='D')this.initWithFile( 'res/key/D0.png' );
        if(this.cha=='C')this.initWithFile( 'res/key/C0.png' );
        if(this.cha=='R')this.initWithFile( 'res/key/R0.png' );
        if(this.cha=='F')this.initWithFile( 'res/key/F0.png' );
        if(this.cha=='V')this.initWithFile( 'res/key/V0.png' );
        if(this.cha=='T')this.initWithFile( 'res/key/T0.png' );
        if(this.cha=='G')this.initWithFile( 'res/key/G0.png' );
        if(this.cha=='B')this.initWithFile( 'res/key/B0.png' );
        if(this.cha=='Y')this.initWithFile( 'res/key/Y0.png' );
        if(this.cha=='H')this.initWithFile( 'res/key/H0.png' );
        if(this.cha=='N')this.initWithFile( 'res/key/N0.png' );
        if(this.cha=='U')this.initWithFile( 'res/key/U0.png' );
        if(this.cha=='J')this.initWithFile( 'res/key/J0.png' );
        if(this.cha=='M')this.initWithFile( 'res/key/M0.png' );
        if(this.cha=='I')this.initWithFile( 'res/key/I0.png' );
        if(this.cha=='K')this.initWithFile( 'res/key/K0.png' );
        if(this.cha=='O')this.initWithFile( 'res/key/O0.png' );
        if(this.cha=='L')this.initWithFile( 'res/key/L0.png' );
        if(this.cha=='P')this.initWithFile( 'res/key/P0.png' );
        if(this.cha=='Enter')this.initWithFile( 'res/key/Enter0.png' );
        if(this.cha=='Delete')this.initWithFile( 'res/key/Delete0.png' );
        if(this.cha=='up')this.initWithFile( 'res/key/up0.png' );
        if(this.cha=='down')this.initWithFile( 'res/key/down0.png' );
    },

    change: function(press){
       if(press=='up'&&this.cha=='Q')this.initWithFile( 'res/key/Q0.png' );
       if(press=='down'&&this.cha=='Q')this.initWithFile( 'res/key/Q1.png' );
       if(press=='up'&&this.cha=='A')this.initWithFile( 'res/key/A0.png' );
       if(press=='down'&&this.cha=='A')this.initWithFile( 'res/key/A1.png' );
       if(press=='up'&&this.cha=='Z')this.initWithFile( 'res/key/Z0.png' );
       if(press=='down'&&this.cha=='Z')this.initWithFile( 'res/key/Z1.png' );
       if(press=='up'&&this.cha=='W')this.initWithFile( 'res/key/W0.png' );
       if(press=='down'&&this.cha=='W')this.initWithFile( 'res/key/W1.png' );
       if(press=='up'&&this.cha=='S')this.initWithFile( 'res/key/S0.png' );
       if(press=='down'&&this.cha=='S')this.initWithFile( 'res/key/S1.png' );
       if(press=='up'&&this.cha=='X')this.initWithFile( 'res/key/X0.png' );
       if(press=='down'&&this.cha=='X')this.initWithFile( 'res/key/X1.png' );
       if(press=='up'&&this.cha=='E')this.initWithFile( 'res/key/E0.png' );
       if(press=='down'&&this.cha=='E')this.initWithFile( 'res/key/E1.png' );
       if(press=='up'&&this.cha=='D')this.initWithFile( 'res/key/D0.png' );
       if(press=='down'&&this.cha=='D')this.initWithFile( 'res/key/D1.png' );
       if(press=='up'&&this.cha=='C')this.initWithFile( 'res/key/C0.png' );
       if(press=='down'&&this.cha=='C')this.initWithFile( 'res/key/C1.png' );
       if(press=='up'&&this.cha=='R')this.initWithFile( 'res/key/R0.png' );
       if(press=='down'&&this.cha=='R')this.initWithFile( 'res/key/R1.png' );
       if(press=='up'&&this.cha=='F')this.initWithFile( 'res/key/F0.png' );
       if(press=='down'&&this.cha=='F')this.initWithFile( 'res/key/F1.png' );
       if(press=='up'&&this.cha=='V')this.initWithFile( 'res/key/V0.png' );
       if(press=='down'&&this.cha=='V')this.initWithFile( 'res/key/V1.png' );
       if(press=='up'&&this.cha=='T')this.initWithFile( 'res/key/T0.png' );
       if(press=='down'&&this.cha=='T')this.initWithFile( 'res/key/T1.png' );
       if(press=='up'&&this.cha=='G')this.initWithFile( 'res/key/G0.png' );
       if(press=='down'&&this.cha=='G')this.initWithFile( 'res/key/G1.png' );
       if(press=='up'&&this.cha=='B')this.initWithFile( 'res/key/B0.png' );
       if(press=='down'&&this.cha=='B')this.initWithFile( 'res/key/B1.png' );
       if(press=='up'&&this.cha=='Y')this.initWithFile( 'res/key/Y0.png' );
       if(press=='down'&&this.cha=='Y')this.initWithFile( 'res/key/Y1.png' );
       if(press=='up'&&this.cha=='H')this.initWithFile( 'res/key/H0.png' );
       if(press=='down'&&this.cha=='H')this.initWithFile( 'res/key/H1.png' );
       if(press=='up'&&this.cha=='N')this.initWithFile( 'res/key/N0.png' );
       if(press=='down'&&this.cha=='N')this.initWithFile( 'res/key/N1.png' );
       if(press=='up'&&this.cha=='U')this.initWithFile( 'res/key/U0.png' );
       if(press=='down'&&this.cha=='U')this.initWithFile( 'res/key/U1.png' );
       if(press=='up'&&this.cha=='J')this.initWithFile( 'res/key/J0.png' );
       if(press=='down'&&this.cha=='J')this.initWithFile( 'res/key/J1.png' );
       if(press=='up'&&this.cha=='M')this.initWithFile( 'res/key/M0.png' );
       if(press=='down'&&this.cha=='M')this.initWithFile( 'res/key/M1.png' );
       if(press=='up'&&this.cha=='I')this.initWithFile( 'res/key/I0.png' );
       if(press=='down'&&this.cha=='I')this.initWithFile( 'res/key/I1.png' );
       if(press=='up'&&this.cha=='K')this.initWithFile( 'res/key/K0.png' );
       if(press=='down'&&this.cha=='K')this.initWithFile( 'res/key/K1.png' );
       if(press=='up'&&this.cha=='O')this.initWithFile( 'res/key/O0.png' );
       if(press=='down'&&this.cha=='O')this.initWithFile( 'res/key/O1.png' );
       if(press=='up'&&this.cha=='L')this.initWithFile( 'res/key/L0.png' );
       if(press=='down'&&this.cha=='L')this.initWithFile( 'res/key/L1.png' );
       if(press=='up'&&this.cha=='P')this.initWithFile( 'res/key/P0.png' );
       if(press=='down'&&this.cha=='P')this.initWithFile( 'res/key/P1.png' );
       if(press=='up'&&this.cha=='Enter')this.initWithFile( 'res/key/Enter0.png' );
       if(press=='down'&&this.cha=='Enter')this.initWithFile( 'res/key/Enter1.png' );
       if(press=='up'&&this.cha=='Delete')this.initWithFile( 'res/key/Delete0.png' );
       if(press=='down'&&this.cha=='Delete')this.initWithFile( 'res/key/Delete1.png' );
       if(press=='up'&&this.cha=='up')this.initWithFile( 'res/key/up0.png' );
       if(press=='down'&&this.cha=='up')this.initWithFile( 'res/key/up1.png' );
       if(press=='up'&&this.cha=='down')this.initWithFile( 'res/key/down0.png' );
       if(press=='down'&&this.cha=='down')this.initWithFile( 'res/key/down1.png' );
    }

    
 });