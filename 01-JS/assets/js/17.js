/*  ------------------------------------------ 
            Gestion Du Temps
            ----------------------------- */
    /** La fonction setTimeOut me permet de specifier une fonction au 
     * bout d une durée determiné
     */

     function Hello() {
         alert('bonjour toi que fais tu ici?');
         
     }

     /**
      * 1 la fonction à executer
      * 2 la durée en milliseconde
      */

      setTimeout(Hello, 3000);


      /**
       * la fonction " setInterval" me permet d executer une fonction
       * à un intervalle regulier
       */
      setInterval(Hello, 3000);