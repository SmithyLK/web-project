function randomizeText() {
	var len;
	const messages = [
	"This is the first message in the array.",
	"This used to be the second message in the array, but that might not be true anymore.",
	"Congratulations, you've won a new car! But it won't exist for hundreds of years...",
	"A change has occured!",
	"The previous statement was false.",
	"The next statement will be true.",
	"The previous statement was true.",
	"The next statement will be false.",
	"Out of all messages, this one is number " + val + ".",
	"One of us only tells truths, and the other... hey, where did they go?",
	"a.","b.","c.","d.","e.","f.","g.","h.","i.","j.","k.","l.","m.",
	"n.","o.","p.","q.","r.","s.","t.","u.","v.","w.","x.","y.","z.",
	"Did you know there are " + len + " different messages that can show up here?",
	"This is the last message in the array."
	];
	len = messages.length;
	var val = Math.floor(Math.random() * messages.length);
	document.getElementById("randomize").innerHTML = messages[val];
}