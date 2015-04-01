var EndLayer = cc.LayerColor.extend({

    init: function(name,score,time) {
        this._super( new cc.Color( 195, 195, 195, 0) );
        this.setPosition( new cc.Point( 0, 0 ) );

        cc.log('EndLayer');
        this.addKeyboardHandlers( true );

        this.OverLabel = cc.LabelTTF.create( 'GameOver', 'Arial', 100 );
        this.OverLabel.setPosition( new cc.Point( 500, 400 ) );
        this.addChild( this.OverLabel );

        this.nameLabel = cc.LabelTTF.create( 'Player Name :'+name , 'Arial', 50 );
        this.nameLabel.setPosition( new cc.Point( 500, 300 ) );
        this.addChild( this.nameLabel );

        this.scoreLabel = cc.LabelTTF.create( score , 'Arial', 50 );
        this.scoreLabel.setPosition( new cc.Point( 500, 225 ) );
        this.addChild( this.scoreLabel );

        this.timeLabel = cc.LabelTTF.create( 'Time : '+time , 'Arial', 50 );
        this.timeLabel.setPosition( new cc.Point( 500, 150 ) );
        this.addChild( this.timeLabel );

        var t = [] ;
        t = time.split(":");

        var duration = parseInt(t[2])+(parseInt(t[1])*60)+(parseInt(t[0])*3600);
        var s = [] ;
        s = score.split(":");
        var Score = s[1];

        var skill = ((Score/duration)*Math.pow(10,2)).toFixed(2);
        
        this.skillLabel = cc.LabelTTF.create( 'Your Skill: '+skill , 'Arial', 50 );
        this.skillLabel.setPosition( new cc.Point( 500, 75 ) );
        this.addChild( this.skillLabel );

        // this.collectScore(name,score,time,skill);

       // window.open("src/Score.html");


//         // if we have something on local storage place that
// if(localStorage.getItem('todos')) {
// $('#todos').html(localStorage.getItem('todos'));
// }

    // this.writeFile();



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
    },

    // writeFile: function() {
    //         var Description = "p";
    //         //if the to-do is empty
    //         // if($("#description").val() == '') {
    //         //    $('#alert').html("<strong>Warning!</strong> You left the to-do empty");
    //         //    $('#alert').fadeIn().delay(1000).fadeOut();
    //         // return false;
    //         // }
    //          // add the list item
    //     ('#todos').prepend("<li>" + Description + "</li>");
    //     // delete whatever is in the input
    //     ('#form')[0].reset();
    //     var todos = $('#todos').html();
    //     localStorage.setItem('todos', todos);
    //    return false;
    // }
    collectScore: function(name,score,time,skill){

       var ls = cc.sys.localStorage;

       var sec = new Date().getSeconds();
       var min = new Date().getMinutes();
       var hr = new Date().getHours();
       
       var key = (hr*3600)+(min*60)+sec;
       var value =  name+"Score:"+score+"Time:"+time+"Skill:"+skill;

       ls.setItem(key,value);

       var score = [];
       for(var i=0 ; i<(24*3600) ; i++){

            if(ls.getItem(i)!=null){
                cc.log(ls.getItem(i));
                score.push(ls.getItem(i)); 
            }
            ls.removeItem(i);
        }

        return score;    
    }


});









