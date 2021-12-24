(function(){
     
     $.fn.kalender = function(){

          var getTanggalnya = function(dt){

               var bln = !dt ? new Date() : dt;
               var skrg = new Date();

               bln.setDate(1);
               
               var hariPertama = bln.getDay();
               var tglMulai = new Date(bln.getFullYear(), bln.getMonth(), 2 - hariPertama);

               if( hariPertama == 0 ){
                    tglMulai = new Date(bln.getFullYear(), bln.getMonth(), - 5 );
               }

               var blnBesok = new Date(bln.getFullYear(), bln.getMonth(), 32 );
               var tglAkhir = new Date(bln.getFullYear(), bln.getMonth(), 32 - blnBesok.getDate() );
               var hariAkhir = tglAkhir.getDay();

               var tglSelesai = new Date(bln.getFullYear(), bln.getMonth(), tglAkhir.getDate() + ( 7 - hariAkhir ) );

               if( hariAkhir == 0 ){
                    tglSelesai = tglAkhir;
               }

               return {
                    start: tglMulai,
                    end: tglSelesai
               }

          }

          var Kalender = function(elm){
               
               this.elm = elm;

               var dt = new Date();

               var wk = '';
               var wek = [ 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Ming' ];

               wek.some(function(a){
                    wk += '<div class="py-2 text-muted text-center">'+ a +'</div>';
               })
               
               var range = getTanggalnya();
               var mulai = range.start;
               var tgl = '';

               while( mulai <= range.end ){
                    
                    var tg = mulai.getDate();
                    var lbr = '';
                    var ini = '';
                    
                    if( mulai.getDay() == 0 ){
                         lbr = 'text-danger';
                    }

                    tgl += '<button class="btn btn-cal '+lbr+'"><div>'+tg+'</div></button>'

                    mulai.setDate( tg + 1);
               }

               var cal = '<div class="kalender">';         
               
               cal += '<div class="cal-week">' + wk + '</div>';
               cal += '<div class="cal-tgl">' + tgl + '</div>';

               cal += '</div>';

               $(elm).html(cal);
          }

          //Kalender.prototype.



          return $(this).each(function(){
               return new Kalender(this);
          });

     }



     $('#kalender').kalender();


})()