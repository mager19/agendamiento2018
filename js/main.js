jQuery(document).ready(function($){
  jQuery(function() {
      //Validación Inicio de Sesión
     jQuery("form[name='inicio-sesion']").validate({
      
      rules: {
        usuario: {
          required: true,
        },
        contrasena: {
          required: true,
          minlength: 5
        },
        
      },
     
      messages: {
        usuario: {
          required: "Por favor ingrese su Usuario",
          email: "Please enter a valid email address"
        },
        contrasena: {
          required: "Por favor ingrese su contraseña",
          minlength: "Su contraseña debe tener mas de 5 caracteres"
        },
      },
      
      submitHandler: function(form) {
        form.submit();
      }
    });

     //Validación Registro
     jQuery("form[name='registrarse']").validate({
      
      rules: {
        usuario: {
          required: true,
          
        },
        contrasena: {
          required: true,
          minlength: 5
        },
        email: {
          required: true,
          email:true
        },
        rContrasena:{
          required: true,
          equalTo: "#password"
        }
        
      },
     
      messages: {
        usuario: {
          required: "Por favor ingrese su Usuario",
          
        },

        email:{
          required: "Por favor ingrese su Email",
          email: "Please enter a valid email address"
        },
        contrasena: {
          required: "Por favor ingrese su contraseña",
          minlength: "Su contraseña debe tener mas de 5 caracteres"
        },
        rContrasena: {
          required: "Por favor ingrese la misma contraseña",
          equalTo: "Las contraseñas no son iguales"
        },
      },
      
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

  jQuery('.boton__registrarse').on('click', function(){
      jQuery('.registrarse').css('display', 'block');
      jQuery('.inicio-sesion').css('display', 'none');
      this.css('display', 'none');
  });

  jQuery('.boton__inicio-sesion').on('click', function(){
      jQuery('.registrarse').css('display', 'none');
      jQuery('.inicio-sesion').css('display', 'block');
      this.css('display', 'none');
  });

  

});