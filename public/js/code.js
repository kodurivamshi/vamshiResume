var flag=0;

            var a=new Array(3);
            a[0]=new Array(3);
            a[1]=new Array(3);
            a[2]=new Array(3);

            for(var i=0;i<3;i++)
            {
                for(var j=0;j<3;j++){
                    a[i][j]='c';
                }
            }

            $('td').click(function(){
                var col = $(this).parent().children().index($(this));
                var row = $(this).parent().parent().children().index($(this).parent());
                //alert('Row: ' + row + ', Column: ' + col);
                if(flag){
                $(this).text('X').css({"font-size":"300%"});
                a[row][col]='X';
                    flag=0;
            }
            else{
                $(this).text('O').css({"font-size":"300%"});
                a[row][col]='O';
                    flag=1;
            }
           if(a[0][0]==a[0][1]==a[0][2]){
               if(flag==1)
               alert("player-1 WON.");
               else
               alert("player-2 WON...");
           }
           if(a[1][0]==a[1][1]==a[1][2]){
            if(flag==1)
            alert("player-1 WON.");
            else
            alert("player-2 WON...");
        }
        if(a[2][0]==a[2][1]==a[2][2]){
            if(flag==1)
            alert("player-1 WON.");
            else
            alert("player-2 WON...");
        }
        if(a[0][0]==a[1][0]==a[1][2]){
            if(flag==1)
            alert("player-1 WON.");
            else
            alert("player-2 WON...");
        }
        if(a[0][1]==a[1][1]==a[2][1]){
            if(flag==1)
            alert("player-1 WON.");
            else
            alert("player-2 WON...");
        }
        if(a[0][2]==a[1][2]==a[2][2]){
            if(flag==1)
            alert("player-1 WON.");
            else
            alert("player-2 WON...");
        }
        if(a[0][0]==a[1][1]==a[2][2]){
            if(flag==1)
            alert("player-1 WON.");
            else
            alert("player-2 WON...");
        }
        if(a[0][2]==a[1][1]==a[2][0]){
            if(flag==1)
            alert("player-1 WON.");
            else
            alert("player-2 WON...");
        }
            });