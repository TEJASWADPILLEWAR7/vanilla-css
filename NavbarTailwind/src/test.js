function logger(message) {
  console.log(message);
}

function joinedLogger(level, separator) {
  return function (...messages) {
    console.log("Received messages:", messages); // Debugging statement
    const filteredMessages = messages.filter((msg) => {
      const include = msg.level >= level;
      console.log(
        `Message: ${msg.text}, Level: ${msg.level}, Include: ${include}`
      ); // Debugging statement
      return include;
    });
    console.log("Filtered messages:", filteredMessages); // Debugging statement
    const joinedText = filteredMessages.map((msg) => msg.text).join(separator);
    console.log("Joined text:", joinedText); // Debugging statement
    logger(joinedText);
  };
}

// Example usage:
const msg1 = { level: 40, text: "foo" };
const msg2 = { level: 90, text: "bar" };
const msg3 = { level: 20, text: "baz" };
const msg4 = { level: 21, text: "bax" };

const log = joinedLogger(21, ";");
log(msg1, msg2, msg3, msg4); // Output: "foo;bar;bax"
