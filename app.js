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
        eventCapacity: 10,
        eventCapacityPercentage: 0,
        maximumPercentage: 100
    },
    methods: {
        formSubmitted: function() {
            if (this.newEventName.length === 0 || this.guestName.length >= this.eventCapacity) return

            this.guestName.push(this.newEventName)
            this.newEventName = ''
            this.formSubmitClass = 'submitted'
            this.eventCapacityPercentage = this.countCapacityPercentage()
        },
        countCapacityPercentage: function() {
            return Math.round((this.guestName.length / this.eventCapacity) * 100)
        }
    }
})