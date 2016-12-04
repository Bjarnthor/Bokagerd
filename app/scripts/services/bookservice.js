'use strict';

/**
 * @ngdoc service
 * @name testApp.BookService
 * @description
 * # BookService
 * Service in the testApp.
 */
angular.module('testApp')
  .service('BookService', function () {
    
  		this.getBookData = function(bookName) {
  			
  			if(bookName === 'endalaus'){

  				return  [
  							{image: 'images/endalaus/endalaus_kveikja.mp4', description: 'Image 00', tag: 'Kynning', text:'Myndbandið sýnir hvernig bókin er gerð frá upphafi til enda.', loop: ''},
				            {image: 'images/endalaus/endalaus_skref1.mp4', description: 'Image 01', tag: '1', text:'Blaðið brotið saman.', loop: 'loop'},
				            {image: 'images/endalaus/endalaus_skref2.mp4', description: 'Image 02', tag: '2', text:'Brotið upp á sinn hvorn helming blaðsins.',loop: 'true'},
				            {image: 'images/endalaus/endalaus_skref3.mp4', description: 'Image 03', tag: '3', text:'Klippt inn í og bókin brotin saman',loop: 'true'},
				            {image: 'images/endalaus/endalaus_skref4.mp4', description: 'Image 04', tag: '4', text:'Bækur límdar saman.', loop: 'true'}
		    ];}

  			if(bookName === 'fanabok'){
  				return [
  							{image: 'images/fanabok/fanabok_kveikja.mp4', description: 'Image 00', tag: 'Kynning', text:'Myndbandið sýnir hvernig bókin er gerð frá upphafi til enda.'},
				            {image: 'images/fanabok/fanabok_skref1.mp4', description: 'Image 01', tag: '1', text:'Blöðin límd saman.'},
				            {image: 'images/fanabok/fanabok_skref2.mp4', description: 'Image 02', tag: '2', text:'Pinni límdur við blöðin.'},
				            {image: 'images/fanabok/fanabok_skref3.mp4', description: 'Image 03', tag: '3', text:'Pinni festur betur.'}
  			];}
  			
  			if(bookName === 'harmonikka'){
  				return [
  							{image: 'images/harmonikka/harmonikka_kveikja.mp4', description: 'Image 00', tag: 'Kynning', text:'Myndbandið sýnir hvernig bókin er gerð frá upphafi til enda.'},
				            {image: 'images/harmonikka/harmonikka_skref1.mp4', description: 'Image 01', tag: '1', text:'Blaðið brotið saman.'},
				            {image: 'images/harmonikka/harmonikka_skref2.mp4', description: 'Image 02', tag: '2', text:': Blaðið brotið í tvennt. Brotið upp á hvorn helming blaðsins.'},
				            {image: 'images/harmonikka/harmonikka_skref3.mp4', description: 'Image 03', tag: '3', text:'Efni í bókarkápu sniðið.'},
				            {image: 'images/harmonikka/harmonikka_skref4.mp4', description: 'Image 04', tag: '4', text:'Bókarkápa límd við bók.'}
			];}
  			if(bookName === 'harmonikkuleikhus'){
  				return [
  							{image: 'images/harmonikkuleikhus/harmonikku_kveikja.mp4', description: 'Image 00', tag: 'Kynning', text:'Myndbandið sýnir hvernig bókin er gerð frá upphafi til enda.'},
				            {image: 'images/harmonikkuleikhus/harmonikku_skref1.mp4', description: 'Image 01', tag: '1', text:'Blaði skipt í tvennt.'},
				            {image: 'images/harmonikkuleikhus/harmonikku_skref2.mp4', description: 'Image 02', tag: '2', text:'Harmonikka útbúin.'},
				            {image: 'images/harmonikkuleikhus/harmonikku_skref3.mp4', description: 'Image 03', tag: '3', text:'Framhlið og bakhlið sniðin.'},
				            {image: 'images/harmonikkuleikhus/harmonikku_skref4.mp4', description: 'Image 04', tag: '4', text:'Klippt innan úr framhlið.'},
				            {image: 'images/harmonikkuleikhus/harmonikku_skref5.mp4', description: 'Image 04', tag: '4', text:'Bókin límd saman.'}
  			
  			];}

  			if(bookName === 'mappa'){
  				return [
  							{image: 'images/mappa/mappa_kveikja.mp4', description: 'Image 00', tag: 'Kynning', text:'Myndbandið sýnir hvernig bókin er gerð frá upphafi til enda.'},
				            {image: 'images/mappa/mappa_skref1.mp4', description: 'Image 01', tag: '1', text:'Brotið upp á hliðar inn að miðju.'},
				            {image: 'images/mappa/mappa_skref2.mp4', description: 'Image 02', tag: '2', text:'Vasi búinn til.'},
				            {image: 'images/mappa/mappa_skref3.mp4', description: 'Image 03', tag: '3', text:'Kragi búinn til.'},
				            {image: 'images/mappa/mappa_skref4.mp4', description: 'Image 04', tag: '4', text:'Mappa skreytt.'}
  			];}

  			if(bookName === 'saumudbok'){
  				return [
  							{image: 'images/saumud/saumud_kveikja.mp4', 	description: 'Image 00', tag: 'Kynning', 	text:'Myndbandið sýnir hvernig bókin er gerð frá upphafi til enda.'},
				            {image: 'images/saumud/saumud_skref1.mp4',	description: 'Image 01', tag: '1', 			text:'Blöð brotin í tvennt.'},
				            {image: 'images/saumud/saumud_skref2.mp4', 	description: 'Image 02', tag: '2', 			text:'Bandið mælt.'},
				            {image: 'images/saumud/saumud_skref3.mp4', 	description: 'Image 03', tag: '3', 			text:'Bókin götuð.'},
				            {image: 'images/saumud/saumud_skref4.mp4', 	description: 'Image 04', tag: '4', 			text:'Blöðin saumuð saman.'},
				            {image: 'images/saumud/saumud_skref5.mp4', 	description: 'Image 05', tag: '5', 			text:'Efni bókarkápu´sniðið.'},
				            {image: 'images/saumud/saumud_skref6.mp4', 	description: 'Image 06', tag: '6', 			text:'Efni í klæðningu á kápu sniðið.'},
				            {image: 'images/saumud/saumud_skref7.mp4', 	description: 'Image 07', tag: '7', 			text:'Bókarkápan klædd (Dæmi 1).'},
				            {image: 'images/saumud/saumud_skref8.mp4', 	description: 'Image 08', tag: '8', 			text:'Bókarkápan klædd (Dæmi 2).'},
				            {image: 'images/saumud/saumud_skref9.mp4', 	description: 'Image 09', tag: '9', 			text:'Kjölur sniðinn og límdur við bókarkápu. '},
				            {image: 'images/saumud/saumud_skref10.mp4', 	description: 'Image 10', tag: '10', 		text:'Bókin límd inn í bókarkápuna.'}
				            
				            
  			];}
  		
  		};
  });
