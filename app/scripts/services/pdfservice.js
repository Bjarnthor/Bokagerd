'use strict';


angular.module('testApp')
  .service('PdfService', function () {

  		this.getPdf = function(bookName){

  			if(bookName === 'endalaus'){

  				return '/pdf/K_leidb_endalausa.pdf';
  			}

  			if(bookName === 'fanabok'){
  				
  				return 'pdf/K_leidb_fana.pdf';
  			}
  			
  			if(bookName === 'harmonikka'){

  				return '/pdf/K_leidb_harmonikku.pdf';
  			}
  			if(bookName === 'harmonikkuleikhus'){

  				return '/pdf/K_leidb_harmo_leikh.pdf';
  			}

  			if(bookName === 'mappa'){

  				return '/pdf/K_leidb_mappa.pdf';
  			}

  			if(bookName === 'saumudbok'){

  				return '/pdf/K_leidb_saumud.pdf';
  			}
  		};

  });