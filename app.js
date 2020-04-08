new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            signUpText: 'Add your name to the guest list for <em>exclusive</em> offers:',
            eventDescription: 'It\'s back! This years summer festival will be in the beautiful countryside featuring our best line up ever!',
        },
        newEventName: '',
        guestName: [],
        formSubmitClass: "",
        customStyles: {
            margin: '10px',
            color: 'blue'
        },
    },
    methods: {
        formSubmitted: function() {
            if (this.newEventName.length === 0) return

            this.guestName.push(this.newEventName)
            this.newEventName = ''
            this.formSubmitClass = 'submitted'
        }
    }
})