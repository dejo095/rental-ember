import Route from '@ember/routing/route';

export default Route.extend({

    beforeModel() {

        /**
         * When user hits this route '/', this method will redirect him to rentals page
         * This is not added to History in the browser like transitionTo() is
         */
        this.replaceWith('rentals');
      }

});
