"use strict";
window.post = (function ($) {
    var self = {};
    
    self.Titulo = function () {
    	var titulo = $("#titulo").val();
    	return titulo;
    };

    self.Descricao = function () {
    	var descricao = $("#descricao").val();
    	return descricao;
    };

    self.Endereco = function () {
    	var endereco = $("#endereco").val();
    	return endereco;
    };	

      return self;
      
})(jQuery);