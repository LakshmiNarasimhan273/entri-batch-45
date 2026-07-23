const EventEmitter = require("events");

// new - instance class

// event type - on | once

// Scenario 1 - Chat Application(Group functionality)
// faq companies - zoho, meta, flipkart & amazon
const chatEvents = new EventEmitter();  

chatEvents.on('newMessage', (username, message) => {
    console.log(`New message from ${username}: ${message}`);
});

chatEvents.emit('newMessage', "Narasimhan", "Kindly join the session everyone");
chatEvents.emit('newMessage', "Someone", "Joining sir");
chatEvents.emit('newMessage', "Someone1", "I was on leave today sir");

// Scenario 2 - Payment Application(Payment functionality)
// faq companies - Razorpay, PayPal, BHIM
const paymentEvent = new EventEmitter();

paymentEvent.once('processPayment', (amount) => {
    console.log(`Payment of ${amount} processed successfully`);
});

console.log("User clicked the pay button");
paymentEvent.emit('processPayment', 5000);

console.log("User clicked the pay button again");
paymentEvent.emit('processPayment', 5000); // ❌ ignored automatically