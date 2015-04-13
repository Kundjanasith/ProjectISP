var ScoreLayer = cc.LayerColor.extend({

	init: function(){
        this._super( new cc.Color( 255, 255, 255, 0 ) );
        this.setPosition(new cc.Point(0, 0)  );

        this.ScoreLabel = cc.LabelTTF.create( 'Score-Board', 'Arial', 100 );
        this.ScoreLabel.setPosition( new cc.Point( 500, 400 ) );
        this.addChild( this.ScoreLabel );

        this.HeadLabel0 = cc.LabelTTF.create( 'Rank', 'Arial', 50);
        this.HeadLabel0.setPosition( new cc.Point( 95 , 320 ) );
        this.addChild( this.HeadLabel0 );

        this.HeadLabel1 = cc.LabelTTF.create( 'Name', 'Arial', 50);
        this.HeadLabel1.setPosition( new cc.Point( 250 , 320 ) );
        this.addChild( this.HeadLabel1 );

        this.HeadLabel2 = cc.LabelTTF.create( 'Score', 'Arial', 50);
        this.HeadLabel2.setPosition( new cc.Point( 500 , 320 ) );
        this.addChild( this.HeadLabel2 );

        this.HeadLabel3 = cc.LabelTTF.create( 'Time', 'Arial', 50);
        this.HeadLabel3.setPosition( new cc.Point( 700 , 320 ) );
        this.addChild( this.HeadLabel3 );

        this.HeadLabel4 = cc.LabelTTF.create( 'Skill', 'Arial', 50);
        this.HeadLabel4.setPosition( new cc.Point( 900 , 320 ) );
        this.addChild( this.HeadLabel4 );


      for(var i=0 ; i<5 ; i++){
        
      }

       var ls = cc.sys.localStorage;
       var score = [];
       for(var i=0 ; i<(24*3600) ; i++){
        // ls.removeItem(i);
            if(ls.getItem(i)!=null){
                // cc.log(ls.getItem(i));
                // cc.log(i);
                score.push(ls.getItem(i)); 
            }
        }

        var detail = [];
        for(var i=0 ; i<score.length ; i++){
          cc.log(score[i]);
          var ex = score[i];
          var name = ex.split(".")[0];
          var sco = (ex.split(":")[1]).split(".")[0];
          var time = ex.split(".")[4];
          var skill = ex.split(".")[6]+"."+ex.split(".")[7];
          detail.push(name+"/"+sco+"/"+time+"/"+skill);
        }

        for(var i=0 ; i<5  ; i++){
          if(detail[i]!=null){
            var rank = cc.LabelTTF.create( i+1 , 'Arial', 50);
            rank.setPosition( new cc.Point( 95, 50*(5-i) ) );
            this.addChild( rank );
            var name = detail[i].split("/")[0];
            var nameLabel = cc.LabelTTF.create( name , 'Arial', 50 );
            nameLabel.setPosition( new cc.Point( 250 , 50*(5-i) ) );
            this.addChild( nameLabel );
            var score = detail[i].split("/")[1];
            var scoreLabel = cc.LabelTTF.create( score , 'Arial', 50 );
            scoreLabel.setPosition( new cc.Point( 500 , 50*(5-i) ) );
            this.addChild( scoreLabel );
            var time = detail[i].split("/")[2];
            var timeLabel = cc.LabelTTF.create( time , 'Arial', 25 );
            timeLabel.setPosition( new cc.Point( 700 , 50*(5-i) ) );
            this.addChild( timeLabel );
            var skill= detail[i].split("/")[3];
            var skillLabel = cc.LabelTTF.create( skill , 'Arial', 50 );
            skillLabel.setPosition( new cc.Point( 900 , 50*(5-i) ) );
            this.addChild( skillLabel );
          }
          else {
            var rank = cc.LabelTTF.create( i+1 , 'Arial', 50);
            rank.setPosition( new cc.Point( 95, 50*(5-i) ) );
            this.addChild( rank );
            var nameLabel = cc.LabelTTF.create( '-' , 'Arial', 50 );
            nameLabel.setPosition( new cc.Point( 250 , 50*(5-i) ) );
            this.addChild( nameLabel );
            var scoreLabel = cc.LabelTTF.create( '-' , 'Arial', 50 );
            scoreLabel.setPosition( new cc.Point( 500 , 50*(5-i) ) );
            this.addChild( scoreLabel );
            var timeLabel = cc.LabelTTF.create( '-' , 'Arial', 50 );
            timeLabel.setPosition( new cc.Point( 700 , 50*(5-i) ) );
            this.addChild( timeLabel );
            var skillLabel = cc.LabelTTF.create( '-' , 'Arial', 50 );
            skillLabel.setPosition( new cc.Point( 900 , 50*(5-i) ) );
            this.addChild( skillLabel );
          }
        }

	}

});