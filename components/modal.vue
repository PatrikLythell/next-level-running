<template>
  <div @click="checkClose" ref="bg" class="modal-bg">
    <div class="inner-modal w-100 w-90-ns w-80-l pa2 pa4-ns mv4-ns">
      <div class="max-width">
        <small @click="closeEvent" class="center">stäng</small>
        <h2 class="black center mt3 mb-1">Konsultation: {{type}}</h2>
        <p class="center mt0 mb2">Fyll i formuläret nedanför eller hör av dig på coach@nextlevelrunning.se / <a href="tel:+46701859191">070 - 185 91 91</a></p>
        <form class="form center" method="POST" name="konsultation" action="tack" data-netlify="true">
          <label for="type">Kategori:</label>
          <select required name="type" v-model="type">
            <option selected value="privatperson">Privatperson</option>
            <option value="företag">Företag</option>
            <option value="elitsatsande">Elitsatsande inom annan idrott</option>
          </select>

          <div v-if="type === 'företag'">
            <label for="name">Organisation:</label>
            <input type="text"  name="organisation" value="" placeholder="Fyll i organisation eller företagsnamn">
          </div>

          <label for="name">Namn:</label>
          <input type="text" required name="name" value="" placeholder="Fyll i namn">

          <label for="email">Email:</label>
          <input type="email" required name="email" value="" placeholder="Fyll i email">

          <label for="number">Telefon:</label>
          <input type="number" required name="phone" value="" placeholder="Fyll i telefonnummer">

          <label for="comment">Något vi borde veta?</label>
          <textarea name="comment" placeholder=""></textarea>

          <input type="hidden" name="form-name" value="konsultation">

          <div class="mb4">
            <Button id="sub-it" type="submit" class="border-white">Skicka in</Button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import Button from '~/components/black-button'

  export default {
    components: { Button },
    transition: 'modal',
    data() {
      return {
        type: 'privatperson'
      }
    },
    methods: {
      checkClose: function(e) {
        // if ($(e.target).hasClass('modal-bg')) {
          // this.closeEvent()
        // }
      },
      closeEvent: function(e) {
        this.$emit('close')
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.height = ''
        // $('body').css({
        //   height: '',
        //   overflow: ''
        // })
      },
      submit: function(e) {
        let form = document.querySelectorAll('form')[0]
        let formData = new FormData(form);
        let answersArr = []
        for (var value of formData.values()) {
          answersArr.push(value)
        }
        // this.$http.post('/your/url', formData)
        //   .then(this.onComplete.bind(this))
        //   .catch(this.onError.bind(this));
        // for(let pair of formData.entries()) {
        //   console.log(pair[0]+ ', '+ pair[1]);
        // }
        console.log(answersArr);

      }

    },
    mounted() {
      var _this = this
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'relative'
      document.body.style.height = '100%'
      // $('form').on('keyup', function() {
      //   if ($('input:invalid').length === 0) {
      //     $('#sub-it').removeAttr('disabled')
      //   } else {
      //     $('#sub-it').attr('disabled', true)
      //   }
      // })
      // $('form').submit(function(e) {
      //   e.preventDefault();
      //   $('#sub-it').attr('disabled', true)
      //   let data = $(this).serialize()
      //   $.post('https://sheetsu.com/apis/v1.0/cb82878a06f7', data, () => {
      //     _this.$router.push('thank-you')
      //   })
      // })
    }
  }

</script>

<style scoped>

:root {
  --normal-font: 'realtimerounded-regular', monospace;
}

.border-white {
  border: 2px solid #fff;
}

.form, input {
  font-family: var(--normal-font);
  font-size: 1rem;
}

.center {
  text-align: center;
}

.max-width {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}

.mb-1 {
  margin-bottom: 1rem;
}

small {
  text-decoration: underline;
  text-align: center;
  display: block;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
}

input {
  padding: 1rem;
  border: 3px solid black;
  max-height: 61px;
  display: block;
  margin-bottom: 1rem;
  width: 100%;
}

select {
  padding: 1rem;
  border: 3px solid black;
  max-height: 61px;
  display: block;
  margin-bottom: 1rem;
  width: 100%;
  background: #fff;
  height: 56px;
  font-family: var(--normal-font)
}

textarea {
  padding: 1rem;
  border: 3px solid black;
  width: 100%;
  margin-bottom: 1rem;
  font-family: var(--normal-font)
}

.submit {
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    user-select: none;
  }
}

.modal-bg {
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.25);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.inner-modal {
  background-color: #000;
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  /*width: 90vw;*/
  padding: 1rem 2rem 6rem;
  -webkit-overflow-scrolling: touch;
}

.hidden {
  display: none;
}

small {
  font-size: 90%;
}

.mb4 {
  margin-bottom: 1rem;
}
</style>
