const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue", {
  connection: {
    host: "localhost",
    port: 6379,
  },
});

async function init() {
  const res = await notificationQueue.add("email to piyush", {
    email: "owaise@tool.com",
    subject: "demo subject",
    body: "hello world from redis server and owaise queue",
  });
  console.log("Job added to queue", res.id);
}

init();
